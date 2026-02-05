const quiz = [
  {
    q: "Saranya-ku Sivashankar romba pidikkuma? 😍",
    o: ["Ama ❤️", "Rompa Ama 😘", "Always 💕", "Ellamey ❤️"]
  },
  {
    q: "Namma love epdi irukanum?",
    o: ["Cute 😍", "Strong 💪", "Fun 😄", "Forever ♾️"]
  },
  {
    q: "Saranya smile-na Sivashankar-ku?",
    o: ["Addiction 😌", "Heart melt 🫠", "Peace 🤍", "Ellamey ❤️"]
  },
  {
    q: "Sivashankar heart full-aa yaar?",
    o: ["Friends", "Family", "Saranya ❤️", "World"]
  },
  {
    q: "Last one 😌 Sivashankar solradhu?",
    o: [
      "I like you",
      "I care for you",
      "I need you",
      "I LOVE YOU SARANYA ❤️"
    ]
  }
];

let i = 0;

function loadQuestion() {
  document.getElementById("question").innerText = quiz[i].q;

  document.getElementById("opt0").innerText = quiz[i].o[0];
  document.getElementById("opt1").innerText = quiz[i].o[1];
  document.getElementById("opt2").innerText = quiz[i].o[2];
  document.getElementById("opt3").innerText = quiz[i].o[3];
}

function nextQuestion() {
  i++;
  if (i < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = `
      <h1 style="color:#ff4d6d;">💖 I LOVE YOU SARANYA 💖</h1>
      <p style="font-size:18px;">Forever yours,<br><b>Sivashankar</b> 😘</p>
    `;
  }
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

window.onload = loadQuestion;
