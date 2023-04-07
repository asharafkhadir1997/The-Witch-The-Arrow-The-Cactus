const block = document.getElementById("block");
const character = document.getElementById("character");

let jumping = 0;
let characterTop;
let blockTop;
let blockleft;
let jumpInterval;

setInterval(() => {
  characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
  blockleft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (characterTop > 280 && blockleft < 30 ) {
    console.log(true);
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
