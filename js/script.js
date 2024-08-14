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

btnReset.onclick = function() {
    hasil = 0;
    statusBB = "-";
    statusRange = "-";
    hasilPerhitungan.textContent = hasil;
    statusHasil.textContent = statusBB; 
    statusHasilKet.textContent = statusBB; 
    statusRange.textContent = statusRange;
}

btnInput.onclick = function () {
    beratBadan = beratBadan.value;
    beratBadan = Number(beratBadan);
    tinggiBadan = tinggiBadan.value;
    tinggiBadan = Number(tinggiBadan);
    tinggiBadan = tinggiBadan / 100;
    hasil = beratBadan / tinggiBadan ** 2;
    let min = hasil - 1;
    let max = hasil + 1;
    hasilPerhitungan.textContent = hasil.toFixed(1);
    statusRange.textContent = `${min.toFixed(0)} dan ${max.toFixed(0)}`;

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