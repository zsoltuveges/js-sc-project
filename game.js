game = {
    init: function () {
        this.createGameSizeSelector();
    },

    createGameSizeSelector: function () {
        let navbar = document.getElementById("navbar");
        let sizeSelector = document.createElement("select");
        navbar.appendChild(sizeSelector);

        for (let i = 3; i <= 20; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.text = i;
            sizeSelector.appendChild(option);
        }
    }
};

game.init();