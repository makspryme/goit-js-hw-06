const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngridientsEl = document.querySelector("#ingredients");

const liElements = ingredients.map((content) => {
  const liEl = document.createElement("li");
  liEl.textContent = content;
  liEl.classList.add("item");
  return liEl;
});

ulIngridientsEl.append(...liElements);
