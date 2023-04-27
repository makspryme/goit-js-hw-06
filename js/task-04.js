const counterEl = document.querySelector("#value");
const btnIncrementEl = document.querySelector("[data-action=increment]");
const btnDecrementEl = document.querySelector("[data-action=decrement]");

let counterValue = 0;

btnIncrementEl.addEventListener("click", () => {
  counterValue += 1;
  counterEl.textContent = counterValue;
});

btnDecrementEl.addEventListener("click", () => {
  counterValue -= 1;
  counterEl.textContent = counterValue;
});
