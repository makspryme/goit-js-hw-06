const refs = {
  ul: document.querySelector("#categories"),
  li: document.querySelectorAll(".item"),
};

console.log(`Number of categories: ${refs.ul.children.length}`);

refs.li.forEach((item) => {
  console.log("\n");
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
