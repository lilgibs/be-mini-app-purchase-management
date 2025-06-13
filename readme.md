# 📋 Mini App Purchase Management API — Backend Express + MySQL

A simple backend API built with **Express.js** and **MySQL (Sequelize)**. This API provides access to products, product stocks, and purchase transactions, complete with pagination and status update features.

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js** – Backend framework
- **MySQL** + **Sequelize** – Database & ODM
---

## 🚀 Features

- 🔹 Get paginated products.
- 🔹 Get paginated stock products.
- 🔹 CRUD purchasess.

---

## 🌐 API Endpoints

| Method | Endpoint                         | Description                          |
|--------|----------------------------------|--------------------------------------|
| GET    | `/api/products`                  | Get paginated list of products       |
| GET    | `/api/product-stocks`            | Get paginated list of product stocks |
| GET    | `/api/purchases`                 | Get paginated list of purchases      |
| POST   | `/api/purchases`                 | Create a new purchase                |
| PATCH  | `/api/purchases/:id/status`      | Update purchase status               |

---

## 🧾 Query Parameters

Some endpoints support query parameters to help filter or limit the results. Below are the available parameters:

### 🔹 `/api/products`
### 🔹 `/api/product-stocks`
### 🔹 `/api/users`
### 🔹 `/api/purchases`

This endpoint supports pagination to retrieve users in chunks.

| Parameter | Type    | Description                                          | Example     |
|-----------|---------|------------------------------------------------------|-------------|
| `page`    | Integer | Page number to retrieve. Default is `1`.             | `page=2`    |
| `limit`   | Integer | Number of users per page. Default is `10`, max is 20 | `limit=20`  |

**Example Request:**

```http
GET /api/products?page=2&limit=5
```

---

## 🚀 Getting Started

1. **Clone or download** this repository to your local machine.
2. Open a terminal or command prompt and navigate to the repository directory.
3. create a .env in the root directory
    ```env
    DATABASE_DIALECT=mysql
    DATABASE_HOST=0.0.0.0
    DATABASE_USERNAME=your_database_username
    DATABASE_PASSWORD=your_database_password
    DATABASE_NAME=db_mini_app_purchase_management
    DATABASE_PORT=your_database_port
    APP_PORT=8011
    ```
4. Import the Database
    - Use any MySQL client of your choice to import the SQL dump file located in the `dump/` folder.
    - Import the dump into a schema named **`db_mini_app_purchase_management`**.
    - Make sure the schema exists before importing, or create it manually.
    > ⚠️ The schema name must be exactly `db_mini_app_purchase_management` to match the environment configuration.
4. **Install dependencies** with the command:
    ```sh
    npm i
    ```
5. **Start the application** in development mode by running:
    ```sh
    npm run dev
    ```
6. After the server is running, you can access the API locally at:
    ```sh
    http://localhost:<your_app_port>/api/products
    ```