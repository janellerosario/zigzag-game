console.log('GO SONIC GO!');

let player = document.getElementById('player');
let ring = document.getElementsByClassName('ring');
//left location
let playerLeft = 0;
// top location
let playerTop = 0;

function movePlayer(e) {
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
  }

  if (playerLeft === 640 && playerTop === 40) {
    ring[4].style.visibility = 'hidden';
  }

  if (playerLeft === 940 && playerTop === 40 ){
    ring[6].style.visibility = 'hidden';
  }

  if (playerLeft === 1140 && playerTop === 240){
    ring[8].style.visibility = 'hidden';
  }

  if (playerLeft === 940 && playerTop === 340) {
    ring[7].style.visibility = 'hidden';
  }

  if (playerLeft === 540 && playerTop === 340) {
    ring[3].style.visibility = 'hidden';
  }

  if (playerLeft === 240 && playerTop === 440) {
    ring[0].style.visibility = 'hidden';
  }

  if (playerLeft === 440 && playerTop === 640) {
    ring[2].style.visibility = 'hidden';
  }

  if (playerLeft === 840 && playerTop === 640) {
    ring[5].style.visibility = 'hidden';
  }

  if (playerLeft === 1140 && playerTop === 540) {
    ring[9].style.visibility = 'hidden';
  }

//   if (playerRight === 680) {
//     clearInterval(game);
//     alert('You died, try again!');
//     location.reload();
// }
//   if (playerTop === 520) {
//     clearInterval(game);
//     alert('You died, try again!');
//     location.reload();
// }
  }

document.onkeydown = movePlayer;
