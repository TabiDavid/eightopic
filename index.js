var box1 = function (){

    document.getElementById("box1").style.animationName = "box";
    document.getElementById("box1").style.animationDuration = "4s";
    document.getElementById("box1").style.animationIterationCount = "4";
    document.getElementById("box1").style.animationDirection = "alternate";

}

function Faded(){

    var square = document.getElementById("square1");
    square.style.opacity ="0";
    square.style.transitionDuration = "3s";
    
}