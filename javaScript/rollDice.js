images = [
    'images/die1.png',
    'images/die2.png',
    'images/die3.png',
    'images/die4.png',
    'images/die5.png',
    'images/die6.png'
];

angleClasses = [
    'rotate90',
    'rotate180',
    'rotate270',
    'rotate360'
];


function rollDice(){
    for(pauseTime = 0; pauseTime < 1000; pauseTime += 100){
        setTimeout(cycle, pauseTime);
    }
    cycle();
}

function cycle(){
    var angleClass;
    document.getElementById("die1").src=images[randomInt(6)];
    document.getElementById("die2").src=images[randomInt(6)];
    document.getElementById("die3").src=images[randomInt(6)];
    document.getElementById("die4").src=images[randomInt(6)];
    document.getElementById("die5").src=images[randomInt(6)];

    angleClass = angleClasses[randomInt(4)];
    document.getElementById("die1").className=angleClass;
    angleClass = angleClasses[randomInt(4)];
    document.getElementById("die2").className=angleClass;
    angleClass = angleClasses[randomInt(4)];
    document.getElementById("die3").className=angleClass;
    angleClass = angleClasses[randomInt(4)];
    document.getElementById("die4").className=angleClass;
    angleClass = angleClasses[randomInt(4)];
    document.getElementById("die5").className=angleClass;
}

function randomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}