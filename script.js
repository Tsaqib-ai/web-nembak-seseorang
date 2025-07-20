const questions = [
  {
    question: "Kalau ada dua pilihan: coklat atau stroberi, kamu pilih apa?",
    options: ["Coklat 🍫", "Stroberi 🍓"]
  },
  {
    question: "Kalau liburan, kamu lebih suka ke gunung atau pantai?",
    options: ["Gunung 🏞️", "Pantai 🏖️"]
  },
  {
    question: "Kalau aku ngajak jalan, kamu bakal...?",
    options: ["Langsung siap!", "Tanya dulu mau ke mana 😆"]
  },
  {
    question: "Siapa yang lagi sering bikin kamu senyum akhir-akhir ini?",
    options: ["Teman dekat", "Kamu tau siapa 😳"]
  }
];

let index = 0;

function nextQuestion() {
  const card = document.getElementById('card');

  if (index < questions.length) {
    const q = questions[index];
    let html = `<h1>Pertanyaan ${index + 1}</h1><p>${q.question}</p>`;
    q.options.forEach(opt => {
      html += `<button class="btn" onclick="nextQuestion()">${opt}</button>`;
    });
    card.innerHTML = html;
    index++;
  } else {
    showFinalQuestion();
  }
}

function showFinalQuestion() {
  const card = document.getElementById('card');
  card.innerHTML = `
    <h1>Terakhir nih... 😳</h1>
    <p><strong>Hanum, mau nggak jadi pacarku?</strong></p>
    <button class="btn" onclick="yesAnswer()">Iya 💖</button>
    <button class="btn" onclick="yesAnswer()">Iya Banget! 😍</button>
  `;
}

function yesAnswer() {
  const card = document.getElementById('card');
  card.innerHTML = `
    <h1>YEAY! 🎉</h1>
    <p>Mulai sekarang, kamu resmi jadi orang paling spesial buatku 💘</p>
    <p>Makasih udah jawab semuanya, Hanum 🥰</p>
  `;
  startLoveRain();
}

function startLoveRain() {
  const interval = setInterval(() => {
    const love = document.createElement('div');
    love.classList.add('love');
    love.innerText = '❤️';
    love.style.left = Math.random() * 100 + 'vw';
    love.style.fontSize = Math.random() * 10 + 20 + 'px';
    document.body.appendChild(love);

    setTimeout(() => {
      love.remove();
    }, 3000);
  }, 200);

  setTimeout(() => clearInterval(interval), 5000);
}
