game = {
    init: function () {
        this.createGameSizeSelector();
    },

    createGameSizeSelector: function () {
        let container = document.getElementsByClassName("container")[0];
        let sizeSelector = document.createElement("select");
        container.appendChild(sizeSelector);

        for (let i = 3; i <= 20; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.text = i;
            sizeSelector.appendChild(option);
        }
    }
};

game.init();