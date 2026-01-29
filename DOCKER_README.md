# 🐳 Docker Setup for Pastry Shop Application

## 📋 Prerequisites

- Docker installed on your system
- Docker Compose (usually comes with Docker Desktop)

## 🚀 Quick Start

### Option 1: Using Docker Compose (Recommended)

```bash
# Build and start the application
docker-compose up --build

# Or run in detached mode (background)
docker-compose up -d --build
```

The application will be available at: **http://localhost:8080**

### Option 2: Using Docker directly

```bash
# Build the Docker image
docker build -t pastry-shop-app:latest .

# Run the container
docker run -d -p 8080:8080 --name pastry-shop-backend pastry-shop-app:latest
```

## 🛠️ Commands

### View logs
```bash
docker-compose logs -f pastry-shop-app
# or
docker logs -f pastry-shop-backend
```

### Stop the application
```bash
docker-compose down
# or
docker stop pastry-shop-backend
```

### Remove containers and images
```bash
docker-compose down --rmi all
# or
docker rm -f pastry-shop-backend
docker rmi pastry-shop-app:latest
```

### Rebuild after code changes
```bash
docker-compose up --build
```

## 📊 Docker Image Details

### Multi-Stage Build
- **Stage 1**: Builds the application using Maven
- **Stage 2**: Creates a lightweight runtime image with only JRE

### Image Size
- Build stage: ~500MB
- Final image: ~200MB (much smaller!)

### Security
- Runs as non-root user (`spring:spring`)
- Minimal base image (Alpine Linux)
- No unnecessary tools in runtime image

## 🔧 Configuration

### Environment Variables

You can customize the application using environment variables:

```yaml
environment:
  - SERVER_PORT=8080
  - SPRING_PROFILES_ACTIVE=prod
```

### Using MySQL Instead of H2

1. Uncomment the MySQL service in `docker-compose.yml`
2. Uncomment the database configuration in the app service
3. Update `application.properties` to use MySQL
4. Run: `docker-compose up --build`

## 🌐 Access Points

- **API**: http://localhost:8080/api/pastries
- **H2 Console**: http://localhost:8080/h2-console
- **Health Check**: http://localhost:8080/api/pastries

## 📝 Notes

- The H2 database is in-memory, so data is lost when the container stops
- For persistent data, use MySQL (see docker-compose.yml comments)
- The frontend HTML file should be served separately or integrated into the Spring Boot app

## 🐛 Troubleshooting

### Port already in use
```bash
# Change port in docker-compose.yml
ports:
  - "8081:8080"  # Use 8081 instead of 8080
```

### Container won't start
```bash
# Check logs
docker-compose logs pastry-shop-app

# Check if port is available
netstat -an | findstr 8080
```

### Rebuild from scratch
```bash
docker-compose down -v
docker-compose build --no-cache
docker-compose up
```

## 🎯 Production Deployment

For production, consider:
1. Using MySQL/PostgreSQL instead of H2
2. Adding environment-specific configuration
3. Setting up proper logging
4. Using Docker secrets for sensitive data
5. Adding reverse proxy (nginx)
6. Setting up SSL/TLS certificates
