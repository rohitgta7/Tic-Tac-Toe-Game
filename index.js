const cells = document.querySelectorAll(".cell");
const resetButton = document.querySelector("#resetButton");
const computerScoreValue = document.querySelector(".computerScore");
const playerScoreValue = document.querySelector(".playerScore");

const winningConditions = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]
const winningPositions = [
  [0, 1], [1, 2], [3, 4], [4, 5], [6, 7], [7, 8],
  [0, 3], [3, 6], [1, 4], [4, 7], [2, 5], [5, 8],
  [0, 4], [4, 8], [2, 4], [4, 6],
  [0, 6], [1, 7], [2, 8], [0, 2], [3, 5], [6, 8], [0, 8], [2, 6]
];
const selectedMachineValue = "X";
const selectedPlayerValue = "0";

let playerScore = 0;
let computerScore = 0;
let boardCells = ["", "", "", "", "", "", "", "", ""]
let isMachinePlayerTurn = true;

firstMachineTurns();
playerTurn();
resetButton.addEventListener('click', resetGame);

function firstMachineTurns() {
  const randomIndex = Math.floor(Math.random() * boardCells.length);
  boardCells[randomIndex] = selectedMachineValue;
  cells[randomIndex].textContent = selectedMachineValue;
}

function machineTurn() {
  let index = [];
  isMachinePlayerTurn = true;
  winningPositions.forEach(position => {
   return position.reduce((acc, curr) => {
      if (boardCells[acc] == selectedMachineValue && boardCells[curr] == selectedMachineValue) {
        checkComputerValue(acc, curr, index);
        if (index.length > 1) {
          index.shift();
        }
      } else if (boardCells[acc] == selectedPlayerValue && boardCells[curr] == selectedPlayerValue){
          checkComputerValue(acc, curr, index);
      }
    })
  })

  if (index.length > 0) {
    cells[index[0]].textContent = selectedMachineValue
    boardCells[index[0]] = selectedMachineValue
    isMachinePlayerTurn = false;
  }

  if (isMachinePlayerTurn) {
    let randomVal = boardCells.indexOf("");
    cells[randomVal].textContent = selectedMachineValue;
    boardCells[randomVal] = selectedMachineValue
  }

  if (checkWinner("0")) {
    window.alert("You Won \u{1F622}");
    playerScore++;
    playerScoreValue.textContent = `Player Score - ${playerScore}`;
    resetGame();
  } else if (checkWinner("X")) {
    window.alert("Computer has won \u{1F60E}");
    computerScore++;
    computerScoreValue.textContent = `Computer Score - ${computerScore}`;
    resetGame();
  } else if(boardCells.every(element => element !== "")) {
    window.alert("It's Tie, You can't beat me \u{1F44D}");
    resetGame();
  }
}

function checkWinner(player) {
  for (const element of winningConditions) {
    const [a, b, c] = element;
    if (boardCells[a] === player && boardCells[b] === player && boardCells[c] === player) {
      return true;
    }
  }
  return false;
}

function playerTurn() {
  cells.forEach((cell, index) => {
    cell.addEventListener("click", function () {
      if (cell.textContent == "") {
        cell.textContent = selectedPlayerValue;
        boardCells[index] = selectedPlayerValue;
        setTimeout(() => {
          machineTurn();
        }, 500);
      } else {
        window.alert("You can't change computer's value!");
      }
    })
  })
}

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  boardCells = ["", "", "", "", "", "", "", "", ""];
  firstMachineTurns();
} 

function checkComputerValue(acc, curr, index) {
  if (acc == 0 && curr == 1) {
    if (boardCells[2] == "") {
      index.push(2);
    }
  } else if (acc == 1 && curr == 2) {
    if (boardCells[0] == "") {
      index.push(0);
    }
  } else if (acc == 3 && curr == 4) {
    if (boardCells[5] == "") {
      index.push(5);
    }
  } else if (acc == 4 && curr == 5) {
    if (boardCells[3] == "") {
      index.push(3);
    }
  } else if (acc == 6 && curr == 7) {
    if (boardCells[8] == "") {
      index.push(8);
    }
  } else if (acc == 7 && curr == 8) {
    if (boardCells[6] == "") {
      index.push(6);
    }
  } else if (acc == 0 && curr == 3) {
    if (boardCells[6] == "") {
      index.push(6);
    }
  } else if (acc == 3 && curr == 6) {
    if (boardCells[0] == "") {
      index.push(0);
    }
  } else if (acc == 1 && curr == 4) {
    if (boardCells[7] == "") {
      index.push(7);
    }
  } else if (acc == 4 && curr == 7) {
    if (boardCells[1] == "") {
      index.push(1);
    }
  } else if (acc == 2 && curr == 5) {
    if (boardCells[8] == "") {
      index.push(8);
    }
  } else if (acc == 5 && curr == 8) {
    if (boardCells[2] == "") {
      index.push(2);
    }
  } else if (acc == 0 && curr == 4) {
    if (boardCells[8] == "") {
      index.push(8);
    }
  } else if (acc == 4 && curr == 8) {
    if (boardCells[0] == "") {
      index.push(0);
    }
  } else if (acc == 2 && curr == 4) {
    if (boardCells[6] == "") {
      index.push(6);
    }
  } else if (acc == 4 && curr == 6) {
    if (boardCells[2] == "") {
      index.push(2);
    }
  } else if (acc == 0 && curr == 6) {
    if (boardCells[3] == "") {
      index.push(3);
    }
  } else if (acc == 1 && curr == 7) {
    if (boardCells[4] == "") {
      index.push(4);
    }
  } else if (acc == 2 && curr == 8) {
    if (boardCells[5] == "") {
      index.push(5);
    }
  } else if (acc == 0 && curr == 2) {
    if (boardCells[1] == "") {
      index.push(1);
    }
  } else if (acc == 3 && curr == 5) {
    if (boardCells[4] == "") {
      index.push(4);
    }
  } else if (acc == 6 && curr == 8) {
    if (boardCells[7] == "") {
      index.push(7);
    }
  } else if (acc == 0 && curr == 8) {
    if (boardCells[4] == "") {
      index.push(4);
    }
  } else if (acc == 2 && curr == 6) {
    if (boardCells[4] == "") {
      index.push(4);
    }
  }
}
