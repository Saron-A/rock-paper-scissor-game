let btns = document.querySelectorAll("button");
let div = document.querySelector("div");

let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) return "rock";
  else if (choice === 2) return "paper";
  else return "scissor";
}

// logic to play a single round
function playRound(humanchoice, compChoice) {
  let someString;

  if (humanchoice === compChoice) someString = "Draw!";
  else if (compChoice === "rock" && humanchoice === "scissor") {
    compScore++;
    someString = "Rock smashes Scissor, you lost this round!";
  } else if (compChoice === "paper" && humanchoice === "rock") {
    compScore++;
    someString = "Paper swallows the rock, you lost this round!";
  } else if (compChoice === "scissor" && humanchoice === "paper") {
    compScore++;
    someString = "Scissor cuts paper, you lost this round!";
  } else {
    humanScore++;
    someString = `you won this round ${humanchoice} beats ${compChoice}`;
  }

  let txt = document.createTextNode(someString);
  div.appendChild(txt);

  let finalTxt;

  if (humanScore === 5 && compScore < 5) {
    finalTxt = document.createTextNode(
      `You won this game ${humanScore} to ${compScore}!`
    );
  } else {
    finalTxt = document.createTextNode(
      `You lost this game ${humanScore} to ${compScore}!`
    );
  }
  div.appendChild(finalTxt);
}

// the variables will take the return values of the functions

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let humanChoice = btn.getAttribute("id"); // Get player's choice from button ID
    let compChoice = getComputerChoice(); // Get random computer choice
    playRound(humanChoice, compChoice); // Play the round
  });
});

// Append the text node to the div
