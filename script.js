let quiz = [
  {
    question: "Saranya-ku Sivashankar romba pidikkuma? 😍",
    options: ["Ama ❤️", "Rompa Ama 😘", "Always 💕", "Ellamey ❤️"],
    answer: 3
  },
  {
    question: "Namma love eppovum?",
    options: ["1 day", "1 month", "Life long 💍", "Forever ♾️"],
    answer: 3
  },
  {
    question: "Saranya smile-na?",
    options: ["Cute", "Heart melt", "Dangerous 😜", "Ellamey"],
    answer: 3
  },
  {
    question: "Sivashankar heart yaar kitta?",
    options: ["Friends", "Family", "Saranya ❤️", "World"],
    answer: 2
  },
  {
    question: "Last question 😌",
    options: ["I like you", "I care you", "I need you", "I LOVE YOU ❤️"],
    answer: 3
  }
];

let current = 0;

function loadQuestion() {
  document.getElementById("question").innerText = quiz[current].question;

  for (let i = 0; i < 4; i++) {
    document.getElementById("opt" + i).innerText =
      quiz[current].options[i];
  }
}

function checkAnswer() {
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML =
      "<h2>I LOVE YOU SARANYA ❤️</h2><p>Forever – Sivashankar</p>";
  }
}

function playMusic() {
  let music = document.getElementById("bgMusic");
  music.play().catch(() => {
    alert("Tap again 🎵");
  });
}

window.onload = loadQuestion; 
