function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  return x;
}
function getUserChoice() {
  let x = parseInt(prompt("Enter 0 for rock, 1 for paper and 2 for scissors"));
  return x;
}

function playRound(comp, user) {
  if (comp == user) {
    return "wow";
  }
  if (comp == 0) {
    if (user == 1) {
      return user;
    } else {
      return comp;
    }
  } else if (comp == 1) {
    if (user == 0) {
      return comp;
    } else {
      return user;
    }
  } else if (comp == 2) {
    if (user == 0) {
      return user;
    } else {
      return comp;
    }
  }
}
let computerChoice = getComputerChoice();
let userChoice = getUserChoice();
let comp = 0;
let user = 0;
let x = playRound(computerChoice, userChoice);
if (x == computerChoice) {
  comp++;
} else if (x == userChoice) {
  user++;
} else {
  console.log("its a draw");
}
if (user > comp) {
  console.log("user wins", computerChoice, user, comp);
} else {
  console.log("Computer wins", computerChoice, user, comp);
}

computerChoice = getComputerChoice();
userChoice = getUserChoice();
x = playRound(computerChoice, userChoice);
if (x == computerChoice) {
  comp++;
} else if (x == userChoice) {
  user++;
} else {
  console.log("its a draw");
}
if (user > comp) {
  console.log("user wins", computerChoice, user, comp);
} else if (user < comp) {
  console.log("Computer wins", computerChoice, user, comp);
} else {
  console.log("draw");
}

computerChoice = getComputerChoice();
userChoice = getUserChoice();
x = playRound(computerChoice, userChoice);
if (x == computerChoice) {
  comp++;
} else if (x == userChoice) {
  user++;
} else {
  console.log("its a draw");
}
if (user > comp) {
  console.log("user wins", computerChoice, user, comp);
} else if (user < comp) {
  console.log("Computer wins", computerChoice, user, comp);
} else {
  console.log("draw");
}
computerChoice = getComputerChoice();
userChoice = getUserChoice();
x = playRound(computerChoice, userChoice);
if (x == computerChoice) {
  comp++;
} else if (x == userChoice) {
  user++;
} else {
  console.log("its a draw");
}
if (user > comp) {
  console.log("user wins", computerChoice, user, comp);
} else if (user < comp) {
  console.log("Computer wins", computerChoice, user, comp);
} else {
  console.log("draw");
}
computerChoice = getComputerChoice();
userChoice = getUserChoice();
x = playRound(computerChoice, userChoice);
if (x == computerChoice) {
  comp++;
} else if (x == userChoice) {
  user++;
} else {
  console.log("its a draw");
}
if (user > comp) {
  console.log("user wins", computerChoice, user);
} else if (user < comp) {
  console.log("Computer wins", computerChoice, user, comp);
} else {
  console.log("draw", user, comp);
}
