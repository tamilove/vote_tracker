var pics;

$.ajax({
  url: 'https://api.imgur.com/3/album/VAOvY/json',
  method: 'GET',
  headers: {
    'Authorization': 'Client-ID fabac30d185a0c6'
  }
}).done(function(res) {
  pics = res.data.images;
  console.log(pics);
  showFromImgur();
  play.Contest();
}).fail(function(err) {
  console.log(err);
});

var Tracker = function () {
  this.kitty = [];
  this.player = [0,0];
};

Tracker.prototype.Contest = function() {
  $('.cat_pic').children().remove();
  showFromImgur();
  this.getVote();
};

function showFromImgur() {
  randL = 0;
  randR = 0;
  while (randL == randR) {
    var randL = Math.floor(Math.random() * pics.length);
    console.log(pics);
    var randR = Math.floor(Math.random() * pics.length);
    console.log(pics);
    var displayPicL = '<img id=\"left\" src=\"' + pics[randL].link + '\"/>';
    var displayPicR = '<img id=\"right\" src=\"' + pics[randR].link + '\"/>';
    $('#player1').html(displayPicL);
    $('#player2').html(displayPicR);
  }
}

$ ('#button').on({'click': function(){
  showFromImgur();
  }
});

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
              data : 'play.kitty'
          },
      ]
  }
  //bar chart from Charts.js
  var cats = $("#cats")[0].getContext("2d");
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


