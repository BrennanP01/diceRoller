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

//simulates the roll of dice
function rollDice(){
    //cycles a few times
    for(pauseTime = 0; pauseTime < 1000; pauseTime += 100){
        setTimeout(cycle, pauseTime);
    }
    //final result
    cycle();
}

//rolls the dice once
function cycle(){
    var angleClass;
    // initiate the dice
    var die1Num = randomInt(6);
    var die2Num = randomInt(6);
    var die3Num = randomInt(6);
    var die4Num = randomInt(6);
    var die5Num = randomInt(6);
    //give each die an image to match its number
    document.getElementById("die1").src=images[die1Num];
    document.getElementById("die2").src=images[die2Num];
    document.getElementById("die3").src=images[die3Num];
    document.getElementById("die4").src=images[die4Num];
    document.getElementById("die5").src=images[die5Num];
    //set the text to be the number shown (start as zero, so plus one)
    document.getElementById("die1Num").textContent=die1Num + 1;
    document.getElementById("die2Num").textContent=die2Num + 1;
    document.getElementById("die3Num").textContent=die3Num + 1;
    document.getElementById("die4Num").textContent=die4Num + 1;
    document.getElementById("die5Num").textContent=die5Num + 1;
    //set the rotation for each dice randomly on 90 degree interval
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

//returns a random number between zero and max
function randomInt(max){
    return Math.floor(Math.random() * max);
}