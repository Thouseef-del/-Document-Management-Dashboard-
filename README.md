# Document Management Dashboard

A full-stack web application for managing PDF documents with real-time notifications, file upload tracking, and user authentication.

## Features

- **User Authentication**: Login and Signup functionality
- **File Upload**: Single and bulk PDF file upload with progress tracking
- **Real-time Notifications**: WebSocket-based notifications for bulk uploads (>3 files)
- **Document Management**: View, download, and track all uploaded documents
- **Dashboard Statistics**: Total documents and storage usage
- **Notification Center**: Persistent notification panel with read/unread status

## Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Socket.IO Client
- Livvic Font (Google Fonts)

### Backend
- Node.js
- Express.js
- MySQL (mysql2)
- Socket.IO
- Multer (file uploads)
- JWT Authentication
- Bcrypt.js

## Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- Git

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Thouseef-del/-Document-Management-Dashboard-.git
cd Document_management
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=document_management
JWT_SECRET=your_jwt_secret_key_change_in_production
```

### 3. MySQL Database Setup

The database will be created automatically when you start the backend server. Make sure MySQL is running with:
- Username: `root`
- Password: `root`

Or update the `.env` file with your MySQL credentials.

### 4. Frontend Setup

```bash
cd ../frontend
npm install
```

### 5. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

The application will open at `http://localhost:3000`

## Usage

1. **Sign Up**: Create a new account with name, email, and password
2. **Login**: Access your dashboard with your credentials
3. **Upload Files**: 
   - Click "Choose PDF Files" to select one or multiple PDF files
   - View upload progress for each file
   - Files uploaded in bulk (>3) trigger background processing notifications
4. **View Documents**: See all uploaded documents in a table with download options
5. **Notifications**: Click the bell icon to view all notifications
6. **Dashboard Stats**: Monitor total documents and storage usage

## Database Schema

### Users Table
- id (INT, PRIMARY KEY)
- email (VARCHAR, UNIQUE)
- password (VARCHAR, hashed)
- name (VARCHAR)
- created_at (TIMESTAMP)

### Documents Table
- id (INT, PRIMARY KEY)
- user_id (INT, FOREIGN KEY)
- filename (VARCHAR)
- original_name (VARCHAR)
- file_size (BIGINT)
- file_type (VARCHAR)
- file_path (VARCHAR)
- upload_status (ENUM)
- uploaded_at (TIMESTAMP)

### Notifications Table
- id (INT, PRIMARY KEY)
- user_id (INT, FOREIGN KEY)
- message (TEXT)
- type (ENUM: success/error/info)
- is_read (BOOLEAN)
- created_at (TIMESTAMP)

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user
- `POST /api/auth/login` - User login

### Documents
- `POST /api/documents/upload` - Upload files (requires auth)
- `GET /api/documents/list` - Get all user documents (requires auth)
- `GET /api/documents/download/:id` - Download document (requires auth)
- `GET /api/documents/stats` - Get document statistics (requires auth)

### Notifications
- `GET /api/notifications` - Get all notifications (requires auth)
- `GET /api/notifications/unread-count` - Get unread count (requires auth)
- `PUT /api/notifications/:id/read` - Mark as read (requires auth)
- `PUT /api/notifications/mark-all-read` - Mark all as read (requires auth)

## Features Implementation

### File Upload with Progress Tracking
- Individual progress bars for each file
- Real-time upload percentage display
- File size and type validation

### Smart Notifications
- Bulk upload (>3 files) triggers background processing notification
- Real-time WebSocket notifications
- Persistent notification storage in database
- Unread count badge

### Notification Center
- View all notifications
- Mark individual notifications as read
- Mark all notifications as read
- Timestamp for each notification

## Project Structure

```
Document_management/
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── documents.js
│   │   └── notifications.js
│   ├── uploads/
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── DocumentList.js
    │   │   ├── FileUpload.js
    │   │   └── NotificationPanel.js
    │   ├── context/
    │   │   └── AuthContext.js
    │   ├── pages/
    │   │   ├── Dashboard.js
    │   │   ├── Login.js
    │   │   └── Signup.js
    │   ├── services/
    │   │   └── api.js
    │   ├── styles/
    │   │   ├── Auth.css
    │   │   └── Dashboard.css
    │   ├── App.css
    │   ├── App.js
    │   └── index.js
    └── package.json
```

## Design

- Font: Livvic (Google Fonts)
- Color Scheme: White and Blue gradient theme
- Responsive design
- Clean and modern UI

## Security

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- File type validation (PDF only)
- File size limits (50MB max)

## Future Enhancements

- File preview functionality
- Search and filter documents
- Folder organization
- User profile management
- Email notifications
- File sharing capabilities

## License

MIT

## Author

SWS AI Technical Assessment
