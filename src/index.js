import Hangman from "./hangman";
import getPuzzle from "./request";

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  game.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  guessesEl.textContent = game.getStatusMessage;

  game.getPuzzle.split("").forEach(letter => {
    const span = document.createElement("span");
    span.textContent = letter;
    puzzleEl.appendChild(span);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("1");
  game = new Hangman(puzzle.puzzle, 5);
  render();
};

document.querySelector("#reset").addEventListener("click", startGame); // Reference to the function

startGame();
