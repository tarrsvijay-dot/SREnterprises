# SR Enterprises

A full-stack e-commerce platform for an appliance retail business, built using React, Java Spring Boot, and MySQL.

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

### Database

* MySQL
* SQL

### Tools

* Git
* GitHub
* Maven
* Postman

## Features

### User Authentication

* User registration
* User login
* Password hashing
* JWT-based authentication
* Logout
* Role-based authorization
* User and Admin roles

### E-Commerce

* Browse products
* Search products
* Filter and sort products
* View product details
* Add products to cart
* Update cart quantities
* Remove products from cart
* Place orders
* View order history

### Admin

* Admin authentication
* Add products
* Update products
* Delete products
* Manage inventory
* View orders
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

## Authentication Flow

```text
React Frontend
      │
      │ Register / Login
      ▼
Spring Boot REST API
      │
      ├── Spring Security
      ├── Password Hashing
      └── JWT
      │
      ▼
    MySQL
```

## Database

The main entities will include:

```text
User
Product
Order
OrderItem
```

Relationships will be implemented using JPA and Hibernate.

## Project Goal

The goal of SR Enterprises is to build a production-style full-stack application while developing practical skills in:

* React
* Java
* Spring Boot
* SQL
* REST API development
* Authentication and Authorization
* Database design
* Git and GitHub
* Software architecture

## Status

Currently under development.

The project is being rebuilt from scratch with a React frontend, Java Spring Boot backend, and MySQL database.
