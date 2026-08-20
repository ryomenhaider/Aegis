import asyncio
from supabase import AsyncClient, acreate_client
from src.aiges.config import SUPABASE_KEY, SUPABASE_URL

_client: AsyncClient = None

async def get_db() -> AsyncClient:
    global _client
    if _client is None:
        _client = await acreate_client(
            supabase_key=SUPABASE_KEY, 
            supabase_url=SUPABASE_URL
        )
    return _client

class DataBase:
    def __init__(self):
        self._db_task = asyncio.create_task(get_db())

    async def _get_client(self) -> AsyncClient:
        return await self._db_task

    async def insert(self, table: str, data: list | dict):
        client = await self._get_client()
        response = await client.table(table).insert(data).execute()
        return response.data

    async def upsert(self, table: str, data: list | dict):
        client = await self._get_client()
        response = await client.table(table).upsert(data).execute()
        return response.data

    async def select(self, table: str, columns: str = "*", filters: dict = None):
        client = await self._get_client()
        query = client.table(table).select(columns)
        if filters:
            for key, value in filters.items():
                query = query.eq(key, value)
        response = await query.execute()
        return response.data

    async def delete(self, table: str, column: str, values: list):
        client = await self._get_client()
        response = await client.table(table).delete().in_(column, values).execute()
        return response.data

db = DataBase()
