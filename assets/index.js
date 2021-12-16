const add_choice = document.querySelector(".add_choice");
const answers = document.querySelector(".answers");
const remove_answer = document.querySelectorAll(".fas.fa-trash");
const form = document.querySelector(".quiz-builder");
const allFormBtns = form.querySelectorAll("button");
allFormBtns.forEach((elem) => {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
});

console.log(answers);
add_choice.addEventListener("click", function (e) {
  e.preventDefault();
  let answer = document.createElement("div");
  answer.classList.add("answer");
  answer.innerHTML = `
    <input type="checkbox" />
    <input type="text" />
    <i class="fas fa-trash"></i>`;

  answers.append(answer);
});
