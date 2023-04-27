const inputRangeEl = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

inputRangeEl.addEventListener("input", changeFontSize);

function changeFontSize() {
  spanEl.style.fontSize = `${inputRangeEl.value}px`;
}
