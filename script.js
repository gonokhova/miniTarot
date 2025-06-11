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
