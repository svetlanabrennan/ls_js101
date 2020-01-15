let readline = require("readline-sync");

const WINNING_VALUE = 21;
const DEALER_MIN_VALUE = 17;
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
};

function prompt(msg) {
  console.log(`=> ${msg}`);
}

// combines suits and values
function initializeDeck() {
  let deck = [];
  VALUES.forEach(value => {
    SUITS.forEach(suit => {
      deck.push({suit: suit, value: value});
    });
  });
  return deck;
}

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }
  return deck;
}

function selectRandomCard(deck) {
  return deck.pop();
}

// function selectRandomCard(deck) {
//   return [deck.pop(), deck.pop()];
// }

function dealCards(hand, deck) {
  let selectedCard;
  selectedCard = selectRandomCard(deck);
  hand.push(selectedCard);
  return hand;
}

// function drawCards(player, dealer, deck) {
//   dealCards(player, deck);
//   dealCards(player, deck);
//   dealCards(dealer, deck);
//   dealCards(dealer, deck);
// }

function drawTwoCards(cards, deck) {
  for (let count = 1; count < 3; count += 1) {
    cards = dealCards(cards, deck);
  }
  return cards;
}

function displayCardName(card) {
  return `${card.value} of ${card.suit}`;
}

function displayInitialHands(dealerHand, playerHand) {
  prompt(`Dealer has: ${displayCardName(dealerHand[0])} and unknown card`);
  prompt(`You have: ${displayCardName(playerHand[0])} and ${displayCardName(playerHand[1])}`);
}

// function displayInitialHands() {
//   prompt(`Dealer has: ${dealerCards[0]} and unknown card`);
//   prompt(`You have: ${playerCards[0]} and ${playerCards[1]}`);
// }

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


function adjustForAce(hand, total) {
  hand.filter(card => card.value === "Ace").forEach(_ => {
    if (total > 21) total -= 10;
  });
  return total;
}


function displayPlayerHandValue(total) {
  prompt(`Your hand value is ${total}`);
}

function displayDealerHandValue(total) {
  prompt (`Dealer hand value is ${total}`);
}

function askPlayerHitStay() {
  let hitStayAnswer;
  while (true) {
    prompt("Would you like to hit or stay? 1 => hit or 2 => stay");
    hitStayAnswer = readline.question().trim();
    if (["1", "2"].includes(hitStayAnswer)) break;
    prompt("Invalid answer. Press 1 => hit or 2 => stay.");
    hitStayAnswer = readline.question().trim();
  }
  return hitStayAnswer;
}

function displayHand(hand) {
  let result = hand.map(card => {
    return displayCardName(card);
  });
  if (hand === playerCards) {
    console.log(`Your have: ${result.join(", ")}`);
  } else {
    console.log(`Dealer has: ${result.join(", ")}`);
  }
}

function playersTurn(cards, total, deck) {
  let answer;
  while (true) {
    answer = askPlayerHitStay(); // ask if they want to hit or stay

    if (answer === "2") {
      prompt("You chose to stay!");
      break; // if stay
    }
    console.log("");

    dealCards(cards, deck); // hit function
    displayHand(cards); // display hand
    total = calculateHandValue(cards);
    displayPlayerHandValue(total); // show total
    console.log("");

    if (busted(total)) break;
  }
  return total;
}

function dealersTurn(cards, total, deck) {
  while (true) {
    console.log(`dealers total value is ${total}`);
    if (busted(total) || dealerMetMinValue(total)) { // PROBLEM HERE: CAN'T DETECT MIN VALUE
      break; 
    }
    prompt("Dealer is hitting...");
    console.log("");
    dealCards(cards, deck); // dealer hits
    displayHand(cards); // display hand
    total = calculateHandValue(cards);
    displayDealerHandValue(total); // show total
  }
  return total;
}

function busted(total) {
  return total > WINNING_VALUE;
}

function dealerMetMinValue(total) {
  return total >= DEALER_MIN_VALUE;
}

function calculateFinalScore(playerScore, dealerScore) {
  if (((playerScore > dealerScore) && (!busted(playerScore))) ||
    busted(dealerScore)) {
    return "Player";
  } else if (((dealerScore > playerScore)  && (!busted(dealerScore))) ||
    busted(playerScore)) {
    return "Dealer";
  } else if ((dealerScore === playerScore) && !busted(playerScore) &&
    !busted(dealerScore)) {
    return "Tie";
  } else {
    return "Error";
  }
}

function displayWinner(winner) {
  if (winner === "Player") {
    prompt("You win!");
  } else if (winner === "Dealer") {
    prompt("Dealer wins!");
  } else {
    prompt("It's a tie!");
  }
}

function askPlayAgain() {
  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().trim();
  while (true) {
    if (validateAnswer(answer.toLowerCase())) break;
    prompt("Invalid answer. Type y/n or yes/no");
    answer = readline.question().trim();
  }
  return answer;
}

function validateAnswer(input) {
  return ["y", "yes", "n", "no"].includes(input);
}

function playAgain(input) {
  return ["y", "yes"].includes(input);
}

// PROGRAM START
let playerCards;
let dealerCards;

do {
  let fullDeck = shuffle(initializeDeck());
  playerCards = [];
  dealerCards = [];

  let playerTotal = 0;
  let dealerTotal = 0;

  // deals two cards to player and dealer
  //drawCards(playerCards, dealerCards, fullDeck);

  playerCards = drawTwoCards(playerCards, fullDeck);
  dealerCards = drawTwoCards(dealerCards, fullDeck);

  console.log(playerCards);
  console.log(dealerCards);

  // shows the first two cards dealt (hiding dealer's 2nd card)
  displayInitialHands(dealerCards, playerCards);

  playerTotal = calculateHandValue(playerCards);
  console.log("");

  // show player total hand value
  displayPlayerHandValue(playerTotal);

  // player turn
  playerTotal = playersTurn(playerCards, playerTotal, fullDeck);

  // player busts so deals turn
  if (busted(playerTotal)) {
    prompt("You busted.");
  } else {
    // dealer turn
    dealerTotal = dealersTurn(dealerCards, dealerTotal, fullDeck);
  }

  if (busted(dealerTotal)) {
    prompt("Dealer busted.");
    console.log("");

  } else if (dealerMetMinValue(dealerTotal)) {
    prompt("Dealer stays.");
    console.log("");

    displayPlayerHandValue(playerTotal);
    displayDealerHandValue(dealerTotal);
    console.log("");
  }

  displayWinner(calculateFinalScore(playerTotal, dealerTotal));

} while (playAgain(askPlayAgain()));

prompt("Thanks for playing. Goodbye!");