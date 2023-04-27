const refs = {
  generalBoxEl: document.querySelector("#boxes"),
  inputEl: document.querySelector("#controls > input"),
  buttonCreateEl: document.querySelector("[data-create]"),
  buttonDestroyEl: document.querySelector("[data-destroy]"),
};

refs.buttonCreateEl.addEventListener("click", createBoxes);
refs.buttonDestroyEl.addEventListener("click", destroyBoxes);

let widthEl = 30;
let heightEl = 30;

function createBoxes() {
  for (let i = 0; i < refs.inputEl.value; i += 1) {
    const newDivEl = document.createElement("div");
    newDivEl.style.width = `${widthEl}px`;
    newDivEl.style.height = `${heightEl}px`;
    newDivEl.style.backgroundColor = getRandomHexColor();
    refs.generalBoxEl.appendChild(newDivEl);

    widthEl += 10;
    heightEl += 10;
  }
}

function destroyBoxes() {
  refs.generalBoxEl.innerHTML = "";
  widthEl = 30;
  heightEl = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
