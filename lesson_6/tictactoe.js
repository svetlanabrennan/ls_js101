let readline = require("readline-sync");

const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINNING_SCORE = 5;

function prompt(msg) {
  console.log(`=> ${msg}`);
}

// displays the bones of the board
function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`)

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

// player chooses a square
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

// computer chooses a square
function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);

  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER; 
}

// determines if board is full or not
function boardFull(board) {
  return emptySquares(board).length === 0;
}

// returns winner name or null
function someoneWon(board) {
  return !!detectWinner(board);
}

// compares board pieces and finds winner
function detectWinner(board) {
  let winningLines = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]            // diagonals
  ];

  for (let line = 0; line < winningLines.length; line++) {
    let [sq1, sq2, sq3] = winningLines[line];

    if (
       board[sq1] === HUMAN_MARKER &&
       board[sq2] === HUMAN_MARKER && 
       board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER && 
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }
  return null;
}

function updateScoreBoard(scoreboard, winner) {
  if (winner === "Player") {
    scoreboard[winner.toLowerCase()] += 1;
  } else if (winner === "Computer") {
    scoreboard[winner.toLowerCae()] += 1;
  }
}

function displayScoreBoard(scoreboard) {
  prompt(`Player score is: ${scoreboard.player}`);
  prompt(`Computer score is: ${scoreboard.computer}`);
}

// loop starts
while (true) {
  let board = initializeBoard();

  let scoreboard = {
    player: 0,
    computer: 0
  }

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
  } else {
    prompt("It's a tie!");
  }

  updateScoreBoard(scoreboard, detectWinner(board));
  displayScoreBoard(scoreboard);

  prompt("Play again? (y or n)");
  let answer = readline.question().toLowerCase()[0];
  if (answer !== "y") break;
}

prompt("Thanks for playing Tic Tac Toe. Goodbye!")

// stopped on KEEP SCORE