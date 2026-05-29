# Troubleshooting Guide

## Common Issues and Solutions

### 1. MySQL Connection Error

**Error:** `ER_ACCESS_DENIED_ERROR` or `ECONNREFUSED`

**Solutions:**
- Verify MySQL is running:
  - Open Services (Win + R, type `services.msc`)
  - Find "MySQL" or "MySQL80" service
  - Ensure it's running (Start if stopped)

- Check credentials:
  - Open MySQL Workbench or command line
  - Try connecting with username: `root`, password: `root`
  - If password is different, update `backend/.env` file

- Test connection:
  ```bash
  cd backend
  node test-db.js
  ```

### 2. Port Already in Use

**Error:** `EADDRINUSE: address already in use :::5000` or `:::3000`

**Solutions:**

For Backend (Port 5000):
```bash
# Find process using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with actual number)
taskkill /PID <PID> /F
```

For Frontend (Port 3000):
```bash
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process
taskkill /PID <PID> /F
```

### 3. Module Not Found Error

**Error:** `Cannot find module 'express'` or similar

**Solution:**
```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### 4. Database Not Created

**Error:** `ER_BAD_DB_ERROR: Unknown database 'document_management'`

**Solution:**
The database should be created automatically. If not:

1. Open MySQL Workbench
2. Run this SQL:
```sql
CREATE DATABASE IF NOT EXISTS document_management;
```

Or let the backend create it:
```bash
cd backend
node server.js
```

### 5. Upload Directory Missing

**Error:** `ENOENT: no such file or directory, open 'uploads/...'`

**Solution:**
```bash
cd backend
mkdir uploads
```

### 6. CORS Error in Browser

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:**
- Ensure backend is running on port 5000
- Ensure frontend is running on port 3000
- Check `backend/server.js` has correct CORS configuration

### 7. React Build Errors

**Error:** Various React compilation errors

**Solutions:**
```bash
cd frontend
# Clear cache and reinstall
rmdir /s /q node_modules
del package-lock.json
npm install
npm start
```

### 8. JWT Token Error

**Error:** `Invalid token` or `No token provided`

**Solution:**
- Clear browser localStorage
- Log out and log in again
- Check if JWT_SECRET is set in `backend/.env`

### 9. File Upload Fails

**Error:** Upload returns 400 or 500 error

**Solutions:**
- Check file is PDF format
- Check file size is under 50MB
- Ensure `backend/uploads` directory exists
- Check backend console for detailed error

### 10. WebSocket Connection Failed

**Error:** `WebSocket connection failed` in browser console

**Solutions:**
- Ensure backend is running
- Check Socket.IO version compatibility
- Verify port 5000 is accessible

## Verification Steps

### Step 1: Verify MySQL
```bash
cd backend
node test-db.js
```
Should show: ✓ MySQL connection successful!

### Step 2: Verify Backend
```bash
cd backend
npm start
```
Should show: 
- Database initialized successfully
- Server running on port 5000

### Step 3: Verify Frontend
```bash
cd frontend
npm start
```
Should open browser at http://localhost:3000

### Step 4: Test Complete Flow
1. Go to http://localhost:3000
2. Click "Sign up"
3. Create account (name, email, password)
4. Should redirect to dashboard
5. Upload a PDF file
6. Check if file appears in document list

## Quick Fixes

### Reset Everything
```bash
# Stop all Node processes
taskkill /F /IM node.exe

# Restart MySQL
net stop MySQL80
net start MySQL80

# Start fresh
cd Document_management
start.bat
```

### Clear Browser Data
1. Open DevTools (F12)
2. Application tab
3. Clear Storage > Clear site data
4. Refresh page (Ctrl + F5)

### Reinstall Dependencies
```bash
# Backend
cd backend
rmdir /s /q node_modules
del package-lock.json
npm install

# Frontend
cd frontend
rmdir /s /q node_modules
del package-lock.json
npm install
```

## Still Having Issues?

1. Check backend console for errors
2. Check browser console (F12) for errors
3. Verify all files are present:
   - backend/config/database.js
   - backend/routes/*.js
   - backend/server.js
   - frontend/src/App.js
   - frontend/src/pages/*.js

4. Ensure .env file exists in backend directory

5. Check MySQL Workbench can connect with root/root

## Environment Requirements

- Node.js: v14 or higher
- MySQL: 5.7 or higher
- npm: 6 or higher
- Windows 10/11
- Modern browser (Chrome, Firefox, Edge)

## Contact

If issues persist, check:
- README.md for full documentation
- SETUP.md for setup instructions
- GitHub repository for updates
