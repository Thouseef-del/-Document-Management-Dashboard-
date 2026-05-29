# Quick Setup Guide

## Prerequisites Check
✓ Node.js installed
✓ MySQL Server running (username: root, password: root)
✓ Git installed

## Setup Steps

### 1. Backend Setup (Already Done)
```bash
cd backend
npm install  # Already completed
```

### 2. Frontend Setup
```bash
cd frontend
npm install  # Already completed
```

### 3. MySQL Configuration
Make sure MySQL is running with:
- Host: localhost
- User: root
- Password: root

The database `document_management` will be created automatically.

### 4. Start the Application

**Option A: Use the batch file (Windows)**
```bash
# Double-click start.bat in the root directory
# OR run from command line:
start.bat
```

**Option B: Manual start (2 terminals)**

Terminal 1 - Backend:
```bash
cd backend
npm start
```

Terminal 2 - Frontend:
```bash
cd frontend
npm start
```

### 5. Access the Application
Open your browser and go to: http://localhost:3000

## First Time Usage

1. Click "Sign up" to create an account
2. Enter your name, email, and password
3. You'll be automatically logged in and redirected to the dashboard
4. Start uploading PDF documents!

## Testing the Features

### File Upload
- Click "Choose PDF Files"
- Select 1-3 PDFs for normal upload
- Select 4+ PDFs to trigger bulk upload notification

### Notifications
- Click the bell icon (🔔) in the header
- View all notifications
- Mark as read individually or all at once

### Document Management
- View all uploaded documents in the table
- Download any document by clicking "Download"
- See total documents and storage in the stats cards

## Troubleshooting

### Backend won't start
- Check if MySQL is running
- Verify MySQL credentials (root/root)
- Check if port 5000 is available

### Frontend won't start
- Check if port 3000 is available
- Make sure backend is running first

### Database connection error
- Verify MySQL credentials in backend/.env
- Make sure MySQL service is running

### Upload fails
- Check if backend/uploads directory exists
- Verify file is a PDF
- Check file size (max 50MB)

## Git Commits

Remember to commit every 15 minutes:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## Project Structure
```
Document_management/
├── backend/          # Node.js + Express backend
├── frontend/         # React frontend
├── start.bat         # Windows startup script
└── README.md         # Full documentation
```

## Support

For issues or questions, refer to the main README.md file.
