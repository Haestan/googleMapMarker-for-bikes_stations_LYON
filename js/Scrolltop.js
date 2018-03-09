const ScrollTop = {

    //On lance la fonction ScrollTop via une fonction mère qu'on instancie dans app.js
    launch_jQuery_scroll: function () {
        this.display_jQuery_Scroll();
    },

    //Gestion du scroll menu
    display_jQuery_Scroll: function () {
        $(document).ready(function () {
            $('#accueil').click(function () {
                $('html,body').animate({scrollTop: $("#home").offset().top - 100}, 'slow');
            });
            $('#fonctionnement').click(function () {
                $('html,body').animate({scrollTop: $("#fonction").offset().top - 100}, 'slow');
            });
            $('#application, #recommencer').click(function () {
                $('html,body').animate({scrollTop: $("#app").offset().top - 170}, 'slow');
            });
            $('#Reservation, #reservation-ancre').click(function () {
                $('html,body').animate({scrollTop: $("#reserv").offset().top - 100}, 'slow');
            });
            $('#circle').click(function () {
                $('html,body').animate({scrollTop: $("#home").offset().top - 100}, 'slow');
            });
        });
    }
};
