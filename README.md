# 🌱 Swachh Connect Gram# 🌱 Swachh Connect Gram# Swachh Connect Gram



A role-based community platform for reporting and managing cleanliness issues in rural areas.



## 🚀 FeaturesA community-driven platform for reporting and managing cleanliness issues in rural areas.A full-stack web application designed to empower villagers to identify and report cleanliness problems such as overflowing drains, garbage piles, and stagnant water. The system also provides educational content on hygiene practices, waste disposal, and disease prevention.



### 👥 Two User Types



#### **Residents**## 🚀 Features## 🌟 Features

- Register and post cleanliness complaints

- Upload multiple images per report

- Auto-capture GPS location

- Set priority levels (Low, Medium, High, Critical)### For Residents### User Registration & Authentication

- Track own report status (Pending → In Progress → Resolved)

- View personal statistics- 📝 Report cleanliness issues with photos and location- **Dual Registration Options**: Separate registration paths for Residents and Administrators

- Minimalistic, easy-to-use interface

- 📊 Track status of your reports- **Role-Based Access**: Distinct dashboards and features based on user type

#### **Administrators**

- View ALL reports from all residents- 🔔 Get updates on report resolution- **Admin Code Protection**: Secure admin registration with verification code

- Update report status

- Manage and delete any report- 📚 Access cleanliness awareness content- **JWT Authentication**: Secure token-based authentication system

- View reporter contact information

- Filter by category and status- **Profile Management**: User profile with contact information and location

- System-wide statistics

- NO complaint posting (admin monitoring only)### For Administrators



## 📦 Installation- 🎯 View and manage all community reports### For Residents



### Backend- 📈 Update report status (Pending → In Progress → Resolved)- **Personal Dashboard**: View and manage your own reports

```powershell

cd backend- 🗺️ Monitor issues by category and location- **Problem Reporting**: Submit cleanliness issues with detailed descriptions

npm install

```- 📊 View system-wide statistics- **Image Upload**: Attach photos of cleanliness problems



Create `.env` file:- **GPS Auto-Location**: Automatically capture coordinates and address

```env

PORT=5000## 🔐 User Roles- **Status Tracking**: Monitor your report status (pending, in-progress, resolved, rejected)

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret- **Report Statistics**: View personal submission stats

ADMIN_REGISTRATION_CODE=ADMIN2025

```- **Resident**: Submit and track personal reports- **Report Management**: Edit or delete your own reports



### Frontend- **Admin**: Manage all reports and system operations (requires admin code: **ADMIN2025**)

```powershell

cd frontend### For Administrators

npm install

```## 📦 Installation- **Admin Dashboard**: Centralized control panel for all complaints



## ▶️ Running the Application- **View All Reports**: Access to all submitted complaints across the system



### Start Backend (Terminal 1)### Backend Setup- **Status Management**: Update complaint status (pending, in-progress, resolved, rejected)

```powershell

cd backend- **Delete Reports**: Remove invalid or duplicate reports

npm start

``````powershell- **Statistics Overview**: Comprehensive stats across all categories



### Start Frontend (Terminal 2)cd backend- **User Contact Details**: View reporter information and contact them

```powershell

cd frontendnpm install

npm start

``````### Awareness Module



## 🌐 Access- **Educational Content**: Articles, videos, and infographics on hygiene



- **Application**: http://localhost:3000Create `.env` file in backend directory:- **Category-based**: Content organized by hygiene, waste disposal, disease prevention, etc.

- **API**: http://localhost:5000/api

```env- **Engagement**: Like and view counters for awareness content

## 👤 User Registration

PORT=5000

### Resident

1. Go to http://localhost:3000/registerMONGODB_URI=your_mongodb_connection_string### Dynamic Navigation

2. Click "Resident" card

3. Fill in details and submitJWT_SECRET=your_jwt_secret_key- **Role-Based Menus**: Different navigation options based on user role



### AdministratorADMIN_REGISTRATION_CODE=ADMIN2025- **User Badge**: Display current user role in navbar

1. Go to http://localhost:3000/register

2. Click "Administrator" card```- **Smart Redirects**: Automatic redirection to appropriate dashboard after login

3. Enter Admin Code: **ADMIN2025**

4. Fill in details and submit



## 📱 Routes### Frontend Setup## 🛠️ Technology Stack



| Route | Description | Access |

|-------|-------------|--------|

| `/` | Home page | Public |```powershell### Backend

| `/register` | User registration | Public |

| `/login` | User login | Public |cd frontend- **Node.js** & **Express.js**: Server framework

| `/resident-dashboard` | Resident dashboard | Residents only |

| `/admin` | Admin dashboard | Admins only |npm install- **MongoDB**: Database (MongoDB Atlas)

| `/report` | Submit new report | Residents |

| `/awareness` | Cleanliness awareness | Public |```- **Multer**: File upload handling

| `/dashboard` | Public dashboard | Public |

- **Mongoose**: MongoDB object modeling

## 🛠️ Technology Stack

## ▶️ Running the Application

**Backend:**

- Node.js & Express.js### Frontend

- MongoDB with Mongoose

- JWT Authentication### Start Backend (Terminal 1)- **React**: UI library

- Bcrypt password hashing

- Multer for file uploads```powershell- **React Router**: Navigation



**Frontend:**cd backend- **Axios**: HTTP client

- React 18

- React Router v6npm start- **React Icons**: Icon library

- Axios

- React Icons```- **React Leaflet**: Map integration

- Geolocation API



## 📝 Report Categories

### Start Frontend (Terminal 2)## 📁 Project Structure

- Overflowing Drain

- Garbage Pile```powershell

- Stagnant Water

- Blocked Sewercd frontend```

- Open Defecation

- Othernpm startcspproject/



## 🔄 Report Status Flow```├── backend/



```│   ├── server.js               # Express server setup

Pending → In Progress → Resolved

          ↓## 🌐 Access the Application│   ├── models/

       Rejected

```│   │   ├── Report.js          # Report schema



## 🎨 Project Structure- **Frontend**: http://localhost:3000│   │   └── Awareness.js       # Awareness schema



```- **Backend API**: http://localhost:5000/api│   ├── controllers/

cspproject/

├── backend/│   │   ├── reportController.js

│   ├── controllers/

│   ├── models/The frontend is configured to proxy API requests to the backend automatically.│   │   └── awarenessController.js

│   ├── routes/

│   ├── middleware/│   ├── routes/

│   ├── uploads/

│   └── server.js## 👤 User Registration│   │   ├── reportRoutes.js

└── frontend/

    ├── public/│   │   └── awarenessRoutes.js

    └── src/

        ├── components/### Register as Resident│   ├── uploads/               # Uploaded images

        ├── pages/

        └── services/1. Go to http://localhost:3000/register│   ├── .env                   # Environment variables

```

2. Select "Resident" card│   └── package.json

## 🔐 Key Features

3. Fill in your details│

✅ Role-based registration (Resident/Admin)  

✅ JWT token authentication  4. Submit to create account└── frontend/

✅ Protected routes with middleware  

✅ Automatic geolocation capture      ├── src/

✅ Multiple image uploads  

✅ Priority level selection  ### Register as Administrator    │   ├── App.js            # Main app component

✅ Real-time status tracking  

✅ Admin-only status management  1. Go to http://localhost:3000/register    │   ├── index.js          # Entry point

✅ User-specific report filtering  

2. Select "Administrator" card    │   ├── components/

## 🔒 Security

3. Fill in your details    │   │   ├── Navbar.js

- Password hashing with bcrypt

- JWT token-based auth4. Enter Admin Code: **ADMIN2025**    │   │   └── ReportForm.js

- Admin code protection

- Role-based access control5. Submit to create admin account    │   ├── pages/

- Protected API endpoints

    │   │   ├── Home.js

## 📄 License

## 📱 Main Routes    │   │   ├── ReportPage.js

MIT License

    │   │   ├── Awareness.js

---

| Route | Description | Access |    │   │   └── Dashboard.js

**Admin Code**: ADMIN2025  

*(Change before production deployment)*|-------|-------------|--------|    │   ├── services/


| `/` | Home page | Public |    │   │   ├── api.js

| `/register` | User registration | Public |    │   │   ├── reportService.js

| `/login` | User login | Public |    │   │   └── awarenessService.js

| `/resident-dashboard` | Resident dashboard | Residents only |    │   └── styles/

| `/admin` | Admin dashboard | Admins only |    ├── public/

| `/report` | Submit new report | Authenticated users |    ├── .env                  # Frontend environment variables

| `/awareness` | Cleanliness tips | Public |    └── package.json

```

## 🛠️ Technology Stack

## 🚀 Installation & Setup

### Backend

- Node.js & Express.js### Prerequisites

- MongoDB with Mongoose- Node.js (v14 or higher)

- JWT Authentication- MongoDB Atlas account

- Bcrypt for password hashing- npm or yarn

- Multer for image uploads

### Backend Setup

### Frontend

- React 181. Navigate to the backend directory:

- React Router v6```bash

- Axios for API callscd backend

- React Icons```

- Leaflet for maps

2. Install dependencies:

## 📝 Report Categories```bash

npm install

- Overflowing Drain```

- Garbage Pile

- Stagnant Water
- Blocked Sewer
- Open Defecation
- Other

## 🔄 Report Status Flow

1. **Pending** - Newly submitted
2. **In Progress** - Being addressed
3. **Resolved** - Issue fixed
4. **Rejected** - Invalid or duplicate

## 🚀 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. **Create a `.env` file** in the `backend/` directory:

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key_minimum_32_characters_long
ADMIN_REGISTRATION_CODE=ADMIN2025
```

**⚠️ CRITICAL SECURITY NOTES:**
- **NEVER** commit your `.env` file to version control
- Replace `username`, `password`, `cluster`, and `database` with your actual MongoDB credentials
- Use a strong, unique password for MongoDB
- Generate a long random string for `JWT_SECRET` (at least 32 characters)
- Change `ADMIN_REGISTRATION_CODE` before production deployment
- Refer to `.env.example` for template

4. Start the backend server:
```bash



1. **Pending** - Newly submitted4. Start the backend server:

2. **In Progress** - Being addressed```bash

3. **Resolved** - Issue fixednpm start

4. **Rejected** - Invalid/duplicate report```



## 🎨 Project StructureThe backend will run on `http://localhost:5000`



```### Frontend Setup

cspproject/

├── backend/1. Navigate to the frontend directory:

│   ├── controllers/     # Business logic```bash

│   ├── models/          # Database schemascd frontend

│   ├── routes/          # API endpoints```

│   ├── middleware/      # Auth & validation

│   ├── uploads/         # User uploaded images2. Install dependencies:

│   └── server.js        # Entry point```bash

│npm install

└── frontend/```

    ├── public/          # Static files

    └── src/3. Configure environment variables in `.env`:

        ├── components/  # Reusable components```

        ├── pages/       # Page componentsREACT_APP_API_URL=http://localhost:5000/api

        ├── services/    # API services```

        └── styles/      # CSS files

```4. Start the development server:

```bash

## 🔒 Security Featuresnpm start

```

- Password hashing with bcrypt

- JWT token authenticationThe frontend will run on `http://localhost:3000`

- Admin code protection (ADMIN2025)

- Role-based access control## 📡 API Endpoints

- Protected API routes

### Authentication Endpoints

## 📄 License- `POST /api/auth/register` - Register new user (resident or admin)

- `POST /api/auth/login` - User login

MIT License- `GET /api/auth/me` - Get current user profile (requires authentication)

- `PUT /api/auth/profile` - Update user profile (requires authentication)

---

### Report Endpoints

**Note**: Change the admin code before production deployment!- `GET /api/reports` - Get all reports (with optional filters)

- `POST /api/reports` - Create a new report (multipart/form-data, requires authentication)
- `GET /api/reports/:id` - Get report by ID
- `PUT /api/reports/:id` - Update report status (requires authentication)
- `DELETE /api/reports/:id` - Delete a report (requires authentication)
- `GET /api/reports/stats` - Get report statistics

### Awareness Endpoints
- `GET /api/awareness` - Get all awareness content
- `POST /api/awareness` - Create awareness content (requires admin authentication)
- `GET /api/awareness/:id` - Get awareness by ID
- `PUT /api/awareness/:id` - Update awareness content (requires admin authentication)
- `DELETE /api/awareness/:id` - Delete awareness content (requires admin authentication)
- `POST /api/awareness/:id/like` - Like awareness content

## 👥 User Roles & Access

### Resident Users
- Register with email, phone, address, and location
- Submit new cleanliness reports with images and GPS location
- View personal dashboard with their own reports
- Track status of their submitted reports
- Delete their own reports
- Access awareness content

### Administrator Users
- Register with admin code (ADMIN2025)
- Access admin dashboard with all system reports
- View complete statistics across all reports
- Update status of any report (pending → in-progress → resolved/rejected)
- Delete any report (with confirmation)
- View reporter contact information
- Manage awareness content
- Access all system features

## 🔐 Admin Registration

To register as an administrator:

1. Go to the registration page
2. Select "Administrator" as account type
3. Fill in all required information
4. Enter the admin registration code: **ADMIN2025**
5. Complete registration

**Note**: The admin code can be changed in the backend `.env` file:
```
ADMIN_REGISTRATION_CODE=your_custom_code
```

## 🎨 Pages & Features

### Home Page
- Welcome message
- Introduction to the platform
- Quick navigation to reporting and awareness sections

### Report Page
- Submit new cleanliness reports
- Upload images
- Add location (manual or geolocation with GPS auto-capture)
- Categorize the issue

### Awareness Page
- Browse educational content
- Filter by category and content type
- Like and engage with content

### Dashboard
- View all submitted reports
- Real-time statistics
- Filter and search reports
- Update report status

## 🔐 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 📊 Data Models

### Report Schema
```javascript
{
  title: String,
  description: String,
  category: String,
  location: {
    address: String,
    coordinates: {
      lat: Number,
      lng: Number
    }
  },
  image: String,
  status: String, // pending, in_progress, resolved, rejected
  reportedBy: String,
  contactNumber: String,
  priority: String, // low, medium, high, urgent
  createdAt: Date,
  updatedAt: Date
}
```

### Awareness Schema
```javascript
{
  title: String,
  description: String,
  content: String,
  category: String,
  type: String, // article, video, infographic, tip
  imageUrl: String,
  videoUrl: String,
  likes: Number,
  views: Number,
  author: String,
  publishedDate: Date
}
```

## 🎯 Usage Guide

### For Users (Villagers)

1. **Report an Issue**:
   - Go to "Report Issue" page
   - Fill in the problem details
   - Upload a photo
   - Add location
   - Submit the report

2. **Learn About Cleanliness**:
   - Visit the "Awareness" page
   - Browse articles, videos, and tips
   - Filter by topics of interest

### For Authorities/Admins

1. **Access Admin Dashboard**:
   - Login with admin credentials (role: admin)
   - Navigate to Admin Dashboard
   - View all submitted complaints

2. **Manage Reports**:
   - Update report status
   - Track resolution progress
   - Delete invalid reports
   - View reporter contact details

## 🌐 Connection Status

✅ **Backend**: Running on port 5000  
✅ **Frontend**: Running on port 3000  
✅ **MongoDB**: Connected to Atlas cluster  
✅ **API Connection**: Frontend successfully communicating with backend

## 🔄 Development Workflow

1. Both servers are running in development mode
2. Frontend auto-reloads on file changes
3. Backend restarts manually (can use nodemon for auto-restart)
4. API calls are proxied from frontend to backend

## � Creating an Admin User

To create an admin user, you need to manually update the user's role in MongoDB:

1. Register a new user through the app
2. Access MongoDB Atlas or MongoDB Compass
3. Find the user in the `users` collection
4. Update the `role` field from `"user"` to `"admin"`
5. Login again to access the Admin Dashboard

## �🚀 Deployment

### Backend Deployment (Heroku/Railway)
1. Set environment variables
2. Deploy the backend folder
3. Update frontend API URL

### Frontend Deployment (Vercel/Netlify)
1. Build the production version: `npm run build`
2. Deploy the build folder
3. Configure environment variables

## 📝 Future Enhancements

- [x] User authentication and roles
- [x] Admin Dashboard
- [x] GPS Auto-location
- [ ] Real-time notifications
- [ ] SMS alerts for authorities
- [ ] Advanced analytics and data visualization
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Offline mode with sync

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is developed for educational and community welfare purposes.

## 👥 Contact

For questions or support, please contact the development team.

---

**Made with ❤️ for rural cleanliness improvement**
