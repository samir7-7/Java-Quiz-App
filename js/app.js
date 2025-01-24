const quizData = [
  {
    question: "Which of the following is a way to write a single-line comment in Java?",
    a: "// This is a comment",
    b: "/* This is a comment */",
    c: "# This is a comment",
    d: "<!-- This is a comment -->",
    correct: ["a", "b"],
  },
  {
    question: "Which of the following is a way to write a single-line comment in Python?",
    a: "// This is a comment",
    b: "/* This is a comment */",
    c: "# This is a comment",
    d: "<!-- This is a comment -->",
    correct: ["c"],
  },
  {
    question: "Which of the following is a way to write a single-line comment in HTML?",
    a: "// This is a comment",
    b: "/* This is a comment */",
    c: "# This is a comment",
    d: "<!-- This is a comment -->",
    correct: ["d"],
  },
  {
    question: "Which of the following is a way to write a single-line comment in C++?",
    a: "// This is a comment",
    b: "/* This is a comment */",
    c: "# This is a comment",
    d: "<!-- This is a comment -->",
    correct: ["a"],
  },
  {
    question: "Which of the following is a way to write a single-line comment in Ruby?",
    a: "// This is a comment",
    b: "/* This is a comment */",
    c: "# This is a comment",
    d: "<!-- This is a comment -->",
    correct: ["c"],
  },
  {
    question: "Which of the following is a way to write a single-line comment in PHP?",
    a: "// This is a comment",
    b: "/* This is a comment */",
    c: "# This is a comment",
    d: "<!-- This is a comment -->",
    correct: ["a"],
  }
];

let userAnswerHistory = [];
const quizEl = document.getElementById("quiz");
const startBtn = document.getElementById("start");
const questionBox = document.getElementById("questionBox");
const submitBtn = document.getElementById("submit");
const numQuestionsInput = document.getElementById("num-questions");

let index = 0;
let correct = 0;
let selectedCount = 1;
let total = quizData.length;
let usedQuestions = [];
let shuffledQuestions = [];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

startBtn.addEventListener("click", () => {
  selectedCount = Math.min(Number(numQuestionsInput.value), total);
  index = 0;
  correct = 0;
  usedQuestions = [];
  shuffledQuestions = shuffleArray([...quizData]);
  loadQuestion();
  document.querySelector(".question-selector").style.display = "none";
  quizEl.style.display = "block";
});

submitBtn.addEventListener("click", () => {
  const answers = getAnswers();
  if (answers.length === 0) return alert("Please select at least one answer!");

  const data = shuffledQuestions[index];
  const options = document.querySelectorAll(".box");

  userAnswerHistory.push({
    question: data.question,
    userAnswers: answers,
    correctAnswers: data.correct,
    options: { a: data.a, b: data.b, c: data.c, d: data.d }
  });

  options.forEach((option) => {
    const input = option.querySelector("input");
    if (data.correct.includes(input.value)) {
      option.classList.add("correct");
    } else if (answers.includes(input.value)) {
      option.classList.add("wrong");
    }
  });

  const isCorrect = answers.every(ans => data.correct.includes(ans)) &&
    answers.length === data.correct.length;
  if (isCorrect) correct++;

  setTimeout(() => {
    index++;
    if (index < selectedCount) {
      loadQuestion();
    } else {
      displaySummary();
    }
  }, 700);
});

const loadQuestion = () => {
  reset();
  const data = shuffledQuestions[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  const options = document.querySelectorAll(".box");
  options[0].querySelector("label").innerText = data.a;
  options[1].querySelector("label").innerText = data.b;
  options[2].querySelector("label").innerText = data.c;
  options[3].querySelector("label").innerText = data.d;
  options.forEach((option) => {
    option.classList.remove("correct", "wrong");
    const input = option.querySelector("input");
    input.type = "checkbox";
  });
};

const getAnswers = () => {
  const answers = [];
  document.querySelectorAll("input[type='checkbox']").forEach((input) => {
    if (input.checked) answers.push(input.value);
  });
  return answers;
};

const reset = () => {
  document.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = false;
  });
};

const displaySummary = () => {
  let html = `
    <div class="summary">
      <h3>Final Score: ${correct}/${selectedCount}</h3>
      <div class="history">
  `;

  userAnswerHistory.forEach((attempt, i) => {
    const isCorrect = attempt.userAnswers.every(ans =>
      attempt.correctAnswers.includes(ans)) &&
      attempt.userAnswers.length === attempt.correctAnswers.length;

    html += `
      <div class="attempt ${isCorrect ? 'correct' : 'wrong'}">
        <p><strong>Question ${i + 1}:</strong> ${attempt.question}</p>
        <p>Options:</p>
        <ul>
          <li>A: ${attempt.options.a}</li>
          <li>B: ${attempt.options.b}</li>
          <li>C: ${attempt.options.c}</li>
          <li>D: ${attempt.options.d}</li>
        </ul>
        <p>Your answer(s): ${attempt.userAnswers.join(', ')}</p>
        <p>Correct answer(s): ${attempt.correctAnswers.join(', ')}</p>
      </div>
    `;
  });

  html += `
      </div>
      <button onclick="location.reload()">Try Again</button>
    </div>
  `;

  quizEl.innerHTML = html;
};