const buttonChangeColorEl = document.querySelector(".change-color");
const nameOfColorEl = document.querySelector(".color");

buttonChangeColorEl.addEventListener("click", () => {
  const funcRandomColor = getRandomHexColor();
  
  document.body.style.backgroundColor = funcRandomColor;
  nameOfColorEl.textContent = funcRandomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
