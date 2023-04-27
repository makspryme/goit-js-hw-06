const form = document.querySelector(".login-form");
const inputEmailEl = document.querySelector("[name=email]");
const inputPasswordEl = document.querySelector("[name=password]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputEmailEl.value === "" || inputPasswordEl.value === "") {
    alert("Ви не заповнили всі поля!");
  } else {
    const formElements = event.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    const submitForm = {
      email,
      password,
    };

    form.reset();
    console.log(submitForm);
    return submitForm;
  }
});
