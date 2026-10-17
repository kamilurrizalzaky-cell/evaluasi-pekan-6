const TARIF_PAJAK = 0.11;
const harga = { kopi: 20000, teh: 7500, roti: 15000 };
let keranjang = ["kopi", "teh", "roti", "teh"];
let jumlahMember = 5; // FIX: 1. Ubah string "5" menjadi number 5 agar penambahan angka di bawah bernilai benar.
const pelanggan = {
  nama: "rina",
  saldo: 100000,

  // Bayar belanja. Seharusnya bayar(30000) mengembalikan sisa saldo: 70000
  bayar(jumlah) {
    this.saldo -= jumlah; // FIX: 2. Tambahkan `this.` agar merujuk ke properti saldo object pelanggan.
    return this.saldo;    // FIX: 3. Tambahkan `return this.saldo` agar mengembalikan sisa saldo.
  },
};

// Subtotal: jumlahkan harga semua isi keranjang. Seharusnya: 50000
let subtotal = 0;
for (let i = 0; i < keranjang.length; i++) { // FIX: 4. Ganti operator `<=` menjadi `<` agar terhindar dari akses indeks tak terdefinisi.
  subtotal += harga[keranjang[i]];
}

// Persen diskon: subtotal minimal 50000 → 10, minimal 25000 → 5, selain itu 0.
// Seharusnya diskon: 5000
let persen;
if (subtotal >= 50000) { // FIX: 5. Urutkan kondisi dari nilai terbesar ke terkecil agar subtotal 50000 mendapat diskon 10%.
  persen = 10;
} else if (subtotal >= 25000) {
  persen = 5;
} else {
  persen = 0;
}
let diskon = (subtotal * persen) / 100;

// Promo hari. "jumat" 3000, "sabtu" dan "minggu" 5000, lainnya 0.
// Hari ini "jumat". Seharusnya: 3000
let hari = "jumat";
let promo;
switch (hari) {
  case "jumat":
    promo = 3000;
    break; // FIX: 6. Tambahkan `break` di bawah case "jumat" agar tidak terjadi fall-through.
  case "sabtu":
  case "minggu":
    promo = 5000;
    break;
  default:
    promo = 0;
}

// Pajak 11% dari (subtotal - diskon - promo). Seharusnya: 4620
let pajak = (subtotal - diskon - promo) * TARIF_PAJAK; // FIX: 7. Tambahkan tanda kurung pada `(subtotal - diskon - promo)` agar pengurangan dieksekusi duluan.

// Total. Seharusnya: 46620
let total = subtotal - diskon - promo + pajak;

// Uang bayar dari formulir (teks "100.000"). Seharusnya: 100000, kembalian: 53380
let uangBayarTeks = "100.000";
let uangBayar = Number(uangBayarTeks.replace(/\./g, "")); // FIX: 8. Bersihkan titik ribuan dan ubah menjadi number secara tepat.
let kembalian = uangBayar - total;

// Status. Uang bayar cukup. Seharusnya: "Lunas"
let status;
if (uangBayar >= total) { // FIX: 9. Ganti operator assignment `=` dengan operator perbandingan `>=`.
  status = "Lunas";
} else {
  status = "Kurang";
}

// Nama rapi. Seharusnya: "Rina"
let namaRapi =
  pelanggan.nama.slice(0, 1).toUpperCase() + pelanggan.nama.slice(1); // FIX: 10. Ubah argumen kedua slice menjadi `slice(1)` untuk mengambil sisa huruf.

// Keranjang: hapus "teh" pertama, lalu tambah "air" di akhir.
// Seharusnya: [ 'kopi', 'roti', 'teh', 'air' ]
keranjang.splice(1, 1); // FIX: 11. Gunakan `splice(1, 1)` untuk menghapus elemen pada indeks 1, bukan `slice()`.
keranjang.push("air");    // FIX: 12. Gunakan `push("air")` untuk menambah di akhir, bukan `unshift()`.

// Member bertambah 1. Seharusnya: 6
let jumlahMemberBaru = jumlahMember + 1; // FIX: 13. Pastikan jumlahMember berupa number agar tidak terjadi string concatenation.

// Rata-rata per item (total dibagi 4) ditambah biaya kemasan 10. Seharusnya: 11665
let rataRata = Number((total / 4).toFixed(0)); // FIX: 14. Ubah hasil toFixed menjadi number agar bisa dijumlahkan dengan benar.
let rataRataTotal = rataRata + 10;

// Format rupiah. Seharusnya formatRupiah(53380) = "Rp 53380"
function formatRupiahFix(angka) {
  return "Rp " + angka; // FIX: 15. Tambahkan keyword `return`.
}

console.log(subtotal, diskon, promo, pajak, total);
console.log(uangBayar, kembalian, status);
console.log(namaRapi);
console.log(keranjang);
console.log(jumlahMemberBaru);
console.log(rataRataTotal);
console.log(formatRupiahFix(kembalian));
console.log(pelanggan.bayar(30000));

for (let kunci in harga) { // FIX: Ganti `for...of` dengan `for...in` untuk mengiterasi object.
  console.log(kunci + ": " + harga[kunci]);
}

/*
Catatan Bug:
1. `jumlahMember = "5"` (Tidak error, hasil salah): Terjadi string concatenation saat ditambah 1 menjadi "51".
2. `saldo -= jumlah` (Error runtime): `saldo` tidak dikenali karena kurang `this.saldo`.
3. `bayar()` tanpa return (Tidak error, hasil salah): Mengembalikan `undefined`.
4. `i <= keranjang.length` (Error runtime / undefined): Akses indeks di luar batas array.
5. Urutan diskon terbalik (Tidak error, hasil salah): Subtotal 50000 masuk ke syarat pertama (>=25000) sehingga diskon salah.
6. Switch tanpa break (Tidak error, hasil salah): Terjadi fall-through diskon hari jumat ke sabtu.
7. `subtotal - diskon - promo * TARIF_PAJAK` (Tidak error, hasil salah): Prioritas operator membuat perkalian pajak dikerjakan duluan.
8. `parseInt("100.000")` (Tidak error, hasil salah): Menghasilkan 100 karena titik dibaca sebagai pemisah.
9. `if (uangBayar = total)` (Tidak error, hasil salah): Assignment operator mengubah nilai uangBayar alih-alih membandingkan.
10. `slice(0)` (Tidak error, hasil salah): Mengambil seluruh string alih-alih sisa huruf.
11. `keranjang.slice(1,1)` (Tidak error, hasil salah): slice tidak memodifikasi array asli.
12. `unshift("air")` (Tidak error, hasil salah): Menambah di awal alih-alih di akhir.
13. `toFixed(2)` string + 10 (Tidak error, hasil salah): Menghasilkan gabungan teks.
14. `formatRupiah` tanpa return (Tidak error, hasil salah): Mengembalikan undefined.
15. `for...of` pada object harga (Error runtime): Object biasa tidak iterable.
*/

/*
Jawab Pertanyaan Bagian 6:
1. Kenapa if (uangBayar = total) tidak menimbulkan error? Apa yang terjadi pada nilai uangBayar setelah baris itu dijalankan?
   - Karena secara sintaks penugasan `=` di dalam kondisi `if` sah di JavaScript. Nilai `total` akan disalin dan menimpa nilai `uangBayar`, sehingga `uangBayar` berubah menjadi sama dengan `total` (bernilai truthy).
2. Kenapa parseInt("100.000") menghasilkan 100, bukan 100000?
   - Karena `parseInt` membaca string dari kiri ke kanan dan berhenti begitu menemukan karakter non-angka, di mana titik `.` dianggap sebagai pemisah desimal/karakter non-angka.
*/