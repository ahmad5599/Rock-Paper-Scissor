let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

main();

function getCompChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertToWord(letter) {
  if (letter == "r") return "Rock";
  else if (letter == "p") return "Paper";
  else return "Scissors";
}
function emoji() {
  let emojis = [
    "🍇",
    "🍈",
    "🍉",
    "🍊",
    "🍋",
    "🍌",
    "🍍",
    "🥭",
    "🍎",
    "🍏",
    "🍐",
    "🍑",
    "🍒",
    "🍓",
    "🥝",
    "🍅",
    "🥥",
    "🥑",
    "🍆",
    "🥔",
    "🥕",
    "🌽",
    "🌶",
    "🥒",
    "🥬",
    "🥦",
    "🍄",
    "🥜",
    "🌰",
    "🌱",
    "🌲",
    "🌳",
    "🌴",
    "🌵",
    "🌾",
    "🌿",
    "☘",
    "🍀",
    "🍁",
    "🍂",
    "🍃",
    "🐳",
    "🐋",
    "🐬",
    "🐟",
    "🐠",
    "🐡",
    "🦈",
    "🐙",
    "🐚",
    "🐊",
    "🐢",
    "🐍",
    "🐲",
    "🐉",
    "🦕",
    "🦖",
    "💐",
    "🌸",
    "💮",
    "🏵",
    "🌹",
    "🥀",
    "🌺",
    "🌻",
    "🌼",
    "🌷",
  ];
  return emojis[Math.floor(Math.random() * emojis.length)];
}
function removeGlow() {
  document.getElementById("r").classList.remove("graw-glow");
  document.getElementById("r").classList.remove("red-glow");
  document.getElementById("r").classList.remove("green-glow");
  document.getElementById("p").classList.remove("graw-glow");
  document.getElementById("p").classList.remove("red-glow");
  document.getElementById("p").classList.remove("green-glow");
  document.getElementById("s").classList.remove("graw-glow");
  document.getElementById("s").classList.remove("red-glow");
  document.getElementById("s").classList.remove("green-glow");
}
//////////////################////////////
function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertToWord(user)} beats ${convertToWord(
    comp
  )} You Win!🔥`;
  document.getElementById(user).classList.add("green-glow");
  document.getElementById(user).classList.remove("graw-glow");
  document.getElementById(user).classList.remove("red-glow");
}
function lose(user, comp) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertToWord(comp)} beats ${convertToWord(
    user
  )} You Lose!😭`;
  document.getElementById(user).classList.add("red-glow");
  document.getElementById(user).classList.remove("green-glow");
  document.getElementById(user).classList.remove("graw-glow");
}
function draw(user, comp) {
  result_p.innerHTML = `It's a draw${emoji()}`;
  document.getElementById(user).classList.add("graw-glow");
  document.getElementById(user).classList.remove("red-glow");
  document.getElementById(user).classList.remove("green-glow");
}
//////////##########//////////////
function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, compChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, compChoice);
      break;
    case "rr":
    case "ss":
    case "pp":
      draw(userChoice, compChoice);
      break;
  }
}
////////////////##############///////////////
function main() {
  rock_div.addEventListener("click", function () {
    removeGlow();
    game("r");
  });

  paper_div.addEventListener("click", function () {
    removeGlow();
    game("p");
  });

  scissor_div.addEventListener("click", function () {
    removeGlow();
    game("s");
  });
}
