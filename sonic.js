console.log('GO SONIC GO!');

let player = document.getElementById('player');
let rings = document.getElementById('rings')
let playerRight = 0;
let playerTop = 0;

function movePlayer(e) {

  if(e.keyCode === 39) {
    playerRight += 20;
    player.style.left = playerRight + 'px';
  }

  if(e.keyCode === 37) {
    playerRight -=20;
    player.style.left = playerRight + 'px';
  }

    if(e.keyCode === 38) {
    playerTop -= 20;
    player.style.top = playerTop + 'px';
  }

    if(e.keyCode === 40) {
    playerTop += 20;
    player.style.top = playerTop + 'px';
  }

  if (playerRight === 480) {
    rings.style.visibility='hidden';
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
