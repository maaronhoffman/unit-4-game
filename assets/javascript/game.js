var wins = 0;
  var losses = 0;
  
  var cpuScore = $("#scoreDisplay");
  var userScore = $("#userscoreDisplay");

  var crystal1 = $("#c1");
  var crystal2 = $("#c2");
  var crystal3 = $("#c3");
  var crystal4 = $("#c4");
  
  var cNumber1 = 1 + Math.floor(Math.random() * 15);
  var cNumber2 = 1 + Math.floor(Math.random() * 15);
  var cNumber3 = 1 + Math.floor(Math.random() * 15);
  var cNumber4 = 1 + Math.floor(Math.random() * 15);

  var score = 0;
  var gameNumber = 10 + Math.floor(Math.random()*100);



//RESET

function reset() {

  cNumber1 = 1 + Math.floor(Math.random() * 15);
  cNumber2 = 1 + Math.floor(Math.random() * 15);
  cNumber3 = 1 + Math.floor(Math.random() * 15);
  cNumber4 = 1 + Math.floor(Math.random() * 15);

  gameNumber = 10 + Math.floor(Math.random()*100);
  cpuScore.text(gameNumber);
  score = 0;

}


function winCheck() {

if (score === gameNumber) {

wins++;
$("#winDisplay").text(wins);
reset();

}

else if (score > gameNumber) {

losses++;
$("#lossesDisplay").text(losses);
reset();

}

}

//SCORE GETS PUT UP

cpuScore.text(gameNumber);

//CRYSTALS ADD VALUES ON CLICK TO SCORE

crystal1.on("click", function(){
score = score + cNumber1;
userScore.text(score);
winCheck();
});

crystal2.on("click", function(){
score = score + cNumber2;
userScore.text(score);
winCheck();
});

crystal3.on("click", function(){
score = score + cNumber3;
userScore.text(score);
winCheck();
});

crystal4.on("click", function(){
score = score + cNumber4;
userScore.text(score);
winCheck();
});
