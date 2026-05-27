"""
Projects API endpoints
"""

from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from pydantic import BaseModel

router = APIRouter()

class ProjectTemplate(BaseModel):
    id: int = None
    title: str
    description: str
    technologies: List[str]

PROJECT_TEMPLATES: Dict[int, ProjectTemplate] = {
    1: ProjectTemplate(
        id=1,
        title="Port Scanner",
        description="Build a multi-threaded port scanner",
        technologies=["Python", "Sockets", "Threading"]
    ),
    2: ProjectTemplate(
        id=2,
        title="Encryption Tool",
        description="Create an encryption/decryption tool",
        technologies=["Python", "Cryptography"]
    ),
}

@router.get("/templates", response_model=List[ProjectTemplate])
async def get_project_templates():
    """Get all available project templates"""
    return list(PROJECT_TEMPLATES.values())