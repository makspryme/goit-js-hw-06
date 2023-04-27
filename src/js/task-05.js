const inputNameEl = document.querySelector("#name-input");
const spanNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", () => {
  spanNameEl.textContent = inputNameEl.value;
});
