// // const Timer = {
// //     playing: false,
// //     timer_count: new Date().getTime() + 1200000,
// //     play: document.getElementById('Reservation'),
// //     stop: document.getElementById('annuler'),
// //     countDown: function () {
// //         if (empty > 5) {
// //             this.playing = true;
// //             let date_timer = new Date().getTime() + 1200000;
// //             let interval = setInterval(function () {
// //                 let get_time = new Date().getTime();
// //                 let calc_timer = date_timer - get_time;
// //                 let minutes_storage = Math.floor((calc_timer % (1000 * 60 * 60)) / (1000 * 60));
// //                 let secondes_storages = Math.floor((calc_timer % (1000 * 60)) / 1000);
// //                 let min = sessionStorage.setItem('min_storage', minutes_storage);
// //                 let sec = sessionStorage.setItem('sec_storage', secondes_storages);
// //                 let get_min_storage = parseInt(sessionStorage.getItem('min_storage'));
// //                 let get_sec_storage = parseInt(sessionStorage.getItem('sec_storage'));
// //                 $('#count-timer').text('Votre réservation expire dans : ' + get_min_storage + " minutes " + get_sec_storage + " secondes ");
// //                 if (calc_timer <= 0) {
// //                     Timer.playing = false;
// //                     clearInterval(interval);
// //                     $('#count-timer').text('Votre réservation a expiré');
// //                     sessionStorage.removeItem('nom_station');
// //                     $('#title-reservation').text('Vous n\'avez aucune réservation en cours')
// //                     console.log(sessionStorage.getItem('nom_station'))
// //                 }
// //             }, 999);
// //         } else {
// //             $('#title-reservation').text('Signez votre réservation')
// //         }
// //     },
// //     stop_countDown: function () {
// //         sessionStorage.removeItem('nom_station');
// //         console.log(sessionStorage.removeItem('nom_station'));
// //         Reservation.displayIfChecked();
// //         setTimeout(Timer.countDown(), 999);
// //         clearInterval(this.countDown([]))
// //     }
// // };
// // Timer.play.addEventListener('click', function () {
// //     Timer.countDown();
// // });
// // Timer.stop.addEventListener('click', function () {
// //     Timer.stop_countDown();
// // });
//
// const Timer = {
//     start: 10 * 20 * 60,
//     count: this.start,
//     playing: false,
//     play: document.getElementById('Reservation'),
//     stop: document.getElementById('annuler'),
//
//     playTimer: function () {
//         if (empty > 5) {
//             this.playing = true;
//         } else {
//             $('#title-reservation').text('Signez votre réservation')
//         }
//         this.count = this.start;
//     },
//
//     stopTimer: function () {
//         this.playing = false;
//         sessionStorage.removeItem('nom_station');
//         $('#title-reservation').text('Votre réservation a bien été annulée');
//         Reservation.displayIfChecked();
//         this.count = start;
//     },
//
//     countDown: function () {
//         this.displayTime();
//         if (this.count === 0) {
//             this.playing = false;
//             sessionStorage.removeItem('nom_station');
//             $('#title-reservation').text('Votre réservation a expirée');
//         } else if (this.playing) {
//             setTimeout(this.countDown(), 100);
//             this.count--;
//         } else {
//             setTimeout(this.countDown(), 100);
//         }
//     },
//
//     launchCount: function () {
//         Timer.countDown();
//     },
//
//     displayTime: function () {
//         mill = this.count;
//         sec = Math.floor(mill / 10);
//         mins = Math.floor(sec / 60);
//         sec -= mins * (60);
//         sec_storage = sessionStorage.setItem('sec_storage', sec);
//         min_storage = sessionStorage.setItem('min_storage', mins);
//         get_sec_storage = parseInt(sessionStorage.getItem('sec_storage'));
//         get_min_storage = parseInt(sessionStorage.getItem('min_storage'));
//
//         $('#count-timer').text('Votre réservation expire dans : ' + get_min_storage + ' minute(s) ' + get_sec_storage + ' seconde(s) ');
//     }
// };
//
// Timer.play.addEventListener('click', function () {
//     Timer.playTimer();
//     Timer.launchCount();
// });
// Timer.stop.addEventListener('click', function () {
//     Timer.stopTimer();
// });