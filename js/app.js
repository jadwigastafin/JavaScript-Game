document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM");




var Game = require("./game.js");


    var game1 = new Game();  //obiekt gry
    game1.showFurry(); //wywołanie metody
    game1.showCoin();
    game1.startGame();

    document.addEventListener('keydown', function (event) {
         game1.turnFurry(event);
    })

});