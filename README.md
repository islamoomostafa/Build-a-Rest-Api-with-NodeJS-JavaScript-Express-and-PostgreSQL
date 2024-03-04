# Building a REST API with Node.js, Express, and PostgreSQL

This repository contains the source code for a simple REST API built with Node.js, Express, and PostgreSQL. The API allows you to perform basic CRUD operations (Create, Read, Update, Delete) on a database.

## Features

- RESTful API endpoints for CRUD operations on a PostgreSQL database.
- Built using Node.js and Express, two popular frameworks for building server-side applications.
- Utilizes PostgreSQL as the database management system.
- Follows best practices for building RESTful APIs, including proper route organization and error handling.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine.
- PostgreSQL installed and running.
- Basic knowledge of JavaScript and SQL.

## Getting Started

To get started with this project, follow these steps:

1. Clone this repository to your local machine:
https://github.com/islamoomostafa/Build-a-Rest-Api-with-NodeJS-JavaScript-Express-and-PostgreSQL.git

2. Navigate into the project directory:
cd Build-a-Rest-Api-with-NodeJS-JavaScript-Express-and-PostgreSQL

3. Install the dependencies:

4. Set up the PostgreSQL database by running the SQL scripts located in the `database` directory.

5. Rename the `.env.example` file to `.env` and provide the required environment variables, such as the database connection details.

6. Start the server:

7. Once the server is running, you can access the API endpoints using tools like Postman or cURL.

## API Endpoints

The following endpoints are available:

- `GET /api/products`: Retrieve all products.
- `GET /api/products/:id`: Retrieve a single product by ID.
- `POST /api/products`: Create a new product.
- `PUT /api/products/:id`: Update an existing product.
- `DELETE /api/products/:id`: Delete a product.






