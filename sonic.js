console.log('GO SONIC GO!');

var $player = $('#player');
var $ring = $('.ring');
var $enemy = $('.enemy');
var $ringCounter = 0;


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

    if ($player.position().left === 440  && $player.position().top === 240) {
    ($ring).eq(1).css('visibility', 'hidden');
    ($ringCounter)++;
  };

    if ($player.position().left === 640 && $player.position().top === 40) {
    ($ring).eq(4).css('visibility', 'hidden');
    ($ringCounter)++;
  };

    if ($player.position().left === 940 && $player.position().top === 40 ){
    ($ring).eq(6).css('visibility', 'hidden');
    ($ringCounter)++;
  };

    if ($player.position().left === 1140 && $player.position().top === 240){
    ($ring).eq(8).css('visibility', 'hidden');
    ($ringCounter)++;
  };

    if ($player.position().left === 940 && $player.position().top === 340) {
    ($ring).eq(7).css('visibility', 'hidden');
    ($ringCounter)++;
  };

    if ($player.position().left === 540 && $player.position().top === 340) {
    ($ring).eq(3).css('visibility', 'hidden');
    ($ringCounter)++;
  };

    if ($player.position().left === 240 && $player.position().top === 440) {
    ($ring).eq(0).css('visibility', 'hidden');
    ($ringCounter)++;
  };

  if ($player.position().left === 440 && $player.position().top === 640) {
    ($ring).eq(2).css('visibility', 'hidden');
    ($ringCounter)++;
  };

    if ($player.position().left === 840 && $player.position().top === 640) {
    ($ring).eq(5).css('visibility', 'hidden');
    ($ringCounter)++;
  };

    if ($player.position().left === 1140 && $player.position().top === 540) {
    ($ring).eq(9).css('visibility', 'hidden');
    ($ringCounter)++;
  };

    if ($ringCounter === 10) {
    alert('YOU WIN! LEVEL 1 COMPLETE!');
    location.reload();
  };

// 10 hidden enemies (crabmeats) that kill you & restart game

  if ($player.position().left === 480 && $player.position().top <= 100) {
    ($enemy).eq(2).css('visibility', 'visible');
    alert('GAME OVER!');
    location.reload();
  };


  if ($player.position().left === 1140 && $player.position().top === 140) {
    ($enemy).eq(9).css('visibility', 'visible');
    alert('GAME OVER!');
    location.reload();
  };

  if ($player.position().left <= 400 && $player.position().top === 80) {
    ($enemy).eq(0).css('visibility', 'visible');
    ($enemy).eq(1).css('visibility', 'visible');
    alert('GAME OVER!');
    location.reload();
  };

    if ($player.position().left <= 880 && $player.position().top === 300) {
    ($enemy).eq(4).css('visibility', 'visible');
    ($enemy).eq(6).css('visibility', 'visible');
    ($enemy).eq(8).css('visibility', 'visible');
    alert('GAME OVER!');
    location.reload();
  };

    if ($player.position().left <= 780 && $player.position().top === 700) {
    ($enemy).eq(3).css('visibility', 'visible');
    ($enemy).eq(5).css('visibility', 'visible');
    ($enemy).eq(7).css('visibility', 'visible');
    alert('GAME OVER!');
    location.reload();
  };

});
