02.03 4:58 PM
const quiz = [
  {
    question: "1️⃣ Namma first time pesinadhu enga?",
    options: ["Instagram DM", "WhatsApp", "Face to face", "Friend introduce"],
    answer: 0
  },
  {
    question: "2️⃣ Sivashankar-ku romba pidicha food enna?",
    options: ["Briyani", "Pizza", "Dosa", "Ellamey Saranya kai-la irundha "],
    answer: 3
  },
  {
    question: "3️⃣ Saranya smile-na artham enna?",
    options: ["Cute", "Dangerous", "Heart melting ", "Ellamey"],
    answer: 3
  },
  {
    question: "4️⃣ Namma relationship strong-aa iruka reason?",
    options: ["Love", "Trust", "Understanding", "Ellamey ❤️"],
    answer: 3
  },
  {
    question: "5️⃣ Sivashankar sad-aa irundha solution?",
    options: ["Advice", "Chocolate", "Saranya hug 🤗", "Ellamey"],
    answer: 2
  },
  {
    question: "6️⃣ Saranya romba pidicha habit?",
    options: ["Smile", "Caring", "Possessive", "Ellamey"],
    answer: 3
  },
  {
    question: "7️⃣ Namma future dream?",
    options: ["World tour", "Peaceful life", "Success", "Ellam onna "],
    answer: 3
  },
  {
    question: "8️⃣ Fight aana apram enna nadakkum?",
    options: ["Silent", "Block", "Patch up", "Extra love "],
    answer: 3
  },
  {
    question: "9️⃣ Sivashankar life-la most important?",
    options: ["Friends", "Family", "Saranya ❤️", "Mobile"],
    answer: 2
  },
  {
    question: " Last Question  Saranya unaku enna?",
    options: ["Friend", "Love", "Future", "Everything ❤️"],
    answer: 3
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.question;
  q.options.forEach((opt, i) => {
    document.getElementById("opt" + i).innerText = opt;
  });
}

function checkAnswer(selected) {
  if (selected === quiz[current].answer) score++;
  current++;

  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML = `
      <h2>Quiz Mudinjudhu </h2>
      <p>Score: ${score} / ${quiz.length}</p>
      <h3>Saranya… regardless of score,</h3>
      <h2>I LOVE YOU ❤️</h2>
    `;
  }
}

function playMusic() {
  document.getElementById("bgMusic").play();
}

loadQuestion();
