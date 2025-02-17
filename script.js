let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) return "rock";
  else if (choice === 2) return "paper";
  else return "scissor";
}

function getHumanChoice() {
  let me = prompt("Enter your choice: Rock, Paper or Scissor? ");
  return me;
}

// logic to play the whole game
function playGame() {
  // logic to play a single round
  function playRound(humanChoice, compChoice) {
    let humanchoice = humanChoice.toLowerCase();

    if (humanchoice === compChoice) console.log("Draw!");
    else if (compChoice === "rock" && humanchoice === "scissor") {
      compScore++;
      console.log("Rock smashes Scissor, you lost this round!");
    } else if (compChoice === "paper" && humanchoice === "rock") {
      compScore++;
      console.log("Paper swallows the rock, you lost this round!");
    } else if (compChoice === "scissor" && humanchoice === "paper") {
      compScore++;
      console.log("Scissor cuts paper, you lost this round!");
    } else {
      humanScore++;
      console.log(`you won this round ${humanchoice} beats ${compChoice}`);
    }
  }

  for (let i = 1; i <= 5; i++) {
    // the variables will take the return values of the functions
    let humanSelection = getHumanChoice();
    let compSelection = getComputerChoice();

    playRound(humanSelection, compSelection);
  }

  if (humanScore > compScore)
    console.log(`You won this game ${humanScore} to ${compScore}!`);
  else if (humanScore < compScore)
    console.log(`You lost this game ${humanScore} to ${compScore}!`);
  else console.log("DRAW!");
}

playGame();
