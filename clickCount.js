// Clicker Counter
const countNum = document.getElementById("countNum");
const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const reset = document.getElementById("reset");

let count = 0;

increase.onclick = function(){
    count++;
    countNum.textContent = count;
}
decrease.onclick = function(){
    count--;
    countNum.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countNum.textContent = count;
}
