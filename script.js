const block = document.getElementById("block");
const character = document.getElementById("character");
const topScoreShow = document.getElementById("topscore");
const playerNameShoe = document.getElementById("playerName");
const playerScoreShow = document.getElementById("playerScore");
let score = 0;
localStorage.setItem("Name", "Asharaf Khadir");
localStorage.setItem("TopScore", 8);
let getName = localStorage.getItem("Name");
playerNameShoe.textContent = `Name : ${getName}`
playerScoreShow.textContent = `Score : ${score}`;
let jumping = 0;
let characterTop;
let blockTop;
let blockleft;
let jumpInterval;

let topScore;
let getScore;
getScore = localStorage.getItem("TopScore");
topScoreShow.textContent = `TopScore : ${getScore}`;

addEventListener("animationiteration", () => {
  getScore = localStorage.getItem("TopScore");
  playerScoreShow.textContent = `Score : ${score}`;
  topScoreShow.textContent = `TopScore : ${getScore}`;
  ++score;
});




function result() {
  let text = `Game Over Score is ${score} Press Okay to Restrat`;
  if (confirm(text) == true) {
    window.location.reload();
    score = 0;
  } else {
    window.location.reload();
    score = 0;
  }
}

setInterval(() => {
  if (score > getScore) {
    localStorage.removeItem("TopScore");
    localStorage.setItem("TopScore", score);
    topScore = score;
  } else {
    topScore = getScore;
  }
  
  characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
  blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
  if (characterTop > 290 && blockleft < 30) {
    // character.style.backgroundImage = "url('./Images/blood.svg')";
    return result();
  }
  if(characterTop < 20 || characterTop > 325){
    // character.style.backgroundImage = "url('./Images/blood.svg')";
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
