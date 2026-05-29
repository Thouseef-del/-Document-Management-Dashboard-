@echo off
echo ========================================
echo Document Management Dashboard - Setup Verification
echo ========================================
echo.

echo [1/5] Checking Node.js installation...
node --version
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    pause
    exit /b 1
)
echo ✓ Node.js is installed
echo.

echo [2/5] Checking MySQL connection...
cd backend
node test-db.js
if %errorlevel% neq 0 (
    echo ERROR: MySQL connection failed!
    echo Please ensure MySQL is running with username: root, password: root
    pause
    exit /b 1
)
echo.

echo [3/5] Checking backend dependencies...
if not exist "node_modules\" (
    echo Installing backend dependencies...
    call npm install
)
echo ✓ Backend dependencies ready
echo.

echo [4/5] Checking frontend dependencies...
cd ..\frontend
if not exist "node_modules\" (
    echo Installing frontend dependencies...
    call npm install
)
echo ✓ Frontend dependencies ready
echo.

echo [5/5] Verification complete!
echo.
echo ========================================
echo All checks passed! Ready to start.
echo ========================================
echo.
echo To start the application:
echo 1. Run start.bat (opens 2 terminals)
echo 2. OR manually:
echo    Terminal 1: cd backend ^&^& npm start
echo    Terminal 2: cd frontend ^&^& npm start
echo.
pause
