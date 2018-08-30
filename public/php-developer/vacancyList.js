function getVacanciesList() {
    return [
        {
            id: 1,
            title: 'Backend-разработчик',
            company: 'CarPrice',
            description: 'Мы ищем сильного Backend-разработчика в команду автомобильного аукциона. Команда отвечает за разработку и интеграцию аукционной платформы с внешними системами дилеров.\n' +
                '\n' +
                'С чем придется работать:\n' +
                '\n' +
                'PHP – мы используем laravel, однако местами есть остатки битрикса;\n' +
                'Go – некоторые микросервисы мы пишем на Go (go-kit);\n' +
                'ReactJS – у нас есть фронтендеры, но принципы SPA приложений понимать надо;\n' +
                'MySQL, Redis, Elasticsearch;\n' +
                'Rabbitmq;\n' +
                'Docker;\n' +
                'ELK, Grafana, Prometheus, Jaeger;\n' +
                'Bitbucket;\n' +
                'Jira.\n' +
                'Что мы ждем:\n' +
                '\n' +
                'Опыт в нагруженных проектах, микросервисных архитектурах;\n' +
                'Знания тонкостей и нюансов mysql, php-fpm, docker;\n' +
                'Широкий кругозор по технологиям и архитектурам;\n' +
                'Ответственность за полный цикл развития продукта;\n' +
                'Желание не просто писать код, а влиять на развитие продуктов;\n' +
                'Бодрость и чувство юмора.\n' +
                'Будет плюсом:\n' +
                '\n' +
                'Умение и желание развиваться в Go;\n' +
                'Глубокие знания linux.\n' +
                'Что мы готовы предложить:\n' +
                '\n' +
                'График работы 5/2 с 10.00 до 19.00;\n' +
                'Оформление по ТК РФ ( "белая" заработная плата, 28 календарных дней отпуска, оплата больничного);\n' +
                'Уютный офис расположенный в 5 минутах от м. Дмитровская;\n' +
                'Конкурентная заработная плата;\n' +
                'Корпоративные мероприятия (футбольная команда Carprice, дни рождения сотрудников, сезонные мероприятия с выездом на природу);\n' +
                'В офисе без ограничений чай/кофе, есть офисный кафетерий со снеками и разнообразной едой и напитками;\n' +
                'Комнаты релакса и отдыха: игровая приставка PlayStation, киккер, кальян, настольный теннис и многое другое.',
            location: 'Москва',
            schedule: 'Полный рабочий день',
            fixedTime: true,
            testPeriod: false,
            laborCode: true,
            remote: false,
            testTask: false,
            learn: false,
            food: true,
            insurance: false,
            transport: false,
            mobile: false,
            sport: true,
            dressCode: false,
            salary: {
                from: 100000,
                to: 150000
            },
            skills: [
                {title: 'Laravel', level: 3, mandatory: true},
                {title: 'Golang', level: 1, mandatory: false},
                {title: 'ReactJS', level: 1, mandatory: true},
                {title: 'SQL (MySQL)', level: 3, mandatory: true},
                {title: 'Redis', level: 2, mandatory: true},
                {title: 'Elasticsearch', level: 2, mandatory: true},
                {title: 'RabbitMQ', level: 2, mandatory: true},
                {title: 'Docker', level: 3, mandatory: true},
                {title: 'ELK', level: 2, mandatory: true},
                {title: 'Grafana', level: 2, mandatory: true},
                {title: 'Prometheus', level: 2, mandatory: true},
                {title: 'Jaeger', level: 2, mandatory: true},
                {title: 'Git (Bitbucket)', level: 2, mandatory: true},
                {title: 'Jira', level: 2, mandatory: true},
                {title: 'Linux', level: 3, mandatory: false}
            ]
        },
        {
            id: 2,
            title: 'Web-разработчик',
            company: '101XP',
            description: 'Web-разработчик, компания 101XP (gameDev), в офис, Москва, Россия\n' +
                '\n' +
                'О компании:\n' +
                'Компания 101XP - независимый международный издатель онлайн-игр. Мы успешно развиваем собственную игровую платформу 101XP.com, на которой издаются игры на трех языках: русском, английском и польском. У нас вас ждут интересные задачи и работа с лучшими играми от крупнейших разработчиков, лидеров рынка приложений для социальных сетей, а так же крупными клиентскими и браузерными играми.\n' +
                'Офис в Москве расположен на с.Cтрогино/Щукинская.\n' +
                '\n' +
                'Требования:\n' +
                '* Иметь опыт проектирования и разработки проектов на Symfony/Laravel/OctoberCMS;\n' +
                '* Умение работать с REST API;\n' +
                '* Знание JS и jQuery;\n' +
                '* Умение сверстать страницу по готовому макету;\n' +
                '* Опыт работы с MySQL;\n' +
                '* Соблюдение code style;\n' +
                '* Знание MVC и ООП;\n' +
                '* Приветствуется знание Laravel.\n' +
                '\n' +
                'Будет плюсом:\n' +
                'Владение программным продуктом PHPStorm; Опыт работы с SASS, Gulp, Bower, NPM.\n' +
                '\n' +
                'Обязанности:\n' +
                '* Разработка и поддержка сайтов для отдельных игровых продуктов;\n' +
                '* Интеграция сайтов с нашей Игровой платформой 101XP;\n' +
                '* Иногда верстка шаблонов по макетам дизайна (минимальная).\n' +
                '\n' +
                'Зарплата:\n' +
                'От 70 000 до 170 000 (по результатам собеседования)\n',
            location: 'Москва',
            schedule: 'Полный рабочий день',
            fixedTime: true,
            testPeriod: false,
            laborCode: false,
            remote: false,
            testTask: false,
            learn: false,
            food: false,
            insurance: false,
            transport: false,
            mobile: false,
            sport: false,
            dressCode: false,
            salary: {
                from: 70000,
                to: 170000
            },
            skills: [
                {title: 'Symfony', level: 2, mandatory: true},
                {title: 'Laravel', level: 2, mandatory: true},
                {title: 'OctoberCMS', level: 2, mandatory: true},
                {title: 'REST/RESTful API', level: 1, mandatory: true},
                {title: 'JavaScript', level: 2, mandatory: true},
                {title: 'jQuery', level: 2, mandatory: true},
                {title: 'SQL (MySQL)', level: 2, mandatory: true},
                {title: 'Верстка страниц', level: 1, mandatory: true},
                {title: 'MVC', level: 1, mandatory: true},
                {title: 'ООП', level: 1, mandatory: true},
                {title: 'PHPStorm', level: 1, mandatory: false},
                {title: 'SASS', level: 1, mandatory: false},
                {title: 'Gulp', level: 1, mandatory: false},
                {title: 'Bower', level: 1, mandatory: false},
                {title: 'NPM', level: 1, mandatory: false}
            ]
        },
        {
            id: 3,
            title: 'Разработчик PHP',
            company: 'Юла (Mail.ru)',
            description: 'Требуются разработчики PHP в Офис (Москва)\n' +
                '\n' +
                'Название компании: Юла (Mail.ru)\n' +
                'Формат работы: Офис\n' +
                'ЗП: до 250 000 рублей.\n' +
                'Задачи:\n' +
                '• Разработка и проектирование бекенда для высоконагруженного проекта; \n' +
                '• Проработка архитектурных решений; \n' +
                '• Поддержка существующего кода.\n' +
                '\n' +
                'Требования: \n' +
                '• Опыт проектирования реляционных и NoSql БД; \n' +
                '• PHP 5.5 +; \n' +
                '• Знание php фреймворков (предпочтительно Symfony) и уместность их применения для конкретных задач; \n' +
                '• Опыт разработки фреймворков и шаблонизаторов; \n' +
                '• Быть готовым быстро разобраться в новой для себя технологии; \n' +
                '• Строго соблюдать сроки и не стесняться говорить о проблемах; \n' +
                '• Опыт Unit и функционального тестирования; \n' +
                '• Опыт работы с системами непрерывной интеграции. \n' +
                '• Опыт работы с GIT. \n',
            location: 'Москва',
            schedule: 'Полный рабочий день',
            fixedTime: false,
            testPeriod: false,
            laborCode: false,
            remote: false,
            testTask: false,
            learn: false,
            food: false,
            insurance: false,
            transport: false,
            mobile: false,
            sport: false,
            dressCode: false,
            salary: {
                from: false,
                to: 250000
            },
            skills: [
                {title: 'SQL', level: 3, mandatory: true},
                {title: 'NoSQL', level: 3, mandatory: true},
                {title: 'Проектирование Backend', level: 3, mandatory: true},
                {title: 'Выскоие нагрузки', level: 3, mandatory: true},
                {title: 'Проектирование архитектуры', level: 3, mandatory: true},
                {title: 'Поддержка кода', level: 3, mandatory: true},
                {title: 'PHP (PHP 5.5)', level: 3, mandatory: true},
                {title: 'Symfony', level: 3, mandatory: true},
                {title: 'Разработка фреймворков', level: 2, mandatory: true},
                {title: 'Разработка шаблонизаторов', level: 2, mandatory: true},
                {title: 'Unit-тестирование, PHPUnit', level: 2, mandatory: true},
                {title: 'Функциональное тестирование', level: 2, mandatory: true},
                {title: 'CI системы', level: 2, mandatory: true},
                {title: 'Git', level: 2, mandatory: true}
            ]
        },
        {
            id: 4,
            title: 'PHPDeveloper (backend) middle | senior',
            company: 'LIFE PAY',
            description: 'PHPDeveloper (backend) middle | senior в Москве, офис, полный день. \n' +
                '\n' +
                'О компании:\n' +
                '\n' +
                'LIFE PAY - проект в сфере финансовых технологий, где мы создаем продукты, которые помогают предпринимателям вести учет продаж, принимать к оплате карты и делать все это в соответствии с законодательством. Мы работаем для того, чтобы помочь начинающим и уже опытным предпринимателям начать, запустить и развить свое любимое дело не переживая об учете продаж и приеме платежей.\n' +
                '\n' +
                'О наших приоритетах:\n' +
                '\n' +
                '- разрабатываем и постоянно улучшаем наш сервис предпроцессинга платежей;\n' +
                '- развиваем и увеличиваем количество интеграций с банками и другими процессингами;\n' +
                '- разрабатываем API для наших клиентов и партнеров, а также для нас самих;\n' +
                '- обеспечиваем безопасность данных, которые хранятся на наших серверах;\n' +
                '- и многое другое :)\n' +
                '\n' +
                'О вакансии:\n' +
                '\n' +
                'Ищем в команду бэкенд разработчика для развития и поддержки продукта mPOS (мобильный эквайринг)\n' +
                'У нас есть работающий бэкенд-сервер с 20к+ пользователями “на борту” и нам нужен специалист, которому интересно участвовать в развитии продукта в сфере финансовых технологий. Из перспективных задач - интеграции с процессингами ведущих банков, улучшение текущего API, внедрение новых mPOS устройств, оптимизация и рефакторинг кода, а также поддержка текущих интеграций.\n' +
                '\n' +
                'Об условиях:\n' +
                '\n' +
                '- уровень заработной платы от 110 000 – 150 000 рублей \n' +
                '- Полный рабочий день, индивидуальный график;\n' +
                '- трудоустройство по ТК;\n' +
                '- интересные и непростые задачи;\n' +
                '- уютный офис в БЦ Омега-2 в двух шагах от м. Автозаводская.\n' +
                '\n' +
                'О требованиях:\n' +
                '\n' +
                '- практический опыт работы с PHP от 3-х лет;\n' +
                '- хорошее знание и понимание работы PHP + MySQL и PHP + PostgreSQL\n' +
                '- умение работать c git, ansible;\n' +
                '- понимание работы memcached, gearman, elasticsearch;\n' +
                '- знание протокола SOAP;\n' +
                '- английский на уровне чтения документации и ведения переписки;\n' +
                '\n' +
                'Будет плюсом:\n' +
                '- понимание работы алгоритмов шифрования: 3DES, RSA, AES\n' +
                '- знание методов ключевания терминалов, хранения ключей, их обмена между сервером и клиентом;\n' +
                '- знание или активное изучение Java, Kotlin;\n' +
                '- знание Yii.\n' +
                '\n' +
                'Ждем тебя!\n',
            location: '',
            schedule: 'Полный рабочий день',
            fixedTime: false,
            testPeriod: false,
            laborCode: true,
            remote: false,
            testTask: false,
            learn: false,
            food: false,
            insurance: false,
            transport: false,
            mobile: false,
            sport: false,
            dressCode: false,
            salary: {
                from: 110000,
                to: 150000
            },
            skills: [
                {title: 'PHP', level: 3, mandatory: true},
                {title: 'SQL (MySQL)', level: 2, mandatory: true},
                {title: 'SQL (PostgreSQL)', level: 2, mandatory: true},
                {title: 'Git', level: 2, mandatory: true},
                {title: 'Ansible', level: 2, mandatory: true},
                {title: 'NoSQL (Memcached)', level: 1, mandatory: true},
                {title: 'Gearman', level: 1, mandatory: true},
                {title: 'Elasticsearch', level: 1, mandatory: true},
                {title: 'SOAP', level: 1, mandatory: true},
                {title: 'Алгоритмы шифрования', level: 1, mandatory: false},
                {title: 'Java', level: 1, mandatory: false},
                {title: 'Kotlin', level: 1, mandatory: false},
                {title: 'Yii', level: 1, mandatory: false}
            ]
        },
        {
            id: 5,
            title: 'Junior developer PHP Yii2',
            company: 'Фотосклад.ру',
            description: 'Фотосклад.ру- федеральный e-commerce Санкт-Петербурга, крупнейший интернет-магазин.\n' +
                '❗️❗️❗️ Находимся в поисках : Junior developer PHP Yii2\n' +
                '\n' +
                '▪️ Твои задачи:\n' +
                'Разработка новых и поддержка существующих проектов на Yii2 + PostgreSQL;\n' +
                'Разработка новых модулей и сервисов интернет-магазина, смежных сайтов;\n' +
                'Участие в разработке уникальных backoffice-решений;\n' +
                'Интеграция информационных систем с внешними сервисами и службами;\n' +
                '\n' +
                '▪️ Ты наш идеальный кандидат если:\n' +
                'Отлично знаешь PHP 5.6, PHP7 будет плюсом;\n' +
                'Опыт с Yii2;\n' +
                'Понимаешь основы JavaScript (jQuery, ajax);\n' +
                'Работал в Linux;\n' +
                'Знаешь git;\n' +
                'Умение работать с SQL как через ORM, так и сложными SQL-запросами;\n' +
                '\n' +
                '▪️ Ты еще более идеален, если имеешь:\n' +
                'Опыт работы с noSQL Redis, MongoDb;\n' +
                'Опыт работы в Jira и продуктами Atlassian;\n' +
                '\n' +
                '▪️ Мы предлагаем:\n' +
                'Интересные задачи\n' +
                'Драйвовый коллектив единомышленников, современный технологический стек, отсутствие бюрократии, широкий простор для творчества и роста;\n' +
                'Щедрое вознаграждение за качественную работу;\n' +
                'Офис в центре Питера (м.выборгская);\n' +
                'Возможность самостоятельно выбрать технику для работы;\n' +
                'График 5/2. С секундомером не стоим. Главное - результат;\n' +
                'Возможности роста.\n' +
                '\n' +
                'Зарплатная вилка обсуждаема, от 90к до 150к 💸\n' +
                'За подробной инфой го в личку @anastaysha163',
            location: 'Санкт-Петербург',
            schedule: 'Полный рабочий день',
            fixedTime: true,
            testPeriod: false,
            laborCode: false,
            remote: false,
            testTask: false,
            learn: false,
            food: false,
            insurance: false,
            transport: false,
            mobile: false,
            sport: false,
            dressCode: false,
            salary: {
                from: 90000,
                to: 150000
            },
            skills: [
                {title: 'Yii (Yii2)', level: 1, mandatory: true},
                {title: 'SQL (PostgreSQL)', level: 1, mandatory: true},
                {title: 'PHP (PHP 5.6)', level: 2, mandatory: true},
                {title: 'PHP (PHP 7)', level: 1, mandatory: true},
                {title: 'JavaScript', level: 1, mandatory: true},
                {title: 'jQuery', level: 1, mandatory: true},
                {title: 'Linux', level: 1, mandatory: true},
                {title: 'Git', level: 1, mandatory: true},
                {title: 'Redis', level: 1, mandatory: false},
                {title: 'NoSQL (MongoDb)', level: 1, mandatory: false},
                {title: 'Jira', level: 1, mandatory: false}
            ]
        },
        {
            id: 6,
            title: 'Разработчик',
            company: '-',
            description: 'Коллеги, добрый день! Ищу разработчика в офис в Москве в стартап, телемедицина.\n' +
                '\n' +
                'Что хотелось бы увидеть:\n' +
                '- Опыт в разработке веб-сайтов с использованием PHP, MySQL, Javascript, jQuery, NodeJS, Socket.io от 2 лет;\n' +
                '- Опыт командной работы: Git, Jira;\n' +
                '- Знание Wordpress на уровне создания плагинов и виджетов;\n' +
                '- Опыт интеграции VoxImplant и работы с WebRTC будет большим плюсом.\n' +
                '\n' +
                'Что можем предложить:\n' +
                '- гибкий рабочий график (один день в неделю можно работать удаленно);\n' +
                '- минимум бюрократии;\n' +
                '- быстрорастущий рынок с большим потенциалом;\n' +
                '- интересная и ответственная работа с возможностью быстрого роста до тим-лида.\n' +
                '\n' +
                'По деньгам обсуждаемо и нормально. Резюме можно отправлять на nikita@list.ru или писать в личку @nikitavarenov',
            location: 'Москва',
            schedule: 'Полный рабочий день',
            fixedTime: false,
            testPeriod: false,
            laborCode: false,
            remote: true,
            testTask: false,
            learn: false,
            food: false,
            insurance: false,
            transport: false,
            mobile: false,
            sport: false,
            dressCode: false,
            salary: {
                from: false,
                to: false
            },
            skills: [
                {title: 'PHP', level: 2, mandatory: true},
                {title: 'SQL (MySQL)', level: 2, mandatory: true},
                {title: 'JavaScript', level: 2, mandatory: true},
                {title: 'jQuery', level: 2, mandatory: true},
                {title: 'Node.js', level: 2, mandatory: true},
                {title: 'WebSockets', level: 2, mandatory: true},
                {title: 'Git', level: 2, mandatory: true},
                {title: 'Jira', level: 2, mandatory: true},
                {title: 'Wordpress', level: 2, mandatory: true},
                {title: 'VoxImplant', level: 2, mandatory: false},
                {title: 'WebRTC', level: 2, mandatory: false},
            ]
        },
        {
            id: 7,
            title: 'PHP Developer',
            company: 'RuBrain',
            description: 'PHP Developer в RuBrain.com\n' +
                'Уровень дохода - до 150 000 рублей.\n' +
                'Удаленная работа на полный день.\n' +
                '\n' +
                'Всем привет. Мы ищем PHP Developer на один из наших клиентских проектов для поддержки и разработки приложения. \n' +
                'Стек: PHP 5, Yii2, PostgreSQL, Docker, HTML, JS, Jquery, CSS. Важнее - PHP на Yii. Если фронта нет - не страшно.\n' +
                '\n' +
                'По вакансии можно обращаться к @taniammo\n',
            location: 'Москва',
            schedule: 'Полный рабочий день',
            fixedTime: false,
            testPeriod: false,
            laborCode: false,
            remote: false,
            testTask: false,
            learn: false,
            food: false,
            insurance: false,
            transport: false,
            mobile: false,
            sport: false,
            dressCode: false,
            salary: {
                from: false,
                to: 150000
            },
            skills: [
                {title: 'PHP (PHP 5)', level: 2, mandatory: true},
                {title: 'Yii (Yii2)', level: 2, mandatory: true},
                {title: 'SQL (PostgreSQL)', level: 2, mandatory: true},
                {title: 'Docker', level: 2, mandatory: true},
                {title: 'Верстка страниц (HTML)', level: 2, mandatory: false},
                {title: 'JavaScript', level: 2, mandatory: false},
                {title: 'jQuery', level: 2, mandatory: false},
                {title: 'Верстка страниц (CSS)', level: 2, mandatory: false}
            ]
        },
        {
            id: 8,
            title: 'PHP developer senior (laravel)',
            company: '-',
            description: 'Приветствую всех. Я в поиске:\n' +
                'PHP developer senior (laravel)\n' +
                'удаленно, 180 000 руб.\n' +
                'Мы занимаемся разработкой и внедрением высоконагруженных технологических решений для юристов.\n' +
                '\n' +
                'Ожидаем:\n' +
                '- опыт от 3х лет на PHP laravel + MySQL;\n' +
                '- linux (debian-based) и git;\n' +
                '- опыт написания тестов на PHP;\n' +
                '- приветствуется знание mongodb и elasticsearch.\n' +
                '\n' +
                'Чем будете заниматься:\n' +
                '- разработкой нового функционала под новые бизнес задачи;\n' +
                '-проводить рефакторинг уже существующего кода на новые проекты.\n' +
                '\n' +
                'Мы предлагаем:\n' +
                '- белоснежная зп и оформление по ТК;\n' +
                '- удаленная работа с гибким началом раб.дня;\n' +
                '- премии.\n' +
                'ДЕТАЛИ тут https://bit.ly/2KElrCY.\n' +
                'КОНТАКТЫ: tanyazaj@gmail.com',
            location: 'Москва',
            schedule: 'Полный рабочий день',
            fixedTime: false,
            testPeriod: false,
            laborCode: true,
            remote: true,
            testTask: false,
            learn: false,
            food: false,
            insurance: false,
            transport: false,
            mobile: false,
            sport: false,
            dressCode: false,
            salary: {
                from: 180000,
                to: 180000
            },
            skills: [
                {title: 'Laravel', level: 3, mandatory: true},
                {title: 'SQL (MySQL)', level: 3, mandatory: true},
                {title: 'Linux', level: 3, mandatory: true},
                {title: 'Git', level: 3, mandatory: true},
                {title: 'Unit-тестирование, PHPUnit', level: 2, mandatory: true},
                {title: 'NoSQL (MongoDb)', level: 1, mandatory: false},
                {title: 'Elasticsearch', level: 1, mandatory: false}
            ]
        },
        {
            id: 9,
            title: 'Middle PHP-developer',
            company: 'Облачный атлас',
            description: 'Требуются Middle PHP-developer в Офис \n' +
                '\n' +
                'г. Новосибирск\n' +
                'З/п: до 150 000 руб.\n' +
                'Полная занятость, полный день.\n' +
                'Обязанности:\n' +
                'Участие в разработке Backend/API на большом проекте;\n' +
                'Создание технической документации по разработанным узлам.\n' +
                '\n' +
                'Требования:\n' +
                'Хорошее знание PHP7, ООП;\n' +
                'Умение разбираться в чужом коде и требовательность к качеству своего\n' +
                'кода;\n' +
                'Понимание и опыт работы с моделью MVC;\n' +
                'Опыт написания API(RESTful/JSON-rpc) и понимание HTTP/HTTPS протоколов;\n' +
                'Опыт работы с postgresql;\n' +
                'Опыт работы в команде с frontend;\n' +
                'Опыт работы c Git;\n' +
                'Опыт работы с Redmine;\n' +
                'Базовые знания Linux систем;\n' +
                'Базовые знания в HTML, CSS, JS, Ajax, JSON, XML;\n' +
                'Опыт конфигурирования nginx;\n' +
                'Опыт написания юнит тестов(PHPUnit);\n' +
                'Опыт работы с RabbitMQ;\n' +
                'Опыт работы с одним из популярных фреймворков: Laravel, Yii, Symfony.\n',
            location: 'Новосибирск',
            schedule: 'Полный рабочий день',
            fixedTime: true,
            testPeriod: false,
            laborCode: false,
            remote: false,
            testTask: false,
            learn: false,
            food: false,
            insurance: false,
            transport: false,
            mobile: false,
            sport: false,
            dressCode: false,
            salary: {
                from: false,
                to: 150000
            },
            skills: [
                {title: 'PHP (PHP 7)', level: 2, mandatory: true},
                {title: 'ООП', level: 2, mandatory: true},
                {title: 'MVC', level: 1, mandatory: true},
                {title: 'Протоколы HTTP/HTTPS', level: 1, mandatory: true},
                {title: 'REST/RESTful API', level: 2, mandatory: true},
                {title: 'SQL (PostgreSQL)', level: 2, mandatory: true},
                {title: 'Git', level: 2, mandatory: true},
                {title: 'Redmine', level: 2, mandatory: true},
                {title: 'Linux', level: 1, mandatory: true},
                {title: 'Верстка страниц (HTML)', level: 1, mandatory: true},
                {title: 'Верстка страниц (CSS)', level: 1, mandatory: true},
                {title: 'JavaScript', level: 1, mandatory: true},
                {title: 'AJAX', level: 1, mandatory: true},
                {title: 'JSON', level: 1, mandatory: true},
                {title: 'XML', level: 1, mandatory: true},
                {title: 'Nginx', level: 2, mandatory: true},
                {title: 'Unit-тестирование, PHPUnit', level: 2, mandatory: true},
                {title: 'RabbitMQ', level: 2, mandatory: true},
                {title: 'Laravel', level: 2, mandatory: true},
                {title: 'Yii (Yii2)', level: 2, mandatory: true},
                {title: 'Symfony', level: 2, mandatory: true}
            ]
        },
        {
            id: 10,
            title: 'Опытный разработчик PHP',
            company: '-',
            description: 'Активная и теплая команда в поиске опытного PHP! \n' +
                'Рассматриваем ваши пожелания! \n' +
                'Предлагаем гибкие условия, человечные отношения и отсутствие бюрократии =) \n' +
                'Постоянное развитие, упор на качество.\n' +
                'Иностранные англоязычные и белорусские проекты, также развиваем свои.\n' +
                '💰Зарплата компетентная = ваши пожелания + ваш опыт.\n' +
                '\n' +
                'Важны:\n' +
                '* Отличные знания PHP, как минимум одного MVC фреймворка на достойном уровне (Yii2, Symfony, Laravel). * Желателен опыт работы с CMS, например, Wordpress;\n' +
                'Умение работать с Git; \n' +
                '* Будет плюсом - опыт работы с Frontend (Angular/React/Vue).\n' +
                '\n' +
                'Обчучение, плюшки и открытое обсуждение всего, чего вам не хватает для работы.\n' +
                'Пишите, пообщаемся:\n' +
                'Telegram: @Alexandra_p_d\n' +
                'Skype: popova_alexandra1',
            location: 'Минск',
            schedule: 'Полный рабочий день',
            fixedTime: false,
            testPeriod: false,
            laborCode: false,
            remote: false,
            testTask: false,
            learn: false,
            food: false,
            insurance: false,
            transport: false,
            mobile: false,
            sport: false,
            dressCode: false,
            salary: {
                from: false,
                to: false
            },
            skills: [
                {title: 'PHP', level: 3, mandatory: true},
                {title: 'Laravel', level: 3, mandatory: true},
                {title: 'Yii (Yii2)', level: 3, mandatory: true},
                {title: 'Symfony', level: 3, mandatory: true},
                {title: 'Wordpress', level: 2, mandatory: false},
                {title: 'Git', level: 1, mandatory: false},
                {title: 'Angular', level: 1, mandatory: false},
                {title: 'ReactJS', level: 1, mandatory: false},
                {title: 'Vue.js', level: 1, mandatory: false}

            ]
        },
        {
            id: 11,
            title: 'Senior backend developer (РНР, Golang)',
            company: 'Ситимобил',
            description: 'Требуемый опыт работы: 3–6 лет\n' +
                '\n' +
                'Полная занятость, полный день\n' +
                '\n' +
                'Ситимобил – один из ведущих сервисов заказа такси, входящий в состав холдинга Mail.Ru Group.\n' +
                '\n' +
                'Сегодня Ситимобил занимает прочные позиции на рынке пассажирских перевозок Москвы и является частью транспортной системы города.\n' +
                '\n' +
                'В связи с новым этапом развития компании и стоящими перед нами вызовами, мы усиливаем команду информационных технологий и приглашаем в свои ряды опытного PHP. Область ответственности — разработка серверных приложений, API и web-интерфейсов, используемых компанией для обеспечения работы сервиса.\n' +
                '\n' +
                'Задачи:\n' +
                '\n' +
                'Участие в разработке серверных приложений (мы используем РНР, Golang, Node.JS);\n' +
                'Проектирование архитектуры информационных систем;\n' +
                'Планирование и контроль выполнения задач в рамках итераций;\n' +
                'Обеспечение достижения командой поставленных целей;\n' +
                'Устранение блокирующих факторов в работе коллектива;\n' +
                'Проработка сложных технических вопросов;\n' +
                'Организация процесса code-review;\n' +
                'Разработка и эволюция приложений в режиме CI;\n' +
                'Общение с бизнес-заказчиками и уточнение требований;\n' +
                'Участие в отборе кандидатов и проведении этапов собеседований;\n' +
                'Организация и поддержание процесса функционального и unit-тестирования разрабатываемых систем.\n' +
                'Требования:\n' +
                '\n' +
                'Опыт разработки высоконагруженных проектов использования языка PHP;\n' +
                'Желателен опыт разработки или активный интерес к освоению Golang;\n' +
                'Опыт промышленной разработки и эксплуатации интернет-проектов;\n' +
                'Опыт общения с внутренними и внешними заказчиками;\n' +
                'Опыт эффективного преодоления повседневных рабочих проблем и затруднений;\n' +
                'Наличие высшего технического образования.\n' +
                'Условия:\n' +
                '\n' +
                'Команда профессионалов, в которой нет случайных людей;\n' +
                'Полностью официальное оформление по ТК;\n' +
                'Конкурентная заработная плата;\n' +
                'ДМС;\n' +
                'Крутой офис (26-этажный небоскреб на Ленинградском проспекте);\n' +
                'Питание: ресторан с завтраками и обедами, бар со свежевыжатыми соками;\n' +
                'Спорт: бесплатный фитнес-зал в офисе (со всеми тренажерами и, конечно, душевыми), теннисные столы и даже футбольное поле;\n' +
                'Корпоративная скидка на сервис Ситимобил;\n' +
                'Бесплатная парковка для сотрудников;\n' +
                'Профессиональное развитие:в офисе регулярно проходят семинары, тренинги, мероприятия, а также мы отправляем сотрудников и на внешние профессиональные мероприятия;\n' +
                'Месторасположение: 5 минут от ст.метро Аэропорт.',
            location: '',
            schedule: 'Полный рабочий день',
            fixedTime: true,
            testPeriod: false,
            laborCode: true,
            remote: false,
            testTask: false,
            learn: true,
            food: true,
            insurance: true,
            transport: false,
            mobile: false,
            sport: true,
            dressCode: false,
            salary: {
                from: false,
                to: false
            },
            skills: [
                {title: 'PHP (PHP 7)', level: 3, mandatory: true},
                {title: 'Elasticsearch', level: 3, mandatory: true},
                {title: 'Kubernetes', level: 3, mandatory: true},
                {title: 'SQL (PostgreSQL)', level: 3, mandatory: true},
                {title: 'Redis', level: 3, mandatory: true},
                {title: 'Git', level: 3, mandatory: true},
                {title: 'Node.js', level: 3, mandatory: true},
                {title: 'Golang', level: 1, mandatory: false},
                {title: 'Проектирование архитектуры', level: 3, mandatory: true},
                {title: 'Организация работы команды', level: 3, mandatory: true},
                {title: 'Выскоие нагрузки', level: 3, mandatory: true},
                {title: 'Функциональное тестирование', level: 3, mandatory: true},
                {title: 'Unit-тестирование, PHPUnit', level: 3, mandatory: true}
            ]
        },
        {
            id: 12,
            title: 'Программист PHP',
            company: 'ООО 7zap',
            description: 'Требуемый опыт работы: 1–3 года\n' +
                '\n' +
                'Полная занятость, полный день\n' +
                '\n' +
                'Обязанности:\n' +
                '\n' +
                'Разработка крупного международного агрегатора автозапчастей с дальнейшим развитием и поддержкой на фреймворке Laravel\n' +
                'Другие смежные проекты из сферы автозапчастей\n' +
                'Микро-сервисная архитектура\n' +
                'Требования:\n' +
                '\n' +
                'Достойное владение PHP с использование ООП\n' +
                'Знание JavaScript\n' +
                'Начальные умения HTML вёрстки\n' +
                'Написание SQL запросов\n' +
                'Хорошее знание Laravel\n' +
                'Опыт использования Bootstrap\n' +
                'Условия:\n' +
                '\n' +
                'Просторный офис\n' +
                'Интересные проекты в растущей компании\n' +
                'Достойную заработную плату\n' +
                'Профессиональный рост и развитие\n' +
                'Дружный молодой коллектив\n' +
                'Оформление по ТК РФ\n' +
                'Корпоративную скидку в фитнес-клуб/бассейн\n' +
                'Демократичный дресс-код\n' +
                'Оплата больничных в 100% размере',
            location: 'Санкт-Петербург',
            schedule: 'Полный рабочий день',
            fixedTime: true,
            testPeriod: false,
            laborCode: true,
            remote: false,
            testTask: false,
            learn: false,
            food: false,
            insurance: false,
            transport: false,
            sport: true,
            dressCode: true,
            mobile: false,
            salary: {
                from: 70000,
                to: false
            },
            skills: [
                {title: 'PHP', level: 2, mandatory: true},
                {title: 'ООП', level: 2, mandatory: true},
                {title: 'JavaScript', level: 1, mandatory: true},
                {title: 'Laravel', level: 2, mandatory: true},
                {title: 'SQL', level: 1, mandatory: true},
                {title: 'Верстка страниц (Bootstrap)', level: 2, mandatory: true},
                {title: 'Верстка страниц', level: 1, mandatory: true}
            ]
        },
        {
            id: 13,
            title: 'PHP программист',
            company: 'Технопарк',
            description: 'Обязанности\n' +
                '\n' +
                'Поддержка и развитие сайта technopark.ru и других проектов холдинга\n' +
                'Требования\n' +
                '\n' +
                'PHP (ООП), MySQL – высокий уровень, глубокое понимание\n' +
                'CSS, JavaScript (jQuery) – уверенно\n' +
                'Linux console – уверенный пользователь\n' +
                'Система контроля версий, в частности Git\n' +
                'API – умение писать свои и использовать чужие\n' +
                'Высокая скорость разработки\n' +
                'Инициативность, перфекционизм\n' +
                'Условия работы\n' +
                '\n' +
                'Вознаграждение от 120 000 руб., обсуждается с кандидатом\n' +
                'Квартальные премии по результатам работы\n' +
                'Полный рабочий день\n' +
                'Офис в «Москва-Сити», башня Империя\n' +
                'Работа в дружном и профессиональном коллективе\n' +
                'Перспективы профессионального роста\n' +
                'Вкусные и полезные завтраки и обеды от шеф-повара за счёт компании\n' +
                'Подарки на день рождения\n' +
                'Настольный теннис\n' +
                'Корпоративный футбол',
            location: 'Москва',
            schedule: 'Полный рабочий день',
            fixedTime: true,
            testPeriod: false,
            laborCode: true,
            remote: false,
            testTask: false,
            learn: false,
            food: true,
            insurance: false,
            transport: false,
            mobile: false,
            sport: true,
            dressCode: false,
            salary: {
                from: 104400,
                to: false
            },
            skills: [
                {title: 'PHP', level: 3, mandatory: true},
                {title: 'ООП', level: 3, mandatory: true},
                {title: 'SQL (MySQL)', level: 3, mandatory: true},
                {title: 'Верстка страниц (CSS)', level: 2, mandatory: true},
                {title: 'JavaScript', level: 2, mandatory: true},
                {title: 'jQuery', level: 2, mandatory: true},
                {title: 'Linux', level: 2, mandatory: true},
                {title: 'Git', level: 2, mandatory: true},
                {title: 'REST/RESTful API', level: 2, mandatory: true}
            ]
        },
        {
            id: 14,
            title: 'Web-разработчик / PHP Программист',
            company: 'СЕРКОНС',
            description: 'Требуемый опыт работы: 1–3 года\n' +
                '\n' +
                'Полная занятость, полный день\n' +
                '\n' +
                'Обязанности:\n' +
                '\n' +
                'Разработка сайтов и landing page;\n' +
                'Поддержка существующих сайтов компании;\n' +
                'HTML-верстка;\n' +
                'Редактирование / создание CSS-стилей;\n' +
                'Взаимодействие с внутренними подразделениями компании.\n' +
                'Требования:\n' +
                '\n' +
                'Владение html, css, php, js;\n' +
                'Знание библиотек jQuery;\n' +
                'Знание основ MySQL;\n' +
                'Грамотный русский язык;\n' +
                'Опыт оптимизации HTML-кода и графики;\n' +
                'Навыки работы с CMS системами( Битрикс);\n' +
                'Знание и умение работать с программами: html-редакторы, Photoshop;\n' +
                'НАЛИЧИЕ ПОРТФОЛИО - ОБЯЗАТЕЛЬНО!!!\n' +
                'Условия:\n' +
                '\n' +
                'Заработная плата обсуждается с успешным кандидатом;\n' +
                'М. Павелецкая шаговая доступность;\n' +
                'Оформление по ТК РФ;\n' +
                '5/2 с 9 до 18; пятница до 17;\n' +
                'Офис оснащен кондиционерами, бесплатные напитки (кофе, чай, молоко, вода);\n' +
                'Молодой коллектив;\n' +
                'Корпоративный фитнес и английский язык;\n' +
                'Возможность материального развития;\n' +
                'Отсутствие строгого дресс-кода.',
            location: 'Москва',
            schedule: 'Полный рабочий день',
            fixedTime: true,
            testPeriod: false,
            laborCode: true,
            remote: false,
            testTask: false,
            learn: true,
            food: true,
            insurance: false,
            transport: false,
            mobile: false,
            sport: true,
            dressCode: true,
            salary: {
                from: 80000,
                to: false
            },
            skills: [
                {title: 'Верстка страниц (HTML)', level: 1, mandatory: true},
                {title: 'Верстка страниц (CSS)', level: 1, mandatory: true},
                {title: 'PHP', level: 1, mandatory: true},
                {title: 'JavaScript', level: 1, mandatory: true},
                {title: 'jQuery', level: 1, mandatory: true},
                {title: 'SQL (MySQL)', level: 1, mandatory: true},
                {title: '1С-Битрикс', level: 1, mandatory: true}
            ]
        },
        {
            id: 15,
            title: 'Fullstack PHP разработчик/ программист (Middle+)',
            company: 'ПартКом',
            description: 'Основная ценность нашей компании ЗАБОТА! Поэтому компания предоставляет:\n' +
                '\n' +
                'Внутреннее и внешнее обучение за счет компании\n' +
                'Гарантию профессионального и возможность карьерного роста\n' +
                'Возможность пользоваться корпоративной библиотекой\n' +
                'Корпоративные скидки на автозапчасти для своего автомобиля и автомобилей родственников\n' +
                'Материальную помощь по семейным обстоятельствам\n' +
                'Дополнительную мотивацию за личный вклад и командные достижения\n' +
                'Регулярные корпоративные и спортивные мероприятия\n' +
                'Компания «ПартКом» с 2004 года снабжает автосервисы и магазины запасными частями, маслами, автохимией, дополнительным оборудованием и аксессуарами. Компания имеет широчайший ассортимент автомобильных товаров: более 60 миллионов предложений «из наличия» с собственного склада и «на заказ» со складов поставщиков.\n' +
                '\n' +
                'В отдел развития информационных систем требуется разработчик. Мы занимаемся автоматизацией процессов компании на всех уровнях: от подачи рекламного объявления, до вручения товара в руки покупателю. (поставщики, клиенты, магазины, склады, наличие)\n' +
                '\n' +
                'Над чем придется работать:\n' +
                '\n' +
                'Разрабатывать и поддерживать высоконагруженные информационные системы компании: интернет магазины, ERP, СRM и др.\n' +
                'Десятками серверов и терабайтами данных\n' +
                'Что мы используем:\n' +
                '\n' +
                'PHP 5.x, PHP 7.x, MySQL, MongoDB, RabbitMQ, Memcached, Sphinx, Composer, PHPUnit Ansible, Jira, Gitlab, Confluence\n' +
                'Требования:\n' +
                '\n' +
                'Опыт разработки от 3х лет\n' +
                'PHP 5.x,7.x , MySQL, ООП, GIT, SVN, PHPUnit, Composer, HTML, CSS, JavaScript, PSR, NoSQL, xdebug\n' +
                'Понимание основных принципов разработки и знание паттернов программирования\n' +
                'Умение работать в команде\n' +
                'Желание учиться\n' +
                'Linux, консоль\n' +
                'Будет плюсом:\n' +
                '\n' +
                'ZendFramework, Yii, Doctrine, Laravel\n' +
                'ExtJS, Vue.js, Angular, React\n' +
                'Опыт работы в Highload\n' +
                'Что мы готовы предложить:\n' +
                '\n' +
                'Конкурентную ЗП\n' +
                'Опыт работы в сложных высоконагруженных проектах\n' +
                'Работу в команде профессионалов, готовых прийти на помощь',
            location: 'Нижний Новгород',
            schedule: 'Полный рабочий день',
            fixedTime: false,
            testPeriod: false,
            laborCode: true,
            remote: false,
            testTask: false,
            learn: true,
            food: false,
            insurance: false,
            transport: false,
            mobile: false,
            sport: false,
            dressCode: false,
            salary: {
                from: 60000,
                to: false
            },
            skills: [
                {title: 'PHP (PHP 5)', level: 2, mandatory: true},
                {title: 'PHP (PHP 7)', level: 2, mandatory: true},
                {title: 'ООП', level: 2, mandatory: true},
                {title: 'Паттерны', level: 2, mandatory: true},
                {title: 'SQL (MySQL)', level: 2, mandatory: true},
                {title: 'NoSQL (MongoDb)', level: 2, mandatory: true},
                {title: 'RabbitMQ', level: 2, mandatory: false},
                {title: 'NoSQL (Memcached)', level: 2, mandatory: false},
                {title: 'Sphinx', level: 2, mandatory: false},
                {title: 'Composer', level: 2, mandatory: true},
                {title: 'Unit-тестирование, PHPUnit', level: 2, mandatory: true},
                {title: 'Jira', level: 2, mandatory: false},
                {title: 'Gitlab', level: 2, mandatory: false},
                {title: 'Git', level: 2, mandatory: true},
                {title: 'SVN', level: 2, mandatory: true},
                {title: 'Confluence', level: 2, mandatory: false},
                {title: 'Ansible', level: 2, mandatory: false},
                {title: 'Верстка страниц (HTML)', level: 2, mandatory: true},
                {title: 'Верстка страниц (CSS)', level: 2, mandatory: true},
                {title: 'JavaScript', level: 2, mandatory: true},
                {title: 'PSR', level: 2, mandatory: true},
                {title: 'NoSQL', level: 2, mandatory: true},
                {title: 'xdebug', level: 2, mandatory: true},
                {title: 'ZendFramework', level: 2, mandatory: false},
                {title: 'Yii', level: 2, mandatory: false},
                {title: 'Doctrine', level: 2, mandatory: false},
                {title: 'Laravel', level: 2, mandatory: false},
                {title: 'ExtJS', level: 2, mandatory: false},
                {title: 'Vue.js', level: 2, mandatory: false},
                {title: 'Angular', level: 2, mandatory: false},
                {title: 'ReactJS', level: 2, mandatory: false}
            ]
        }
    ]
}

window.getVacanciesList = getVacanciesList;