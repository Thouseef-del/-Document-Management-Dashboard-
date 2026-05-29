@echo off
echo ========================================
echo Document Management Dashboard
echo ========================================
echo.

echo Checking MySQL connection...
cd backend
node test-db.js
if %errorlevel% neq 0 (
    echo.
    echo ERROR: Cannot connect to MySQL!
    echo Please start MySQL server and try again.
    pause
    exit /b 1
)

echo.
echo Starting Backend Server on http://localhost:5000
start "Backend Server" cmd /k "npm start"

echo Waiting for backend to initialize...
timeout /t 5 /nobreak > nul

cd ..
cd frontend
echo.
echo Starting Frontend Server on http://localhost:3000
start "Frontend Server" cmd /k "npm start"

echo.
echo ========================================
echo Both servers are starting!
echo ========================================
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo The browser will open automatically.
echo Close the terminal windows to stop the servers.
echo ========================================
echo.
pause
