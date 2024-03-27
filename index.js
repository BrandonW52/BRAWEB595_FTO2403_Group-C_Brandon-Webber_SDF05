// Initial player data
let player = {
  name: "User",
  chips: 50,
};

// Initialization of variables
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isBust = true;
let message = "";
let gameState = document.getElementById("gameState");
let hand = document.getElementById("hand");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

// Displays Player name && and chips
playerEl.textContent = player.name + "'s Chips: " + player.chips;

// Generates a random number between 13 => 2 to 11
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// Initialization of game
function startGame() {
  isBust = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

// Displays Cards && checks if you won or not
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  hand.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isBust = true;
  }
  gameState.textContent = message;
}

// Checks if bust && allows you to get another
function newCard() {
  if (isBust === false && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

// newCard function does brake (Not just here but also on Scrimba)
