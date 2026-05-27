"""
CyberSecurity & Programming Academy - Backend API
Main application entry point
"""

from fastapi import FastAPI, HTTPException
from fastapi.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from contextlib import asynccontextmanager
import logging
from typing import Dict, Any

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Application startup/shutdown events
@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    logger.info("🚀 Starting CyberSecurity Academy API")
    yield
    # Shutdown
    logger.info("🛑 Shutting down CyberSecurity Academy API")

# Create FastAPI app
app = FastAPI(
    title="CyberSecurity & Programming Academy API",
    description="Full-stack learning platform for cybersecurity and programming",
    version="1.0.0",
    lifespan=lifespan
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Health check endpoint
@app.get("/health")
async def health_check() -> Dict[str, Any]:
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "CyberSecurity Academy API",
        "version": "1.0.0"
    }

# Root endpoint
@app.get("/")
async def root() -> Dict[str, str]:
    """Root endpoint with API information"""
    return {
        "message": "Welcome to CyberSecurity & Programming Academy",
        "docs": "/docs",
        "redoc": "/redoc"
    }

# API Routes
from routes import courses, tasks, users, projects

app.include_router(courses.router, prefix="/api/v1/courses", tags=["Courses"])
app.include_router(tasks.router, prefix="/api/v1/tasks", tags=["Tasks"])
app.include_router(users.router, prefix="/api/v1/users", tags=["Users"])
app.include_router(projects.router, prefix="/api/v1/projects", tags=["Projects"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )