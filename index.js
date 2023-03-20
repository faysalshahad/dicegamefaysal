//alert("working");

//-------------------------Section 1 for Player 1 Image Randomization----------

// The following code will give us random number ranging from 1 to 6
var randomNumberForPlayer1 = Math.floor(Math.random() * 6) + 1;

// The following code will create string of dice1.png to dice6.png
var randomDiceImageForPlayer1 = "dice" + randomNumberForPlayer1 + ".png";

/* The following code will select the images from image folder via
images/dice1.png to images/dice6.png */
var randomImageSourceForPlayer1 = "images/" + randomDiceImageForPlayer1;

/*Selecting the image property for first image under player 1 section.
Here "img" is the image property and [0] is the index number of img array in
html which will change the image of the dices for first player.*/
var imageChangeForPlayer1 = document.querySelectorAll("img")[0];

/*Assigning the random number for the image property to change images randomly*/
imageChangeForPlayer1.setAttribute("src", randomImageSourceForPlayer1);

//==========================================================================

//-------------------------Section 2 for Player 2 Image Randomization----------

// The following code will give us random number ranging from 1 to 6
var randomNumberForPlayer2 = Math.floor(Math.random() * 6) + 1;

/* The following code will create string of whitedice1.png to whitedice6.png.
Please Note that, this is the shorter and efficient version of coding while
comparing this line with the lines from the first section. */
var randomDiceImageForPlayer2 = "images/whitedice" + randomNumberForPlayer2 + ".png";

/* Please Note that, this is the shorter and efficient version of coding while
comparing this line with the lines from the first section. Here "img" is the
image property and [1] is the index number of img array in html which will
change the image of the dices for second player.*/
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageForPlayer2);
//==========================================================================


//-------------------------Declaring the Winner----------

/* Checking whether randomNumberForPlayer1 is greater than randomNumberForPlayer2
to declare Player 1 as the winner.*/

if (randomNumberForPlayer1 > randomNumberForPlayer2) {

document.querySelector("h1").innerHTML = "Player 1 Wins!";
document.querySelectorAll("h2")[0].innerHTML = "Score: " + randomNumberForPlayer1;
document.querySelectorAll("h2")[1].innerHTML = "Score: " + randomNumberForPlayer2;
}

/* Checking whether randomNumberForPlayer1 is smaller than randomNumberForPlayer2
to declare Player 2 as the winner.*/

else if (randomNumberForPlayer1 < randomNumberForPlayer2)  {

  document.querySelector("h1").innerHTML = "Player 2 Wins!";
  document.querySelectorAll("h2")[0].innerHTML = "Score: " + randomNumberForPlayer1;
  document.querySelectorAll("h2")[1].innerHTML = "Score: " + randomNumberForPlayer2;

}

/* Checking whether randomNumberForPlayer1 is equal to randomNumberForPlayer2
to declare the game as draw.*/

else {

 document.querySelector("h1").innerHTML = "It is a DRAW!";
 document.querySelectorAll("h2")[0].innerHTML = "Score: " + randomNumberForPlayer1;
 document.querySelectorAll("h2")[1].innerHTML = "Score: " + randomNumberForPlayer2;

}

//==========================================================================
