
var Tracker = function () {
  this.kitty = [];
  this.player = [0,0];
};

Tracker.prototype.Contest = function() {
  document.getElementById('player1').removeChild(document.getElementById('player1').firstChild);
  document.getElementById('player2').removeChild(document.getElementById('player2').firstChild);
  this.pickPlayers();
  this.getVote();
};

Tracker.prototype.pickPlayers = function() {
   this.player = [0,0];
  while (this.player[0] == this.player[1]) {
    this.player[0] = Math.floor(Math.random()*14);
    this.player[1] = Math.floor(Math.random()*14);
  }
  leftPicBox = document.createElement('div');
  leftPicBox.innerHTML = "<img id=\"left\" src=\"images/" + this.player[0] + ".jpg\"/>";
  document.getElementById('player1').appendChild(leftPicBox);
  rightPicBox = document.createElement('div');
  rightPicBox.innerHTML = "<img id=\"right\" src=\"images/" + this.player[1] + ".jpg\"/>";
  document.getElementById('player2').appendChild(rightPicBox);
return this.player;
};

Tracker.prototype.getVote = function () {
  document.getElementById('left').addEventListener('click', function() {
    play.kitty[play.player[0]]++;
    console.log ("after click L", play.kitty);
    play.Contest();
  });
  document.getElementById('right').addEventListener('click', function() {
    play.kitty[play.player[1]] ++;
    console.log ("after click R", play.kitty);
    play.Contest();
  });
// bar chart data
  var barData = {
      labels : ["1","2","3","4","5","6", "7", "8", "9", "10", "11", "12", "13", "14"],
      datasets : [
          {
              fillColor : "#48A497",
              strokeColor : "#48A4D1",
              data : play.kitty
          },
      ]
  }
  // get bar chart canvas
  var cats = document.getElementById("cats").getContext("2d");
  // draw bar chart
  new Chart(cats).Bar(barData);
};


var play = new Tracker();
for (var i=0; i<14; i++) {
  play.kitty[i] = 0;
};
play.Contest();