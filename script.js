// Данные курсов
const courses = [
    {
        id: 1,
        name: "Python для начинающих",
        level: "Начинающий",
        description: "Научитесь основам программирования на Python",
        duration: "4 недели",
        lessons: 12,
        image: "🐍"
    },
    {
        id: 2,
        name: "JavaScript и веб-разработка",
        level: "Средний",
        description: "Создавайте интерактивные веб-приложения",
        duration: "6 недель",
        lessons: 18,
        image: "⚡"
    },
    {
        id: 3,
        name: "HTML и CSS основы",
        level: "Начинающий",
        description: "Основы создания веб-страниц",
        duration: "2 недели",
        lessons: 8,
        image: "🎨"
    },
    {
        id: 4,
        name: "Введение в кибербезопасность",
        level: "Средний",
        description: "Защита данных и информационная безопасность",
        duration: "8 недель",
        lessons: 20,
        image: "🔐"
    },
    {
        id: 5,
        name: "SQL и базы данных",
        level: "Средний",
        description: "Работа с реляционными базами данных",
        duration: "5 недель",
        lessons: 15,
        image: "🗄️"
    },
    {
        id: 6,
        name: "React.js продвинутый",
        level: "Продвинутый",
        description: "Создание современных веб-приложений",
        duration: "7 недель",
        lessons: 25,
        image: "⚛️"
    },
    {
        id: 7,
        name: "Docker и контейнеризация",
        level: "Продвинутый",
        description: "Развёртывание приложений в контейнерах",
        duration: "4 недели",
        lessons: 12,
        image: "🐳"
    },
    {
        id: 8,
        name: "Этичный хакинг",
        level: "Продвинутый",
        description: "Тестирование безопасности и пентесты",
        duration: "10 недель",
        lessons: 30,
        image: "🎯"
    },
    {
        id: 9,
        name: "Node.js бэкэнд-разработка",
        level: "Средний",
        description: "Создание серверной части приложений",
        duration: "6 недель",
        lessons: 18,
        image: "🚀"
    },
    {
        id: 10,
        name: "AWS облачные технологии",
        level: "Продвинутый",
        description: "Развёртывание в облаке AWS",
        duration: "8 недель",
        lessons: 24,
        image: "☁️"
    }
];

// Данные задач
const tasks = [
    {
        id: 1,
        title: "Вычисление факториала",
        difficulty: "easy",
        course: "Python для начинающих",
        description: "Напишите функцию для вычисления факториала числа",
        points: 10
    },
    {
        id: 2,
        title: "Манипуляция строками",
        difficulty: "easy",
        course: "Python для начинающих",
        description: "Работа со строками и основные операции",
        points: 15
    },
    {
        id: 3,
        title: "DOM и события в JavaScript",
        difficulty: "medium",
        course: "JavaScript и веб-разработка",
        description: "Манипуляция DOM элементами и обработка событий",
        points: 20
    },
    {
        id: 4,
        title: "Создание макета в CSS",
        difficulty: "easy",
        course: "HTML и CSS основы",
        description: "Верстка адаптивного макета с использованием Flexbox",
        points: 15
    },
    {
        id: 5,
        title: "SQL запросы JOIN",
        difficulty: "medium",
        course: "SQL и базы данных",
        description: "Выполнение JOIN запросов для связанных таблиц",
        points: 25
    },
    {
        id: 6,
        title: "Асинхронное программирование",
        difficulty: "medium",
        course: "JavaScript и веб-разработка",
        description: "Работа с Promise и async/await",
        points: 30
    },
    {
        id: 7,
        title: "Компоненты React",
        difficulty: "hard",
        course: "React.js продвинутый",
        description: "Создание переиспользуемых компонентов React",
        points: 40
    },
    {
        id: 8,
        title: "Docker Dockerfile",
        difficulty: "hard",
        course: "Docker и контейнеризация",
        description: "Создание и оптимизация Docker образов",
        points: 45
    },
    {
        id: 9,
        title: "SQL инъекции",
        difficulty: "hard",
        course: "Введение в кибербезопасность",
        description: "Понимание и предотвращение SQL инъекций",
        points: 50
    },
    {
        id: 10,
        title: "REST API на Node.js",
        difficulty: "medium",
        course: "Node.js бэкэнд-разработка",
        description: "Создание RESTful API с Express.js",
        points: 35
    },
    {
        id: 11,
        title: "Списки и циклы в Python",
        difficulty: "easy",
        course: "Python для начинающих",
        description: "Работа со списками и итерация данных",
        points: 12
    },
    {
        id: 12,
        title: "Скрапинг веб-сайтов",
        difficulty: "medium",
        course: "Python для начинающих",
        description: "Парсинг HTML и извлечение данных",
        points: 28
    },
    {
        id: 13,
        title: "AWS Lambda функции",
        difficulty: "hard",
        course: "AWS облачные технологии",
        description: "Развёртывание бессерверных функций",
        points: 48
    },
    {
        id: 14,
        title: "HTTPS и SSL сертификаты",
        difficulty: "medium",
        course: "Введение в кибербезопасность",
        description: "Безопасная передача данных через HTTPS",
        points: 32
    },
    {
        id: 15,
        title: "Шифрование данных",
        difficulty: "hard",
        course: "Введение в кибербезопасность",
        description: "Изучение алгоритмов шифрования",
        points: 55
    }
];

let currentFilter = 'all';

// Показать секцию
function showSection(sectionId) {
    // Скрыть все секции
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Показать выбранную секцию
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    // Загрузить контент
    if (sectionId === 'courses') {
        renderCourses();
    } else if (sectionId === 'tasks') {
        renderTasks();
    }
}

// Отрендерить курсы
function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = courses.map(course => `
        <div class="course-card">
            <div class="course-header">${course.image} ${course.name}</div>
            <div class="course-body">
                <span class="course-level">${course.level}</span>
                <p>${course.description}</p>
                <div class="course-stats">
                    <span>⏱️ ${course.duration}</span>
                    <span>📚 ${course.lessons} уроков</span>
                </div>
                <button class="btn btn-primary" onclick="enrollCourse(${course.id})">Записаться</button>
            </div>
        </div>
    `).join('');
}

// Отрендерить задачи
function renderTasks() {
    const tasksList = document.getElementById('tasksList');
    
    let filteredTasks = tasks;
    if (currentFilter !== 'all') {
        filteredTasks = tasks.filter(task => task.difficulty === currentFilter);
    }
    
    if (filteredTasks.length === 0) {
        tasksList.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Задачи не найдены</p>';
        return;
    }
    
    tasksList.innerHTML = filteredTasks.map(task => `
        <div class="task-card ${task.difficulty}">
            <div class="task-header">
                <h3>${task.title}</h3>
                <span class="task-difficulty ${task.difficulty}">
                    ${getDifficultyLabel(task.difficulty)}
                </span>
            </div>
            <p class="task-description">${task.description}</p>
            <div class="task-footer">
                <span style="color: #666;">Курс: ${task.course}</span>
                <span class="task-points">${task.points} очков</span>
            </div>
            <button class="btn btn-primary" style="margin-top: 1rem;" onclick="solveTask(${task.id})">Решить задачу</button>
        </div>
    `).join('');
}

// Получить название сложности
function getDifficultyLabel(difficulty) {
    const labels = {
        'easy': 'Легко',
        'medium': 'Средне',
        'hard': 'Сложно'
    };
    return labels[difficulty] || difficulty;
}

// Фильтровать задачи
function filterTasks(difficulty) {
    currentFilter = difficulty;
    
    // Обновить активную кнопку
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    renderTasks();
}

// Записаться на курс
function enrollCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        alert(`✅ Вы успешно записались на курс "${course.name}"!`);
    }
}

// Решить задачу
function solveTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        alert(`📝 Вы открыли задачу: "${task.title}"\n\nЭто ${getDifficultyLabel(task.difficulty)} задача на ${task.points} очков`);
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});