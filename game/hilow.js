window.onload = function() {
  const correctNumber = Math.floor(Math.random() * 100 + 1);
  const submitButton = document.querySelector(".submit-button");
  const resetButton = document.querySelector(".reset-button");
  const guessesList = document.querySelector("#guesses_list");
  const endgameOutput = document.querySelector("#endgame_output");
  const guessInput = document.querySelector("#guess");

  //Returns 0 if equal, 1 if guess is greater, -1 if guess is lower
  function checkGuess(guess, actual) {
    if (guess == actual) {
      return 0;
    } else {
      return guess > actual ? 1 : -1;
    }
  }

  function runGame() {
    let guess = guessInput.value;
    let remainingTries = document.querySelector("#remaining_tries");

    let currentGuessOutput = document.createElement("dt");
    currentGuessOutput.classList.add("past-guess");
    currentGuessOutput.textContent = guess;

    let currentResultOutput = document.createElement("dd");
    currentResultOutput.classList.add("past-result");

    let result = checkGuess(guess, correctNumber);
    switch (result) {
      case 0:
        currentResultOutput.textContent = "CORRECT";
        currentResultOutput.classList.add("correct-result");
        break;
      case -1:
        currentResultOutput.textContent = "TOO LOW";
        currentResultOutput.classList.add("incorrect-result");
        break;
      case 1:
        currentResultOutput.textContent = "TOO HIGH";
        currentResultOutput.classList.add("incorrect-result");
        break;
    }
    remainingTries.textContent--;
    guessesList.appendChild(currentGuessOutput);
    guessesList.appendChild(currentResultOutput);
    guessInput.value = "";

    if (result === 0) {
      endgameOutput.textContent = `You win! The correct number was ${correctNumber}.`;
      resetButton.style.display = "block";
    } else if (remainingTries.textContent == 0) {
      endgameOutput.textContent = `You lose! The correct number was ${correctNumber}.`;
      guessInput.disabled = true;
      resetButton.style.display = "block";
    }
  }

  submitButton.addEventListener("click", function(evt) {
    if (guessInput.value !== "") {
      evt.preventDefault();
      runGame();
    }
  });

  submitButton.addEventListener("keyup", function(evt) {
    if (event.keyCode == 13 && guessInput.value !== "") {
      evt.preventDefault();
      runGame();
    }
  });

  resetButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    window.location.reload();
  });
};
