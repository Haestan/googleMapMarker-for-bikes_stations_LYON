const Slider = {
    imageIndex: 0,
    body: document.body,

    //On lance le Slider via une fonction mère qu'on instancie dans app.js
    launch_functions_slider: function () {
        this.imageControlKeyboard();
    },

    //Gestion des évènements clavier
    imageControlKeyboard: function () {
        this.body.addEventListener('keydown', function (e) {
            if (e.which === 39) {
                Slider.controlRight();
            } else if (e.which === 37) {
                Slider.controlLeft();
            }
        })
    },

    //Fonction flèche de droite
    controlRight: function () {
        //Flèche droite
        if (this.imageIndex === 0) {
            $('#slider').fadeOut(500);
            this.imageIndex++;
        } else if (this.imageIndex === 1) {
            $('#slider2').fadeOut(500);
            this.imageIndex++;
        }
    },

    //Fonction flèche de gauche
    controlLeft: function () {
        //Flèche gauche
        if (this.imageIndex === 1) {
            $('#slider').fadeIn(500);
            this.imageIndex--;
        } else if (this.imageIndex === 2) {
            $('#slider2').fadeIn(500);
            this.imageIndex--;
        }
    }
};
