const quizData = [
  {
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborghinis",
    correct: "b",
  },
];

const quizEl = document.getElementById("quiz");
const startBtn = document.getElementById("start");
const questionBox = document.getElementById("questionBox");
const submitBtn = document.getElementById("submit");
const numQuestionsInput = document.getElementById("num-questions");

let index = 0;
let correct = 0;
let selectedCount = 1;
let total = quizData.length;

startBtn.addEventListener("click", () => {
  selectedCount = Math.min(Number(numQuestionsInput.value), total);
  index = 0;
  correct = 0;
  loadQuestion();
  document.querySelector(".question-selector").style.display = "none";
  quizEl.style.display = "block";
});

submitBtn.addEventListener("click", () => {
  const ans = getAnswer();
  if (!ans) return alert("Please select an answer!");

  const data = quizData[index];
  const options = document.querySelectorAll(".box");

  options.forEach((option) => {
    if (option.querySelector("input").value === data.correct) {
      option.classList.add("correct");
    } else if (option.querySelector("input").checked) {
      option.classList.add("wrong");
    }
  });

  if (ans === data.correct) correct++;

  setTimeout(() => {
    index++;
    if (index < selectedCount) {
      loadQuestion();
    } else {
      quizEl.innerHTML = `<div class="col"><h3>You scored ${correct} / ${selectedCount}</h3></div>`;
    }
  }, 1500);
});

const loadQuestion = () => {
  reset();
  const data = quizData[index];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  const options = document.querySelectorAll(".box");
  options[0].querySelector("label").innerText = data.a;
  options[1].querySelector("label").innerText = data.b;
  options[2].querySelector("label").innerText = data.c;
  options[3].querySelector("label").innerText = data.d;
  options.forEach((option) => {
    option.classList.remove("correct", "wrong");
  });
};

const getAnswer = () => {
  let ans;
  document.querySelectorAll("input[type='radio']").forEach((input) => {
    if (input.checked) ans = input.value;
  });
  return ans;
};

const reset = () => {
  document.querySelectorAll("input[type='radio']").forEach((input) => {
    input.checked = false;
  });
};
