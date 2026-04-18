function startQuiz() {
  document.getElementById("quiz").innerHTML = `
    <h3>Question 1: What is 2 + 2?</h3>
    <button onclick="answer(true)">4</button>
    <button onclick="answer(false)">5</button>
  `;
}

function answer(correct) {
  if (correct) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}
