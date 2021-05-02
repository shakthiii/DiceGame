function diceGame() {


    var randomNumber = Math.random();
    Player1 = Math.floor(randomNumber * 6) + 1;

    var imgId = "dice" + Player1;

    var address = "images/" + imgId + ".png";


    document.getElementsByTagName("img")[0].setAttribute("src", address);

    var randomNumber = Math.random();
    Player2 = Math.floor(randomNumber * 6) + 1;

    var imgId = "dice" + Player2;

    var address = "images/" + imgId + ".png";


    document.getElementsByTagName("img")[1].setAttribute("src", address);

    if (Player1 > Player2) {

        document.querySelector("h1").innerHTML = "🤩Player 1 Wins!! ";
    }
    else if (Player2 > Player1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins!!😍";
    }
    else {
        document.querySelector("h1").innerHTML = "It's a Draw😐";

    }
}
document.querySelector("button").addEventListener("click", function () {
    diceGame();
    var audio = new Audio("sounds/dice.mp3");
    audio.play();
});