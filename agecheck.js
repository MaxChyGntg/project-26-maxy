// Age Check
const input = document.getElementById("MyInput");
const submit = document.getElementById("MySubmit");
const result = document.getElementById("result");
let age;

submit.onclick = function(){
    age = input.value;
    age = Number(age);

    if (age >= 100){
        result.textContent = "Kamu Udah Tua";
    }
    else if(age == 0){
        result.textContent = "Kamu Masih Bayi";
    }
    else if(age <= 0){
        result.textContent = "Kamu Masih Di dalam biji";
    }
    else if(age >= 18){
        result.textContent = "Kamu Boleh Masuk";
    }
    else if(age < 18){
        result.textContent = "Kamu Belum Cukup Umur";
    }
}
