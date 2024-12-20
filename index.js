const display = document.querySelector(".display-screen");

function displayOne() {
    display.innerText = "1"
}
function displayTwo() {
    display.innerText += "2"
}
function displayThree() {
    display.innerText += "3"
}
function displayFour() {
    display.innerText += "4"
}
function displayFive() {
    display.innerText += "5"
}
function displaySix() {
    display.innerText += "6"
}
function displaySeven() {
    display.innerText += "7"
}
function displayEight() {
    display.innerText += "8"
}
function displayNine() {
    display.innerText += "9"
}
function displayZero() {
    display.innerText += "0"
}
function displayPlus() {
    display.innerText += "+"
}
function displayMinus() {
    display.innerText += "-"
}
function displayMultiplication() {
    display.innerText += "*"
}
function displayDivision() {
    display.innerText += "/"
}
function displayPoint() {
    display.innerText += "."
}
function displayClear() {
    display.innerText = ""
}
function displayBackDelete() {
    display.innerText = display.innerText.slice(0, -1)
}
function displayPercentage() {
    display.innerText += "%"
}
/*function displayPlusMinus {
    display.innerText = "-/+"
}*/
function calculate() {
    display.innerText = eval(display.innerText);
}
