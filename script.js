const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroke () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampBroke () {
    lamp.src = '/img/quebrada.jpg'
}

function lampOn () {
    if ( !isLampBroke () ) {
    lamp.src = '/img/ligada.jpg'
    }
}

function lampOff () {
    if ( !isLampBroke () ) {
    lamp.src = '/img/desligada.jpg'
    }
}

turnOn.addEventListener ('click', lampOn)
turnOff.addEventListener ('click', lampOff)
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampBroke)