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

function drawCard() {
    const resultDiv = document.querySelector('.result-content');
    const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    
    resultDiv.innerHTML = `
        <h2>${randomCard.name}</h2>
        <img src="${randomCard.image}" alt="${randomCard.name}">
        <p>${randomCard.meaning}</p>
    `;
    
    resultDiv.classList.add('show');
}

function yesNo() {
    const resultDiv = document.querySelector('.result-content');
    const randomAnswer = yesNoAnswers[Math.floor(Math.random() * yesNoAnswers.length)];
    
    resultDiv.innerHTML = `
        <h2>Ответ карт:</h2>
        <p class="answer">${randomAnswer}</p>
    `;
    
    resultDiv.classList.add('show');
}

// Add animation to result content
document.addEventListener('DOMContentLoaded', () => {
    const resultContent = document.querySelector('.result-content');
    if (resultContent) {
        resultContent.classList.add('show');
    }
});

async function getAIInterpretation(cardName) {
  const apiKey = "7876942204:AAHjs9Px4CkRoqjPrIwPy1KAOZmJPg-iCVk"; 
  const prompt = `Расшифруй карту Таро "${cardName}" как профессиональный таролог.`;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150
      },
      {
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json"
        }
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Ошибка API:", error);
    return "Не удалось получить толкование.";
  }
}
