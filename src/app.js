import "./style.css";
const container = document.querySelector(".card-container");
const button = document.querySelector("button");
const form = document.querySelector("form");
const card = document.querySelector(".card");

const suit = ["heart", "diamond", "club", "spades"];
const number = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const getElement = arr => {
  const randomElement = Math.floor(Math.random() * arr.length);
  return arr[randomElement];
};

const generateRandomCard = () => {
  return (container.innerHTML = `
    <div class="card ${getElement(suit)}">
      <span class="number">${getElement(number)}</span>
    </div>
  `);
};

const changeCardSizes = formData => {
  const height = formData.target[0].value;
  const width = formData.target[1].value;

  return (container.innerHTML = `
    <div class="card ${getElement(
      suit
    )}" style="height: ${height}rem; width: ${width}rem">
      <span class="number">${getElement(number)}</span>
    </div>
  `);
};

window.onload = () => {
  generateRandomCard();

  setInterval(() => {
    generateRandomCard();
  }, 10000);
};

button.addEventListener("click", generateRandomCard);

form.addEventListener("submit", e => {
  e.preventDefault();
  changeCardSizes(e);
});
