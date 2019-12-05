'use strict';
var arreglo = [];
var game = {
    user: '',
    user2: '',
    jugadoractual: '',
    move: 0
};

function setFig(id) {

    if (id === "x") {

        game.user = 'x';
        $(`#${id}`).css('color', 'red');
        $('#0').css('color', 'black');

        $(`#x`).removeAttr('onClick');
        $('#0').attr('onClick');
        game.jugadoractual = id;
        //console.log(game.user)

    } else if (id === "0") {

        game.user = '0';
        $(`#${id}`).css('color', 'red');
        $('#x').css('color', 'black');
        $(`#0`).removeAttr('onClick');
        $('#x').attr('onClick');

        game.jugadoractual = id;

    }
}

function operacion(currentplay) {
    if (game.jugadoractual == "") {
        alert("Debe Elegir X u O")
    } else {

        if (game.jugadoractual === 'x') {
            $(`#${currentplay}`).html(`<img src="/img/${game.jugadoractual}.png"/> `); //muestro la imagen
            $(`#${currentplay}`).removeAttr('onClick'); //remuevo el atributo 
            $(`#${currentplay}`).attr("class", `${game.jugadoractual}`)

            game.move++;

            $(`#0`).css('color', 'red');
            $('#x').css('color', 'black');
            game.user = 'x';
            game.jugadoractual = '0';
            gamestatus();
            draw(game.move);
            arreglo.push(currentplay);

        } else if (game.jugadoractual === '0') {
            $(`#${currentplay}`).html(`<img src="/img/${game.jugadoractual}.png"/> `);
            $(`#${currentplay}`).removeAttr('onClick');
            $(`#${currentplay}`).attr("class", `${game.jugadoractual}`);

            game.move++;

            $(`#0`).css('color', 'black');
            $('#x').css('color', 'red');
            game.user = '0';
            game.jugadoractual = 'x';
            gamestatus();
            draw(game.move);
            arreglo.push(currentplay);
        }
    }

}

function gamestatus() {
    var player = "";

    if (game.user == 'x') {
        player = game.user;
        console.log(player);

    } else if (game.user == '0') {
        player = game.user;
        console.log(player);
    }

    switch (true) {

        //1
        case $('#first').attr("Class") == player && $('#fifth').attr("Class") == player && $('#ninth').attr("Class") == player:

            Winner('#first', '#fifth', '#ninth', player);
            break;

            //2
        case $('#first').attr("Class") == player && $('#fouth').attr("Class") == player && $('#seventh').attr("Class") == player:

            Winner('#first', '#fouth', '#seventh', player);

            break;

            //3
        case $('#first').attr("Class") == player && $('#second').attr("Class") == player && $('#third').attr("Class") == player:

            Winner('#first', '#second', '#third', player);

            break;

            //4
        case $('#fouth').attr("Class") == player && $('#fifth').attr("Class") == player && $('#sixth').attr("Class") == player:

            Winner('#fouth', '#fifth', '#sixth', player);
            break;

            //5
        case $('#seventh').attr("Class") == player && $('#eighth').attr("Class") == player && $('#ninth').attr("Class") == player:

            Winner('#seventh', '#eighth', '#ninth', player);

            break;

            //6
        case $('#third').attr("Class") == player && $('#sixth').attr("Class") == player && $('#ninth').attr("Class") == player:

            Winner('#third', '#sixth', '#ninth', player);

            break;

            //7
        case $('#third').attr("Class") == player && $('#fifth').attr("Class") == player && $('#seventh').attr("Class") == player:

            Winner('#third', '#fifth', '#seventh', player);

            break;

            //8
        case $('#second').attr("Class") == player && $('#fifth').attr("Class") == player && $('#eighth').attr("Class") == player:

            Winner('#second', '#fifth', '#eighth', player);

            break;

    }

}

//funcion de los ganadores
function Winner(valor1, valor2, valor3, player) {

    $(`${valor1}`).css('background-color', 'red');
    $(`${valor2}`).css('background-color', 'red');
    $(`${valor3}`).css('background-color', 'red');

    alert(`El jugador ${player} a ganado la partida`)

}

//cuando termina en empate
function draw(number) {
    if (number == 9) {
        $('.message').html("It's a Draw.");
    }
}

function resetear() {

    for (let increa = 0; increa < arreglo.length; increa++) {

        $(`#${arreglo[increa]}`).attr('onClick', 'operacion(this.id)');
        $(`#${arreglo[increa]}`).removeAttr('Class');
        $(`#${arreglo[increa]}`).css('background', 'white');
        $(`#${arreglo[increa]}`).html('');
        $(`.message`).html('');
        game.move = 0;
    }

}
