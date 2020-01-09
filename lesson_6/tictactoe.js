let readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINNING_SCORE = 5;
const FIRST_PLAYER = "choose"

const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
  [1, 5, 9], [3, 5, 7]            // diagonals
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWelcome() {
  prompt("Welcome to Tic Tac Toe!");
  prompt(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`);
  prompt(`First player to win ${WINNING_SCORE} rounds wins the game!`);
}

function choosePlayer() {
  switch (FIRST_PLAYER) {
    case "Player": return 1
    case "Computer": return 2
    case "choose": askForPlayer();
  }
}

function askForPlayer() {
  prompt("Who should go first? 1 => Player or 2 => Computer");
  let answer = readline.question().trim();

  while (true) {
    if ((answer === "1") || (answer === "2")) break;
    prompt("Invalid answer. Choose 1 => Player or 2 => Computer");
    answer = readline.question().trim();
  }
  return answer;
}

function determinePlayer(player) {
  switch (player) {
    case 1: return "Player"
    case 2: return "Computer"
  }
}

function displayBoard(board) {
  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}  `);
  console.log("     |     |");
  console.log("-----+-----+-----")
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}  `);
  console.log("     |     |");
  console.log("-----+-----+-----")
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}  `);
  console.log("     |     |");
  console.log("");
}

// creates board pieces
function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

// checks for empty squares on board
function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

// joining remaining board pieces left
function joinOr(arr, delimiter = ", ", word = "or") {
  if (arr.length === 0) {
    return "";
  } else if (arr.length === 1) {
    return arr[0];
  } else if (arr.length === 2) {
    return arr.join(` ${word} `);
  } else {
    return arr.slice(0, arr.length - 1)
              .join(delimiter) + `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

// chooses which player plays next
function currentPlayer(player, board) {
  return (player === "Player") ? playerChoosesSquare(board) : computerChoosesSquare(board);
}

function switchPlayer(player) {
  return (player === "Player") ? "Computer" : "Player";
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square: ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, that's not a valid choice.");
  }
  board[square] = HUMAN_MARKER; 
}


function computerChoosesSquare(board) {
  let square;

  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = computerOffenseOrDefense(line, board, COMPUTER_MARKER);
    if (square) break;
  }

  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = computerOffenseOrDefense(line, board, HUMAN_MARKER);
      if (square) break;
    }
  }

  if (!square) {
    square = squareFiveEmpty(board);
  }

  if (!square) {
    let randomIndex = randomSquare(board)
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER; 
}

function squareFiveEmpty(board) {
  return (board[5] === INITIAL_MARKER) ? 5 : false
}

// computer chooses random square
function randomSquare(board) {
  return Math.floor(Math.random() * emptySquares(board).length);
}

// computer ai
function computerOffenseOrDefense(line, board, marker) {
  let markersInLine = line.map(value => board[value]);

  if (markersInLine.filter(value => value === marker).length === 2) {
    let square = line.find(value => board[value] === INITIAL_MARKER);
    if (square !== undefined) {
      return square;
    }
  }
    return null;
}

// determines if board is full or not
function boardFull(board) {
  return emptySquares(board).length === 0;
}

// returns winner name or null
function someoneWon(board) {
  return !!detectWinner(board);
}

function markedLine(board) {
  return WINNING_LINES.map(subArr => subArr.map(value => board[value]));
}

// finds winner of round
function detectWinner(board) {
  let lineMarker = markedLine(board);

  if (lineMarker.some(line => line.every(value => value === HUMAN_MARKER))) {
    return "Player";
  } else if (lineMarker.some(line => line.every(value => value === COMPUTER_MARKER))) {
    return "Computer"
  } else {
    return null;
  }
}

function displayWinner(board) {
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }
}

function updateScoreBoard(board, winner) {
  if (winner === "Player") {
    board[winner.toLowerCase()] += 1;
  } else if (winner === "Computer") {
    board[winner.toLowerCase()] += 1;
  }
}

function displayScoreBoard(board) {
  prompt(`Player score is: ${board.player}`);
  prompt(`Computer score is: ${board.computer}`);
}

function endMatch(board) {
  return WINNING_SCORE === board.player || WINNING_SCORE === board.player;
}

function displayMatchWinner(board) {
  if (board.player === WINNING_SCORE) {
    prompt("You are the match winner!");
  } else if (board.computer === WINNING_SCORE) {
    prompt("Computer is the match winner!");
  }
}

function playAgain() {
  prompt("Play again? (y or n)");
  let answer = readline.question().toLowerCase()[0];

  while (true) {
    if (validAnswer(answer)) {
      break;
    } else {
      prompt('Invalid answer. Please enter "y" or "n".');
      answer = readline.question().toLowerCase()[0];
    }
  }
  return answer;
}

function validAnswer(input) {
  return ["y", "Y", "n", "N"].includes(input[0])
}

// PROGRAM START
let answer;
displayWelcome();
askForPlayer();
let player = determinePlayer(choosePlayer);

while (true) {

  let scoreboard = {
    player: 0,
    computer: 0
  }

  do {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);
      currentPlayer(player, board);
      player = switchPlayer(player);
      if (someoneWon(board) || boardFull(board)) break;
      console.clear();
    }

    console.clear();
    displayBoard(board);
    displayWinner(board);

    updateScoreBoard(scoreboard, detectWinner(board));
    displayScoreBoard(scoreboard);

  } while ((scoreboard.player < WINNING_SCORE) && (scoreboard.computer < WINNING_SCORE));

  displayMatchWinner(scoreboard);
  answer = playAgain();
  if (answer !== "y") break;
}

prompt("Thanks for playing Tic Tac Toe. Goodbye!");

// stopped at refactoring computer ai functions