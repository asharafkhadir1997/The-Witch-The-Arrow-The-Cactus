const character = document.getElementById("character");
const block = document.getElementById("block");
let maxHeight = 300;
let minHeight = 30;
let charCurrentHeight;
let jumping = 0;
let blockCoordinatestop;
let blockCoordinatesleft;
let characterCoordinatesleft;
let score = 0;
let randomHeight;
block.addEventListener("animationiteration", () => {
  //   randomHeight = Math.floor(Math.random() * (100 - 50) + 100);
  //   block.style.height = `${randomHeight}px`;
  //   block.style.width = `${randomHeight}px`;
  score++;
});

function result() {
  let text = `Game Over \n Score : ${score} \n Press Okay to Restart Game`;
  if (confirm(text) == true) {
    return window.location.reload();
  } else {
    return window.location.reload();
  }
}

setInterval(() => {
  charCurrentHeight = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  blockCoordinatestop = parseInt(
    window.getComputedStyle(block).getPropertyValue("top")
  );
  characterCoordinatesleft = parseInt(
    window.getComputedStyle(character).getPropertyValue("left")
  );

  blockCoordinatesleft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  let characterPos = character.getBoundingClientRect();
  let blockPos = block.getBoundingClientRect();
  let chartop = parseInt(characterPos.top);
  let blocktop = parseInt(blockPos.top);
  let charleft = parseInt(characterPos.left);
  let blockleft = parseInt(blockPos.left);

  console.log(blockleft);
  if(chartop > 240){
    if(blockleft < 50 && blockleft > 20){
        return result();
    }
    
  }
  

  if (jumping == 0) {
    character.style.top = `${charCurrentHeight + 1}px`;
  }

  if (charCurrentHeight > maxHeight || charCurrentHeight < minHeight) {
    return result();
  }
}, 10);

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
