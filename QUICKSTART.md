# 🚀 Quick Start Guide

## ✅ Prerequisites Checklist

Before starting, ensure you have:
- [ ] Node.js installed (v14+)
- [ ] MySQL Server running
- [ ] MySQL credentials: username=`root`, password=`root`
- [ ] Git installed

## 📦 Installation (One-Time Setup)

### Option 1: Automated Setup (Recommended)

1. **Run verification script:**
   ```bash
   verify-setup.bat
   ```
   This will check all requirements and install dependencies.

### Option 2: Manual Setup

1. **Install Backend Dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Test MySQL Connection:**
   ```bash
   cd backend
   node test-db.js
   ```

## 🎯 Running the Application

### Easiest Way: Use Start Script

Simply double-click `start.bat` or run:
```bash
start.bat
```

This will:
- ✓ Check MySQL connection
- ✓ Start backend server (http://localhost:5000)
- ✓ Start frontend server (http://localhost:3000)
- ✓ Open browser automatically

### Manual Way: Two Terminals

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

## 🎨 First Time Usage

1. **Open Browser:** http://localhost:3000

2. **Create Account:**
   - Click "Sign up"
   - Enter your name, email, and password
   - Click "Sign Up"

3. **You're In!** You'll be automatically logged in and redirected to the dashboard.

## 📤 Uploading Documents

### Single/Small Upload (1-3 files):
1. Click "📁 Choose PDF Files"
2. Select 1-3 PDF files
3. Click "Upload Files"
4. Watch individual progress bars
5. Files appear in document list immediately

### Bulk Upload (4+ files):
1. Click "📁 Choose PDF Files"
2. Select 4 or more PDF files
3. Click "Upload Files"
4. See "Upload in progress" notification
5. Get real-time notification when complete (🔔)
6. Files appear in document list

## 🔔 Notifications

- Click the bell icon (🔔) in the header
- View all notifications
- Mark individual as read
- Mark all as read
- Unread count badge shows on bell icon

## 📥 Downloading Documents

- Go to document list
- Click "Download" button next to any file
- File downloads to your default download folder

## 🛑 Stopping the Application

- Close both terminal windows (Backend and Frontend)
- Or press `Ctrl + C` in each terminal

## 📊 Dashboard Features

### Stats Cards
- **Total Documents:** Count of all uploaded files
- **Total Storage:** Combined size of all files

### File Upload Section
- Choose multiple PDF files
- Real-time progress tracking
- File size and name display

### Document List
- View all uploaded documents
- See file name, size, type, upload date
- Download any document

### Notification Center
- Real-time notifications
- Persistent across sessions
- Read/unread status

## 🔐 Security Features

- JWT-based authentication
- Password hashing (bcrypt)
- Protected API routes
- File type validation (PDF only)
- File size limit (50MB max)

## 📁 Project Structure

```
Document_management/
├── start.bat              ← Start both servers
├── verify-setup.bat       ← Verify installation
├── README.md              ← Full documentation
├── SETUP.md               ← Detailed setup guide
├── TROUBLESHOOTING.md     ← Fix common issues
├── backend/
│   ├── server.js          ← Main backend server
│   ├── test-db.js         ← Test MySQL connection
│   ├── .env               ← Configuration
│   └── uploads/           ← Uploaded files stored here
└── frontend/
    └── src/
        ├── pages/         ← Login, Signup, Dashboard
        ├── components/    ← FileUpload, DocumentList, etc.
        └── services/      ← API calls
```

## 🎯 Testing the Complete Flow

1. ✓ Sign up with new account
2. ✓ Upload 1-2 PDFs (normal upload)
3. ✓ Upload 5+ PDFs (bulk upload with notification)
4. ✓ Check notification bell (should show unread count)
5. ✓ View notifications panel
6. ✓ Download a document
7. ✓ Check stats (total documents and storage)
8. ✓ Logout and login again

## ⚡ Quick Commands

```bash
# Test MySQL connection
cd backend && node test-db.js

# Start backend only
cd backend && npm start

# Start frontend only
cd frontend && npm start

# Verify setup
verify-setup.bat

# Start everything
start.bat

# Kill all Node processes
taskkill /F /IM node.exe
```

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| MySQL connection failed | Start MySQL service, verify root/root credentials |
| Port 5000 in use | Kill process: `netstat -ano \| findstr :5000` |
| Port 3000 in use | Kill process: `netstat -ano \| findstr :3000` |
| Module not found | Run `npm install` in backend and frontend |
| Upload fails | Check backend/uploads directory exists |

For detailed troubleshooting, see `TROUBLESHOOTING.md`

## 📝 Git Commits (Every 15 Minutes)

```bash
git add .
git commit -m "Your descriptive message"
git push origin main
```

## 🌐 URLs

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **GitHub:** https://github.com/Thouseef-del/-Document-Management-Dashboard-.git

## 📚 Documentation Files

- `README.md` - Complete project documentation
- `SETUP.md` - Detailed setup instructions
- `TROUBLESHOOTING.md` - Fix common issues
- `QUICKSTART.md` - This file (quick reference)

## ✨ Features Checklist

- [x] User Authentication (Login/Signup)
- [x] JWT Token-based sessions
- [x] File upload with progress tracking
- [x] Bulk upload detection (>3 files)
- [x] Real-time WebSocket notifications
- [x] Persistent notification storage
- [x] Notification center with read/unread
- [x] Document list with download
- [x] Dashboard statistics
- [x] MySQL database integration
- [x] Responsive design
- [x] Livvic font integration
- [x] Blue/white gradient theme

## 🎓 Tech Stack

**Frontend:** React, React Router, Axios, Socket.IO Client  
**Backend:** Node.js, Express, MySQL, Socket.IO, Multer, JWT  
**Database:** MySQL  
**Styling:** Custom CSS with Livvic font

---

**Need Help?** Check `TROUBLESHOOTING.md` or the full `README.md`
