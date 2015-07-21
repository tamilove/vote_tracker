var Tracker = function () {
  this.gameOn;
  this.kitty = [];
  this.player = [0,0];
  this.victor = "";
};

//game routine
Tracker.prototype.Contest = function() {
//clear scores (set up array)
  for (i=0; i<14; i++) {
    this.kitty[i] = 0;
  };
  console.log("array set up");
  for (var i = 0; i < 14; i++) {
    if (this.kitty[i] > 9) {
      this.gameOn = false;
      console.log("game ends");
    } 
  };
  console.log("checkpoint");
  this.score();
  console.log("score checked");
  this.pickPlayers();
  console.log("players picked");
  this.showCats();
  console.log("cats have been shown");
  this.getVote();
  console.log(this.kitty);
};

//See if a cat just scored and track it
Tracker.prototype.score = function(victor) {
  };
  console.log("score was checked")
  //clear pictures if they are up
  //console.log(this.kitty);
  // this.leftPicPlace = document.getElementById('player1');
  // this.leftPicBox = document.createElement('div');
  // this.rightPicPlace = document.getElementById('player2');
  // this.rightPicBox = document.createElement('div');
  while (document.getElementById('player1').firstChild) {
    document.getElementById('player1').removeChild(document.getElementById('player1').firstChild);
  };
  while (document.getElementById('player2').firstChild) {
    document.getElementById('player2').removeChild(document.getElementById('player2').firstChild);
  // }
  // console.log(this.victor);
  // return this.victor;
};

Tracker.prototype.pickPlayers = function() {
//pick players
   this.player = [0,0];
  while (this.player[0] == this.player[1]) {
    this.player[0] = Math.floor(Math.random()*14);
    this.player[1] = Math.floor(Math.random()*14);
    console.log (this.player[0], this.player[1]);
  }
return this.player;
};

//Render images
Tracker.prototype.showCats = function() {
  // this.leftPicPlace = document.getElementById('player1');
  this.leftPicBox = document.createElement('div');
  // this.rightPicPlace = document.getElementById('player2');
  this.rightPicBox = document.createElement('div');
  this.leftPicBox.innerHTML = "<img src=\"images/" + this.player[0] + ".jpg\"/>";
  document.getElementById('player1').appendChild(this.leftPicBox);
  this.rightPicBox.innerHTML = "<img src=\"images/" + this.player[1] + ".jpg\"/>";
  document.getElementById('player2').appendChild(this.rightPicBox);
};

Tracker.prototype.getVote = function () {
  document.getElementById('player1').addEventListener('click', function() {
    this.kitty[this.player[0]]++;
  });
  document.getElementById('player2').addEventListener('click', function() {
    this.kitty[this.player[1]]++;
  });
};

var play = new Tracker();
play.Contest();
