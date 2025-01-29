To run this project using Docker, you need to have Docker installed on your machine. You can download Docker from the official Docker website: https://www.docker.com/products/docker-desktop/.

Once you have Docker installed and running, you can build and run the project using the following commands:

1. Build the Docker image:

```bash
docker build -t 'image-name' .
### replace image-name with the name you want to give to your image
```

2. Run the Docker container:

```bash
docker run -it -p 3000:3000 'image-name'
### replace image-name with the name of the image you built in step 1
### Runs in the port 3000
```

3. Access the API Swagger documentation:

```bash
http://localhost:3000/docs
```

4. Access the API:

```bash
http://localhost:3000/example
```