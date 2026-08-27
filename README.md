# SR Enterprises

A full-stack e-commerce platform for an appliance retail business, built using React, Java Spring Boot, and MySQL.

[![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![Java](https://img.shields.io/badge/Backend-Java-ED8B00?logo=openjdk\&logoColor=white)](https://www.java.com/)
[![Spring Boot](https://img.shields.io/badge/Framework-Spring%20Boot-6DB33F?logo=springboot\&logoColor=white)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?logo=mysql\&logoColor=white)](https://www.mysql.com/)
[![Spring Security](https://img.shields.io/badge/Security-Spring%20Security-6DB33F?logo=springsecurity\&logoColor=white)](https://spring.io/projects/spring-security)
[![JWT](https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens\&logoColor=white)](https://jwt.io/)
[![Maven](https://img.shields.io/badge/Build-Maven-C71A36?logo=apachemaven\&logoColor=white)](https://maven.apache.org/)
[![Git](https://img.shields.io/badge/Version%20Control-Git-F05032?logo=git\&logoColor=white)](https://git-scm.com/)

## Overview

SR Enterprises is a full-stack e-commerce application designed for an appliance retail business.

The project is being developed from scratch with a React frontend, Java Spring Boot backend, and MySQL database.

The application focuses on user authentication, product management, shopping cart functionality, order management, and role-based access control.

## Tech Stack

### Frontend

* React
* JavaScript
* HTML5
* CSS3
* Vite

### Backend

* Java
* Spring Boot
* Spring Security
* Spring Data JPA
* Hibernate
* REST APIs
* JWT Authentication
* Maven

### Database

* MySQL
* SQL

### Development Tools

* Git
* GitHub
* Postman
* IntelliJ IDEA
* Visual Studio Code

## Features

### User Authentication

* User registration
* User login
* Password hashing
* JWT-based authentication
* Logout
* Role-based authorization
* User and Admin roles
* Protected API endpoints

### Product Management

* Browse products
* Search products
* Filter products
* Sort products
* View product details
* Product categories
* Product stock management

### Shopping Cart

* Add products to cart
* Update product quantities
* Remove products from cart
* View cart
* Calculate total price

### Orders

* Place orders
* View order history
* View order details
* Track order status

### Admin

* Admin authentication
* Add products
* Update products
* Delete products
* Manage inventory
* View customer orders
* Update order status

## Project Architecture

```text
SR Enterprises
│
├── frontend/
│   └── React + Vite
│
├── backend/
│   └── Spring Boot
│       ├── Controller
│       ├── Service
│       ├── Repository
│       ├── Entity
│       ├── DTO
│       ├── Security
│       └── Exception Handling
│
└── database/
    └── MySQL
```

## Authentication Architecture

```text
React Frontend
      │
      │ Register / Login
      ▼
Spring Boot REST API
      │
      ├── Spring Security
      ├── Password Hashing
      ├── Authentication
      └── JWT
      │
      ▼
    MySQL
```

## Database Design

The application uses a relational SQL database.

### Main Entities

```text
User
Product
Order
OrderItem
```

### User

```text
id
name
email
password
role
```

### Product

```text
id
name
description
category
price
stock
image_url
```

### Order

```text
id
user_id
total_amount
status
created_at
```

### OrderItem

```text
id
order_id
product_id
quantity
price
```

Relationships between entities will be implemented using JPA and Hibernate.

## REST API

### Authentication

```text
POST /api/auth/register
POST /api/auth/login
```

### Products

```text
GET    /api/products
GET    /api/products/{id}
POST   /api/products
PUT    /api/products/{id}
DELETE /api/products/{id}
```

### Orders

```text
GET  /api/orders
GET  /api/orders/{id}
POST /api/orders
```

Additional endpoints will be added as the application develops.

## Project Goals

This project is intended to provide practical experience in:

* Full-stack development
* React development
* Java programming
* Spring Boot
* REST API development
* Spring Security
* JWT authentication
* SQL
* Relational database design
* JPA and Hibernate
* Object-oriented programming
* Git and GitHub
* Software architecture
* API testing

## Current Status

Currently under development.

The project is being rebuilt from scratch with a React frontend, Java Spring Boot backend, and MySQL database.

## License

This project is developed for educational and portfolio purposes.
