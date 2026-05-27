# ⚡ Quick Start (5 Minutes)

## For Windows Users

### 1. Install Dependencies (First Time Only)
```bash
# Python
Download from https://www.python.org/downloads/
Run installer and check "Add Python to PATH"

# Node.js
Download from https://nodejs.org/
Run installer with default settings

# Git (optional, can download ZIP instead)
Download from https://git-scm.com/
```

### 2. Clone/Download Project
```bash
# Option A: Using Git
git clone https://github.com/musaevaalfira09-eng/CyberSecurity-Programming-Academy.git
cd CyberSecurity-Programming-Academy

# Option B: Download ZIP
# Download ZIP from GitHub, extract it, open command prompt in extracted folder
```

### 3. Setup Backend (Terminal 1)
```bash
# Create virtual environment
python -m venv venv
venv\Scripts\activate

# Install dependencies
cd backend
pip install -r requirements.txt

# Run backend
python -m uvicorn main:app --reload
```

**Keep this terminal open!**

### 4. Setup Frontend (Terminal 2)
```bash
# Open new Command Prompt in project folder
cd frontend

# Install dependencies
npm install

# Start frontend
npm start
```

**Browser should open automatically at http://localhost:3000**

## For Mac/Linux Users

### 1. Install Dependencies (First Time Only)
```bash
# Python (usually pre-installed)
python3 --version

# Node.js
brew install node  # Mac with Homebrew
# or download from https://nodejs.org/
```

### 2. Clone Project
```bash
git clone https://github.com/musaevaalfira09-eng/CyberSecurity-Programming-Academy.git
cd CyberSecurity-Programming-Academy
```

### 3. Setup Backend (Terminal 1)
```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
cd backend
pip install -r requirements.txt

# Run backend
python -m uvicorn main:app --reload
```

### 4. Setup Frontend (Terminal 2)
```bash
cd frontend
npm install
npm start
```

## ✅ You're Done!

You should see:
- **Backend** running on http://localhost:8000
- **Frontend** running on http://localhost:3000

### Test It:
1. Open http://localhost:3000 in browser
2. Click "Courses" button
3. See courses loading from API

## Common Issues

**"python: command not found"**
```bash
# Try python3 instead
python3 -m venv venv
```

**"npm: command not found"**
- Reinstall Node.js from https://nodejs.org/
- Restart terminal after installation

**"Port 8000 already in use"**
```bash
# Run on different port
python -m uvicorn main:app --reload --port 8001
# Then update frontend to use http://localhost:8001
```

## Next Steps

1. Explore the web interface
2. Check out courses and tasks
3. Try the API at http://localhost:8000/docs
4. Read INSTALL.md for advanced setup
5. Check docs/ folder for full documentation

---

**Questions?** See INSTALL.md or README.md
