/*
1. Initialize deck
2. Deal cards to player and dealer
3. Player turn: hit or stay
   - repeat until bust or stay
4. If player bust, dealer wins.
5. Dealer turn: hit or stay
   - repeat until total >= 17
6. If dealer busts, player wins.
7. Compare cards and declare winner.
*/

const SUITS = ["Hearts", "Diamonds", "Clubs", "Spades"];
const VALUES = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

// combines suits and values
function InitializeDeck() {
  let deck = [];
  VALUES.forEach(value => {
    SUITS.forEach(suit => {
      deck.push((`${value} of ${suit}`))
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

function dealCards() {
  selectedCard = selectRandomCard(fullDeck);
  playerCards.push(selectedCard);
  updateDeck(selectedCard, fullDeck);
  selectedCard = selectRandomCard(fullDeck);
  playerCards.push(selectedCard);
  updateDeck(selectedCard, fullDeck);
}


// PROGRAM START
let fullDeck = InitializeDeck();

let selectedCard;

let playerCards = [];
let dealerCards = [];

// deals cards to player or dealer
function dealCards(hand) {
  selectedCard = selectRandomCard(fullDeck);
  hand.push(selectedCard);
  updateDeck(selectedCard, fullDeck);
  selectedCard = selectRandomCard(fullDeck);
  hand.push(selectedCard);
  updateDeck(selectedCard, fullDeck);
}

// deals two cards to player and dealer
dealCards(playerCards);
dealCards(dealerCards);

prompt(`Dealer has: ${dealerCards[0]} & unknown card}`);
prompt(`You have: ${playerCards.join(" and ")}`);