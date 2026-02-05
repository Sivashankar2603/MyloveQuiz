const quiz = [
  {
    question: "1️⃣ Namma first time pesinadhu enga?",
    options: ["Instagram", "WhatsApp", "Face to face", "Friend introduce"],
    answer: 0
  },
  {
    question: "2️⃣ Sivashankar-ku romba pidicha food?",
    options: ["Briyani", "Pizza", "Dosa", "Saranya kai-la irundha ellamey 😜"],
    answer: 3
  },
  {
    question: "3️⃣ Saranya smile-na?",
    options: ["Cute", "Dangerous", "Heart melt 😍", "Ellamey"],
    answer: 3
  },
  {
    question: "4️⃣ Namma relationship strong-aa iruka reason?",
    options: ["Love", "Trust", "Understanding", "Ellamey ❤️"],
    answer: 3
  },
  {
    question: "5️⃣ Sivashankar sad-aa irundha?",
    options: ["Advice", "Sleep", "Saranya hug 🤗", "Chocolate"],
    answer: 2
  }
];

let current = 0;

function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;

  for (let i = 0; i < 4; i++) {
    document.getElementById("opt" + i).innerText = q.options[i];
  }
}

function checkAnswer(index) {
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML =
      "<h2>I LOVE YOU SARANYA ❤️</h2><p>Forever yours – Sivashankar</p>";
  }
}

function playMusic() {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    alert("Tap once more 🎵");
  });
}

window.onload = loadQuestion;
