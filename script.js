"strict mode";
let chosenSide;
let spaces = [null, null, null, null, null, null, null, null, null];

// DOM elements
const grids = Array.from(document.getElementsByClassName("grid"));
const modal = document.querySelector(".modal");
const resultModal = document.querySelector(".results");
const resultText = document.getElementById("result-text");
const buttonX = document.getElementById("buttonX");
const buttonO = document.getElementById("buttonO");

// Function Declarations
const winCondition = () => {
  //Game Logic
  if (spaces[0] === chosenSide) {
    if (spaces[1] === chosenSide && spaces[2] === chosenSide) {
      return true;
    }
    if (spaces[3] === chosenSide && spaces[6] === chosenSide) {
      return true;
    }
    if (spaces[4] === chosenSide && spaces[8] === chosenSide) {
      return true;
    }
  }

  if (spaces[8] === chosenSide) {
    if (spaces[4] === chosenSide && spaces[0] === chosenSide) {
      return true;
    }
    if (spaces[7] === chosenSide && spaces[6] === chosenSide) {
      return true;
    }
    if (spaces[5] === chosenSide && spaces[2] === chosenSide) {
      return true;
    }
  }

  if (spaces[4] === chosenSide) {
    if (spaces[1] === chosenSide && spaces[7] === chosenSide) {
      return true;
    }
    if (spaces[3] === chosenSide && spaces[5] === chosenSide) {
      return true;
    }
  }
};

const gridClicked = (Event) => {
  const id = Event.target.id;
  console.log(`box ${id}`);
  if (!spaces[id]) {
    spaces[id] = chosenSide;
    Event.target.innerText = chosenSide;
    if (winCondition()) {
      resultModal.classList.remove("hidden");
      resultText.textContent = `${chosenSide} Wins!`;
      console.log(`${chosenSide} wins!`);
      return;
    }
    playerCounter =
      chosenSide === "X" ? (chosenSide = "O") : (chosenSide = "X");
  }
};

// CLICK Events
for (let i = 0; i < grids.length; i++) {
  grids[i].addEventListener("click", gridClicked);
}

buttonX.addEventListener("click", () => {
  chosenSide = "X";
  modal.classList.add("hidden");
});

buttonO.addEventListener("click", () => {
  chosenSide = "O";
  modal.classList.add("hidden");
});
