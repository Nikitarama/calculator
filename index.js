const scrDisplay = document.getElementById("scrDisplay");
const calDisplay = document.getElementById("calDisplay");

function display(num){
    scrDisplay.innerHTML += num;
}
function allClear(){
    scrDisplay.innerHTML = '';
    calDisplay.innerHTML = '';
}

function del(){
    scrDisplay.innerText = scrDisplay.innerText.slice(-1);
}

function calculate(){
    calDisplay.innerHTML = eval(scrDisplay.innerText);
}