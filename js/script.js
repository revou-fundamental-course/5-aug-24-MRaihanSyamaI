let beratBadan = document.getElementById("beratBadan");
let tinggiBadan = document.getElementById("tinggiBadan");
let hasilPerhitungan = document.getElementById("hasilPerhitungan");
let btnInput = document.getElementById("btnInput");
let btnReset = document.getElementById("btnReset");
let statusHasil = document.getElementById("statusHasil");
let statusHasilKet = document.getElementById("statusHasilKet");
let statusRange = document.getElementById("statusRange");
let hasil = 0;
let statusBB;

// Memberikan fungsi btnReset 
btnReset.onclick = function() {
    hasil = 0;
    statusBB = "-";
    statusRange = "-";
    hasilPerhitungan.textContent = hasil;
    statusHasil.textContent = statusBB; 
    statusHasilKet.textContent = statusBB; 
    statusRange.textContent = statusRange;
}

// Memberikan fungsi btnInput
btnInput.onclick = function () {
    // Menggambil Value dari input
    beratBadan = beratBadan.value;
    tinggiBadan = tinggiBadan.value;
    // Mengubah dari string (karena input) ke Number
    beratBadan = Number(beratBadan);
    tinggiBadan = Number(tinggiBadan);
    // Menggubah dari cm ke m
    tinggiBadan = tinggiBadan / 100;
    // Perhitungan
    hasil = beratBadan / tinggiBadan ** 2;
    // Memberikan renge hasil
    let min = hasil - 1;
    let max = hasil + 1;
    hasilPerhitungan.textContent = hasil.toFixed(1); // Agar mendapatkan 1 angka dibelakang koma
    statusRange.textContent = `${min.toFixed(0)} dan ${max.toFixed(0)}`;

    // Agar dapat dikelompokan sesuai hasil
    if (hasil < 18.5) {
        statusBB = "Kekurangan";
    } else if (hasil >= 18.5 && hasil <= 24.9) {
        statusBB = "Ideal";
    } else if (hasil >= 25 && hasil <=29.9) {
        statusBB = "Berlebih";
    } else {
        statusBB = "Obesitas";
    }
    
    statusHasil.textContent = statusBB;
    statusHasilKet.textContent = statusBB; 
}