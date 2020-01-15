/*

4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/
readline = require("readline-sync");

const BUSTED_VALUE = 21;
const SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];
const VALUES = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const NUM_VALUES = {
  2: 2, 
  3: 3, 
  4: 4, 
  5: 5, 
  6: 6,
  7: 7,
  8: 8, 
  9: 9, 
  10: 10, 
  Jack: 10, 
  Queen: 10, 
  King: 10, 
  Ace: 11 
}

function prompt(msg) {
  console.log(`=> ${msg}`);
}

// combines suits and values
function InitializeDeck() {
  let deck = [];
  VALUES.forEach(value => {
    SUITS.forEach(suit => {
      deck.push({suit: suit, value: value})
    });
  });
  return deck;
}

// picks random card in deck 
function selectRandomCard(deck) {
  let index = Math.floor(Math.random() * Math.floor(deck.length - 1))
  return deck[index]
}

function updateDeck(card, deck) {
  let index = deck.indexOf(card);
  deck.splice(index, 1);
}

// deals cards to player or dealer
function dealCards(hand) {
  selectedCard = selectRandomCard(fullDeck);
  hand.push(selectedCard);
  updateDeck(selectedCard, fullDeck);
}

function displayCardName(card) {
  return `${card.value} of ${card.suit}`
}

function displayInitialHands() {
  prompt(`Dealer has: ${displayCardName(dealerCards[0])} & unknown card`);
  prompt(`You have: ${displayCardName(playerCards[0])} and ${displayCardName(playerCards[1])}`);
}

// get hand total value
function calculateHandValue(hand) {
  let total = hand.reduce((sum, card) => {
    return sum + NUM_VALUES[card.value];
  }, 0);
  // call function to adjust for ace
  total = adjustForAce(hand, total);
  return total;
}

// need to check if this function adjusts multiple aces 
function adjustForAce(hand, total) {
  hand.filter(card => {
    if ((card.value === "Ace") && (total > 21)) {
      total -= 10;
    } 
  });
  return total;
}

function displayPlayerHandValue() {
  prompt(`Your hand value is ${playerTotal}`);
}

function askPlayerHitStay() {
  let hitStayAnswer
  while (true) {
    prompt("Would you like to hit or stay? 1 => hit or 2 => stay");
    hitStayAnswer = readline.question().trim();
    if (["1", "2"].includes(hitStayAnswer)) break;
    prompt("Invalid answer. Press 1 => hit or 2 => stay.")
    hitStayAnswer = readline.question().trim();
  }
  return hitStayAnswer;
}

function displayHand(hand) {
  let result = hand.map(card => {
    return displayCardName(card);
  });
  console.log(`Your have: ${result.join(", ")}`);
}

function busted(total) {
  return total > BUSTED_VALUE
}


// PROGRAM START
let fullDeck = InitializeDeck();

let selectedCard;

let playerCards = [];
let dealerCards = [];
let playerTotal = 0;
let dealerTotal = 0;
let hitStayAnswer;

//console.log(fullDeck); 

// deals two cards to player and dealer
dealCards(playerCards);
dealCards(playerCards);
dealCards(dealerCards);
dealCards(dealerCards);

//console.log(playerCards)
//console.log(dealerCards);

// shows the first two cards dealt (hiding dealer's 2nd card)
displayInitialHands();

playerTotal = calculateHandValue(playerCards);
console.log(`player total is: ${playerTotal}`);

// show player total hand value
displayPlayerHandValue();

// player turn
while (true) {
  hitStayAnswer = askPlayerHitStay(); // ask if they want to hit or stay
  if (hitStayAnswer === "2") break; // if stay
  dealCards(playerCards); // hit function
  displayHand(playerCards); // display hand
  playerTotal = calculateHandValue(playerCards);
  displayPlayerHandValue(); // show total
  if (busted(playerTotal)) break;
}

if (busted(playerTotal)) {
  prompt("You busted!");
} else {
  prompt("You chose to stay!");
}