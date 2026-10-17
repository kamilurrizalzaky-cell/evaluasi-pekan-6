/**
 * LATIHAN LOGIKA JAVASCRIPT
 * Nama: Rian
 */

function hitungFaktorial(n) {
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;
    let hasil = 1;
    for (let i = 2; i <= n; i++) {
        hasil *= i;
    }
    return hasil;
}

function cekPalindrom(teks) {
    if (!teks || typeof teks !== "string") return false;
    let bersih = teks.trim().toLowerCase();
    if (bersih === "") return false;
    let tanpaSpasi = bersih.replace(/\s+/g, "");
    let len = tanpaSpasi.length;
    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (tanpaSpasi[i] !== tanpaSpasi[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function hitungVokal(teks) {
    if (!teks || typeof teks !== "string") return 0;
    let vokal = "aiueo";
    let count = 0;
    for (let char of teks.toLowerCase()) {
        if (vokal.includes(char)) {
            count++;
        }
    }
    return count;
}

function cariTerbesar(daftar) {
    if (!daftar || daftar.length === 0) return null;
    let maks = daftar[0];
    let indeks = 0;
    for (let i = 1; i < daftar.length; i++) {
        if (daftar[i] > maks) {
            maks = daftar[i];
            indeks = i;
        }
    }
    return { nilai: maks, indeks: indeks };
}

function hapusDuplikat(daftar) {
    if (!daftar) return [];
    let hasil = [];
    for (let item of daftar) {
        if (!hasil.includes(item)) {
            hasil.push(item);
        }
    }
    return hasil;
}

function cekBilanganPrima(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Pengujian
console.log(hitungFaktorial(5));
console.log(hitungFaktorial(0));
console.log(hitungFaktorial(1));
console.log(hitungFaktorial(-3));

console.log(cekPalindrom("Katak"));
console.log(cekPalindrom(" Malam "));
console.log(cekPalindrom("Kopi"));
console.log(cekPalindrom(""));

console.log(hitungVokal("Kedai Senja"));
console.log(hitungVokal("RHYTHM"));
console.log(hitungVokal("Aiueo"));

console.log(cariTerbesar([12, 45, 7, 45, 30]));
console.log(cariTerbesar([3]));
console.log(cariTerbesar([]));

let arrAsli = [1, 2, 2, 3, 1];
console.log(hapusDuplikat(arrAsli));
console.log(arrAsli);
console.log(hapusDuplikat(["a", "b", "a"]));
console.log(hapusDuplikat([]));

console.log(cekBilanganPrima(2));
console.log(cekBilanganPrima(17));
console.log(cekBilanganPrima(15));
console.log(cekBilanganPrima(1));
console.log(cekBilanganPrima(0));

/*
Jawab Pertanyaan Bagian 5:
1. Pilih satu function. Jelaskan langkah demi langkah apa yang terjadi saat dipanggil dengan salah satu contoh (nilai variabel di tiap putaran perulangan).
   - Pada `hitungFaktorial(3)`: `hasil` dimulai dari 1. Putaran `i = 2`: `hasil` menjadi 1 * 2 = 2. Putaran `i = 3`: `hasil` menjadi 2 * 3 = 6. Mengembalikan 6.
2. Pada hapusDuplikat, kenapa array asli tidak boleh berubah? Kenapa kamu memakai method yang kamu pilih untuk memeriksa elemen ganda?
   - Array asli dipertahankan agar tidak merusak sumber data referensi awal (pure function). Digunakan method `.includes()` untuk mengecek apakah elemen sudah ada di array baru.
3. Pada cekBilanganPrima, apakah kamu memakai break? Apa yang terjadi jika baris itu dihapus: hasilnya salah atau hanya lebih lambat? Jelaskan.
   - Ya, `break` atau `return false` digunakan agar perulangan langsung berhenti begitu faktor pembagi ditemukan. Jika dihapus, hasil akhir tetap benar, tetapi program berjalan lebih lambat karena membuang waktu memeriksa sisa angka.
4. Kenapa cariTerbesar([]) mengembalikan null, bukan 0?
   - Karena angka 0 adalah nilai angka yang sah, sedangkan `null` secara tepat merepresentasikan ketidakhadaan data atau array kosong.
5. Tunjuk dua function yang memakai jenis perulangan berbeda (for, for...of, atau while). Kenapa kamu memilih jenis itu untuk masing-masing?
   - `hitungFaktorial` memakai `for` klasik dengan indeks karena memerlukan penghitungan increment dari 2 sampai n. `hitungVokal` memakai `for...of` untuk membaca karakter di dalam string secara bersih tanpa perlu mengakses indeks secara manual.
*/