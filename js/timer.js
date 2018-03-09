// let start = 10 * 20 * 60;
// let count = start;
// let playing = false;
// let play = document.getElementById('Reservation');
// let reset = document.getElementById('annuler');
// //
// play.addEventListener('click', function () {
//     if (empty > 5) {
//         playing = true;
//         console.log(start)
//     } else {
//         $('#title-reservation').text('Signez votre réservation')
//     }
//     count = start;
// });
//
// reset.addEventListener('click', function () {
//     playing = false;
//     sessionStorage.removeItem('nom_station');
//     $('#title-reservation').html('Votre réservation a bien été annulée');
//     Reservation.displayIfChecked();
//     count = start;
// });
//
// function countdown() {
//     displayTime();
//     if (count === 0) {
//         playing = false;
//         sessionStorage.removeItem('nom_station');
//         $('#title-reservation').text('Votre réservation a expirée');
//     } else if (playing) {
//         setTimeout(countdown, 100);
//         count--;
//     } else {
//         setTimeout(countdown, 100);
//     }
// }
//
// countdown();
//
// function displayTime() {
//     mill = count;
//     sec = Math.floor(mill / 10);
//     mins = Math.floor(sec / 60);
//     sec -= mins * (60);
//
// }



//
// let timer = sessionStorage.getItem('timer_storage');
// if (!timer){
//     start = 10 * 20 * 60;
//     count = start;
//     mill = count;
//     sec = Math.floor(mill / 10);
//     mins = Math.floor(sec / 60);
//     sec -= mins * (60);
// }
//
// let interval = setInterval(function () {
//     start--;
//     console.log(timer);
//     sessionStorage.setItem('timer_storage', timer);
//     $('#count-timer').text(start);
//     if (timer === 0) {
//         $('#count-timer').text('Désolé, votre réservation a expirée');
//         clearInterval(interval);
//         sessionStorage.clear();
//         Reservation.displayIfChecked()
//     }
// }, 1000);

//Si des données existent dans le session storage on les affiche, sinon on les créer.
