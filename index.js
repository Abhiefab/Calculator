let display = document.querySelector("#display");

function appendDisplay(input){
    display.value +=input;
}
function clearDisplay(){
display.value = " "
}
function backDisplay(){
    display.value = display.value.slice(0,-1)

}
function equalDisplay(){
    display.value = eval(display.value);
}