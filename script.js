const intro = document.getElementById("intro");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const playBtn = document.getElementById("playBtn");
const startBtn = document.getElementById("startBtn");

const song = document.getElementById("song");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

let currentQuestion = 0;

const questions = [
  {
    q: "Saranya en life-la enna?",
    o: ["Ama ❤️", "Romba Athigam 😍", "Always 💞", "Ellamey 💖"]
  },
  {
    q: "Naa un kitta first time feel pannadhu?",
    o: ["Love 😍", "Peace 😌", "Happiness 😊", "Ellamey 💖"]
  },
  {
    q: "Un sirippu paatha odaney?",
    o: ["Heart melt 💓", "Stress pochu", "Smile vandhudhu", "Ellamey ❤️"]
  },
  {
    q: "Unaku naa epovum irupena?",
    o: ["Always 💕", "Forever ♾️", "Life full 🥰", "Ellamey ❤️"]
  },
  {
    q: "Un voice ketta odaney?",
    o: ["Calm 😌", "Happy 😄", "Love ❤️", "Ellamey 💖"]
  },
  {
    q: "Indha quiz yaaruku?",
    o: ["Saranya 😍", "En Queen 👑", "My Love 💞", "Ellamey ❤️"]
  },
  {
    q: "Unaku naa enna?",
    o: ["Care 🫶", "Support 🤝", "Love ❤️", "Ellamey 💖"]
  },
  {
    q: "Naa un mela vechurukura feeling?",
    o: ["True ❤️", "Deep 💓", "Pure 🤍", "Ellamey 💖"]
  },
  {
    q: "Un kooda future?",
    o: ["Bright ✨", "Happy 😊", "Love 💞", "Ellamey ❤️"]
  },
  {
    q: "Last question… Saranya, will you be mine forever?",
    o: ["Yes ❤️", "Always ♾️", "Already Yours 💍", "Till End 💖"]
  }
];

playBtn.onclick = () => {
  song.play();
  startBtn.classList.remove("hidden");
};

startBtn.onclick = () => {
  intro.classList.remove("active");
  quiz.classList.add("active");
  loadQuestion();
};

function loadQuestion() {
  questionEl.innerText = questions[currentQuestion].q;
  optionsEl.innerHTML = "";

  questions[currentQuestion].o.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = nextQuestion;
    optionsEl.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    quiz.classList.remove("active");
    result.classList.add("active");
    startConfetti();
  }
}

/* ❤️ HEART RAIN */
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

/* 🎉 CONFETTI BLAST */
function startConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("span");
    confetti.innerText = "💖";
    confetti.style.position = "absolute";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.fontSize = "20px";
    confetti.style.animation = "fall 4s linear";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
  }
}
