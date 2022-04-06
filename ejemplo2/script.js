const list = document.createElement("ul");
const info = document.createElement("p");
const html = document.querySelector("html");

info.textContent =
  "Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.";

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function () {
  const listItem = document.createElement("li");
  const listContent = prompt("What content do you want the list item to have?");
  if (!listContent) return;
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function (e) {
    e.stopPropagation();
    const listContent = prompt("Enter new content for your list item");
    this.textContent = listContent;
  };
};

// program to check if a number is prime or not

// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1
if (number === 1) {
  console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {
  // looping through 2 to number-1
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${number} is a prime number`);
  } else {
    console.log(`${number} is a not prime number`);
  }
}

// check if number is less than 1
else {
  console.log("The number is not a prime number.");
}

// program to shuffle the deck of cards

// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
  for (let x = 0; x < values.length; x++) {
    let card = { Value: values[x], Suit: suits[i] };
    deck.push(card);
  }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}

console.log("The first five cards are:");

// display 5 results
for (let i = 0; i < 5; i++) {
  console.log(`${deck[i].Value} of ${deck[i].Suit}`);
}
