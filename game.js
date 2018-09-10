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

        for (let i = 3; i <= 20; i++) {
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
    }
};

game.init();