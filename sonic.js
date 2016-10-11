console.log('GO SONIC GO!');
//display user information
let query = window.location.search.substring(1);
let urlStringUser = query.split("&");


for (let i = 0; i <urlStringUser.length; i++) {
  let infoArr = [];
  infoArr = urlStringUser[i].split("=");
  var key = infoArr[0];
  let value = infoArr[1];
    if (i === 0) {
      let greeting = $('p');
      greeting.append(value);
}
}

// play game

let $player = $('#player');
let $ring = $('.ring');
let $enemy = $('.enemy');
let $ringCounter = 0;
// var $ringSound = $('.ring-sound').get(0);
// var $loseRingSound = $('.lose-rings').get(0);


$(document).keydown(function playGame (e) {
switch (e.which) {
  // move right with L
  case 76:
  $player.css('left', $player.position().left +20);
  break;
  // move left with J
  case 74:
  $player.css('left', $player.position().left -20);
  break;
  // move up with I
  case 73:
  $player.css('top', $player.position().top -20);
  break;
  // move down with K
  case 75:
  $player.css('top', $player.position().top +20);
  break;
};
  // exact points to collect coins that hide them after and add 1 to counter
    if ($player.position().left === 440  && $player.position().top === 240) {
    ($ring).eq(1).css('visibility', 'hidden');
    // $ringSound.play();
    ($ringCounter)++;
  };

    if ($player.position().left === 640 && $player.position().top === 40) {
    ($ring).eq(4).css('visibility', 'hidden');
    // $ringSound.play();
    ($ringCounter)++;
  };

    if ($player.position().left === 940 && $player.position().top === 40 ){
    ($ring).eq(6).css('visibility', 'hidden');
    // $ringSound.play();
    ($ringCounter)++;
  };

    if ($player.position().left === 1140 && $player.position().top === 240){
    ($ring).eq(8).css('visibility', 'hidden');
    // $ringSound.play();
    ($ringCounter)++;
  };

    if ($player.position().left === 940 && $player.position().top === 340) {
    ($ring).eq(7).css('visibility', 'hidden');
    // $ringSound.play();
    ($ringCounter)++;
  };

    if ($player.position().left === 540 && $player.position().top === 340) {
    ($ring).eq(3).css('visibility', 'hidden');
    // $ringSound.play();
    ($ringCounter)++;
  };

    if ($player.position().left === 240 && $player.position().top === 440) {
    ($ring).eq(0).css('visibility', 'hidden');
    // $ringSound.play();
    ($ringCounter)++;
  };

  if ($player.position().left === 440 && $player.position().top === 640) {
    ($ring).eq(2).css('visibility', 'hidden');
    // $ringSound.play();
    ($ringCounter)++;
  };

    if ($player.position().left === 840 && $player.position().top === 640) {
    ($ring).eq(5).css('visibility', 'hidden');
    // $ringSound.play();
    ($ringCounter)++;
  };

    if ($player.position().left === 1140 && $player.position().top === 540) {
    ($ring).eq(9).css('visibility', 'hidden');
    // $ringSound.play();
    ($ringCounter)++;
  };
  // after all coins collected alert user is the winner
    if ($ringCounter === 10) {
    alert('YOU WIN! LEVEL 1 COMPLETE!');
    location.reload();
  };

// 10 hidden enemy (crabmeats) locations that kill you & restart game

  if ($player.position().left === 240 && $player.position().top === 140) {
    ($enemy).eq(0).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

  if ($player.position().left === 340 && $player.position().top === 140) {
    ($enemy).eq(1).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

  if ($player.position().left === 520 && $player.position().top === 40) {
    ($enemy).eq(2).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

    if ($player.position().left === 540 && $player.position().top === 640) {
    ($enemy).eq(3).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

    if ($player.position().left === 640 && $player.position().top === 340) {
    ($enemy).eq(4).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

    if ($player.position().left === 640 && $player.position().top === 640) {
    ($enemy).eq(5).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

    if ($player.position().left === 740 && $player.position().top === 340) {
    ($enemy).eq(6).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

    if ($player.position().left === 760 && $player.position().top === 640) {
    ($enemy).eq(7).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

    if ($player.position().left === 840 && $player.position().top === 340) {
    ($enemy).eq(8).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

  if ($player.position().left === 1140 && $player.position().top === 140) {
    ($enemy).eq(9).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

   if ($player.position().left === 1140 && $player.position().top === 440) {
    ($enemy).eq(10).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

    if ($player.position().left === 1140 && $player.position().top === 140) {
    ($enemy).eq(11).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
   };

    if ($player.position().left === 1140 && $player.position().top === 640) {
    ($enemy).eq(12).css('visibility', 'visible');
    // $loseRingSound.play();
    alert('GAME OVER!');
    location.reload();
  };

});
