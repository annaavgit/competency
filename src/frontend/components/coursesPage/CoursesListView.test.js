const listViewFactory = require('./CoursesListView');
const jss = require('jss').default;

function getViewModel() {
    return {
        "allCompetencies": [
            {
                "name": "Качество кода",
                "code": "codeQuality",
                "rating": 3,
                "ratingPercent": 100
            }
        ],
        "courses": [
            {
                "externalId": "154",
                "name": "Web-технологии",
                "description": "Курс посвящен разработке серверной части web-приложений, их архитектуре и протоколу HTTP. По итогам курса вы научитесь: разрабатывать приложения на языке python, использовать MVC фреймворки, изучите верстку HTML страниц, погрузитесь в тематику web разработки и сможете выбирать конкретные технологии.",
                "url": "https://api.test/api/course/go/web-tehnologii?userId=e658fc48-c1ae-480e-b87e-a391706de722&sessionId=a20bf398-3e88-4084-a4e0-8f2f4631e173",
                "modeOfStudy": "selfStudy",
                "courseForm": "video",
                "schedule": "free",
                "certificate": true,
                "tasksType": "autoCheck",
                "lengthDays": 2,
                "price": 0,
                "skills": [
                    {
                        "id": "71",
                        "text": "Клиент-серверная архитектура",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "72",
                        "text": "Основные понятия веб",
                        "description": "HTML, CSS, DOM, Ajax",
                        "level": "knowledge"
                    },
                    {
                        "id": "74",
                        "text": "Способы хранения и передачи состояния",
                        "description": "Cookie, сессия",
                        "level": "knowledge"
                    },
                    {
                        "id": "75",
                        "text": "Основы HTML5",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "76",
                        "text": "Основы CSS3",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "80",
                        "text": "Протокол HTTP",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "381",
                        "text": "Разработка с веб-фреймворками",
                        "description": "Django, Flask, Pyramid",
                        "level": "knowledge"
                    },
                    {
                        "id": "222",
                        "text": "Веб-сервер",
                        "description": "Apache, Nginx, lighthttpd",
                        "level": "knowledge"
                    },
                    {
                        "id": "223",
                        "text": "СУБД",
                        "description": "MySQL, PostgreSQL",
                        "level": "knowledge"
                    }
                ],
                "requirements": [
                    {
                        "id": "351",
                        "text": "Встроенные типы переменных",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "354",
                        "text": "Базовый синтаксис языка",
                        "description": "И инструкции управления потоком выполнения",
                        "level": "knowledge"
                    },
                    {
                        "id": "355",
                        "text": "Синтаксис функций",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "365",
                        "text": "Классы, создание и использование",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "356",
                        "text": "Области видимости переменных",
                        "description": "Правило LEGB",
                        "level": "knowledge"
                    },
                    {
                        "id": "207",
                        "text": "Работа с Linux на уровне пользователя",
                        "description": "",
                        "level": "ability"
                    },
                    {
                        "id": "210",
                        "text": "Консоль",
                        "description": "",
                        "level": "skill"
                    },
                    {
                        "id": "211",
                        "text": "Консольные команды",
                        "description": "",
                        "level": "skill"
                    },
                    {
                        "id": "195",
                        "text": "Основы систем контроля версий",
                        "description": "Фиксация изменений, ветвления, отправка и получение данных",
                        "level": "skill"
                    },
                    {
                        "id": "392",
                        "text": "Git",
                        "description": "",
                        "level": "knowledge"
                    }
                ],
                "eduProvider": {
                    "code": "stepik",
                    "name": "Stepik",
                    "url": "http://welcome.stepik.org/ru"
                },
                "skillCompetencies": [
                    {
                        "name": "Основы веб-программирования",
                        "code": "baseWebDevelopment",
                        "rating": 0.32,
                        "ratingPercent": 11
                    },
                    {
                        "name": "Технологии бэкенда (Python)",
                        "code": "python",
                        "rating": 0.03,
                        "ratingPercent": 1
                    },
                    {
                        "name": "Операционная система",
                        "code": "operatingSystems",
                        "rating": 0.09,
                        "ratingPercent": 3
                    }
                ],
                "requirementCompetencies": [
                    {
                        "name": "Технологии бэкенда (Python)",
                        "code": "python",
                        "rating": 0.13,
                        "ratingPercent": 4
                    },
                    {
                        "name": "Операционная система",
                        "code": "operatingSystems",
                        "rating": 0.3,
                        "ratingPercent": 10
                    }
                ]
            },
            {
                "externalId": "67",
                "name": "Программирование на Python",
                "description": "Курс посвящен базовым понятиям и элементам языка программирования Python (операторы, числовые и строковые переменные, списки, условия и циклы). Курс является вводным и наиболее подойдет слушателям, не имеющим опыта написания программ ни на одном из языков программирования.",
                "url": "https://stepik.org/course/67?userId=e658fc48-c1ae-480e-b87e-a391706de722&sessionId=a20bf398-3e88-4084-a4e0-8f2f4631e173",
                "modeOfStudy": "selfStudy",
                "courseForm": "video",
                "schedule": "free",
                "certificate": true,
                "tasksType": "autoCheck",
                "lengthDays": 1,
                "price": 0,
                "skills": [
                    {
                        "id": "354",
                        "text": "Базовый синтаксис языка",
                        "description": "И инструкции управления потоком выполнения",
                        "level": "knowledge"
                    },
                    {
                        "id": "351",
                        "text": "Встроенные типы переменных",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "380",
                        "text": "Различные варианты python",
                        "description": "cpython, ironpython, jpython, Stackless Python",
                        "level": "knowledge"
                    },
                    {
                        "id": "388",
                        "text": "Специализированные библиотеки",
                        "description": "NumPy, SciPy, SQLAlchemy",
                        "level": "knowledge"
                    },
                    {
                        "id": "355",
                        "text": "Синтаксис функций",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "356",
                        "text": "Области видимости переменных",
                        "description": "Правило LEGB",
                        "level": "knowledge"
                    },
                    {
                        "id": "364",
                        "text": "Работа с модулями",
                        "description": "Повторная загрузка, относительный импорт, сокрытие данных",
                        "level": "knowledge"
                    }
                ],
                "requirements": [],
                "eduProvider": {
                    "code": "stepik",
                    "name": "Stepik",
                    "url": "http://welcome.stepik.org/ru"
                },
                "skillCompetencies": [
                    {
                        "name": "Технологии бэкенда (Python)",
                        "code": "python",
                        "rating": 0.18,
                        "ratingPercent": 6
                    }
                ],
                "requirementCompetencies": []
            },
            {
                "externalId": "3203",
                "name": "Погружение в СУБД. Сезон 2017.",
                "description": "Курс для тех, кто уже имеет некоторый опыт проектирования баз данных и разработки приложений и хочет расширить свои знания.",
                "url": "https://stepik.org/course/3203?userId=e658fc48-c1ae-480e-b87e-a391706de722&sessionId=a20bf398-3e88-4084-a4e0-8f2f4631e173",
                "modeOfStudy": "online",
                "courseForm": "video",
                "schedule": "free",
                "certificate": true,
                "tasksType": "autoCheck",
                "lengthDays": 2,
                "price": 0,
                "skills": [
                    {
                        "id": "90",
                        "text": "Работа с клиентами базы данных",
                        "description": "",
                        "level": "skill"
                    },
                    {
                        "id": "92",
                        "text": "Расширенные SQL-запросы (DML)",
                        "description": "JOIN, ORDER BY, GROUP BY, HAVING, подзапросы",
                        "level": "knowledge"
                    },
                    {
                        "id": "94",
                        "text": "Использование функций SQL",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "95",
                        "text": "Аггрегатные функции SQL",
                        "description": "MAX, MIN, SUM, AVG, GROUP_CONCAT",
                        "level": "knowledge"
                    },
                    {
                        "id": "96",
                        "text": "Виды",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "97",
                        "text": "Индексы",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "98",
                        "text": "Транзакции",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "99",
                        "text": "Атомарные операции",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "103",
                        "text": "Курсор",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "106",
                        "text": "Хранилища ключ-значение",
                        "description": "MemcacheDB, Beanstalk, Redis",
                        "level": "knowledge"
                    },
                    {
                        "id": "107",
                        "text": "Нормальные формы",
                        "description": "6 штук + доменно-ключевая + Бойса-Кодда",
                        "level": "knowledge"
                    },
                    {
                        "id": "109",
                        "text": "ACID",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "105",
                        "text": "NoSQL",
                        "description": "",
                        "level": "knowledge"
                    }
                ],
                "requirements": [
                    {
                        "id": "90",
                        "text": "Работа с клиентами базы данных",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "91",
                        "text": "Базовые SQL-запросы (DML)",
                        "description": "SELECT, INSERT, UPDATE, DELETE",
                        "level": "knowledge"
                    },
                    {
                        "id": "93",
                        "text": "Запросы на изменение схемы (DDL)",
                        "description": "",
                        "level": "knowledge"
                    },
                    {
                        "id": "354",
                        "text": "Базовый синтаксис языка",
                        "description": "И инструкции управления потоком выполнения",
                        "level": "knowledge"
                    }
                ],
                "eduProvider": {
                    "code": "netology",
                    "name": "Нетология",
                    "url": "https://netology.ru/"
                },
                "skillCompetencies": [
                    {
                        "name": "Базы данных",
                        "code": "databases",
                        "rating": 0.52,
                        "ratingPercent": 17
                    }
                ],
                "requirementCompetencies": [
                    {
                        "name": "Базы данных",
                        "code": "databases",
                        "rating": 0.11,
                        "ratingPercent": 4
                    },
                    {
                        "name": "Технологии бэкенда (Python)",
                        "code": "python",
                        "rating": 0.03,
                        "ratingPercent": 1
                    }
                ]
            }
        ],
        "professions": [
            {
                "code": "webDeveloper",
                "name": "Веб-разработчик (PHP)",
                "competencyCount": 24,
                "courseCount": 9,
                "timeToFill": 36
            },
            {
                "code": "tester",
                "name": "Тестировщик (Python)",
                "competencyCount": 7,
                "courseCount": 7,
                "timeToFill": 11
            },
            {
                "code": "webProjectManager",
                "name": "Менеджер web-проектов",
                "competencyCount": 24,
                "courseCount": 2,
                "timeToFill": 36
            }
        ],
        "fieldNames": {
            "userSkills": "Навыки",
            "price": "Стоимость",
            "modeOfStudy": "Форма обучения",
            "courseForm": "Вид обучения",
            "schedule": "Время проведения занятий",
            "certificate": "Выдается сертификат",
            "tasksType": "Задания",
            "length": "Длительность",
            "eduProvider": "Платформа"
        },
        "fieldVariants": {
            "userSkills": {
                "baseWebDevelopment": "Основы веб-программирования",
                "databases": "Базы данных",
                "python": "Технологии бэкенда (Python)",
                "operatingSystems": "Операционная система",
                "probabiltyBasics": "Основы теории вероятности",
                "handTesting": "Ручное тестирование",
                "testAutomation": "Автоматизация тестирования"
            },
            "price": {
                "free": "Только бесплатные"
            },
            "modeOfStudy": {
                "inPerson": "Очная",
                "longDistance": "Дистанционная",
                "online": "Онлайн",
                "inPersonOnline": "Очная и онлайн",
                "selfStudy": "Самостоятельное обучение"
            },
            "courseForm": {
                "video": "Видеокурс",
                "text": "Текстовый курс",
                "interactive": "Интерактивный курс",
                "crashCourse": "Интенсив",
                "training": "Тренинг"
            },
            "schedule": {
                "free": "Свободный график",
                "day": "Дневные занятия",
                "evening": "Вечерние занятия",
                "weekends": "По выходным"
            },
            "tasksType": {
                "noTasks": "Без заданий",
                "teacherCheck": "Проверка преподавателем",
                "autoCheck": "Автоматизированная проверка",
                "selfCheck": "Самостоятельная проверка"
            },
            "length": {
                "short": "Краткосрочные",
                "medium": "Средней длительности",
                "long": "Долгосрочные"
            },
            "eduProvider": {
                "stepik": "Stepik",
                "netology": "Нетология",
                "otus": "Otus",
                "hexlet": "Hexlet",
                "coursera": "Coursera",
                "udemy": "Udemy",
                "geekbrains": "GeekBrains",
                "moscoding": "Moscow Coding School",
                "intuit": "Intuit",
                "htmlacademy": "HtmlAcademy"
            }
        },
        "levelTexts": {
            "none": "Отсутствует",
            "knowledge": "Информация",
            "skill": "Практическое умение",
            "ability": "Автоматический навык"
        }
    };
}

test('CoursesView.createDOM no courses', function () {
    let coursesView = listViewFactory(jss);
    let viewDOM = coursesView.createDOM({});
    expect(viewDOM).toBeInstanceOf(HTMLElement);
});

test('CoursesView.createDOM with courses', function () {
    let coursesView = listViewFactory(jss);
    let viewModel = getViewModel();

    let viewDOM = coursesView.createDOM(viewModel);
    let links = coursesView.getCollapseLinks(viewDOM);

    expect(links).toHaveLength(12);
    links.forEach(function (link) {
        expect(link).toBeInstanceOf(HTMLElement);
    });
});
