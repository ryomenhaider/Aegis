import os
import subprocess
import typer
import uvicorn

app = typer.Typer(help="Aiges Risk Intelligence Platform")

CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.abspath(os.path.join(CURRENT_DIR, "..", "frontend"))


@app.command()
def run(
    host: str = typer.Option("127.0.0.1", "--host", "-h", help="The host for the backend api."),
    backend_port: int = typer.Option(8000, "--backend-port", "-b", help="The port for the backend api."),
    frontend_port: int = typer.Option(3000, "--frontend-port", "-f", help="The port for the Next.js server."),
    dev: bool = typer.Option(
        True, "--prod", "-p", flag_value=False, help="Run Next.js in production mode instead of development."
    ),
):
    """Run both the FastAPI backend and Next.js frontend concurrently."""
    typer.echo("Running Aiges platform components...")

    backend_cmd = ["uvicorn", "aiges.backend.api.api:app", "--host", host, "--port", str(backend_port), "--reload"]

    frontend_cmd = ["npm", "run", "dev"] if dev else ["npm", "run", "start"]
    frontend_cmd.extend(["--", "-p", str(frontend_port)])

    processes = []
    try:
        # Start backend process
        backend_proc = subprocess.Popen(backend_cmd)
        processes.append(backend_proc)

        frontend_proc = subprocess.Popen(frontend_cmd, cwd=FRONTEND_DIR)
        processes.append(frontend_proc)

        for p in processes:
            p.wait()

    except KeyboardInterrupt:
        typer.echo("\nStopping Aiges platform components...")
    finally:
        for p in processes:
            if p.poll() is None:
                p.terminate()


@app.command()
def serve(
    host: str = typer.Option("127.0.0.1", "--host", "-h", help="The host bind address."),
    port: int = typer.Option(8000, "--port", "-p", help="The port to run the API server on."),
):
    uvicorn.run(
        "aiges.backend.api.api:app",
        host=host,
        port=port,
        reload=True,
    )


@app.command()
def ui(
    dev: bool = typer.Option(
        True, "--prod", "-p", flag_value=False, help="Run Next.js in production mode instead of development."
    ),
    port: int = typer.Option(3000, "--port", "-m", help="The port to run the Next.js server on."),
):
    if not os.path.exists(os.path.join(FRONTEND_DIR, "package.json")):
        typer.echo(f"Error: Could not locate Next.js project at: {FRONTEND_DIR}", err=True)
        raise typer.Exit(code=1)

    command = ["npm", "run", "dev"] if dev else ["npm", "run", "start"]
    command.extend(["--", "-p", str(port)])

    typer.echo(f"Starting Aegis UI ({'development' if dev else 'production'}) on port {port}...")

    try:
        subprocess.run(command, cwd=FRONTEND_DIR, check=True)
    except subprocess.CalledProcessError as e:
        typer.echo(f"Server failed or stopped: {e}", err=True)
        raise typer.Exit(code=1)
    except KeyboardInterrupt:
        typer.echo("\nAegis UI server shut down successfully.")


if __name__ == "__main__":
    app()
