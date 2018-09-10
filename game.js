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
        let gamingCardArray = this.getGamingCardArray(gameSize);
        let gameBody = document.getElementById("game-body");
        let row = gameBody.getElementsByClassName("row")[0];
        for (let i = 0; i < (gameSize * 2); i++) {
            let card = document.createElement("div");
            card.classList.add("col-xs-1");

            let randomNumber = Math.floor((Math.random() * gamingCardArray.length));
            let cardImage = document.createElement("img");
            cardImage.id = "card-" + i;
            cardImage.src = pathToImages + gamingCardArray[randomNumber];
            gamingCardArray.splice(randomNumber, 1);

            card.appendChild(cardImage);
            row.appendChild(card);
        }

    },
    getGamingCardArray: function (gameSize) {
        let gamingArray = cardImages.splice(0, gameSize);
        gamingArray = this.duplicateElements(gamingArray, 2);
        gamingArray = this.shuffle(gamingArray);
        return gamingArray;
    },

    //I copied this function from stackoverflow
    duplicateElements: function (array, times) {
        return array.reduce((res, current) => {
            return res.concat(Array(times).fill(current));
        }, []);
    },

    //This is also from stackoverflow
    shuffle: function (array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }


};

game.init();