To run this project using Docker, you need to have Docker installed on your machine. You can download Docker from the official Docker website: https://www.docker.com/products/docker-desktop/.

Once you have Docker installed and running, you can build and run the project using the following commands:

1. Build and mount the Docker image:

```bash
docker-compose up --build
```

2. Access the API Swagger documentation:

```bash
http://localhost:3000/docs
```

3. Access the API:

```bash
http://localhost:3000/
```


Docker compose commands:

Watch the docker images running:
```bash
docker-compose ps
```

Remove the docker images and volumes:
```bash
docker-compose down
```
