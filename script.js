// Tarot card data
const tarotCards = [
    {
        name: "Шут",
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/fool.jpg",
        meaning: "Начало нового пути, спонтанность, свобода"
    },
    {
        name: "Маг",
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/magician.jpg",
        meaning: "Сила воли, мастерство, реализация"
    },
    {
        name: "Верховная Жрица",
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/high-priestess.jpg",
        meaning: "Интуиция, тайны, внутренний голос"
    },
    {
        name: "Императрица",
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/empress.jpg",
        meaning: "Изобилие, материнство, творчество"
    },
    {
        name: "Император",
        image: "https://raw.githubusercontent.com/gonokhova/miniTarot/main/images/emperor.jpg",
        meaning: "Власть, структура, контроль"
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
        "Император": "Император говорит о необходимости структуры и контроля. Возможно, вам нужно проявить больше решительности и взять ситуацию в свои руки."
    };
    
    return interpretations[cardName] || "Эта карта призывает вас заглянуть внутрь себя и найти ответы на свои вопросы.";
}

async function drawCard() {
    const resultDiv = document.querySelector('.result-content');
    const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    
    // Очищаем предыдущий результат
    resultDiv.innerHTML = '';
    
    // Добавляем карту с анимацией
    const cardHTML = `
        <div class="card-animation">
            <h2>${randomCard.name}</h2>
            <img src="${randomCard.image}" alt="${randomCard.name}">
            <p>${randomCard.meaning}</p>
        </div>
    `;
    resultDiv.innerHTML = cardHTML;
    
    // Добавляем индикатор загрузки для ИИ толкования
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = '<div class="loading"></div> ИИ анализирует карту...';
    resultDiv.appendChild(loadingDiv);
    
    // Получаем и отображаем ИИ толкование
    const interpretation = await getAIInterpretation(randomCard.name);
    loadingDiv.remove();
    
    const interpretationDiv = document.createElement('div');
    interpretationDiv.className = 'interpretation';
    interpretationDiv.innerHTML = `
        <h3>✨ Толкование ИИ:</h3>
        <p>${interpretation}</p>
    `;
    resultDiv.appendChild(interpretationDiv);
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

// Add animation to result content
document.addEventListener('DOMContentLoaded', () => {
    const resultContent = document.querySelector('.result-content');
    if (resultContent) {
        resultContent.classList.add('show');
    }
});
