# SR Enterprises

A full-stack e-commerce platform for an appliance retail business, built using React, Java Spring Boot, and MySQL.







\

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
* IntelliJ IDEA / VS Code

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

The application will use a relational SQL database.

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

Authentication endpoints will include:

```text
POST /api/auth/register
POST /api/auth/login
```

Product endpoints will include:

```text
GET    /api/products
GET    /api/products/{id}
POST   /api/products
PUT    /api/products/{id}
DELETE /api/products/{id}
```

Order endpoints will include:

```text
GET  /api/orders
GET  /api/orders/{id}
POST /api/orders
```

Additional endpoints will be added as development progresses.

## Project Goals

This project is intended to provide practical experience in:

* Full-stack development
* React development
* Java programming
* Spring Boot
* REST API development
* Spring Security
* JWT authentication
* SQL and relational database design
* JPA and Hibernate
* Object-oriented programming
* Git and GitHub
* Software architecture
* API testing

## Current Status

Currently under development.

The project is being rebuilt from scratch, starting with the authentication system.

## License

This project is developed for educational and portfolio purposes.
