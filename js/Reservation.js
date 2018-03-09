//Gestion des réservations et de la signature
const Reservation = {
    play: document.getElementById('Reservation'),
    signature: document.getElementById('Signature'),
    reset: document.getElementById('annuler'),
    count: document.getElementById('count-timer'),
    titleReserv: document.getElementById('title-reservation'),

    //On lance toutes les fonctions via une fonction mère qu'on instancie dans app.js
    launch_functions_sessionStorage: function () {
        this.displaySessionstorage();
        this.onReservation();
        this.set_Timer();
    },

    //Fonction qui gère la station inscrite dans le storage et la renvoie
    displaySessionstorage: function () {

        //Par définition le storage n'est pas rempli. Alors on affiche aucune réservation en cours
        if (sessionStorage.nom_station === undefined) {
            return this.titleReserv.innerHTML = 'Vous n\'avez aucune réservation en cours'
        } else {
            return this.titleReserv.innerHTML = sessionStorage.nom_station
        }
    },

    //Fonction qui gère les réservations PC et Mobile
    onReservation: function () {

        //MOBILE SIGNATURE
        Reservation.signature.addEventListener('click', function(){
            empty = 6;
            let data_station = $('#station_name').html();

            if((data_station.length > 0) && (empty > 5)){
                Reservation.titleReserv.innerHTML = data_station;
                sessionStorage.setItem('nom_station', data_station);
                sessionStorage.getItem('checked');
                sessionStorage.setItem('checked', 'checked');
                Reservation.set_Timer();
            }else{
                Reservation.titleReserv.innerHTML = 'Veuillez signer dans l\'encart signature'
            }
        });

        Reservation.play.addEventListener('click', function(){
            let data_station = $('#station_name').html();

            //Checked est une clé qui permet de vérifier si toutes les conditions de réservation ont été rempli. Si oui on enregistre un sessionstorage qui prouvera que l'utilisateur a réservé un vélo. Du coup au chargement de la page on vérifiera l'existence d'un storage, si oui le timer se lancera automatiquement
            if((data_station.length > 0) && (empty > 5)){
                Reservation.titleReserv.innerHTML = data_station;
                sessionStorage.setItem('nom_station', data_station);
                sessionStorage.getItem('checked');
                sessionStorage.setItem('checked', 'checked');
                console.log(sessionStorage.getItem('checked'));
                Reservation.set_Timer();
            }else{
                Reservation.titleReserv.innerHTML = 'Veuillez signer dans l\'encart signature'
            }
        });
    },

    //Fonction qui gère le timer + sessionStorages
    set_Timer: function () {

        //On récupère les secondes et les minutes dans le sessionStorage
        let secondes = sessionStorage.getItem('secondes_station');
        let minutes = sessionStorage.getItem('minutes_storage');
        //Si elles ne sont pas définis, on le fait
        if (!secondes && !minutes) {
            secondes = 59;
            minutes = 19;
        }

        //Fonction pour lancer le timer. Si empty (signature canvas) est inférieur à 5, donc aucune signature on affiche veuillez signer. Sinon on rentre dans la boucle
        if (sessionStorage.getItem('checked')) {
            let interval = setInterval(function () {
                secondes--;
                //On définit les minutes et les secondes dans un sessionStorage
                sessionStorage.setItem('secondes_station', secondes);
                sessionStorage.setItem('minutes_storage', minutes);
                displayTimer();
                if ((minutes > 0) && (secondes === 0)) {
                    minutes--;
                    secondes = 60;
                }
                if ((minutes <= 0) && (secondes <= 0)) {
                    clearInterval(interval);
                    sessionStorage.clear();
                    Reservation.displaySessionstorage();
                }
                //Au click on arrête le timer, on reset les sessionstorage et on appel la fonction qui affiche les réservations.
                Reservation.reset.addEventListener('click', function () {
                    clearInterval(interval);
                    sessionStorage.clear();
                    Reservation.displaySessionstorage();
                })
            }, 1000);
        //    Si aucun sessionStorage checked n'est trouvé on clean l'interval et on appel la fonction qui affiche les réservations
        } else if (!sessionStorage.getItem('checked')) {
            clearInterval(interval);
            Reservation.displaySessionstorage();
        }

        function displayTimer() {
            this.count = document.getElementById('count-timer');
            return this.count.innerHTML = 'Votre réservation expire dans : ' + minutes + ' minutes ' + secondes + ' secondes '
        }

        //Par définition, afin que l'utilisateur soit au courant qu'une réservation peut expirer au bout de 20min, on affiche le timer
        displayTimer();
    },
};