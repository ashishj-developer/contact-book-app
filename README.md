📖 Contact Book (Fullstack)

A simple Contact Book application built with:

Frontend: React + Vite

Backend: Node.js + Express + SQLite

Users can add, view, and delete contacts.

⚙️ Prerequisites

Make sure you have installed:

Node.js
 (v16 or later recommended)

npm
 (comes with Node)

📂 Project Structure
contact-book/
│
├── backend/        # Express + SQLite backend
│   ├── index.js
│   ├── contacts.db (auto-created on first run)
│   └── package.json
│
├── frontend/       # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── header.jsx
│   │   │   ├── form.jsx
│   │   │   ├── emptyContact.jsx
│   │   │   └── contactCard.jsx
│   │   └── App.css
│   └── package.json
│
└── README.md       # This file

🗄️ Backend Setup (Express + SQLite)
1. Navigate to backend folder
cd backend

2. Install dependencies
npm install

3. Run the server
node index.js


By default, backend runs on:

http://localhost:3000

4. Database

SQLite database file contacts.db is created automatically.

Schema:

CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  phone TEXT
);

5. API Endpoints
Method	Endpoint	Description
GET	/contacts	Get all contacts
POST	/contacts	Add new contact
DELETE	/contacts/:id	Delete contact by ID

Example POST /contacts body:

{ "name": "Ashish", "phone": "9876543210" }

🎨 Frontend Setup (React + Vite)
1. Navigate to frontend folder
cd frontend

2. Install dependencies
npm install

3. Run the development server
npm run dev


By default, frontend runs on:

http://localhost:5173

🔗 Connecting Frontend & Backend

Frontend fetches data from backend using:

fetch("http://localhost:3000/contacts")


Make sure backend is running before starting frontend.

📌 Features

✅ Add new contact
✅ View all contacts
✅ Delete a contact
✅ Success message when adding contact (auto hides in 10s)

🚀 Future Improvements

Edit contact feature

Search + filter contacts

Form validation (email, phone)

Deploy to cloud (Render/Netlify)
