// Check Property
const MyCheck = document.getElementById("MyCheck");
const Buku = document.getElementById("Buku");
const Bulpen = document.getElementById("Bulpen");
const Tas = document.getElementById("Tas");
const Beli = document.getElementById("Beli");
const info = document.getElementById("info");
const nama = document.getElementById("nama");
let jumlah;

Beli.onclick = function(){
    if(MyCheck.checked){
        jumlah = window.prompt("Mau Beli Brp Barang?");
        jumlah = Number(jumlah);
        info.textContent = "Kamu Anak Sekolah";
    }
    else{
        info.textContent = "Kamu Bukan Anak Sekolah Pergi!";
    }

    if(Buku.checked){
        nama.textContent = `Kamu Membeli ${jumlah} Buku`;
    }
    else if(Bulpen.checked){
        nama.textContent = `Kamu Membeli ${jumlah} Bulpen`;
    }
    else if(Tas.checked){
        nama.textContent = `Kamu Membeli ${jumlah} Tas`;
    }
    else if(jumlah >= 100){
        nama.textContent = `Maaf stok hanya 100`;
    }
}
