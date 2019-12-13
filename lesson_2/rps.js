const readline = require('readline-sync');
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

const WIN_CONDITIONS = {
  rock:     ["scissors", "lizard"],
  paper:    ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard:   ["spock", "paper"],
  spock:    ["scissors", "rock"]
};

let winningScore = 5;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWelcome() {
  prompt("Welcome to Rock Paper Scissors Lizard Spock!");
  prompt("You have to win 5 games to win the match.");
}

function displayChoices() {
  prompt(`Please choose:
  'ro' for 'rock'
  'pa' for 'paper'
  'sc' for 'scissors'
  'li' for 'lizard'
  'sp' for 'spock`);
}

function invalidChoice(choice) {
  while (!VALID_CHOICES.includes(convertChoices(choice))) {
    prompt("That's not a valid choice. Try again");
    choice = readline.question();
  }
  return choice;
}

function convertChoices(input) {
  switch (input) {
    case "ro": return "rock";
    case "pa": return "paper";
    case "sc": return "scissors";
    case "li": return "lizard";
    case "sp": return "spock";
  }
}

function displayCards(player, computer) {
  prompt(`You chose ${player}. Computer chose ${computer}.`);
}

function determineWinner(first, second) {
  return WIN_CONDITIONS[first].includes(second);
}

function displayWinner(playerWon, computerWon) {
  if (playerWon) {
    prompt("You win!");
  } else if (computerWon) {
    prompt("Computer wins!");
  } else {
    prompt("It's a tie");
  }
}

function updateScoreboard(player, computer, scoreboard) {
  if (player) {
    scoreboard["player score"] += 1;
  } else if (computer) {
    scoreboard["computer score"] += 1;
  }
}

function displayScoreboard(scoreboard) {
  prompt(`Your score is ${scoreboard["player score"]}`);
  prompt(`Computer score is ${scoreboard["computer score"]}`);
}

function endMatch(scoreboard) {
  return winningScore === scoreboard["player score"] ||
  winningScore === scoreboard["computer score"];
}

function displayMatchWinner(scoreboard) {
  if (scoreboard["player score"] === winningScore) {
    prompt("You are the match winner!");
  } else if (scoreboard["computer score"] === winningScore) {
    prompt("Computer is the match winner!");
  }
}

function playAgain() {
  prompt("Do you want to play again? (y/n)?");
  let answer = readline.question().toLowerCase();

  while (true) {
    if (validAnswer(answer)) {
      break;
    } else {
      prompt("Invalid answer. Please enter \"y\" or \"n\".");
      answer = readline.question().toLowerCase();
    }
  }

  return answer;
}

function validAnswer(input) {
  return (input[0] === "n") || (input[0] === "y");
}

// PROGRAM START

let repeatAnswer;
displayWelcome();
console.log();

do {
  let scoreboard = { "player score": 0, "computer score": 0 };

  while (true) {
    displayChoices();
    let choice = readline.question();
    choice = invalidChoice(choice);
    let playerChoice = convertChoices(choice);

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayCards(playerChoice, computerChoice);

    let playerWon = determineWinner(playerChoice, computerChoice);
    let computerWon = determineWinner(computerChoice, playerChoice);

    displayWinner(playerWon, computerWon);
    updateScoreboard(playerWon, computerWon, scoreboard);
    console.log();

    displayScoreboard(scoreboard);
    console.log();

    if (endMatch(scoreboard)) break;
  }
  displayMatchWinner(scoreboard);
  repeatAnswer = playAgain();
  console.clear();

} while (repeatAnswer[0] === "y");

prompt("Thanks for playing. Goodbye!");
