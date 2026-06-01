// Данные курсов
const courses = [
    {
        id: 1,
        title: 'Основы кибербезопасности',
        level: 'Начинающий',
        description: 'Изучите базовые концепции защиты информации и сетевой безопасности.',
        duration: '4 недели',
        lessons: 12,
        students: 245
    },
    {
        id: 2,
        title: 'Защита систем видеонаблюдения',
        level: 'Средний',
        description: 'Узнайте о защите камер, видеорегистраторов и облачных хранилищ видео.',
        duration: '5 недель',
        lessons: 15,
        students: 189
    },
    {
        id: 3,
        title: 'Этичный хакинг',
        level: 'Продвинутый',
        description: 'Освойте методы тестирования на проникновение и уязвимостей систем.',
        duration: '6 недель',
        lessons: 18,
        students: 156
    },
    {
        id: 4,
        title: 'Криптография и шифрование',
        level: 'Средний',
        description: 'Разберитесь в алгоритмах шифрования и защиты данных.',
        duration: '4 недели',
        lessons: 10,
        students: 178
    },
    {
        id: 5,
        title: 'Аудит безопасности сетей',
        level: 'Продвинутый',
        description: 'Научитесь проводить комплексную проверку сетевой инфраструктуры.',
        duration: '5 недель',
        lessons: 16,
        students: 134
    },
    {
        id: 6,
        title: 'Безопасность облачных систем',
        level: 'Средний',
        description: 'Изучите защиту данных в облачных сервисах и платформах.',
        duration: '4 недели',
        lessons: 11,
        students: 201
    }
];

// Данные задач
const tasks = [
    {
        id: 1,
        title: 'Настройка брандмауэра для видеокамер',
        difficulty: 'easy',
        description: 'Настроить правила брандмауэра для безопасной работы системы видеонаблюдения.',
        points: 50,
        course: 'Защита систем видеонаблюдения'
    },
    {
        id: 2,
        title: 'Создание безопасного пароля для видеорегистратора',
        difficulty: 'easy',
        description: 'Разработать и установить стойкий пароль с требуемыми параметрами безопасности.',
        points: 30,
        course: 'Основы кибербезопасности'
    },
    {
        id: 3,
        title: 'Анализ трафика сети видеонаблюдения',
        difficulty: 'medium',
        description: 'Использовать Wireshark для анализа трафика камер видеонаблюдения.',
        points: 100,
        course: 'Защита систем видеонаблюдения'
    },
    {
        id: 4,
        title: 'Обнаружение попыток несанкционированного доступа',
        difficulty: 'medium',
        description: 'Определить и заблокировать попытки несанкционированного доступа к системе.',
        points: 80,
        course: 'Аудит безопасности сетей'
    },
    {
        id: 5,
        title: 'Тестирование уязвимостей на проникновение',
        difficulty: 'hard',
        description: 'Провести полный тест безопасности системы видеонаблюдения на наличие уязвимостей.',
        points: 150,
        course: 'Этичный хакинг'
    },
    {
        id: 6,
        title: 'Шифрование видеопотока',
        difficulty: 'hard',
        description: 'Реализовать шифрование видеопередачи с использованием HTTPS и TLS.',
        points: 200,
        course: 'Криптография и шифрование'
    },
    {
        id: 7,
        title: 'Настройка двухфакторной аутентификации',
        difficulty: 'medium',
        description: 'Внедрить 2FA для доступа к системе видеонаблюдения.',
        points: 75,
        course: 'Основы кибербезопасности'
    },
    {
        id: 8,
        title: 'Аудит облачного хранилища видео',
        difficulty: 'hard',
        description: 'Проверить безопасность облачного хранилища видеоархива.',
        points: 180,
        course: 'Безопасность облачных систем'
    }
];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    renderCourses();
    renderTasks('all');
    updateProgress();
});

// Переключение между секциями
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Отображение курсов
function renderCourses() {
    const coursesGrid = document.getElementById('coursesGrid');
    coursesGrid.innerHTML = '';

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-header">
                <h3>${course.title}</h3>
                <span class="course-level">${course.level}</span>
            </div>
            <div class="course-body">
                <p>${course.description}</p>
                <div class="course-stats">
                    <div class="course-stat">
                        <div class="course-stat-number">${course.lessons}</div>
                        <div class="course-stat-label">Уроков</div>
                    </div>
                    <div class="course-stat">
                        <div class="course-stat-number">${course.duration}</div>
                        <div class="course-stat-label">Длительность</div>
                    </div>
                    <div class="course-stat">
                        <div class="course-stat-number">${course.students}</div>
                        <div class="course-stat-label">Студентов</div>
                    </div>
                </div>
                <div class="course-footer">
                    <button class="btn btn-primary" onclick="enrollCourse(${course.id})">Записаться</button>
                    <button class="btn btn-secondary" onclick="viewCourseDetails(${course.id})">Подробнее</button>
                </div>
            </div>
        `;
        coursesGrid.appendChild(courseCard);
    });
}

// Отображение задач с фильтром
function renderTasks(difficulty = 'all') {
    const tasksList = document.getElementById('tasksList');
    tasksList.innerHTML = '';

    let filteredTasks = tasks;
    if (difficulty !== 'all') {
        filteredTasks = tasks.filter(task => task.difficulty === difficulty);
    }

    if (filteredTasks.length === 0) {
        tasksList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #94a3b8;">Задачи не найдены</p>';
        return;
    }

    filteredTasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';
        
        const difficultyClass = `difficulty-${task.difficulty}`;
        const difficultyLabel = {
            'easy': 'Легко',
            'medium': 'Средне',
            'hard': 'Сложно'
        }[task.difficulty];

        taskCard.innerHTML = `
            <div class="task-header">
                <div class="task-title">${task.title}</div>
                <span class="task-difficulty ${difficultyClass}">${difficultyLabel}</span>
            </div>
            <p class="task-description">${task.description}</p>
            <div style="margin-bottom: 1rem; padding: 0.75rem; background: #f1f5f9; border-radius: 0.5rem;">
                <small style="color: #64748b;"><strong>Курс:</strong> ${task.course}</small>
            </div>
            <div class="task-footer">
                <span class="task-score">💰 ${task.points} баллов</span>
                <button class="btn btn-primary" onclick="completeTask(${task.id})">Начать решать</button>
            </div>
        `;
        tasksList.appendChild(taskCard);
    });
}

// Фильтр задач
function filterTasks(difficulty) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderTasks(difficulty);
}

// Обновление прогресса
function updateProgress() {
    const completedCourses = document.getElementById('completedCourses');
    const completedTasks = document.getElementById('completedTasks');
    
    if (completedCourses) {
        completedCourses.textContent = '4/10 курсов';
    }
    if (completedTasks) {
        completedTasks.textContent = '12/20 задач';
    }
}

// Функции действий
function enrollCourse(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        alert(`✅ Вы успешно записались на курс "${course.title}"!\n\nВы получите письмо с подтверждением на вашу почту.`);
    }
}

function viewCourseDetails(courseId) {
    const course = courses.find(c => c.id === courseId);
    if (course) {
        alert(`📚 Курс: ${course.title}\n\nУровень: ${course.level}\nДлительность: ${course.duration}\nУроков: ${course.lessons}\nСтудентов: ${course.students}\n\n${course.description}`);
    }
}

function completeTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        alert(`🚀 Задача: ${task.title}\n\nСложность: ${task.difficulty}\nБаллы: ${task.points}\n\n${task.description}\n\nРедактор кода открывается в отдельной вкладке...`);
    }
}

function startCourse(courseId) {
    showSection('courses');
    enrollCourse(courseId);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href').slice(1);
        showSection(target);
    });
});