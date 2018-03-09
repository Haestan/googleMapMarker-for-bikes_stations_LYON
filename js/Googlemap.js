const Googlemap = {
    URL: 'https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=53f6da17cc79d2c63ebf0cfddd954916e45c79a0',
    lat: 45.750000,
    lng: 4.850000,
    zoom: 14,

    //Récupération rapide du HTML
    stations_infos: {
        stationName: $('#station_name'),
        stationAddress: $('#station_address'),
        bike_available: $('#bike_available'),
        stands_available: $('#stands_available'),
        status: $('#status')
    },

    //Fonctions mères qui appelle toutes les fonctions de l'objet
    launch_functions_map: function () {
        this.displayMap();
        this.displayMarker();
    },

    //Fonction afficher map
    displayMap: function () {
        Googlemap.map = new google.maps.Map(document.getElementById('map'), {
            center: new google.maps.LatLng(this.lat, this.lng),
            zoom: this.zoom
        });
    },

    //Fonction afficher les marqueurs
    displayMarker: function () {
        ajaxGet(Googlemap.URL, function (reponse) {
            let stations = JSON.parse(reponse);
            // Tableau rempli par le .push
            markers = [];
            // Pour chaque station
            stations.forEach(function (station) {
                let marker = new google.maps.Marker({
                    position: station.position,
                    map: Googlemap.map,
                    title: station.name,
                    address: station.address,
                    bikes: station.available_bikes,
                    bike_stands: station.available_bike_stands,
                    status: station.status,
                    icon: 'img/medium-bikes.png'
                });
                markers.push(marker);

                //Récupération des infos du marker dans la fenêtre de réservation
                $('#getReservation').hide();
                $('.button-hide-reservation, #recommencer').hide().click(function () {
                    $('#getReservation, .button-hide-reservation').fadeOut(1000);
                });
                marker.addListener('click', function () {
                    $('.button-hide-reservation').fadeIn(1000);
                    $('#getReservation').fadeIn(1000);
                    $('#reserv').fadeIn(1000);
                    Googlemap.stations_infos.stationName.text('Nom de la station : ' +station.name);
                    Googlemap.stations_infos.stationAddress.text('Adresse de la station : ' + station.address);
                    Googlemap.stations_infos.bike_available.text('Vélos disponibles : ' + station.available_bikes);
                    Googlemap.stations_infos.stands_available.text('Places disponibles : ' + station.available_bike_stands);
                    Googlemap.stations_infos.status.text('Status : ' + station.status);
                    if (station.status === 'OPEN') {
                        Googlemap.stations_infos.status.text('Status : OUVERTE');
                    } else {
                        Googlemap.stations_infos.status.text('Status : FERMÉE');
                    }
                    //Si la station est fermé, on bloque la réservation
                    if (station.status === 'CLOSED') {
                        $('#canvas, #getReservation h3, #Reservation, #recommencer').fadeOut(500);
                        $('#status').append(' - RESERVATION IMPOSSIBLE. Merci de sélectionner une autre station. ');
                        //Sinon on l'autorise
                    } else {
                        $('#canvas, #getReservation h3, #Reservation, #recommencer').fadeIn(1000);
                    }
                });
            });
        });
    }
};