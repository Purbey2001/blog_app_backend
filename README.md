# 📝 Blog App Backend

A simple and clean **Blog App Backend** built using **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
It supports creating posts, commenting, and liking/unliking posts with full CRUD operations and data relationships.

---

## 🚀 Features

- Create and fetch blog posts  
- Add and view comments on posts  
- Like and unlike posts  
- MongoDB integration with Mongoose  
- Modular architecture (Controllers, Routes, Config)

---

## 🧩 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **dotenv**

---

## 📁 Project Structure

├── config/
│ └── database.js
├── controllers/
│ ├── comment.js
│ ├── like.js
│ └── post.js
├── models/
│ ├── post.js
│ ├── comment.js
│ └── like.js
├── routes/
│ └── blogs.js
├── server.js
└── .env

🧠 API Endpoints
Posts
Method |	  Endpoint	      |Description
GET    | /api/v1/posts        | Fetch all posts
POST   | /api/v1/posts/create | Create a new post

Comments
Method |       Endpoint	          | Description
POST   | /api/v1/comments/create  | Add a comment to a post

Likes
Method |	    Endpoint	  | Description
POST   | /api/v1/likes/like   | Like a post
DELETE | /api/v1/likes/unlike |	Unlike a post