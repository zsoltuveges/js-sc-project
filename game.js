const cardImages = [
    "angular.png",
    "d3.png",
    "jenkins.png",
    "postcss.png",
    "react.png",
    "redux.png",
    "sass.png",
    "supercharge.png",
    "ts.png",
    "webpack.png"
];

const pathToImages = "images/cards/";

game = {
    init: function () {
        this.createGameSizeSelector();
        this.addingEventListeners();
    },

    createGameSizeSelector: function () {
        let navbar = document.getElementById("navbar");
        let sizeSelector = document.createElement("select");
        sizeSelector.id = "game-size-select";
        navbar.appendChild(sizeSelector);

        for (let i = 3; i <= 10; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.text = i;
            sizeSelector.appendChild(option);
        }
    },

    addingEventListeners: function () {
        let newGameButton = document.getElementById("new-game-btn");
        newGameButton.addEventListener("click", function () {
            let gameSizeNumber = document.getElementById("game-size-select").value;
            game.startNewGame(gameSizeNumber);
        })
    },

    startNewGame: function (gameSize) {
        console.log(`New game started with ${gameSize} pairs`);
        game.fillGameTable(gameSize);
    },

    fillGameTable: function (gameSize) {
        let gameBody = document.getElementById("game-body");
        let row = gameBody.getElementsByClassName("row")[0];
        for (let i = 0; i < (gameSize * 2); i++) {
            let card = document.createElement("div");
            card.classList.add("col");

            let randomNumber = Math.floor((Math.random() * cardImages.length));
            let cardImage = document.createElement("img");
            cardImage.id = "card-" + i;
            cardImage.src = pathToImages + cardImages[randomNumber];

            card.appendChild(cardImage);
            row.appendChild(card);
        }
    }
};

game.init();