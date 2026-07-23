import typer
import uvicorn
import os


app = typer.Typer(
    help='Aiges Risk Intelligence Platform'
)

@app.command()
def run():
    print('Running Aiges ....')


@app.command()
def serve(
    host: str = "127.0.0.1",
    port: int = 8000,
):
    uvicorn.run(
        "aiges.backend.api.api:app",
        host=host,
        port=port,
        reload=True,
    )

@app.command()
def frontend(
    url: str = 'http://localhost:3000'
):
    pass