// 1. Seleksi elemen DOM 
const btn = document.getElementById("btnHitung"); 
const outputBox = document.getElementById("hasil"); 

// 2. Fungsi Utama 
const hitungTotal = () => { 

// Ambil Value 
const nama = document.getElementById("namaBarang").value; 
const harga = Number(document.getElementById("hargaBarang").value); 
const jumlah = Number(document.getElementById("jumlahBeli").value); 

// Validasi Sederhana 
if (nama === "" || harga <= 0 || jumlah <= 0) { 
    outputBox.innerHTML = "<span class='text-danger'>Mohon lengkapi data dengan benar!</span>"; 
    return; 
} 

// Kalkulasi 
const subtotal = harga * jumlah; 
const pajak = subtotal * 0.11; 

// 🔥 Tambahan Diskon
let diskon = 0;
if (subtotal > 1000000) {
    diskon = subtotal * 0.05; // 5%
    outputBox.style.backgroundColor="Yellow";

}else{
    outputBox.style.backgroundColor="#e9ecef";
}

// Total setelah pajak dan diskon
const totalBayar = subtotal + pajak - diskon; 

// Tampilkan secara dinamis ke HTML 
outputBox.innerHTML = ` 
<div class="text-success">Perhitungan Berhasil:</div> 
<hr> 
Item: <strong>${nama}</strong> <br> 
Subtotal: Rp ${subtotal.toLocaleString('id-ID')} <br> 
Pajak (11%): Rp ${pajak.toLocaleString('id-ID')} <br> 
Diskon (5%): Rp ${diskon.toLocaleString('id-ID')} <br>
<hr> 
<strong>Total Bayar: Rp ${totalBayar.toLocaleString('id-ID')}</strong> 
`; 

// Console log untuk debugging 
console.log(`Transaksi ${nama} berhasil diproses.`); 
}; 

// Seleksi tombol reset
const btnReset = document.getElementById("btnReset");

// Fungsi reset
const resetForm = () => {
    // Kosongkan input
    document.getElementById("namaBarang").value = "";
    document.getElementById("hargaBarang").value = "";
    document.getElementById("jumlahBeli").value = "";

    // Bersihkan hasil
    outputBox.innerHTML = "<p id='labelHasil'>Hasil perhitungan akan muncul di sini.</p>";
};
// Event listener tombol reset
btnReset.addEventListener("click", resetForm);

// 3. Event Listener 
btn.addEventListener("click", hitungTotal);