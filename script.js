// Tarot card data
const tarotCards = [
    // Старшие Арканы
    { 
        name: "Шут", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/fool.jpg", 
        meaning: "Начало нового пути, спонтанность, свобода, невинность, новые возможности, приключения" 
    },
    { 
        name: "Маг", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/magician.jpg", 
        meaning: "Сила воли, мастерство, реализация, концентрация, инициатива, творческий потенциал" 
    },
    { 
        name: "Верховная Жрица", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/high-priestess.jpg", 
        meaning: "Интуиция, тайны, внутренний голос, подсознание, мудрость, духовность" 
    },
    { 
        name: "Императрица", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/empress.jpg", 
        meaning: "Изобилие, материнство, творчество, плодородие, красота, гармония" 
    },
    { 
        name: "Император", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/emperor.jpg", 
        meaning: "Власть, структура, контроль, стабильность, авторитет, защита" 
    },
    { 
        name: "Иерофант", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/hierophant.jpg", 
        meaning: "Традиции, духовность, наставничество, религия, мораль, образование" 
    },
    { 
        name: "Влюбленные", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/lovers.jpg", 
        meaning: "Любовь, гармония, выбор, отношения, ценности, единство" 
    },
    { 
        name: "Колесница", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/chariot.jpg", 
        meaning: "Победа, контроль, движение вперед, решимость, воля, успех" 
    },
    { 
        name: "Сила", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/strength.jpg", 
        meaning: "Храбрость, убеждение, влияние, сострадание, внутренняя сила, терпение" 
    },
    { 
        name: "Отшельник", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/hermit.jpg", 
        meaning: "Самоанализ, поиск внутренней истины, одиночество, мудрость, духовный поиск" 
    },
    { 
        name: "Колесо Фортуны", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/wheel-of-fortune.jpg", 
        meaning: "Судьба, поворотный момент, удача, перемены, циклы, новые возможности" 
    },
    { 
        name: "Справедливость", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/justice.jpg", 
        meaning: "Правда, справедливость, закон, баланс, причинно-следственная связь, честность" 
    },
    { 
        name: "Повешенный", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/hanged-man.jpg", 
        meaning: "Жертва, отпускание, новая перспектива, пауза, переоценка, просветление" 
    },
    { 
        name: "Смерть", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/death.jpg", 
        meaning: "Конец, трансформация, переход, освобождение, обновление, неизбежные перемены" 
    },
    { 
        name: "Умеренность", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/temperance.jpg", 
        meaning: "Баланс, умеренность, терпение, гармония, исцеление, объединение" 
    },
    { 
        name: "Дьявол", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/devil.jpg", 
        meaning: "Привязанность, зависимость, ограничения, материализм, искушение, тени" 
    },
    { 
        name: "Башня", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/tower.jpg", 
        meaning: "Внезапные перемены, разрушение, откровение, освобождение, хаос, пробуждение" 
    },
    { 
        name: "Звезда", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/star.jpg", 
        meaning: "Надежда, вера, обновление, вдохновение, духовность, исцеление" 
    },
    { 
        name: "Луна", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/moon.jpg", 
        meaning: "Иллюзии, страх, интуиция, подсознание, тайны, творчество" 
    },
    { 
        name: "Солнце", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/sun.jpg", 
        meaning: "Радость, успех, жизненная сила, счастье, ясность, позитив" 
    },
    { 
        name: "Суд", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/judgement.jpg", 
        meaning: "Возрождение, внутренний призыв, освобождение, пробуждение, трансформация, обновление" 
    },
    { 
        name: "Мир", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/world.jpg", 
        meaning: "Завершение, интеграция, достижение, путешествия, гармония, целостность" 
    },

    // Младшие Арканы - Жезлы
    { 
        name: "Туз Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ace-of-wands.jpg", 
        meaning: "Вдохновение, новые возможности, творческий потенциал, начало, энергия, рост" 
    },
    { 
        name: "Двойка Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/two-of-wands.jpg", 
        meaning: "Планирование, принятие решений, будущее, потенциал, прогресс, решимость" 
    },
    { 
        name: "Тройка Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/three-of-wands.jpg", 
        meaning: "Расширение, видение, предвидение, рост, возможности, дальновидность" 
    },
    { 
        name: "Четверка Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/four-of-wands.jpg", 
        meaning: "Стабильность, празднование, гармония, достижение, успех, радость" 
    },
    { 
        name: "Пятерка Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/five-of-wands.jpg", 
        meaning: "Конкуренция, конфликт, разнообразие, вызов, соревнование, энергия" 
    },
    { 
        name: "Шестерка Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/six-of-wands.jpg", 
        meaning: "Победа, успех, признание, прогресс, уверенность, достижение" 
    },
    { 
        name: "Семерка Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/seven-of-wands.jpg", 
        meaning: "Защита, вызов, настойчивость, отстаивание позиции, конкуренция, решимость" 
    },
    { 
        name: "Восьмерка Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/eight-of-wands.jpg", 
        meaning: "Движение, скорость, действие, прогресс, коммуникация, изменения" 
    },
    { 
        name: "Девятка Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/nine-of-wands.jpg", 
        meaning: "Стойкость, выносливость, последнее усилие, сила, решимость, защита" 
    },
    { 
        name: "Десятка Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ten-of-wands.jpg", 
        meaning: "Бремя, ответственность, давление, достижение, завершение, нагрузка" 
    },
    { 
        name: "Паж Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/page-of-wands.jpg", 
        meaning: "Новости, вдохновение, новые начинания, энтузиазм, творчество, потенциал" 
    },
    { 
        name: "Рыцарь Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/knight-of-wands.jpg", 
        meaning: "Приключения, энергия, стремительность, действие, импульсивность, страсть" 
    },
    { 
        name: "Королева Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/queen-of-wands.jpg", 
        meaning: "Уверенность, независимость, обаяние, творчество, харизма, лидерство" 
    },
    { 
        name: "Король Жезлов", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/king-of-wands.jpg", 
        meaning: "Лидерство, дальновидность, авторитет, творчество, харизма, вдохновение" 
    },

    // Младшие Арканы - Кубки
    { 
        name: "Туз Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ace-of-cups.jpg", 
        meaning: "Новые чувства, духовность, интуиция, любовь, эмоции, творчество" 
    },
    { 
        name: "Двойка Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/two-of-cups.jpg", 
        meaning: "Единство, партнерство, связь, любовь, гармония, взаимопонимание" 
    },
    { 
        name: "Тройка Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/three-of-cups.jpg", 
        meaning: "Дружба, празднование, сотрудничество, радость, изобилие, успех" 
    },
    { 
        name: "Четверка Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/four-of-cups.jpg", 
        meaning: "Апатия, созерцание, отстраненность, самоанализ, переоценка, медитация" 
    },
    { 
        name: "Пятерка Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/five-of-cups.jpg", 
        meaning: "Потеря, горе, самосожаление, разочарование, печаль, исцеление" 
    },
    { 
        name: "Шестерка Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/six-of-cups.jpg", 
        meaning: "Ностальгия, воспоминания, детство, невинность, радость, прошлое" 
    },
    { 
        name: "Семерка Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/seven-of-cups.jpg", 
        meaning: "Выбор, иллюзии, возможности, мечты, фантазии, неопределенность" 
    },
    { 
        name: "Восьмерка Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/eight-of-cups.jpg", 
        meaning: "Отступление, оставление, движение вперед, перемены, поиск, духовность" 
    },
    { 
        name: "Девятка Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/nine-of-cups.jpg", 
        meaning: "Удовлетворение, благополучие, материальный комфорт, счастье, успех, радость" 
    },
    { 
        name: "Десятка Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ten-of-cups.jpg", 
        meaning: "Божественная любовь, блаженство, домашняя гармония, счастье, радость, успех" 
    },
    { 
        name: "Паж Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/page-of-cups.jpg", 
        meaning: "Творчество, интуиция, эмоциональная весть, новые чувства, потенциал, мечтательность" 
    },
    { 
        name: "Рыцарь Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/knight-of-cups.jpg", 
        meaning: "Романтика, предложения, очарование, творчество, мечтательность, чувствительность" 
    },
    { 
        name: "Королева Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/queen-of-cups.jpg", 
        meaning: "Сострадание, забота, интуиция, эмоциональная зрелость, творчество, мудрость" 
    },
    { 
        name: "Король Кубков", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/king-of-cups.jpg", 
        meaning: "Эмоциональный контроль, мудрость, сочувствие, творчество, дипломатия, искусство" 
    },

    // Младшие Арканы - Мечи
    { 
        name: "Туз Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ace-of-swords.jpg", 
        meaning: "Прозрение, ясность, прорыв, истина, интеллект, победа" 
    },
    { 
        name: "Двойка Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/two-of-swords.jpg", 
        meaning: "Решение, тупик, баланс, выбор, мир, перемирие" 
    },
    { 
        name: "Тройка Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/three-of-swords.jpg", 
        meaning: "Сердечная боль, страдание, горе, исцеление, прощение, освобождение" 
    },
    { 
        name: "Четверка Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/four-of-swords.jpg", 
        meaning: "Отдых, восстановление, медитация, мир, спокойствие, исцеление" 
    },
    { 
        name: "Пятерка Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/five-of-swords.jpg", 
        meaning: "Поражение, конфликт, потеря, сдача, отступление, урок" 
    },
    { 
        name: "Шестерка Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/six-of-swords.jpg", 
        meaning: "Переход, изменение, движение, прогресс, надежда, будущее" 
    },
    { 
        name: "Семерка Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/seven-of-swords.jpg", 
        meaning: "Обман, стратегия, ресурсы, хитрость, адаптация, выживание" 
    },
    { 
        name: "Восьмерка Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/eight-of-swords.jpg", 
        meaning: "Ограничения, беспомощность, паралич, освобождение, выбор, движение" 
    },
    { 
        name: "Девятка Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/nine-of-swords.jpg", 
        meaning: "Тревога, беспокойство, страх, кошмары, стресс, исцеление" 
    },
    { 
        name: "Десятка Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ten-of-swords.jpg", 
        meaning: "Конец, разрушение, обновление, трансформация, освобождение, новое начало" 
    },
    { 
        name: "Паж Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/page-of-swords.jpg", 
        meaning: "Новые идеи, бдительность, любопытство, коммуникация, интеллект, потенциал" 
    },
    { 
        name: "Рыцарь Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/knight-of-swords.jpg", 
        meaning: "Амбиции, быстрота, импульсивность, действие, конфликт, решимость" 
    },
    { 
        name: "Королева Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/queen-of-swords.jpg", 
        meaning: "Независимость, проницательность, прямолинейность, мудрость, ясность, справедливость" 
    },
    { 
        name: "Король Мечей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/king-of-swords.jpg", 
        meaning: "Интеллект, авторитет, объективность, правда, справедливость, мудрость" 
    },

    // Младшие Арканы - Пентакли
    { 
        name: "Туз Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ace-of-pentacles.jpg", 
        meaning: "Новые возможности, изобилие, потенциал, материальное благополучие, успех, рост" 
    },
    { 
        name: "Двойка Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/two-of-pentacles.jpg", 
        meaning: "Баланс, приоритеты, адаптация, гибкость, управление, многозадачность" 
    },
    { 
        name: "Тройка Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/three-of-pentacles.jpg", 
        meaning: "Командная работа, сотрудничество, мастерство, рост, признание, успех" 
    },
    { 
        name: "Четверка Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/four-of-pentacles.jpg", 
        meaning: "Сохранение, безопасность, контроль, стабильность, защита, консерватизм" 
    },
    { 
        name: "Пятерка Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/five-of-pentacles.jpg", 
        meaning: "Нужда, бедность, изоляция, помощь, поддержка, исцеление" 
    },
    { 
        name: "Шестерка Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/six-of-pentacles.jpg", 
        meaning: "Благотворительность, щедрость, помощь, поддержка, изобилие, справедливость" 
    },
    { 
        name: "Семерка Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/seven-of-pentacles.jpg", 
        meaning: "Терпение, ожидание, оценка, рост, инвестиции, долгосрочные цели" 
    },
    { 
        name: "Восьмерка Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/eight-of-pentacles.jpg", 
        meaning: "Мастерство, преданность, качество, совершенствование, работа, рост" 
    },
    { 
        name: "Девятка Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/nine-of-pentacles.jpg", 
        meaning: "Благополучие, независимость, самодостаточность, успех, роскошь, достижение" 
    },
    { 
        name: "Десятка Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/ten-of-pentacles.jpg", 
        meaning: "Богатство, семья, наследие, стабильность, безопасность, долгосрочный успех" 
    },
    { 
        name: "Паж Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/page-of-pentacles.jpg", 
        meaning: "Возможности, амбиции, обучение, потенциал, рост, новые навыки" 
    },
    { 
        name: "Рыцарь Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/knight-of-pentacles.jpg", 
        meaning: "Надежность, трудолюбие, ответственность, стабильность, практичность, прогресс" 
    },
    { 
        name: "Королева Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/queen-of-pentacles.jpg", 
        meaning: "Воспитание, практичность, безопасность, изобилие, забота, материнство" 
    },
    { 
        name: "Король Пентаклей", 
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/king-of-pentacles.jpg", 
        meaning: "Успех, изобилие, стабильность, безопасность, практичность, материальное благополучие" 
    }
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
        "Башня": "Башня говорит о внезапных переменах и разрушении старых структур. Это может быть болезненно, но необходимо для роста.",
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

async function getGeneralInterpretation(cards) {
    const cardNames = cards.map(card => card.name).join(', ');
    return `
        <div class="general-interpretation">
            <h3>✨ Общее толкование расклада:</h3>
            <p>В вашем раскладе выпали карты: ${cardNames}</p>
            <p>Этот расклад говорит о том, что:</p>
            <ul>
                <li>${cards[0].name} указывает на текущую ситуацию и ваше состояние</li>
                <li>${cards[1].name} показывает возможные препятствия или вызовы</li>
                <li>${cards[2].name} предлагает направление развития или решение</li>
            </ul>
            <p>Вместе эти карты создают уникальную историю, отражающую ваш путь и возможности. 
            Обратите внимание на взаимосвязь между картами и то, как они дополняют друг друга.</p>
        </div>
    `;
}

async function getTarotReading() {
    const mainResultDiv = document.getElementById('mainResult');
    mainResultDiv.innerHTML = ''; // Очищаем предыдущие результаты

    // Создаем контейнер для карт
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card-container';
    mainResultDiv.appendChild(cardContainer);

    // Выбираем 3 случайные уникальные карты
    const drawnCards = [];
    const usedIndices = new Set();
    while (drawnCards.length < 3) {
        const randomIndex = Math.floor(Math.random() * tarotCards.length);
        if (!usedIndices.has(randomIndex)) {
            drawnCards.push(tarotCards[randomIndex]);
            usedIndices.add(randomIndex);

            // Отображаем карту в контейнере
            const cardDiv = document.createElement('div');
            cardDiv.className = 'tarot-card';
            cardDiv.innerHTML = `
                <img src="${tarotCards[randomIndex].image}" alt="${tarotCards[randomIndex].name}">
                <h3>${tarotCards[randomIndex].name}</h3>
            `;
            cardContainer.appendChild(cardDiv);
        }
    }

    // Добавляем индикатор загрузки для общего толкования под картами
    const generalInterpretationLoading = document.createElement('div');
    generalInterpretationLoading.className = 'loading-indicator';
    generalInterpretationLoading.textContent = 'Загрузка общего толкования...';
    mainResultDiv.appendChild(generalInterpretationLoading);

    // Получаем и отображаем общее толкование
    const generalInterpretationHtml = await getGeneralInterpretation(drawnCards);
    generalInterpretationLoading.remove(); // Удаляем индикатор загрузки
    mainResultDiv.insertAdjacentHTML('beforeend', generalInterpretationHtml); // Добавляем общее толкование

    // Добавляем контейнер для индивидуальных толкований
    const individualInterpretationsDiv = document.createElement('div');
    individualInterpretationsDiv.className = 'individual-interpretations';
    mainResultDiv.appendChild(individualInterpretationsDiv);

    // Добавляем индивидуальные толкования с индикаторами загрузки
    drawnCards.forEach((card, index) => {
        const interpretationDiv = document.createElement('div');
        interpretationDiv.className = 'card-interpretation-item';
        interpretationDiv.innerHTML = `
            <h3>${card.name}</h3>
            <div class="loading-indicator">Загрузка толкования для ${card.name}...</div>
        `;
        individualInterpretationsDiv.appendChild(interpretationDiv);

        // Симулируем вызов API для индивидуального толкования (можно заменить на реальный вызов)
        setTimeout(() => {
            interpretationDiv.innerHTML = `
                <h3>${card.name}</h3>
                <p>${card.meaning}</p>
            `;
        }, 1000 + index * 500); // Симулируем задержку
    });
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

// Функция для тестирования случайного выбора карт
function testRandomCardSelection() {
    const drawnCards = new Set();
    const iterations = 100;
    let duplicates = 0;

    for (let i = 0; i < iterations; i++) {
        const availableCards = [...tarotCards];
        const selectedCards = [];

        for (let j = 0; j < 3; j++) {
            if (availableCards.length === 0) break;
            const randomIndex = Math.floor(Math.random() * availableCards.length);
            const randomCard = availableCards.splice(randomIndex, 1)[0];
            selectedCards.push(randomCard.name);
        }

        // Проверяем на дубликаты в текущем раскладе
        if (new Set(selectedCards).size !== selectedCards.length) {
            duplicates++;
        }

        // Добавляем карты в общий набор
        selectedCards.forEach(card => drawnCards.add(card));
    }

    console.log(`Тест случайного выбора карт:`);
    console.log(`Всего уникальных карт: ${drawnCards.size} из ${tarotCards.length}`);
    console.log(`Количество дубликатов в раскладах: ${duplicates}`);
    console.log(`Процент покрытия колоды: ${(drawnCards.size / tarotCards.length * 100).toFixed(2)}%`);
}

// Вызываем тест при загрузке страницы
window.addEventListener('load', testRandomCardSelection);

// Функция для тестирования отображения карт
async function testCardDisplay() {
    const resultMainDiv = document.getElementById('result');
    resultMainDiv.innerHTML = '';

    const resultContentDiv = document.createElement('div');
    resultContentDiv.classList.add('result-content', 'show');
    resultMainDiv.appendChild(resultContentDiv);

    // Тестируем отображение всех карт
    let cardsHTML = '<div class="tarot-spread">';
    for (const card of tarotCards) {
        cardsHTML += `
            <div class="card-display card-animation">
                <h2>${card.name}</h2>
                <img src="${card.image}" alt="${card.name}" onerror="this.onerror=null; this.src='placeholder.jpg';">
                <p>${card.meaning}</p>
            </div>
        `;
    }
    cardsHTML += '</div>';
    resultContentDiv.innerHTML = cardsHTML;

    // Проверяем загрузку изображений
    const images = resultContentDiv.getElementsByTagName('img');
    let loadedImages = 0;
    let failedImages = 0;

    for (const img of images) {
        if (img.complete) {
            if (img.naturalHeight === 0) {
                failedImages++;
            } else {
                loadedImages++;
            }
        } else {
            img.onload = () => loadedImages++;
            img.onerror = () => failedImages++;
        }
    }

    console.log(`Тест отображения карт:`);
    console.log(`Всего карт: ${tarotCards.length}`);
    console.log(`Успешно загруженных изображений: ${loadedImages}`);
    console.log(`Неудачных загрузок: ${failedImages}`);
}

// Добавляем кнопку для тестирования
const testButton = document.createElement('button');
testButton.textContent = 'Тест отображения';
testButton.onclick = testCardDisplay;
document.querySelector('.menu').appendChild(testButton); 