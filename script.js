function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  return x;
}
function score(user, comp) {
  const winner = document.querySelector(".winner");
  if (user == comp) {
    winner.textContent = `Its a draw you: ${user}, computer ${comp}`;
  } else if (user > comp) {
    winner.textContent = `You won you: ${user}, computer ${comp}`;
  } else {
    winner.textContent = `Computer won you: ${user}, computer ${comp}`;
  }
}
function playRound(comp, user) {
  const current = document.createElement("p");
  let ans;
  if (comp == 0) {
    ans = "Rock";
  } else if (comp == 1) {
    ans = "Paper";
  } else {
    ans = "Scissor";
  }
  if (comp == user) {
    current.textContent = `Its a draw computer chose ${ans}`;
  } else if (comp == 0) {
    if (user == 1) {
      current.textContent = `User won  computer chose ${ans}`;
      userG++;
    } else {
      current.textContent = `Computer won  computer chose ${ans}`;
      compG++;
    }
  } else if (comp == 1) {
    if (user == 0) {
      current.textContent = `Computer won  computer chose ${ans}`;
      compG++;
    } else {
      current.textContent = `User won  computer chose ${ans}`;
      userG++;
    }
  } else if (comp == 2) {
    if (user == 0) {
      current.textContent = `User won  computer chose ${ans}`;
      userG++;
    } else {
      current.textContent = `Computer won  computer chose ${ans}`;
      compG++;
    }
  }
  const score = document.querySelector(".score");
  score.appendChild(current);

  return;
}
let compG = 0;
let userG = 0;
let count = 0;
const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {
  count++;
  let computerChoice = getComputerChoice();
  playRound(computerChoice, 0);
  if (count == 5) {
    score(userG, compG);
  }
});
const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
  count++;
  let computerChoice = getComputerChoice();
  playRound(computerChoice, 1);
  if (count == 5) {
    score(userG, compG);
  }
});
const scissorBtn = document.querySelector("#scissorBtn");
scissorBtn.addEventListener("click", () => {
  count++;
  let computerChoice = getComputerChoice();
  playRound(computerChoice, 2);
  if (count == 5) {
    score(userG, compG);
  }
});
