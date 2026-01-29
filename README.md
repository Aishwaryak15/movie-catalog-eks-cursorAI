# Online Pastry Shop Application

A full-stack CRUD application for managing an online pastry shop with Java Spring Boot backend and React frontend.

## Features

- Create, Read, Update, and Delete pastries
- View all pastries in a beautiful card layout
- Add pastries with name, description, price, and image URL
- Edit existing pastries
- Delete pastries
- Responsive design

## Tech Stack

### Backend
- Java 17
- Spring Boot 3.2.1
- Spring Data JPA
- MySQL Database
- Maven

### Frontend
- React 18
- Axios for API calls
- Modern CSS styling

## Prerequisites

- Java 17 or higher
- Maven 3.6+
- Node.js 16+ and npm
- MySQL 8.0+

## Setup Instructions

### Database Setup

1. Install MySQL and create a database:
```sql
CREATE DATABASE pastry_shop_db;
```

2. Update database credentials in `src/main/resources/application.properties`:
```properties
spring.datasource.username=your_username
spring.datasource.password=your_password
```

### Backend Setup

1. Navigate to the project root directory
2. Build the project:
```bash
mvn clean install
```

3. Run the Spring Boot application:
```bash
mvn spring-boot:run
```

The backend will start on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React application:
```bash
npm start
```

The frontend will start on `http://localhost:3000`

## API Endpoints

- `GET /api/pastries` - Get all pastries
- `GET /api/pastries/{id}` - Get pastry by ID
- `POST /api/pastries` - Create new pastry
- `PUT /api/pastries/{id}` - Update pastry
- `DELETE /api/pastries/{id}` - Delete pastry

## Project Structure

```
pastry-shop-app/
├── src/main/java/com/pastryshop/
│   ├── PastryShopApplication.java
│   ├── config/
│   │   └── CorsConfig.java
│   ├── model/
│   │   └── Pastry.java
│   ├── repository/
│   │   └── PastryRepository.java
│   ├── service/
│   │   ├── PastryService.java
│   │   └── PastryServiceImpl.java
│   └── controller/
│       └── PastryController.java
├── src/main/resources/
│   └── application.properties
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── pom.xml
└── README.md
```

## Usage

1. Start both backend and frontend applications
2. Open your browser and navigate to `http://localhost:3000`
3. Use the form to add new pastries
4. View, edit, or delete existing pastries

## License

MIT License
