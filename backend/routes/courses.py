"""
Courses API endpoints
"""

from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from pydantic import BaseModel

router = APIRouter()

class Course(BaseModel):
    id: int = None
    title: str
    description: str
    level: str
    duration_weeks: int
    topics: List[str]

# Mock data
COURSES: Dict[int, Course] = {
    1: Course(
        id=1,
        title="Python Basics",
        description="Learn Python programming from scratch",
        level="beginner",
        duration_weeks=4,
        topics=["Variables", "Data Types", "Control Flow", "Functions"]
    ),
    2: Course(
        id=2,
        title="Web Security Fundamentals",
        description="Introduction to web application security",
        level="beginner",
        duration_weeks=6,
        topics=["OWASP Top 10", "SQL Injection", "XSS", "CSRF"]
    ),
}

@router.get("/", response_model=List[Course])
async def get_all_courses():
    """Get all available courses"""
    return list(COURSES.values())

@router.get("/{course_id}", response_model=Course)
async def get_course(course_id: int):
    """Get a specific course by ID"""
    if course_id not in COURSES:
        raise HTTPException(status_code=404, detail="Course not found")
    return COURSES[course_id]