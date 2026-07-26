from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from src.aiges.backend.api.routes.country import app as country_api

app = FastAPI(
    title='AIGES API',
    description='Aiges Risk Intelligence API',
    version='0.1.0'
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get('/aiges')
def main():
    return {
        'api': 'aiges',
        'health': health() 
    }



@app.get('/aiges/health')
def health():
    return {
        'status' : 'ok',
        'version' : '0.1.0'
    }


app.include_router(country_api, prefix="/api/v1", tags=['country'])