let readline = require("readline-sync");

const WINNING_VALUE = 21;
const DEALER_MIN_VALUE = 17;
const MATCH_ROUNDS = 5;
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

function welcomeMsg() {
  prompt("Welcome to Twenty-One!");
  prompt("First person to win 5 rounds wins the match!");
  console.log("");
}

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
    let otherIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]];
  }
  return deck;
}

function selectRandomCard(deck) {
  return deck.pop();
}

function dealCards(hand, deck) {
  let selectedCard;
  selectedCard = selectRandomCard(deck);
  hand.push(selectedCard);
  return hand;
}

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

function calculateHandValue(hand) {
  let total = hand.reduce((sum, card) => {
    return sum + NUM_VALUES[card.value];
  }, 0);
  total = adjustForAce(hand, total);
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
  prompt("Would you like to hit or stay? 1 => hit or 2 => stay");
  hitStayAnswer = readline.question().trim();
  while (true) {
    if (["1", "2"].includes(hitStayAnswer)) break;
    prompt("Invalid answer. Press 1 => hit or 2 => stay.");
    hitStayAnswer = readline.question().trim();
  }
  return hitStayAnswer;
}

function displayPlayerHand(hand) {
  let result = hand.map(card => {
    return displayCardName(card);
  });
  console.log(`Your have: ${result.join(", ")}`);
}

function displayDealerHand(hand) {
  let result = hand.map(card => {
    return displayCardName(card);
  });
  console.log(`Dealer has: ${result.join(", ")}`);
}

function playersTurn(cards, total, deck) {
  let answer;
  while (true) {
    answer = askPlayerHitStay();

    if (answer === "2") {
      prompt("You chose to stay!");
      break;
    }
    console.log("");
    dealCards(cards, deck);
    displayPlayerHand(cards);

    total = calculateHandValue(cards);
    displayPlayerHandValue(total);
    console.log("");

    if (busted(total)) break;
  }
  return total;
}

function dealersTurn(cards, total, deck) {
  while (true) {
    if (busted(total) || dealerMetMinValue(total)) {
      break;
    }
    prompt("Dealer is hitting...");
    console.log("");

    dealCards(cards, deck);
    displayDealerHand(cards);
    total = calculateHandValue(cards);
    displayDealerHandValue(total);
  }
  return total;
}

function busted(total) {
  return total > WINNING_VALUE;
}

function dealerMetMinValue(total) {
  return total >= DEALER_MIN_VALUE;
}

function displayDealersMove(player, dealer) {
  if (busted(dealer)) {
    prompt("Dealer busted.");
    console.log("");

  } else if (dealerMetMinValue(dealer)) {
    prompt("Dealer stays.");
    console.log("");

    displayPlayerHandValue(player);
    displayDealerHandValue(dealer);
    console.log("");
  }
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
    return null;
  }
}

function displayWinner(winner) {
  if (winner === "Player") {
    prompt("You win!");
    console.log("");
  } else if (winner === "Dealer") {
    prompt("Dealer wins!");
    console.log("");
  } else {
    prompt("It's a tie!");
    console.log("");
  }
}

function updateScoreboard(board, winner) {
  if (winner === "Player") {
    board[winner.toLowerCase()] += 1;
  } else if (winner === "Dealer") {
    board[winner.toLowerCase()] += 1;
  }
}

function continueMatch(board) {
  return (board.player < MATCH_ROUNDS) &&
    (board.dealer < MATCH_ROUNDS);
}

function displayScoreboard(board) {
  prompt(`Player score is: ${board.player}`);
  prompt(`Dealer score is: ${board.dealer}`);
  console.log("");
}

function displayMatchWinner(board) {
  if (board.player === MATCH_ROUNDS) {
    prompt("You are the match winner!");
  } else if (board.dealer === MATCH_ROUNDS) {
    prompt("Dealer is the match winner!");
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
let winner;
welcomeMsg();

do {
    let scoreboard = { player: 0, dealer: 0 };

    while (continueMatch(scoreboard)) {
      let fullDeck = shuffle(initializeDeck());
      playerCards = [];
      dealerCards = [];

      let playerTotal = 0;
      let dealerTotal = 0;

      playerCards = drawTwoCards(playerCards, fullDeck);
      dealerCards = drawTwoCards(dealerCards, fullDeck);

      displayInitialHands(dealerCards, playerCards);

      playerTotal = calculateHandValue(playerCards);
      dealerTotal = calculateHandValue(dealerCards);
      console.log("");

      displayPlayerHandValue(playerTotal);
      playerTotal = playersTurn(playerCards, playerTotal, fullDeck);

      if (busted(playerTotal)) {
        prompt("You busted.");
      } else {
        dealerTotal = dealersTurn(dealerCards, dealerTotal, fullDeck);
        displayDealersMove(playerTotal, dealerTotal);
      }

      winner = calculateFinalScore(playerTotal, dealerTotal);
      displayWinner(winner);
      updateScoreboard(scoreboard, winner);
    }

  displayScoreboard(scoreboard);
  displayMatchWinner(scoreboard);

} while (playAgain(askPlayAgain()));

prompt("Thanks for playing. Goodbye!");