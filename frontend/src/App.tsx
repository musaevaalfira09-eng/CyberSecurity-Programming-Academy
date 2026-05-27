import React, { useState, useEffect } from 'react';
import './App.css';

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration_weeks: number;
  topics: string[];
}

const API_URL = 'http://localhost:8000/api/v1';

function App() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('courses');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/courses/`);
      if (!response.ok) throw new Error('Failed to fetch courses');
      const data = await response.json();
      setCourses(data);
      setError('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>🛡️ CyberSecurity & Programming Academy</h1>
          <p>Learn from Basics to Advanced</p>
        </div>
      </header>

      <nav className="navbar">
        <div className="container">
          <button 
            className={`nav-btn ${activeTab === 'courses' ? 'active' : ''}`}
            onClick={() => setActiveTab('courses')}
          >
            📚 Courses
          </button>
          <button 
            className={`nav-btn ${activeTab === 'tasks' ? 'active' : ''}`}
            onClick={() => setActiveTab('tasks')}
          >
            🎯 Tasks
          </button>
          <button 
            className={`nav-btn ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            🚀 Projects
          </button>
        </div>
      </nav>

      <main className="container">
        {activeTab === 'courses' && (
          <section className="courses-section">
            <h2>Available Courses</h2>
            {loading && <p className="loading">Loading courses...</p>}
            {error && <p className="error">Error: {error}</p>}
            {!loading && courses.length === 0 && <p>No courses available</p>}
            
            <div className="courses-grid">
              {courses.map(course => (
                <div key={course.id} className="course-card">
                  <div className="course-header">
                    <h3>{course.title}</h3>
                    <span className={`level ${course.level}`}>{course.level}</span>
                  </div>
                  <p className="description">{course.description}</p>
                  <div className="course-meta">
                    <span>⏱️ {course.duration_weeks} weeks</span>
                  </div>
                  <div className="topics">
                    {course.topics.map((topic, idx) => (
                      <span key={idx} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                  <button className="btn btn-primary">Start Course</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'tasks' && (
          <section className="tasks-section">
            <h2>Practice Tasks</h2>
            <div className="tasks-grid">
              <div className="task-card">
                <h3>🎯 Easy Tasks</h3>
                <p>Start with basic programming challenges</p>
                <button className="btn btn-primary">View Tasks</button>
              </div>
              <div className="task-card">
                <h3>🎯 Medium Tasks</h3>
                <p>Intermediate level challenges</p>
                <button className="btn btn-primary">View Tasks</button>
              </div>
              <div className="task-card">
                <h3>🎯 Hard Tasks</h3>
                <p>Advanced security challenges</p>
                <button className="btn btn-primary">View Tasks</button>
              </div>
            </div>
          </section>
        )}

        {activeTab === 'projects' && (
          <section className="projects-section">
            <h2>Capstone Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <h3>🔍 Port Scanner</h3>
                <p>Build a network port scanning tool</p>
                <button className="btn btn-primary">Start Project</button>
              </div>
              <div className="project-card">
                <h3>🔐 Encryption Tool</h3>
                <p>Create encryption/decryption utilities</p>
                <button className="btn btn-primary">Start Project</button>
              </div>
              <div className="project-card">
                <h3>🌐 Web Security Scanner</h3>
                <p>Vulnerability detection tool</p>
                <button className="btn btn-primary">Start Project</button>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 CyberSecurity & Programming Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;