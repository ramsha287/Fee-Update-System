# 🎓 ERP Fee Update & Confirmation System

A full-stack ERP module built with **Node.js**, **Express**, and **MongoDB** to manage student fee records, send email notifications, and allow students to confirm fee payment securely via a link.

---

## 🚀 Features

* 🔐 Secure Principal Login (JWT-based)
* 📋 View and Update Student Fee Details
* 📧 Email Notification to Students
* ✅ Student Confirmation via Clickable Link
* 🗂️ MongoDB for Persistent Storage
* 🌍 Works Locally and Deployable to Railway/Render

---

## 🛠 Tech Stack

* **Frontend**: HTML, CSS, JavaScript
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Atlas or local)
* **Authentication**: JWT
* **Mail Service**: Nodemailer + Gmail SMTP

---

## 📁 Project Structure

```
.
├── public/               # Frontend (HTML/CSS)
├── routes/               # Route handlers
├── controllers/          # Logic for each route
├── models/               # MongoDB Models (User, Student)
├── utils/mailer.js       # Email notification handler
├── .env                  # Environment variables
├── server.js             # Main Express server
└── README.md             # Project info
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ramsha287/Fee-Update-System
cd Fee Update System
```

### 2. Install Dependencies

```bash
npm install express mongoose nodemailer body-parser
```

### 3. Create a `.env` File

```env
PORT=3000
MONGODB_URL=your_mongo_connection_string
JWT_SECRET=yourSuperSecretKey
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> 💡 Use Gmail App Passwords, not your normal password: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

---

### 4. Seed a Principal Admin

```bash
node seedAdmin.js
```

Default Login:

```
Username: admin
Password: admin123
```

---

### 5. Run Locally

```bash
node server.js
```

Visit [http://localhost:3000](http://localhost:3000)
---

## 📬 Sample Email

> Subject: Fee Submission Confirmation

```
Dear [Student Name],

Your updated fee due is Rs.5000.
Please confirm whether you have submitted the fees:

✅ YES → [confirmation-link]
❌ NO  → [rejection-link]
```

---


