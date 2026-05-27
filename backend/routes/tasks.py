"""
Tasks API endpoints
"""

from fastapi import APIRouter, HTTPException
from typing import List, Dict, Any
from pydantic import BaseModel
from enum import Enum

router = APIRouter()

class DifficultyLevel(str, Enum):
    EASY = "easy"
    MEDIUM = "medium"
    HARD = "hard"

class Task(BaseModel):
    id: int = None
    title: str
    description: str
    difficulty: DifficultyLevel
    points: int

TASKS: Dict[int, Task] = {
    1: Task(
        id=1,
        title="Hello World",
        description="Write a program that prints 'Hello, World!'",
        difficulty=DifficultyLevel.EASY,
        points=10
    ),
    2: Task(
        id=2,
        title="Simple Calculator",
        description="Create a function that adds two numbers",
        difficulty=DifficultyLevel.EASY,
        points=15
    ),
}

@router.get("/", response_model=List[Task])
async def get_all_tasks():
    """Get all tasks"""
    return list(TASKS.values())

@router.get("/difficulty/{difficulty}", response_model=List[Task])
async def get_tasks_by_difficulty(difficulty: DifficultyLevel):
    """Get tasks by difficulty level"""
    return [task for task in TASKS.values() if task.difficulty == difficulty]

@router.get("/{task_id}", response_model=Task)
async def get_task(task_id: int):
    """Get a specific task by ID"""
    if task_id not in TASKS:
        raise HTTPException(status_code=404, detail="Task not found")
    return TASKS[task_id]