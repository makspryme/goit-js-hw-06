const buttonChangeColorEl = document.querySelector(".change-color");
const nameOfColorEl = document.querySelector(".color");

buttonChangeColorEl.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
  nameOfColorEl.textContent = getRandomHexColor();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
