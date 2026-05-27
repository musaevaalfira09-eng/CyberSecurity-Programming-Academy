# 🚀 Installation Guide - Run on Your Laptop

## Prerequisites

Before you start, make sure you have installed:
- **Python 3.9+** - [Download here](https://www.python.org/downloads/)
- **Node.js 16+** - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)

## Step 1: Clone the Repository

```bash
git clone https://github.com/musaevaalfira09-eng/CyberSecurity-Programming-Academy.git
cd CyberSecurity-Programming-Academy
```

## Step 2: Setup Backend (Python FastAPI)

### 2.1 Create Virtual Environment

**Windows:**
```bash
python -m venv venv
venv\Scripts\activate
```

**macOS/Linux:**
```bash
python -m venv venv
source venv/bin/activate
```

### 2.2 Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 2.3 Run Backend Server

```bash
python -m uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Output should show:**
```
INFO:     Uvicorn running on http://0.0.0.0:8000
INFO:     Application startup complete
```

✅ Backend is running at: **http://localhost:8000**

### Test Backend

Open in browser or use curl:
- Health Check: http://localhost:8000/health
- API Docs: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc
- Courses: http://localhost:8000/api/v1/courses/

## Step 3: Setup Frontend (React)

### 3.1 Open New Terminal/Command Prompt

### 3.2 Navigate to Frontend Directory

```bash
cd frontend
```

### 3.3 Install Frontend Dependencies

```bash
npm install
```

### 3.4 Start Frontend Server

```bash
npm start
```

**Output should show:**
```
Launched the development server.
You can now view cybersecurity-academy-frontend in the browser.

Local: http://localhost:3000
```

✅ Frontend will automatically open in your browser at: **http://localhost:3000**

## Step 4: Verify Everything is Working

### In Browser:
1. Frontend should load at http://localhost:3000
2. You should see the CyberSecurity Academy homepage
3. Click on "Courses" tab
4. Courses from backend API should appear

### Terminal Checks:
- **Backend terminal**: Should show API requests like `GET /api/v1/courses/`
- **Frontend terminal**: Should show webpack compilation success

## Troubleshooting

### Issue: Backend won't start
```bash
# Check if port 8000 is in use
# Windows
netstat -ano | findstr :8000

# macOS/Linux
lsof -i :8000

# Kill process using the port (if needed)
# Windows
taskkill /PID <PID> /F

# macOS/Linux
kill -9 <PID>
```

### Issue: Frontend won't start
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: CORS errors
- These are normal during development
- Backend CORS middleware already handles this (allows all origins)

### Issue: Port already in use
```bash
# Run backend on different port
python -m uvicorn main:app --reload --port 8001

# Update frontend .env if needed
echo "REACT_APP_API_URL=http://localhost:8001" > frontend/.env
```

## Using Docker (Optional)

If you prefer Docker:

```bash
# Build and run with docker-compose
docker-compose up --build

# Open http://localhost:3000 in browser
```

## Next Steps

1. **Explore Courses**: Browse available courses and modules
2. **Complete Tasks**: Practice with coding challenges
3. **Start Projects**: Work on capstone projects
4. **Track Progress**: Monitor your learning journey

## Architecture

```
┌─────────────────────────────────────────────────┐
│  Browser (http://localhost:3000)                 │
│  ┌────────────────────────────────────────────┐ │
│  │         React Frontend                      │ │
│  │  - Courses & Modules                       │ │
│  │  - Interactive Code Editor                 │ │
│  │  - Task Practice                           │ │
│  │  - Projects                                │ │
│  └────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
           HTTP Requests
                  ↓
┌─────────────────────────────────────────────────┐
│  Python FastAPI Backend (http://localhost:8000) │
│  ┌────────────────────────────────────────────┐ │
│  │      FastAPI Application                    │ │
│  │  ✓ Courses API (/api/v1/courses)           │ │
│  │  ✓ Tasks API (/api/v1/tasks)               │ │
│  │  ✓ Users API (/api/v1/users)               │ │
│  │  ✓ Projects API (/api/v1/projects)         │ │
│  │  ✓ Health Check (/health)                  │ │
│  └────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────┘
```

## Support

- 📧 Email: support@cybersecurity-academy.com
- 💬 Discord: [Join Community](https://discord.gg/cybersecurity)
- 📚 Documentation: See README.md and docs/

---

**Happy Learning!** 🎓
