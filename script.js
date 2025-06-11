const tarotCards = [
  { name: "Шут", meaning: "Новые начинания, свобода" },
  { name: "Маг", meaning: "Сила воли, мастерство" },
  { name: "Звезда", meaning: "Надежда, вдохновение" }
];

function drawCard() {
  const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];
  document.getElementById("result").innerHTML = `
    <h3>${randomCard.name}</h3>
    <p>${randomCard.meaning}</p>
  `;
}

function yesNo() {
  const answers = ["✅ Да", "❌ Нет", "🔮 Возможно"];
  const answer = answers[Math.floor(Math.random() * answers.length)];
  document.getElementById("result").innerHTML = `<h3>${answer}</h3>`;
}
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
