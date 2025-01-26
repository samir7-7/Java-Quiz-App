const quizEl = document.getElementById("quiz");
const startBtn = document.getElementById("start");
const questionBox = document.getElementById("questionBox");
const submitBtn = document.getElementById("submit");
const numQuestionsInput = document.getElementById("num-questions");

let index = 0;
let correct = 0;
let selectedCount = 1;
let total = quizData.length;
let wrongQuestions = [];
let usedQuestionIndices = [];
let currentQuestionIndex = null;

const getRandomUnusedQuestion = () => {
  let availableIndices = Array.from(Array(quizData.length).keys()).filter(
    (i) => !usedQuestionIndices.includes(i)
  );

  if (availableIndices.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * availableIndices.length);
  const selectedIndex = availableIndices[randomIndex];
  usedQuestionIndices.push(selectedIndex);
  return selectedIndex;
};

startBtn.addEventListener("click", () => {
  usedQuestionIndices = [];
  index = 0;
  correct = 0;
  selectedCount = Math.min(Number(numQuestionsInput.value), quizData.length);
  wrongQuestions = [];
  currentQuestionIndex = getRandomUnusedQuestion();
  loadQuestion();
  document.querySelector(".question-selector").style.display = "none";
  quizEl.style.display = "block";
});

submitBtn.addEventListener("click", () => {
  const answers = getAnswers();
  if (answers.length === 0) return alert("Please select at least one answer!");

  const data = quizData[currentQuestionIndex];
  const options = document.querySelectorAll(".box");

  options.forEach((option) => {
    const input = option.querySelector("input");
    if (data.correct.includes(input.value)) {
      option.classList.add("correct");
    } else if (answers.includes(input.value)) {
      option.classList.add("wrong");
    }
  });

  const isCorrect =
    answers.every((ans) => data.correct.includes(ans)) &&
    answers.length === data.correct.length;

  if (!isCorrect) {
    wrongQuestions.push({
      question: data.question,
      userAnswer: answers,
      correctAnswer: data.correct,
      options: { a: data.a, b: data.b, c: data.c, d: data.d },
    });
  } else {
    correct++;
  }

  setTimeout(() => {
    index++;
    if (index < selectedCount) {
      currentQuestionIndex = getRandomUnusedQuestion();
      loadQuestion();
    } else {
      showResults();
    }
  }, 700);
});

const getAnswers = () => {
  const answers = [];
  document.querySelectorAll("input[type='checkbox']").forEach((input) => {
    if (input.checked) answers.push(input.value);
  });
  return answers;
};

const loadQuestion = () => {
  if (currentQuestionIndex === null) {
    showResults();
    return;
  }

  reset();
  const data = quizData[currentQuestionIndex];
  questionBox.innerHTML = `${index + 1}) ${data.question}`;
  const options = document.querySelectorAll(".box");

  options.forEach((option, i) => {
    const input = option.querySelector("input");
    input.type = "checkbox";
    option.classList.remove("correct", "wrong");
    option.querySelector("label").innerText = data[Object.keys(data)[i + 1]];
  });
};

const reset = () => {
  document.querySelectorAll("input[type='checkbox']").forEach((input) => {
    input.checked = false;
  });

  document.querySelectorAll(".box").forEach((box) => {
    box.classList.remove("correct", "wrong");
  });
};

const showResults = () => {
  quizEl.innerHTML = `
    <div class="col">
      <h3>You scored ${correct} / ${selectedCount}</h3>
    </div>
  `;

  if (wrongQuestions.length > 0) {
    if (wrongQuestions.length > 5) {
      document
        .querySelector(".container")
        .setAttribute("style", "position: relative; top: 103%");
    }
    wrongQuestions.forEach((q, i) => {
      // Convert correctAnswer to array if it's not already
      const correctAnswers = Array.isArray(q.correctAnswer)
        ? q.correctAnswer
        : [q.correctAnswer];

      const wrongHtml = `
        <div class="wrong-question">
          <h4>${i + 1}) ${q.question}</h4>
          <ul>
            <li ${q.userAnswer.includes("a") ? 'style="color: red;"' : ""}>
              A. ${q.options.a}
            </li>
            <li ${q.userAnswer.includes("b") ? 'style="color: red;"' : ""}>
              B. ${q.options.b}
            </li>
            <li ${q.userAnswer.includes("c") ? 'style="color: red;"' : ""}>
              C. ${q.options.c}
            </li>
            <li ${q.userAnswer.includes("d") ? 'style="color: red;"' : ""}>
              D. ${q.options.d}
            </li>
          </ul>
          <p style="color: green;">Correct Answer(s): ${correctAnswers
            .map((ans) => ans.toUpperCase())
            .join(", ")}</p>
        </div>
      `;
      quizEl.innerHTML += wrongHtml;
    });
  }
};
