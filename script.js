let quiz = [
  {
    question: "Saranya-ku Sivashankar romba pidikkuma? 😍",
    options: ["Ama ❤️", "Rompa Ama 😘", "Always 💕", "Ellamey ❤️"]
  },
  {
    question: "Namma love eppovum epdi irukanum?",
    options: ["Sweet 🍫", "Strong 💪", "Fun 😄", "Forever ♾️"]
  },
  {
    question: "Saranya smile-na Sivashankar-ku?",
    options: ["Cute 😍", "Heart melt 🫠", "Addiction 😌", "Ellamey ❤️"]
  },
  {
    question: "Sivashankar heart full-aa yaar?",
    options: ["Friends", "Family", "Saranya ❤️", "World"]
  },
  {
    question: "Last question 😌 Sivashankar solradhu?",
    options: ["I like you", "I care you", "I need you", "I LOVE YOU SARANYA ❤️"]
  }
];

let current = 0;

function loadQuestion() {
  document.getElementById("question").innerText =
    quiz[current].question;

  for (let i = 0; i < 4; i++) {
    document.getElementById("opt" + i).innerText =
      quiz[current].options[i];
  }
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = `
      <h2>💖 I LOVE YOU SARANYA 💖</h2>
      <p>Forever yours,<br><b>Sivashankar</b> 😘</p>
    `;
  }
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

window.onload = loadQuestion;
