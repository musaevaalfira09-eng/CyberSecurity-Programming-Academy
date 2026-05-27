"""
Users API endpoints
"""

from fastapi import APIRouter, HTTPException
from typing import Dict, Any, List
from pydantic import BaseModel

router = APIRouter()

class User(BaseModel):
    id: int = None
    username: str
    email: str
    full_name: str
    is_active: bool = True

# Mock database
USERS: Dict[int, User] = {
    1: User(
        id=1,
        username="student1",
        email="student1@example.com",
        full_name="John Doe",
        is_active=True
    )
}

@router.post("/register", response_model=User)
async def register_user(user: User):
    """Register a new user"""
    if any(u.username == user.username for u in USERS.values()):
        raise HTTPException(status_code=400, detail="Username already taken")
    
    new_id = max(USERS.keys()) + 1 if USERS else 1
    user.id = new_id
    USERS[new_id] = user
    return user

@router.get("/me", response_model=User)
async def get_current_user(user_id: int = 1):
    """Get current user profile"""
    if user_id not in USERS:
        raise HTTPException(status_code=404, detail="User not found")
    return USERS[user_id]