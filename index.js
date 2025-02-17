document.getElementsByClassName("w")[0].addEventListener("click", myFunctionOne);
function myFunctionOne() {
    var audioElement = new Audio("sounds/kick.wav");
    audioElement.play();
}

document.getElementsByClassName("a")[0].addEventListener("click", myFunctionTwo);
function myFunctionTwo() {
    var audioElement = new Audio("sounds/clap.wav");
    audioElement.play();
}

document.getElementsByClassName("s")[0].addEventListener("click", myFunctionThree);
function myFunctionThree() {
    var audioElement = new Audio("sounds/hihat.wav");
    audioElement.play();
}

document.getElementsByClassName("d")[0].addEventListener("click", myFunctionFour);
function myFunctionFour() {
    var audioElement = new Audio("sounds/snare.wav");
    audioElement.play();
}

document.getElementsByClassName("j")[0].addEventListener("click", myFunctionFive);
function myFunctionFive() {
    var audioElement = new Audio("sounds/snare-2.wav");
    audioElement.play();
}

document.getElementsByClassName("k")[0].addEventListener("click", myFunctionSix);
function myFunctionSix() {
    var audioElement = new Audio("sounds/openhat.wav");
    audioElement.play();
}

document.getElementsByClassName("l")[0].addEventListener("click", myFunctionSeven);
function myFunctionSeven() {
    var audioElement = new Audio("sounds/openhat-2.wav");
    audioElement.play();
}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "w":
            myFunctionOne();
            break;
        case "a":
            myFunctionTwo();
            break;
        case "s":
            myFunctionThree();
            break;
        case "d":
            myFunctionFour();
            break;
        case "j":
            myFunctionFive();
            break;
        case "k":
            myFunctionSix();
            break;
        case "l":
            myFunctionSeven();
            break;
        default:
            console.log(event);
    }
});