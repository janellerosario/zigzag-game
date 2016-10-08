console.log('GO SONIC GO!');

let player = document.getElementById('player');
let ring = document.getElementsByClassName('ring');
let enemy = document.getElementsByClassName('enemy');
//left location
let playerLeft = 0;
// top location
let playerTop = 0;
let ringCounter =-1;

function playGame(e) {
//move right press L
  if(e.keyCode === 76) {
    playerLeft += 20;
    player.style.left = playerLeft + 'px';
  }
// move left press J
  if(e.keyCode === 74) {
    playerLeft -=20;
    player.style.left = playerLeft + 'px';
  }
// move up press I
    if(e.keyCode === 73) {
    playerTop -= 20;
    player.style.top = playerTop + 'px';
  }
// move down press K
    if(e.keyCode === 75) {
    playerTop += 20;
    player.style.top = playerTop + 'px';
  }

    if (playerLeft === 440 && playerTop === 240) {
    ring[1].style.visibility = 'hidden';
    ringCounter++;
  }

  if (playerLeft === 640 && playerTop === 40) {
    ring[4].style.visibility = 'hidden';
    ringCounter++;
  }

  if (playerLeft === 940 && playerTop === 40 ){
    ring[6].style.visibility = 'hidden';
    ringCounter++;
  }

  if (playerLeft === 1140 && playerTop === 240){
    ring[8].style.visibility = 'hidden';
    ringCounter++;
  }

  if (playerLeft === 940 && playerTop === 340) {
    ring[7].style.visibility = 'hidden';
    ringCounter++;
  }

  if (playerLeft === 540 && playerTop === 340) {
    ring[3].style.visibility = 'hidden';
    ringCounter++;
  }

  if (playerLeft === 240 && playerTop === 440) {
    ring[0].style.visibility = 'hidden';
    ringCounter++;
  }

  if (playerLeft === 440 && playerTop === 640) {
    ring[2].style.visibility = 'hidden';
    ringCounter++;
  }

  if (playerLeft === 840 && playerTop === 640) {
    ring[5].style.visibility = 'hidden';
    ringCounter++;
  }

  if (playerLeft === 1140 && playerTop === 540) {
    ring[9].style.visibility = 'hidden';
    ringCounter++;
  }

  if (ringCounter === 10) {
    alert('YOU WIN! LEVEL 1 COMPLETE!');
    location.reload();
  }

  if (playerLeft === 480 && playerTop <= 100) {
    enemy[2].style.visibility = 'visible';
    alert('GAME OVER!');
    location.reload();
  }

  if (playerTop === 140 && playerLeft === 1140) {
    enemy[9].style.visibility = 'visible';
    alert('GAME OVER!');
    location.reload();

  }

  if (playerTop === 80 && playerLeft <=400) {
    enemy[0].style.visibility = 'visible';
    enemy[1].style.visibility = 'visible';
    alert('GAME OVER!');
    location.reload();

  }

  if (playerTop === 300 && playerLeft <=880) {
    enemy[4].style.visibility = 'visible';
    enemy[6].style.visibility = 'visible';
    enemy[8].style.visibility = 'visible';
    alert('GAME OVER!');
    location.reload();
  }

  if (playerTop === 700 && playerLeft <=780) {
    enemy[3].style.visibility = 'visible';
    enemy[5].style.visibility = 'visible';
    enemy[7].style.visibility = 'visible';
    alert('GAME OVER!');
    location.reload();
  }

}

document.onkeydown = playGame;
