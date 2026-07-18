import typer
import uvicorn

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
        "aiges.backend.server:app",
        host=host,
        port=port,
        reload=True,
    )
