from fastapi import FastAPI

app = FastAPI(
    title='AIGES API',
    description='Aiges Risk Intelligence API',
    version='0.1.0'
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


