var randomNumber1;
randomNumber1 = Math.floor(Math.random()* 6);
randomNumber1 = randomNumber1 + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice"+ randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

