var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImageSource1 = "dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);









    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").textContent = "Player 1 Wins!🚩 Refresh!";
    } else if (randomNumber1 < randomNumber2) {
      document.querySelector("h1").textContent = "🚩Player 2 Wins! Refresh!";
    } else {
      document.querySelector("h1").textContent = "Draw! Refresh!";
    }
