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

async function getTarotReading() {
    const resultMainDiv = document.getElementById('result');
    resultMainDiv.innerHTML = '';

    const resultContentDiv = document.createElement('div');
    resultContentDiv.classList.add('result-content', 'show');
    resultMainDiv.appendChild(resultContentDiv);

    const drawnCards = [];
    const availableCards = [...tarotCards];

    let cardsHTML = '<div class="tarot-spread">';
    for (let i = 0; i < 3; i++) {
        if (availableCards.length === 0) break;
        const randomIndex = Math.floor(Math.random() * availableCards.length);
        const randomCard = availableCards.splice(randomIndex, 1)[0];

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
    resultContentDiv.innerHTML = cardsHTML;

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

    loadingDiv.remove();
    resultContentDiv.innerHTML += interpretationsHTML;
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
