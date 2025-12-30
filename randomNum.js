//Random Number Generator

const generate1 = document.getElementById("Label1");
const generate2 = document.getElementById("Label2");
const generate3 = document.getElementById("Label3");
const roll = document.getElementById("Hasil");
const hapus = document.getElementById("Hapus");

let randomNum1, randomNum2, randomNum3;
let max = 50;
let min = 10;

roll.onclick = function(){
    randomNum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    randomNum3 = Math.floor(Math.random() * (max - min + 1)) + min;

    generate1.textContent = randomNum1;   
    generate2.textContent = randomNum2;   
    generate3.textContent = randomNum3;   
}

hapus.onclick = function(){
    generate1.textContent = 0;
    generate2.textContent = 0;
    generate3.textContent = 0;
}
