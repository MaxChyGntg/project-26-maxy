// radius
const pi = 3.14159;
let radius;
let jawaban;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    jawaban = 2 * pi * radius;
    document.getElementById("answer").textContent = jawaban + " cm";
}
