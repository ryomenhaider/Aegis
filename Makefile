.PHONY: install test lint typecheck dev-backend dev-frontend clean

install:
	uv sync --group dev
	cd src/aiges/frontend && npm install

test:
	uv run pytest tests/ --cov=src/aiges --cov-report=term -v

lint:
	uv run ruff check src/

typecheck:
	uv run pyright src/

format:
	uv run ruff format src/

dev-backend:
	uv run aiges serve

dev-frontend:
	cd src/aiges/frontend && npm run dev

clean:
	rm -rf .venv/
	rm -rf src/aiges/frontend/.next/
	rm -rf src/aiges/frontend/node_modules/
	find . -type d -name __pycache__ -exec rm -rf {} + 2>/dev/null || true
	find . -type f -name '*.pyc' -delete
