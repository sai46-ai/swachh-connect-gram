# Swachh Connect Gram

Swachh Connect Gram is a role-based web application designed to report and manage cleanliness issues in rural areas. The system allows residents to submit sanitation-related complaints and enables administrators to monitor and resolve them through a centralized platform.

---

## Features

- Role-based access for Residents and Administrators
- Residents can submit cleanliness reports with images and GPS location
- Priority-based complaint submission
- Report status tracking (Pending, In Progress, Resolved, Rejected)
- Administrator dashboard to manage all reports
- Awareness section for hygiene and waste management information
- Secure authentication using JWT
- Admin registration controlled through environment variables

---

## Technologies

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt
- Multer

### Frontend
- React
- React Router
- Axios
- React Icons
- React Leaflet
- Geolocation API

---

## Project Structure

```

swachh-connect-gram/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   ├── App.js
│   ├── index.js
│   └── .env
│
└── README.md

```

---

## Setup and Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB database
- npm or yarn

---

## Backend Setup

Navigate to backend directory:
```

cd backend
npm install

```

Create a `.env` file:
```

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_REGISTRATION_CODE=your_admin_code

```

Start backend server:
```

npm start

```

---

## Frontend Setup

Navigate to frontend directory:
```

cd frontend
npm install

```

Create a `.env` file:
```

REACT_APP_API_URL=[http://localhost:5000/api](http://localhost:5000/api)

```

Start frontend server:
```

npm start

```

---

## Usage

### Residents
- Register and log in as a resident
- Submit cleanliness reports with description, images, and location
- Track the status of submitted reports
- View personal report history

### Administrators
- Register using the admin registration code
- Log in as administrator
- View all submitted reports
- Filter reports by category and status
- Update report status
- Delete invalid or duplicate reports
- Manage awareness content

---

## API Endpoints

### Authentication
- POST `/api/auth/register`
- POST `/api/auth/login`

### Reports
- GET `/api/reports`
- POST `/api/reports`
- PUT `/api/reports/:id`
- DELETE `/api/reports/:id`

### Awareness
- GET `/api/awareness`
- POST `/api/awareness`

---

## Report Categories
- Overflowing Drain
- Garbage Pile
- Stagnant Water
- Blocked Sewer
- Open Defecation
- Other

---

## Security
- Passwords are hashed using bcrypt
- JWT-based authentication
- Role-based access control
- Protected API routes
- Admin access controlled through environment variables

**Deployment
**Backend and frontend can be deployed on any platform that supports Node.js and React.  
Environment variables must be configured during deployment.
