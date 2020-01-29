var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector(".random");

color1.value = "#ff0000";
color2.value = "#ffff00";
setGradient();

function setGradient(){
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";
}

function randomColorPicker() {
    return (Math.floor(Math.random()*16777215).toString(16));
}

function setRandomGradient(){
    body.style.background = "linear-gradient(to right, #" + randomColorPicker() + ", #" + randomColorPicker() + ")";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);