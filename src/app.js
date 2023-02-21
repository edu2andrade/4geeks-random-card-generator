import "./style.css";
const container = document.querySelector(".container");
const button = document.querySelector("button");

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

window.onload = () => {
  generateRandomCard();

  setInterval(() => {
    generateRandomCard();
  }, 2000);
};

button.addEventListener("click", () => {
  generateRandomCard();
});
