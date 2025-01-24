const quizData = [
  {
    question:
      "Which of the following is a way to write a single-line comment in Java?",
    a: "// This is a comment",
    b: "/* This is a comment */",
    c: "# This is a comment",
    d: "<!-- This is a comment -->",
    correct: "a",
  },
  {
    question: "What is the default value of a boolean variable in Java?",
    a: "true",
    b: "false",
    c: "0",
    d: "null",
    correct: "b",
  },
  {
    question: "How many primitive data types are supported by Java?",
    a: "6",
    b: "7",
    c: "8",
    d: "9",
    correct: "c",
  },
  {
    question: "Which data type is used to store a single character in Java?",
    a: "String",
    b: "char",
    c: "Character",
    d: "boolean",
    correct: "b",
  },
  {
    question: "What symbol is used to denote a multi-line comment in Java?",
    a: "//",
    b: "/* ... */",
    c: "#",
    d: "<!-- ... -->",
    correct: "b",
  },
  {
    question: "Which of the following is a floating point data type in Java?",
    a: "int",
    b: "byte",
    c: "float",
    d: "char",
    correct: "c",
  },
  {
    question: "What is the maximum value of a byte in Java?",
    a: "127",
    b: "255",
    c: "128",
    d: "64",
    correct: "a",
  },
  {
    question:
      "Which of the following is NOT a non-primitive data type in Java?",
    a: "String",
    b: "Array",
    c: "int",
    d: "Class",
    correct: "c",
  },
  {
    question: "What does the char type represent in Java?",
    a: "A string",
    b: "A single character",
    c: "An integer",
    d: "A boolean value",
    correct: "b",
  },
  {
    question: "Which of the following data types can store decimal values?",
    a: "int",
    b: "float",
    c: "byte",
    d: "char",
    correct: "b",
  },
  {
    question: "What is the default value of an uninitialized int variable?",
    a: "0",
    b: "null",
    c: "undefined",
    d: "1",
    correct: "a",
  },
  {
    question: "Which of the following is an integer data type in Java?",
    a: "float",
    b: "double",
    c: "int",
    d: "char",
    correct: "c",
  },
  {
    question: "How do you denote a documentation comment in Java?",
    a: "//",
    b: "/* ... */",
    c: "/** ... */",
    d: "<!-- ... -->",
    correct: "c",
  },
  {
    question: "What is the size of a short data type in Java?",
    a: "8 bits",
    b: "16 bits",
    c: "32 bits",
    d: "64 bits",
    correct: "b",
  },
  {
    question:
      "Which of the following cannot be used as a variable name in Java?",
    a: "myVariable",
    b: "7up",
    c: "my_variable",
    d: "$variable",
    correct: "b",
  },
  {
    question: "What is the range of a boolean type in Java?",
    a: "0 to 1",
    b: "true or false",
    c: "-1 to 1",
    d: "any integer",
    correct: "b",
  },
  {
    question: "Which operator is used for assignment in Java?",
    a: "==",
    b: "=",
    c: ":",
    d: "<-",
    correct: "b",
  },
  {
    question: "What is the minimum value of a byte in Java?",
    a: "0",
    b: "-128",
    c: "1",
    d: "-255",
    correct: "b",
  },
  {
    question: "Which of the following is a valid char literal?",
    a: "'abc'",
    b: "'A'",
    c: '"A"',
    d: "A",
    correct: "b",
  },
  {
    question: "Which of the following is a primitive data type?",
    a: "String",
    b: "ArrayList",
    c: "int",
    d: "HashMap",
    correct: "c",
  },
  {
    question: "What is the suffix for a float literal in Java?",
    a: "d",
    b: "f",
    c: "F",
    d: "both b and c",
    correct: "d",
  },
  {
    question: "What is the default value of a char variable?",
    a: "' '",
    b: "'0'",
    c: "0",
    d: "'\\u0000'",
    correct: "d",
  },
  {
    question: "Which keyword is used to define a class in Java?",
    a: "class",
    b: "define",
    c: "object",
    d: "struct",
    correct: "a",
  },
  {
    question: "Which of the following is a non-primitive data type?",
    a: "int",
    b: "char",
    c: "String",
    d: "boolean",
    correct: "c",
  },
  {
    question: "What type of comment is used for generating documentation?",
    a: "Single line",
    b: "Multi-line",
    c: "Documentation",
    d: "Inline",
    correct: "c",
  },
  {
    question: "How many bits are in a float in Java?",
    a: "32",
    b: "64",
    c: "16",
    d: "8",
    correct: "a",
  },
  {
    question: "Which of the following is a valid multi-line comment?",
    a: "/* Comment */",
    b: "// Comment",
    c: "# Comment",
    d: "<!-- Comment -->",
    correct: "a",
  },
  {
    question: "What is the maximum value of a short in Java?",
    a: "32767",
    b: "255",
    c: "128",
    d: "65535",
    correct: "a",
  },
  {
    question: "Which type is used to store true/false values?",
    a: "int",
    b: "boolean",
    c: "char",
    d: "float",
    correct: "b",
  },
  {
    question: "What is the default value of an uninitialized object reference?",
    a: "0",
    b: "null",
    c: "undefined",
    d: "empty",
    correct: "b",
  },
  {
    question: "Which of the following can be used as an identifier in Java?",
    a: "1stVariable",
    b: "my-variable",
    c: "$myVariable",
    d: "my variable",
    correct: "c",
  },
  {
    question: "What is the size of a double data type in Java?",
    a: "32 bits",
    b: "64 bits",
    c: "16 bits",
    d: "128 bits",
    correct: "b",
  },
  {
    question: "How do you declare a boolean variable in Java?",
    a: "boolean isTrue = 1;",
    b: "boolean isTrue = true;",
    c: "boolean isTrue = 'true';",
    d: "boolean isTrue = '1';",
    correct: "b",
  },
  {
    question: "Which of the following is NOT a floating-point type?",
    a: "float",
    b: "double",
    c: "decimal",
    d: "both a and b",
    correct: "c",
  },
  {
    question: "What is the range of values for an int in Java?",
    a: "-2^31 to 2^31-1",
    b: "-2^15 to 2^15-1",
    c: "-128 to 127",
    d: "0 to 255",
    correct: "a",
  },
  {
    question:
      "Which of the following is a valid way to define a multi-line comment?",
    a: "// comment",
    b: "# comment",
    c: "/* comment */",
    d: "<!-- comment -->",
    correct: "c",
  },
  {
    question: "What is the default value of a String variable?",
    a: "''",
    b: "0",
    c: "null",
    d: "undefined",
    correct: "c",
  },
  {
    question: "Which primitive type is used for creating arrays?",
    a: "int",
    b: "double",
    c: "char",
    d: "none of the above",
    correct: "d",
  },
  {
    question: "What is the value range of a char in Java?",
    a: "0 to 255",
    b: "0 to 65535",
    c: "-128 to 127",
    d: "0 to 100",
    correct: "b",
  },
  {
    question: "Which of the following keywords is used to declare a variable?",
    a: "var",
    b: "let",
    c: "const",
    d: "int",
    correct: "d",
  },
  {
    question: "Which of the following is true regarding Java?",
    a: "Java is a weakly typed language.",
    b: "Java supports multiple inheritance.",
    c: "Java is a strongly typed language.",
    d: "Java uses pointers.",
    correct: "c",
  },
  {
    question: "Which type of comment can span multiple lines?",
    a: "Single line",
    b: "Documentation",
    c: "Multi-line",
    d: "Inline",
    correct: "c",
  },
  {
    question: "How do you declare a variable of type float?",
    a: "float myVar = 3.14;",
    b: "float myVar = 3.14F;",
    c: "float myVar = 3.14d;",
    d: "float myVar = '3.14';",
    correct: "b",
  },
  {
    question: "What is the default value of a char variable in Java?",
    a: "' '",
    b: "'0'",
    c: "'\\u0000'",
    d: "'null'",
    correct: "c",
  },
  {
    question: "Which of the following is a valid identifier?",
    a: "my variable",
    b: "myVariable",
    c: "2ndVariable",
    d: "$my-variable",
    correct: "b",
  },
  {
    question: "How many bits are in a long in Java?",
    a: "32",
    b: "64",
    c: "16",
    d: "8",
    correct: "b",
  },
  {
    question: "What is the minimum value of a short in Java?",
    a: "-32,768",
    b: "0",
    c: "-128",
    d: "1",
    correct: "a",
  },
  {
    question:
      "Which of the following is a valid way to denote a String in Java?",
    a: "'Hello'",
    b: '"Hello"',
    c: "Hello",
    d: "Hello",
    correct: "b",
  },
  {
    question: "What is the size of a boolean in Java?",
    a: "1 bit",
    b: "8 bits",
    c: "16 bits",
    d: "64 bits",
    correct: "a",
  },
  {
    question: "How do you express hexadecimal values for char types?",
    a: "0x",
    b: "#",
    c: "0h",
    d: "0b",
    correct: "a",
  },
  {
    question: "Which of the following data types is used for large numbers?",
    a: "int",
    b: "float",
    c: "long",
    d: "boolean",
    correct: "c",
  },
  {
    question: "Which type of variable must be initialized before use?",
    a: "Instance variable",
    b: "Static variable",
    c: "Local variable",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "What does the default value of a variable depend on?",
    a: "Variable type",
    b: "Variable name",
    c: "Variable scope",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Which of the following is a floating-point literal?",
    a: "3.14",
    b: "3.14f",
    c: "3.14d",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "What is the maximum value of a long in Java?",
    a: "2^63 - 1",
    b: "2^32 - 1",
    c: "2^31 - 1",
    d: "2^16 - 1",
    correct: "a",
  },
  {
    question: "What type of variable is declared within a method?",
    a: "Instance variable",
    b: "Static variable",
    c: "Local variable",
    d: "Global variable",
    correct: "c",
  },
  {
    question: "Which of the following is NOT a primitive type?",
    a: "int",
    b: "char",
    c: "String",
    d: "boolean",
    correct: "c",
  },
  {
    question: "What is the purpose of comments in Java?",
    a: "To execute code",
    b: "To explain code",
    c: "To compile code",
    d: "To debug code",
    correct: "b",
  },
  {
    question: "How do you denote a boolean value in Java?",
    a: "1 or 0",
    b: "true or false",
    c: "yes or no",
    d: "on or off",
    correct: "b",
  },
  {
    question: "What does the final keyword indicate when used with a variable?",
    a: "Variable is constant",
    b: "Variable can be changed",
    c: "Variable is static",
    d: "Variable is local",
    correct: "a",
  },
  {
    question:
      "Which of the following is a valid way to declare an integer variable?",
    a: "int num = 5;",
    b: "integer num = 5;",
    c: "num = 5;",
    d: "int num;",
    correct: "a",
  },
  {
    question: "What is the value of the following expression: 10 == 10?",
    a: "true",
    b: "false",
    c: "1",
    d: "0",
    correct: "a",
  },
  {
    question: "Which of the following is used to concatenate strings in Java?",
    a: "+",
    b: "&",
    c: "||",
    d: "&&",
    correct: "a",
  },
  {
    question: "What is the correct way to create a constant variable?",
    a: "const int x = 10;",
    b: "final int x = 10;",
    c: "static int x = 10;",
    d: "constant int x = 10;",
    correct: "b",
  },
  {
    question: "Which of the following is NOT a valid identifier?",
    a: "$myVar",
    b: "_myVar",
    c: "2myVar",
    d: "myVar123",
    correct: "c",
  },
  {
    question: "What is the result of the expression: 5 + 3 * 2?",
    a: "16",
    b: "11",
    c: "10",
    d: "13",
    correct: "b",
  },
  {
    question: "Which of the following is a character literal?",
    a: "'A'",
    b: '"A"',
    c: "A",
    d: "A'",
    correct: "a",
  },
  {
    question: "What is the purpose of the this keyword in Java?",
    a: "Refer to the current object",
    b: "Create a new object",
    c: "Access static members",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Which of the following is used for logical operations?",
    a: "==",
    b: "&&",
    c: "+",
    d: "-",
    correct: "b",
  },
  {
    question:
      "What is the output of the following code: System.out.println(5 + 3);?",
    a: "8",
    b: "53",
    c: "Error",
    d: "5 + 3",
    correct: "a",
  },
  {
    question: "What is a variable in programming?",
    a: "A fixed value",
    b: "A container for data",
    c: "A type of function",
    d: "None of the above",
    correct: "b",
  },
  {
    question: "Which of the following is a valid way to initialize a variable?",
    a: "int num;",
    b: "int num = 5;",
    c: "num = 5;",
    d: "Both a and b",
    correct: "d",
  },
  {
    question: "What does the static keyword indicate?",
    a: "Variable is constant",
    b: "Variable belongs to the class",
    c: "Variable is local",
    d: "Variable is global",
    correct: "b",
  },
  {
    question: "Which of the following is NOT a valid boolean expression?",
    a: "true && false",
    b: "true || false",
    c: "5 > 3",
    d: "5 + 3",
    correct: "d",
  },
  {
    question: "What is the result of the expression: 10 > 5?",
    a: "true",
    b: "false",
    c: "1",
    d: "0",
    correct: "a",
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
  }, 700);
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
