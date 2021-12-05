var audioOne = document.getElementById('audioOne');
var audioTwo = document.getElementById('audioTwo');
var audioThree = document.getElementById('audioThree');
var audioFour = document.getElementById('audioFour');
var audioFive = document.getElementById('audioFive');
var audioSix = document.getElementById('audioSix');
var audioSeven = document.getElementById('audioSeven');
var audioEight = document.getElementById('audioEight');
var audioNine = document.getElementById('audioNine');
var key = document.getElementsByClassName("key");


//array
var keys = [];
var sound = [];

sound[0] = new Howl({
    src: ['audio/1.mp3'], 
})

sound[1] = new Howl({
    src: ['audio/2.mp3'], 
})

sound[2] = new Howl({
    src: ['audio/3.mp3'], 
})

sound[3] = new Howl({
    src: ['audio/4.mp3'], 
})

sound[4] = new Howl({
    src: ['audio/5.mp3'], 
})

sound[5] = new Howl({
    src: ['audio/6.mp3'], 
})

sound[6] = new Howl({
    src: ['audio/7.mp3'], 
})

sound[7] = new Howl({
    src: ['audio/8.mp3'], 
})

sound[8] = new Howl({
    src: ['audio/9.mp3'], 
})

// document.addEventListener('keydown', keyPressed);
// document.addEventListener('keyup',keyReleased);

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup',keyUp);


function keyPressed(evt) {
    console.log(evt.keyCode);

    //A = 65
    if (evt.keyCode == 65) {
        audioOne.play();
        key[0].style.backgroundColor = "red";
    }

    //S = 83
    if (evt.keyCode == 83) {
        audioTwo.play();
        key[1].style.backgroundColor = "red";
    }

    //D = 68
    if (evt.keyCode == 68) {
        audioThree.play();
        key[2].style.backgroundColor = "red";
    }
    
    //F = 70
    if (evt.keyCode == 70) {
        audioFour.play();
        key[3].style.backgroundColor = "red";
    }

    //G = 71
    if (evt.keyCode == 71) {
        audioFive.play();
        key[4].style.backgroundColor = "red";
    }

    //H = 72
    if (evt.keyCode == 72) {
        audioSix.play();
        key[5].style.backgroundColor = "red";
    }

    //J = 74
    if (evt.keyCode == 74) {
        audioSeven.play();
        key[6].style.backgroundColor = "red";
    }

    //J = 73
    if (evt.keyCode == 75) {
        audioEight.play();
        key[7].style.backgroundColor = "red";
    }

    //K = 76
    if (evt.keyCode == 76) {
        audioNine.play();
        key[8].style.backgroundColor = "red";
    }
}

function keyReleased(evt) {
    //A keyup
    if (evt.keyCode == 65) {
        key[0].style.backgroundColor = "white";
    }

    //S keyup
    if (evt.keyCode == 83) {
        key[1].style.backgroundColor = "white";
    }

    //D keyup
    if (evt.keyCode == 68) {
        key[2].style.backgroundColor = "white";
    }
    
    //F keyup
    if (evt.keyCode == 70) {
        key[3].style.backgroundColor = "white";
    }

    //G keyup
    if (evt.keyCode == 71) {
        key[4].style.backgroundColor = "white";
    }

    //H keyup
    if (evt.keyCode == 72) {
        key[5].style.backgroundColor = "white";
    }

    //J keyup
    if (evt.keyCode == 74) {
        key[6].style.backgroundColor = "white";
    }

    //K keyup
    if (evt.keyCode == 75) {
        key[7].style.backgroundColor = "white";
    }

    //L keyup
    if (evt.keyCode == 76) {
        key[8].style.backgroundColor = "white";
    }
}

function keyDown(evt) {
    keys[evt.keyCode] = true;

    if(keys[65]) {
        sound[0].play();
        key[0].style.backgroundColor = "grey";
    }

    if(keys[83]) {
        sound[1].play();
        key[1].style.backgroundColor = "grey";
    }

    if(keys[68]) {
        sound[2].play();
        key[2].style.backgroundColor = "grey";
    }

    if(keys[70]) {
        sound[3].play();
        key[3].style.backgroundColor = "grey";
    }
    if(keys[71]) {
        sound[4].play();
        key[4].style.backgroundColor = "grey";
    }
    if(keys[72]) {
        sound[5].play();
        key[5].style.backgroundColor = "grey";
    }
    if(keys[74]) {
        sound[6].play();
        key[6].style.backgroundColor = "grey";
    }
    if(keys[75]) {
        sound[7].play();
        key[7].style.backgroundColor = "grey";
    }
    if(keys[76]) {
        sound[8].play();
        key[8].style.backgroundColor = "grey";
    }
}

function keyUp(evt) {
    delete keys[evt.keyCode];

    if(evt.keyCode == 65) {
        key[0].style.backgroundColor = "white";
    }

    if(evt.keyCode == 83) {
        key[1].style.backgroundColor = "white";
    }

    if(evt.keyCode == 68) {
        key[2].style.backgroundColor = "white";
    }

    if(evt.keyCode == 70) {
        key[3].style.backgroundColor = "white";
    }
    if(evt.keyCode == 71) {
        key[4].style.backgroundColor = "white";
    }
    if(evt.keyCode == 72) {
        key[5].style.backgroundColor = "white";
    }
    if(evt.keyCode == 74) {
        key[6].style.backgroundColor = "white";
    }
    if(evt.keyCode == 75) {
        key[7].style.backgroundColor = "white";
    }
    if(evt.keyCode == 76) {
        key[8].style.backgroundColor = "white";
    }
    keys[evt.keyCode];
}