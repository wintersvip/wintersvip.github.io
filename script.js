// Define an array of card values and suits
const cardValues = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const cardSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

// Function to generate a random card
function getRandomCard() {
  const randomValue = cardValues[Math.floor(Math.random() * cardValues.length)];
  const randomSuit = cardSuits[Math.floor(Math.random() * cardSuits.length)];
  return `${randomValue} of ${randomSuit}`;
}

// Display a random card
const randomCard = getRandomCard();
const cardDisplayElement = document.getElementById('card-display');
cardDisplayElement.textContent = randomCard;
