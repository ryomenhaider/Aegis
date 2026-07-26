from fastapi import APIRouter
from hermes import Hermes
from ....config import NEWS_API

hr = Hermes(
    cache_dir='src/aiges/backend/hermes_cache',
    newsdata_api_key=NEWS_API,
    
)

app = APIRouter()

@app.get('/country/{code}')
def country_data(code: str):
    features = hr.feature.get_data(f'{code}')
    return features