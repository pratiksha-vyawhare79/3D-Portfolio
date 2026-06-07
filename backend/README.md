# Pratiksha Vyawhare Portfolio - Spring Boot Backend

This is a RESTful API backend built using Spring Boot to handle contact queries and save them to a database.

## Prerequisites
- **Java 21** (JDK 21 or higher)
- **Maven** (or use your preferred IDE like Eclipse or VS Code to load as a Maven project)

## Tech Stack
- **Framework**: Spring Boot 3.3.4
- **Database**: H2 (In-memory, default), with templates for MySQL & PostgreSQL
- **JPA & ORM**: Spring Data JPA & Hibernate

## How to Run locally

### 1. Run using Maven Wrapper
If you have maven wrapper or a global maven instance:
```bash
# In the backend/ directory
mvn spring-boot:run
```

### 2. Run via IDE
- Open Eclipse or VS Code.
- Choose **Import Project** or **Open Folder** and select the `backend/` directory.
- Allow the IDE to import it as a **Maven project** (it will download all dependencies automatically).
- Open `src/main/java/com/pratiksha/portfolio/PortfolioApplication.java` and click **Run**.

## Database Configuration
By default, the application runs using an **in-memory H2 database** for ease of development. All messages submitted will be logged and stored in memory. You can view the stored data in the database console at:
- URL: `http://localhost:8080/h2-console`
- JDBC URL: `jdbc:h2:mem:portfoliodb`
- User Name: `sa`
- Password: (leave blank)

To change the database to **MySQL** or **PostgreSQL**:
1. Open [application.properties](src/main/resources/application.properties).
2. Comment out the H2 Database section.
3. Uncomment the MySQL or PostgreSQL template section and fill in your connection details (DB URL, Username, Password).

## API Endpoint
- **URL**: `POST http://localhost:8080/api/contact`
- **Request Headers**: `Content-Type: application/json`
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "subject": "Inquiry",
    "message": "Hello Pratiksha, let's connect!"
  }
  ```
- **Responses**:
  - `201 Created` (returns saved JSON entity)
  - `400 Bad Request` (missing validation fields)
  - `500 Internal Server Error`
