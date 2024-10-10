let userscore = 0;
let compscore = 0;

const values = document.querySelectorAll(".pic");
const message = document.querySelector("#msg");
const msg_container = document.querySelector(".message");

values.forEach((pic) => {
  pic.addEventListener("click", () => {
    const userchoice = pic.getAttribute("id");
    compchoice(userchoice);
    showchoice(userchoice, computerchoice);
  });
});

const compchoice = (userchoice) => {
  const options = ["rock", "paper", "scissors"];
  let rndinx = Math.floor(Math.random() * 3);
  return (computerchoice = options[rndinx]);
};

const showchoice = (userchoice, computerchoice) => {
  if (userchoice === computerchoice) {
    message.innerHTML = "Match was draw,play again";
    message.style.backgroundColor = "blue";
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = computerchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = computerchoice === "scissors" ? false : true;
    } else {
      userwin = computerchoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, computerchoice);
  }
};

user_scorepara = document.querySelector("#userscore");
comp_scorepara = document.querySelector("#compscore");
const showWinner = (userwin, userchoice, computerchoice) => {
  if (userwin) {
    userscore++;
    user_scorepara.innerHTML = userscore;
    message.innerHTML = `congatulation you win !${userchoice} beats ${computerchoice}`;
    message.style.backgroundColor = "green";
  } else {
    compscore++;
    comp_scorepara.innerHTML = compscore;
    message.innerHTML = `OH ! you lose ${computerchoice} beats ${userchoice}`;
    message.style.backgroundColor = "red";
  }
};
//finish
