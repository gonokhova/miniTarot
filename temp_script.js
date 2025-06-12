// Tarot card data
const tarotCards = [
    // Старшие Арканы
    { name: "Шут", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/fool.jpg", meaning: "Начало нового пути, спонтанность, свобода" },
    { name: "Маг", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/magician.jpg", meaning: "Сила воли, мастерство, реализация" },
    { name: "Верховная Жрица", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/high-priestess.jpg", meaning: "Интуиция, тайны, внутренний голос" },
    { name: "Императрица", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/empress.jpg", meaning: "Изобилие, материнство, творчество" },
    { name: "Император", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/emperor.jpg", meaning: "Власть, структура, контроль" },
    { name: "Иерофант", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/hierophant.jpg", meaning: "Традиции, духовность, наставничество" },
    { name: "Влюбленные", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/lovers.jpg", meaning: "Любовь, гармония, выбор" },
    { name: "Колесница", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/chariot.jpg", meaning: "Победа, контроль, движение вперед" },
    { name: "Сила", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/strength.jpg", meaning: "Храбрость, убеждение, влияние" },
    { name: "Отшельник", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/hermit.jpg", meaning: "Самоанализ, поиск внутренней истины" },
    { name: "Колесо Фортуны", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/wheel-of-fortune.jpg", meaning: "Судьба, поворотный момент, удача" },
    { name: "Справедливость", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/justice.jpg", meaning: "Правда, справедливость, закон" },
    { name: "Повешенный", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/hanged-man.jpg", meaning: "Жертва, отпускание, новая перспектива" },
    { name: "Смерть", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/death.jpg", meaning: "Конец, трансформация, переход" },
    { name: "Умеренность", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/temperance.jpg", meaning: "Баланс, умеренность, терпение" },
    { name: "Дьявол", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/devil.jpg", meaning: "Привязанность, зависимость, ограничения" },
    { name: "Башня", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/tower.jpg", meaning: "Внезапные перемены, разрушение, откровение" },
    { name: "Звезда", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/star.jpg", meaning: "Надежда, вера, обновление" },
    { name: "Луна", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/moon.jpg", meaning: "Иллюзии, страх, интуиция" },
    { name: "Солнце", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/sun.jpg", meaning: "Радость, успех, жизненная сила" },
    { name: "Суд", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/judgement.jpg", meaning: "Возрождение, внутренний призыв, освобождение" },
    { name: "Мир", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/world.jpg", meaning: "Завершение, интеграция, достижение" },

    // Младшие Арканы - Жезлы
    { name: "Туз Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ace-of-wands.jpg", meaning: "Вдохновение, новые возможности, творческий потенциал" },
    { name: "Двойка Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/two-of-wands.jpg", meaning: "Планирование, принятие решений, будущее" },
    { name: "Тройка Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/three-of-wands.jpg", meaning: "Расширение, видение, предвидение" },
    { name: "Четверка Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/four-of-wands.jpg", meaning: "Стабильность, празднование, гармония" },
    { name: "Пятерка Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/five-of-wands.jpg", meaning: "Конкуренция, конфликт, разнообразие" },
    { name: "Шестерка Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/six-of-wands.jpg", meaning: "Победа, успех, признание" },
    { name: "Семерка Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/seven-of-wands.jpg", meaning: "Защита, вызов, настойчивость" },
    { name: "Восьмерка Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/eight-of-wands.jpg", meaning: "Движение, скорость, действие" },
    { name: "Девятка Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/nine-of-wands.jpg", meaning: "Стойкость, выносливость, последнее усилие" },
    { name: "Десятка Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ten-of-wands.jpg", meaning: "Бремя, ответственность, давление" },
    { name: "Паж Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/page-of-wands.jpg", meaning: "Новости, вдохновение, новые начинания" },
    { name: "Рыцарь Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/knight-of-wands.jpg", meaning: "Приключения, энергия, стремительность" },
    { name: "Королева Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/queen-of-wands.jpg", meaning: "Уверенность, независимость, обаяние" },
    { name: "Король Жезлов", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/king-of-wands.jpg", meaning: "Лидерство, дальновидность, авторитет" },

    // Младшие Арканы - Кубки
    { name: "Туз Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ace-of-cups.jpg", meaning: "Новые чувства, духовность, интуиция" },
    { name: "Двойка Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/two-of-cups.jpg", meaning: "Единство, партнерство, связь" },
    { name: "Тройка Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/three-of-cups.jpg", meaning: "Дружба, празднование, сотрудничество" },
    { name: "Четверка Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/four-of-cups.jpg", meaning: "Апатия, созерцание, отстраненность" },
    { name: "Пятерка Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/five-of-cups.jpg", meaning: "Потеря, горе, самосожаление" },
    { name: "Шестерка Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/six-of-cups.jpg", meaning: "Ностальгия, воспоминания, детство" },
    { name: "Семерка Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/seven-of-cups.jpg", meaning: "Выбор, иллюзии, возможности" },
    { name: "Восьмерка Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/eight-of-cups.jpg", meaning: "Отступление, оставление, движение вперед" },
    { name: "Девятка Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/nine-of-cups.jpg", meaning: "Удовлетворение, благополучие, материальный комфорт" },
    { name: "Десятка Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ten-of-cups.jpg", meaning: "Божественная любовь, блаженство, домашняя гармония" },
    { name: "Паж Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/page-of-cups.jpg", meaning: "Творчество, интуиция, эмоциональная весть" },
    { name: "Рыцарь Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/knight-of-cups.jpg", meaning: "Романтика, предложения, очарование" },
    { name: "Королева Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/queen-of-cups.jpg", meaning: "Сострадание, забота, интуиция" },
    { name: "Король Кубков", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/king-of-cups.jpg", meaning: "Эмоциональный контроль, мудрость, сочувствие" },

    // Младшие Арканы - Мечи
    { name: "Туз Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ace-of-swords.jpg", meaning: "Прозрение, ясность, прорыв" },
    { name: "Двойка Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/two-of-swords.jpg", meaning: "Решение, тупик, баланс" },
    { name: "Тройка Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/three-of-swords.jpg", meaning: "Сердечная боль, страдание, горе" },
    { name: "Четверка Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/four-of-swords.jpg", meaning: "Отдых, восстановление, медитация" },
    { name: "Пятерка Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/five-of-swords.jpg", meaning: "Поражение, конфликт, потеря" },
    { name: "Шестерка Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/six-of-swords.jpg", meaning: "Переход, изменение, движение" },
    { name: "Семерка Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/seven-of-swords.jpg", meaning: "Обман, стратегия, ресурсы" },
    { name: "Восьмерка Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/eight-of-swords.jpg", meaning: "Ограничения, беспомощность, паралич" },
    { name: "Девятка Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/nine-of-swords.jpg", meaning: "Тревога, беспокойство, страх" },
    { name: "Десятка Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ten-of-swords.jpg", meaning: "Конец, разрушение, обновление" },
    { name: "Паж Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/page-of-swords.jpg", meaning: "Новые идеи, бдительность, любопытство" },
    { name: "Рыцарь Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/knight-of-swords.jpg", meaning: "Амбиции, быстрота, импульсивность" },
    { name: "Королева Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/queen-of-swords.jpg", meaning: "Независимость, проницательность, прямолинейность" },
    { name: "Король Мечей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/king-of-swords.jpg", meaning: "Интеллект, авторитет, объективность" },

    // Младшие Арканы - Пентакли
    { name: "Туз Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ace-of-pentacles.jpg", meaning: "Новые возможности, изобилие, потенциал" },
    { name: "Двойка Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/two-of-pentacles.jpg", meaning: "Баланс, приоритеты, адаптация" },
    { name: "Тройка Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/three-of-pentacles.jpg", meaning: "Командная работа, сотрудничество, мастерство" },
    { name: "Четверка Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/four-of-pentacles.jpg", meaning: "Сохранение, безопасность, контроль" },
    { name: "Пятерка Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/five-of-pentacles.jpg", meaning: "Нужда, бедность, изоляция" },
    { name: "Шестерка Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/six-of-pentacles.jpg", meaning: "Благотворительность, щедрость, помощь" },
    { name: "Семерка Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/seven-of-pentacles.jpg", meaning: "Терпение, ожидание, оценка" },
    { name: "Восьмерка Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/eight-of-pentacles.jpg", meaning: "Мастерство, преданность, качество" },
    { name: "Девятка Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/nine-of-pentacles.jpg", meaning: "Благополучие, независимость, самодостаточность" },
    { name: "Десятка Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ten-of-pentacles.jpg", meaning: "Богатство, семья, наследие" },
    { name: "Паж Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/page-of-pentacles.jpg", meaning: "Возможности, амбиции, обучение" },
    { name: "Рыцарь Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/knight-of-pentacles.jpg", meaning: "Надежность, трудолюбие, ответственность" },
    { name: "Королева Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/queen-of-pentacles.jpg", meaning: "Воспитание, практичность, безопасность" },
    { name: "Король Пентаклей", image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/king-of-pentacles.jpg", meaning: "Успех, изобилие, стабильность" }
];

// Yes/No answers
const yesNoAnswers = [
    "Да, определенно",
    "Это весьма вероятно",
    "Без сомнения",
    "Да, но будьте осторожны",
    "Спросите позже",
    "Лучше не говорить сейчас",
    "Сконцентрируйтесь и спросите снова",
    "Мой ответ - нет",
    "Перспективы не очень хорошие",
    "Очень сомнительно"
];

async function getAIInterpretation(cardName) {
    // Имитация задержки для эффекта "думания"
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const interpretations = {
        "Шут": "Карта Шута говорит о том, что сейчас самое время начать что-то новое. Не бойтесь рисковать и доверьтесь своей интуиции. Возможно, вы находитесь на пороге важных перемен.",
        "Маг": "Маг указывает на вашу способность воплощать мечты в реальность. У вас есть все необходимые инструменты и навыки для достижения целей. Время действовать!",
        "Верховная Жрица": "Верховная Жрица призывает вас прислушаться к своему внутреннему голосу. Ваша интуиция сейчас особенно сильна. Доверьтесь ей в принятии важных решений.",
        "Императрица": "Карта Императрицы символизирует изобилие и творчество. Это время для роста, процветания и реализации ваших творческих идей.",
        "Император": "Император говорит о необходимости структуры и контроля. Возможно, вам нужно проявить больше решительности и взять ситуацию в свои руки.",
        "Иерофант": "Иерофант призывает вас следовать традициям и установленным нормам. Возможно, вам нужен духовный наставник или совет мудрого человека.",
        "Влюбленные": "Карта Влюбленных говорит о важном выборе в вашей жизни. Слушайте свое сердце, но не забывайте о разуме. Это время для принятия важных решений.",
        "Колесница": "Колесница символизирует движение вперед и победу. Вы на правильном пути, продолжайте двигаться к своей цели с уверенностью.",
        "Сила": "Карта Силы говорит о вашей внутренней силе и способности преодолевать препятствия. Доверьтесь своей интуиции и будьте настойчивы.",
        "Отшельник": "Отшельник призывает к самоанализу и поиску внутренней мудрости. Возможно, вам нужно время наедине с собой.",
        "Колесо Фортуны": "Колесо Фортуны указывает на важные перемены в вашей жизни. Будьте готовы к новым возможностям и изменениям.",
        "Справедливость": "Карта Справедливости говорит о необходимости принимать взвешенные решения. Взвесьте все за и против перед важным выбором.",
        "Повешенный": "Повешенный призывает вас посмотреть на ситуацию с новой точки зрения. Иногда нужно отпустить контроль, чтобы двигаться вперед.",
        "Смерть": "Карта Смерти символизирует трансформацию и новые начала. Не бойтесь перемен, они необходимы для роста.",
        "Умеренность": "Умеренность призывает к балансу и гармонии. Найдите золотую середину в своих действиях и решениях.",
        "Дьявол": "Карта Дьявола предупреждает о возможных зависимостях или ограничениях. Проверьте, не держат ли вас какие-то привязанности.",
        "Башня": "Башня говорит о внезапных переменах и разрушении старых структур. Это может быть болезненно, но необходимо для роста."",
        "Звезда": "Звезда приносит надежду и вдохновение. Доверьтесь вселенной и своим мечтам.",
        "Луна": "Луна предупреждает о возможных иллюзиях и страхах. Прислушайтесь к своей интуиции, но не давайте страху управлять вами.",
        "Солнце": "Солнце приносит радость, успех и жизненную силу. Это время для реализации ваших планов.",
        "Суд": "Суд говорит о внутреннем призыве к переменам. Пришло время для духовного пробуждения и обновления.",
        "Мир": "Мир символизирует завершение цикла и достижение гармонии. Вы на правильном пути.",

        // Младшие Арканы - Жезлы
        "Туз Жезлов": "Туз Жезлов приносит новые идеи и творческое вдохновение. Это время для начала новых проектов.",
        "Двойка Жезлов": "Двойка Жезлов говорит о планировании будущего и принятии важных решений. Взвесьте все варианты.",
        "Тройка Жезлов": "Тройка Жезлов указывает на расширение горизонтов и новые возможности. Действуйте смело.",
        "Четверка Жезлов": "Четверка Жезлов символизирует стабильность и гармонию. Наслаждайтесь плодами своего труда.",
        "Пятерка Жезлов": "Пятерка Жезлов говорит о здоровой конкуренции и преодолении препятствий. Не бойтесь соревнований.",
        "Шестерка Жезлов": "Шестерка Жезлов приносит победу и признание. Ваши усилия будут вознаграждены.",
        "Семерка Жезлов": "Семерка Жезлов призывает защищать свои интересы и отстаивать свою позицию.",
        "Восьмерка Жезлов": "Восьмерка Жезлов говорит о быстрых переменах и активных действиях. Двигайтесь вперед.",
        "Девятка Жезлов": "Девятка Жезлов символизирует стойкость и выносливость. Продолжайте идти к цели.",
        "Десятка Жезлов": "Десятка Жезлов предупреждает о возможном переутомлении. Возможно, стоит сбросить часть нагрузки.",
        "Паж Жезлов": "Паж Жезлов приносит новости, вдохновение и новые начинания. Будьте открыты для новых идей.",
        "Рыцарь Жезлов": "Рыцарь Жезлов символизирует приключения, энергию и стремительность. Действуйте решительно.",
        "Королева Жезлов": "Королева Жезлов говорит об уверенности, независимости и обаянии. Проявите свою внутреннюю силу.",
        "Король Жезлов": "Король Жезлов символизирует лидерство, дальновидность и авторитет. Возьмите на себя управление.",

        // Младшие Арканы - Кубки
        "Туз Кубков": "Туз Кубков приносит новые чувства и эмоциональное обновление. Откройте свое сердце.",
        "Двойка Кубков": "Двойка Кубков говорит о гармоничных отношениях и партнерстве. Цените близких людей.",
        "Тройка Кубков": "Тройка Кубков символизирует радость, дружбу и празднование. Наслаждайтесь моментом.",
        "Четверка Кубков": "Четверка Кубков призывает к самоанализу и переоценке ценностей. Не упускайте возможности.",
        "Пятерка Кубков": "Пятерка Кубков говорит о переживании потери. Дайте себе время на исцеление.",
        "Шестерка Кубков": "Шестерка Кубков приносит приятные воспоминания и ностальгию. Цените прошлый опыт.",
        "Семерка Кубков": "Семерка Кубков предупреждает о возможных иллюзиях. Будьте реалистичны в своих ожиданиях.",
        "Восьмерка Кубков": "Восьмерка Кубков говорит о необходимости двигаться вперед, оставляя прошлое позади.",
        "Девятка Кубков": "Девятка Кубков символизирует удовлетворение и материальное благополучие. Наслаждайтесь жизнью.",
        "Десятка Кубков": "Десятка Кубков приносит гармонию в отношениях и семейное счастье. Цените близких.",
        "Паж Кубков": "Паж Кубков символизирует творчество, интуицию и эмоциональную весть. Будьте открыты новому.",
        "Рыцарь Кубков": "Рыцарь Кубков говорит о романтике, предложениях и очаровании. Следуйте своему сердцу.",
        "Королева Кубков": "Королева Кубков призывает к состраданию, заботе и интуиции. Доверьтесь своим чувствам.",
        "Король Кубков": "Король Кубков символизирует эмоциональный контроль, мудрость и сочувствие. Будьте лидером.",

        // Младшие Арканы - Мечи
        "Туз Мечей": "Туз Мечей приносит ясность мысли и новые идеи. Используйте свой интеллект.",
        "Двойка Мечей": "Двойка Мечей говорит о необходимости принять сложное решение. Взвесьте все за и против.",
        "Тройка Мечей": "Тройка Мечей символизирует эмоциональную боль. Дайте себе время на исцеление.",
        "Четверка Мечей": "Четверка Мечей призывает к отдыху и восстановлению сил. Позаботьтесь о себе.",
        "Пятерка Мечей": "Пятерка Мечей предупреждает о возможных конфликтах. Избегайте ненужных споров.",
        "Шестерка Мечей": "Шестерка Мечей говорит о переходном периоде. Двигайтесь вперед с надеждой.",
        "Семерка Мечей": "Семерка Мечей предупреждает о возможном обмане. Будьте осторожны в своих действиях.",
        "Восьмерка Мечей": "Восьмерка Мечей говорит о чувстве ограничения. Ищите выход из сложной ситуации.",
        "Девятка Мечей": "Девятка Мечей символизирует тревогу и беспокойство. Не давайте страху управлять вами.",
        "Десятка Мечей": "Десятка Мечей говорит о конце трудного периода. Впереди новое начало.",
        "Паж Мечей": "Паж Мечей приносит новые идеи, бдительность и любопытство. Будьте открыты для обучения.",
        "Рыцарь Мечей": "Рыцарь Мечей символизирует амбиции, быстроту и импульсивность. Действуйте решительно.",
        "Королева Мечей": "Королева Мечей говорит о независимости, проницательности и прямолинейности. Будьте честны с собой.",
        "Король Мечей": "Король Мечей символизирует интеллект, авторитет и объективность. Примите мудрое решение.",

        // Младшие Арканы - Пентакли
        "Туз Пентаклей": "Туз Пентаклей приносит новые финансовые возможности. Будьте готовы к изменениям.",
        "Двойка Пентаклей": "Двойка Пентаклей говорит о необходимости баланса в делах. Управляйте своим временем.",
        "Тройка Пентаклей": "Тройка Пентаклей символизирует успешное сотрудничество. Работайте в команде.",
        "Четверка Пентаклей": "Четверка Пентаклей говорит о финансовой стабильности. Защищайте свои ресурсы.",
        "Пятерка Пентаклей": "Пятерка Пентаклей предупреждает о возможных финансовых трудностях. Будьте осторожны.",
        "Шестерка Пентаклей": "Шестерка Пентаклей призывает к щедрости и помощи другим. Делитесь своим богатством.",
        "Семерка Пентаклей": "Семерка Пентаклей говорит о необходимости терпения в достижении целей.",
        "Восьмерка Пентаклей": "Восьмерка Пентаклей символизирует мастерство и преданность делу. Совершенствуйтесь.",
        "Девятка Пентаклей": "Девятка Пентаклей говорит о финансовой независимости и самодостаточности.",
        "Десятка Пентаклей": "Десятка Пентаклей символизирует финансовую стабильность и семейное благополучие.",
        "Паж Пентаклей": "Паж Пентаклей приносит возможности, амбиции и обучение. Будьте готовы к новым начинаниям.",
        "Рыцарь Пентаклей": "Рыцарь Пентаклей символизирует надежность, трудолюбие и ответственность. Действуйте последовательно.",
        "Королева Пентаклей": "Королева Пентаклей говорит о воспитании, практичности и безопасности. Создайте уют и стабильность.",
        "Король Пентаклей": "Король Пентаклей символизирует успех, изобилие и стабильность. Достигните своих целей."
    };
    
    return interpretations[cardName] || "Эта карта призывает вас заглянуть внутрь себя и найти ответы на свои вопросы.";
}

async function getTarotReading() {
    const resultMainDiv = document.getElementById('result');
    resultMainDiv.innerHTML = '';

    const resultContentDiv = document.createElement('div');
    resultContentDiv.classList.add('result-content', 'show');
    resultMainDiv.appendChild(resultContentDiv);

    const drawnCards = [];
    const availableCards = [...tarotCards]; // Create a mutable copy to pick unique cards

    let cardsHTML = '<div class="tarot-spread">';
    for (let i = 0; i < 3; i++) {
        if (availableCards.length === 0) break; // Should not happen with 78 cards, but for safety
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        const randomCard = availableCards.splice(randomIndex, 1)[0]; // Remove selected card from available

        drawnCards.push(randomCard);

        cardsHTML += `
            <div class="card-display card-animation">
                <h2>${randomCard.name}</h2>
                <img src="${randomCard.image}" alt="${randomCard.name}">
                <p>${randomCard.meaning}</p>
            </div>
        `;
    }
    cardsHTML += '</div>';
    resultContentDiv.innerHTML = cardsHTML; // Display cards first

    // Add a single loading indicator for all interpretations
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = '<div class="loading"></div> Карты анализируют ситуацию...';
    resultContentDiv.appendChild(loadingDiv);

    let interpretationsHTML = '';
    for (const card of drawnCards) {
        const interpretation = await getAIInterpretation(card.name);
        interpretationsHTML += `
            <div class="interpretation">
                <h3>✨ Толкование карт (${card.name}):</h3>
                <p>${interpretation}</p>
            </div>
        `;
    }

    loadingDiv.remove(); // Remove loading indicator once all interpretations are fetched
    resultContentDiv.innerHTML += interpretationsHTML; // Append interpretations
}

function yesNo() {
    const resultDiv = document.querySelector('.result-content');
    const randomAnswer = yesNoAnswers[Math.floor(Math.random() * yesNoAnswers.length)];
    
    resultDiv.innerHTML = `
        <div class="card-animation">
            <h2>Ответ карт:</h2>
            <p class="answer">${randomAnswer}</p>
        </div>
    `;
}

const yesNoButtons = `
    <div class="yes-no-buttons">
        <button onclick="getYesNoAnswer('yes')">Да</button>
        <button onclick="getYesNoAnswer('no')">Нет</button>
    </div>
`; 