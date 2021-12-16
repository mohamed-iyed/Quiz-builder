const main = document.querySelector("main");

const add_form_btn = document.querySelector(".new-question");
add_form_btn.addEventListener("click", function () {
  let form = document.createElement("form");
  form.classList.add("quiz-builder");
  form.innerHTML = `
    <i class="fas fa-trash"></i>
    <div class="qst-section">
    <label for="qst_input">Question</label>
    <input type="text" id="qst_input" placeholder="Option Title...?" />
    <button id="mult_qst_toggle"></button
    ><label for="mult_qst_toggle">Multiple</label>
  </div>
  <!-- text editor -->
  <div id="toolbar-container"></div>
  <div id="editor">
    <p>This is the initial editor content.</p>
  </div>
  <!-- drop img -->
  <div class="drop-img-field">
    <label for="img-field">Drop your image here or browse</label>
    <input type="file" id="img-field" accept="image/*" />
  </div>
  <!-- drop audio -->
  <div class="drop-audio-field">
    <label for="audio-field">Drop your audio here or browse </label>
    <input type="file" id="audio-field" accept="audio/*" />
  </div>
  <!-- drop video -->
  <div class="drop-video-field">
    <input type="text" placeholder="add link video here" />
  </div>
  <!-- answers area -->
  <div class="answers-wrapper">
    <div class="answers">
      <label for="">True/False</label>
      <label for="">Answer</label>
      <div class="answer">
        <input type="checkbox" />
        <input type="text" />
        <i class="fas fa-trash"></i>
      </div>
      <div class="answer">
        <input type="checkbox" />
        <input type="text" />
        <i class="fas fa-trash"></i>
      </div>
    </div>
    <button class="add_choice">Add Choice</button>
  </div>
    `;
  main.append(form);
});

const add_choices = document.querySelectorAll(".add_choice");
add_choices.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    let answer = document.createElement("div");
    answer.classList.add("answer");
    answer.innerHTML = `
          <input type="checkbox" />
          <input type="text" />
          <i class="fas fa-trash"></i>`;
  });
});

const allForms = document.querySelectorAll(".quiz-builder");

allForms.forEach((form) => {
  const allFormBtns = form.querySelectorAll("button");
  allFormBtns.forEach((elem) => {
    elem.addEventListener("click", function (e) {
      e.preventDefault();
    });
  });
});

//   remove answers
const remove_answer = document.querySelectorAll(".fas.fa-trash");
remove_answer.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.parentElement.remove();
  });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }
});
