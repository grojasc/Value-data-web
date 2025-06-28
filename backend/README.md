# ValueData Backend

## Setup Local

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env  # adjust if needed
```

### Using Docker

```bash
docker-compose up --build
```

## Tests

```bash
pytest
```

## Deployment

Build the Docker image and push to your registry. Deploy on AWS ECS or Render using the container.

