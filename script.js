const block = document.getElementById("block");
const character = document.getElementById("character");
const topScoreTag = document.getElementById("topscore");
const playerNameTag = document.getElementById("playerName");
const playerScoreTag = document.getElementById("playerScore");

let score = 0,
  userName,
  jumping = 0,
  characterTop,
  blockleft,
  jumpInterval;

//Manualy setting random user with TopScore
let setTopScore = 12;
localStorage.setItem("TopScore", setTopScore);

//Asking user Name
function getUserName(message) {
  userName = prompt(message, "Witch");
  localStorage.setItem("UserName", userName);
  playerNameTag.textContent = `Name : ${userName}`;
}
getUserName("Enter your name!");

//Getting Topscore 
let getTopScore = localStorage.getItem("TopScore");
topScoreTag.textContent = `Top Score : ${getTopScore}`;
//Event lstner to add score each time
addEventListener("animationiteration", () => {
  score++;
  playerScoreTag.textContent = `Score : ${score}`;
  if(score > getTopScore){
    localStorage.removeItem("TopScore");
    localStorage.setItem("TopScore", score);
    topScoreTag.textContent = `Top Score : ${score}`;
  }
});
function result() {
  alert(`Game Over !! Your Score is ${score} \nWanna Play Again`);
  if (true) {
    return window.location.reload();
  }
}
setInterval(() => {
  characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (characterTop > 290 && blockleft < 30) {
    return result();
  }
  if (characterTop < 20 || characterTop > 325) {
    return result();
  }
  if (characterTop < 330 && jumping == 0) {
    character.style.top = `${characterTop + 3}px`;
  }
}, 50);

function jump() {
  jumping = 1;
  let count = 0;
  var jumpInterval = setInterval(function () {
    var charCurrentHeight = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    if (charCurrentHeight > 6 && count < 15) {
      character.style.top = charCurrentHeight - 3 + "px";
    }
    if (count > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      count = 0;
    }
    count++;
  }, 10);
}
