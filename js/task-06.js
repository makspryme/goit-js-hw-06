const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", isCountNumber);

function isCountNumber() {
  const maxLengthSymbols = Number(inputEl.attributes["data-length"].value);
  console.log(maxLengthSymbols);
  if (inputEl.value.length == maxLengthSymbols) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else if (inputEl.value === "") {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
