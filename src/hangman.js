class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.guesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  get getPuzzle() {
    let puzzle = "";

    this.word.forEach(letter => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }
  makeGuess(guess) {
    console.log(this.getPuzzle);
    guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status !== "playing") {
      return;
    }

    if (isUnique) {
      this.guessedLetters = [...this.guessedLetters, guess];
    }

    if (isUnique && isBadGuess) {
      this.guesses--;
    }

    this.calculateStatus();
  }
  calculateStatus() {
    const finished = this.word.every(
      letter => this.guessedLetters.includes(letter) || letter === " "
    );

    if (this.guesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  get getStatusMessage() {
    let message = "";

    if (this.status === "finished") {
      message = "Great work! You guessed the word.";
    } else if (this.status === "failed") {
      message = `Nice try! The word was ${this.word.join("")}`;
    } else {
      message = `Guesses left ${this.guesses}`;
    }
    return message;
  }
}

export { Hangman as default };
