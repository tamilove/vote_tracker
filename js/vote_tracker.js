//var kitty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var kitty = [];
for (i=0; i<13; i++) {
  kitty[i] = 0;
};
var player = [];
var fight;
var Tracker = function(){

};

var leftVictor = function() {
  fight = false;
  kitty[player[0]]++ ;
  console.log(kitty);
  beginTurn();
};

var rightVictor = function() {
  fight = false;
  kitty[player[1]]++ ;
  console.log(kitty);
  beginTurn();
};

beginTurn = function() {
   player = [0,0];

  while (player[0] == player[1]) {
    player[0] = Math.floor(Math.random()*14);
    player[1] = Math.floor(Math.random()*14);
    // player[0] = player[0].toString();
    // player[1] = player[1].toString();
    console.log (player[0], player[1]);
  }
  return player [0], player[1];
};
beginTurn();

var leftPicPlace = document.getElementById('player1');
var leftPicBox = document.createElement('div');
leftPicBox.innerHTML = "<img src=\"images/" + player[0] + ".jpg\"/>";
leftPicPlace.appendChild(leftPicBox);
leftPicPlace.addEventListener('click', leftVictor);

var rightPicPlace = document.getElementById('player2');
var rightPicBox = document.createElement('div');
rightPicBox.innerHTML = "<img src=\"images/" + player[1] + ".jpg\"/>";
rightPicPlace.appendChild(rightPicBox);
rightPicPlace.addEventListener('click', rightVictor);



// turn on listener to get clicks on pictures

// after click, run tracker to add to score of winning kitty

// set state to next battle

// turn on listener for button to restart beginturn

// }

// ;


