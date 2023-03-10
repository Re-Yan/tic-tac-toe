"strict mode";
let chosenSide;

// DOM elements
const item1 = document.querySelector(".grid-item-1");
const item2 = document.querySelector(".grid-item-2");
const item3 = document.querySelector(".grid-item-3");
const item4 = document.querySelector(".grid-item-4");
const item5 = document.querySelector(".grid-item-5");
const item6 = document.querySelector(".grid-item-6");
const item7 = document.querySelector(".grid-item-7");
const item8 = document.querySelector(".grid-item-8");
const item9 = document.querySelector(".grid-item-9");
const modal = document.querySelector(".modal");
const buttonX = document.getElementById("buttonX");
const buttonO = document.getElementById("buttonO");

// CLICK Events
item1.addEventListener("click", () => {
  item1.textContent = `${chosenSide}`;
});

item2.addEventListener("click", () => {
  item2.textContent = `${chosenSide}`;
});

item3.addEventListener("click", () => {
  item3.textContent = `${chosenSide}`;
});

item4.addEventListener("click", () => {
  item4.textContent = `${chosenSide}`;
});

item5.addEventListener("click", () => {
  item5.textContent = `${chosenSide}`;
});

item6.addEventListener("click", () => {
  item6.textContent = `${chosenSide}`;
});

item7.addEventListener("click", () => {
  item7.textContent = `${chosenSide}`;
});

item8.addEventListener("click", () => {
  item8.textContent = `${chosenSide}`;
});

item9.addEventListener("click", () => {
  item9.textContent = `${chosenSide}`;
});

buttonX.addEventListener("click", () => {
  chosenSide = "X";
  modal.classList.add("hidden");
});

buttonO.addEventListener("click", () => {
  chosenSide = "O";
  modal.classList.add("hidden");
});
