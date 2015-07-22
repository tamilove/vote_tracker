var Tracker = function () {
  this.kitty = [];
  this.player = [0,0];
};

Tracker.prototype.Contest = function() {
  $('.cat_pic').children().remove();
  this.pickPlayers();
  this.getVote();
};

Tracker.prototype.pickPlayers = function() {
   this.player = [0,0];
  while (this.player[0] == this.player[1]) {
    this.player[0] = Math.floor(Math.random()*14);
    this.player[1] = Math.floor(Math.random()*14);
  }
  $('#player1').append("<img id=\"left\" src=\"images/" + this.player[0] + ".jpg\"/><br><br><p>Cat " + (this.player[0] + 1) + "</p>");
  $('#player2').append("<img id=\"right\" src=\"images/" + this.player[1] + ".jpg\"/><br><br><p>Cat " + (this.player[1] + 1) + "</p>");
return this.player;
};

Tracker.prototype.getVote = function () {
  $('#left').on({'click': function() {
    play.kitty[play.player[0]]++;
    console.log ("after click L", play.kitty)
    saveGame();
    play.Contest();
    }
  });
  $('#right').on({'click': function() {
    play.kitty[play.player[1]] ++;
    console.log ("after click R", play.kitty);
    saveGame();
    play.Contest();
    }
  });
};

var renderChart = function() {
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
  var cats = $("#cats")[0].getContext("2d");
  // draw bar chart
  new Chart(cats).Bar(barData);
};

var saveGame = function() {
  var cuteCatSession = JSON.stringify(play.kitty)
  localStorage.cuteCatSession = cuteCatSession;
  renderChart();
};

var play = new Tracker();
$('#reset').on({'click': function() {
      for (var i=0; i<14; i++) {
      play.kitty[i] = 0;
    }
    saveGame();
  }
});
if (localStorage.cuteCatSession) {
  play.kitty = JSON.parse(localStorage.cuteCatSession);
} else {
  for (var i=0; i<14; i++) {
    play.kitty[i] = 0;
  }
};
renderChart();
play.Contest();