let X, Y;
let mousePressed = false;
let canvas = document.getElementById('canvas');
let button = document.getElementById('Reservation');
let del = document.getElementById('annuler');
let ctx = canvas.getContext("2d");
let empty = 0; /*Variable qui sert à définir si l'utilisateur a signé*/

function InitThis() {

    canvas.addEventListener('mousedown', function (e) {
        mousePressed = true;
        Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
        empty++;
        console.log(e.pageX);
        console.log(e.pageY);
        // On incrémente la variable, ce qui prouve que l'utilisateur à signé. Mouvement sur le click de la souris
    });

    //On récupère les positions (offset)
    canvas.addEventListener('mousemove', function (e) {
        if (mousePressed) {
            Draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
            empty++;
        }
    });

    //Au relachement du click, plus possible de dessiner si la souris bouge toujours
    canvas.addEventListener('mouseup', function () {
        mousePressed = false;
    });


    //En sorti du canvas, pas possible de dessiner
    canvas.addEventListener('mouseleave', function () {
        mousePressed = false;
    });

    del.addEventListener('click', function () {
        empty = 0;
        ctx.clearRect(0, 0, canvas.width, canvas.height);/*400 * 200, spécifié en HTML*/
    });

}

//Fonction dessin
function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        /*Initialisation du tracé*/
        ctx.moveTo(X, Y);
        /*Point de référence du tracé*/
        ctx.lineTo(x, y);
        /*Tracé de la ligne*/
        ctx.closePath();
        /*Arrêt du tracé, point de départ*/
        ctx.stroke();
        /*Contour*/
    }
    X = x;
    Y = y;
}


