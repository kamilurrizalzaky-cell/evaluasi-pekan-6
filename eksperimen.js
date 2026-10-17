// --- 7.1 TEBAK ---
// 1. console.log("  Hai Kawan  ".trim().length); -> Tebakan: 9 | Hasil Asli: 9
console.log("  Hai Kawan  ".trim().length);

// 2. console.log("Kopi Susu".toUpperCase().slice(0, 4)); -> Tebakan: "KOPI" | Hasil Asli: "KOPI"
console.log("Kopi Susu".toUpperCase().slice(0, 4));

// 3. console.log("a,b,c".split(",").length); -> Tebakan: 3 | Hasil Asli: 3
console.log("a,b,c".split(",").length);

// 4. console.log("banana".replace("a", "o")); -> Tebakan: "bonana" | Hasil Asli: "bonana"
console.log("banana".replace("a", "o"));

// 5. console.log("banana".replaceAll("a", "o")); -> Tebakan: "bonono" | Hasil Asli: "bonono"
console.log("banana".replaceAll("a", "o"));

// 6. console.log(parseInt("42px")); -> Tebakan: 42 | Hasil Asli: 42
console.log(parseInt("42px"));

// 7. console.log(Number("42px")); -> Tebakan: NaN | Hasil Asli: NaN
console.log(Number("42px"));

// 8. console.log(parseInt("3.99")); -> Tebakan: 3 | Hasil Asli: 3
console.log(parseInt("3.99"));

// 9. console.log(typeof (3.14159).toFixed(2)); -> Tebakan: "string" | Hasil Asli: "string"
console.log(typeof (3.14159).toFixed(2));

// 10. console.log((0.1 + 0.2).toFixed(2)); -> Tebakan: "0.30" | Hasil Asli: "0.30"
console.log((0.1 + 0.2).toFixed(2));

// 11. console.log("10" + 5 * 2); -> Tebakan: "1010" | Hasil Asli: "1010"
console.log("10" + 5 * 2);

// 12. console.log(!0 && !""); -> Tebakan: true | Hasil Asli: true
console.log(!0 && !"");

// Potongan B
let angka = [10, 20, 30, 40];
let potongan = angka.slice(1, 3);
let hapus = angka.splice(1, 2);
console.log(potongan); // [20, 30]
console.log(hapus);    // [20, 30]
console.log(angka);    // [10, 40]

function ganda(n) { return n * 2; }
function cetak(n) { console.log(n * 2); }
console.log(ganda(4) + ganda(1)); // 10
console.log(cetak(4));            // 8, lalu undefined

const toko = {
  nama: "Senja",
  stok: 5,
  jual(n) { this.stok -= n; return this.stok; },
};
toko.jual(2);
console.log(toko.jual(1)); // 2
console.log("stok" in toko); // true
for (let k in toko) { console.log(k); } // nama, stok, jual

// Potongan C
let hasil = "";
for (let i = 1; i <= 6; i++) {
  if (i === 2) { continue; }
  if (i === 5) { break; }
  hasil += i;
}
console.log(hasil); // "134"

let n = 3;
let kali = 1;
while (n > 0) { kali *= n; n--; }
console.log(kali); // 6

let x = 0;
do { x += 5; } while (x < 3);
console.log(x); // 5

for (let huruf of "ABC") { console.log(huruf + huruf.toLowerCase()); } // Aa, Bb, Cc


// --- 7.2 EKSPERIMEN ---
// 1. Hoisting Function Declaration vs Expression
console.log(fungsiDeklarasi()); // Bisa dipanggil
function fungsiDeklarasi() { return "Deklarasi ok"; }

// console.log(fungsiEkspresi());
// const fungsiEkspresi = function() { return "Ekspresi"; };
// Pesan error: ReferenceError: Cannot access 'fungsiEkspresi' before initialization

// 2. slice vs splice
let arr = [1, 2, 3];
console.log(arr.slice(0, 2)); // [1, 2]
console.log(arr); // [1, 2, 3] (tetap)
console.log(arr.splice(0, 2)); // [1, 2]
console.log(arr); // [3] (berubah)

// 3. for...in vs for...of pada Array
let arrEx = [10, 20];
for (let i in arrEx) { console.log(typeof i, i); } // string "0", string "1"
for (let v of arrEx) { console.log(typeof v, v); } // number 10, number 20

// 4. toFixed menghasilkan string
console.log(typeof (5).toFixed(1)); // "string"
console.log((5).toFixed(1) + 1);    // "5.01"

// 5. Enam Falsy vs Truthy khusus
let falsyValues = [false, 0, "", null, undefined, NaN];
for (let f of falsyValues) {
  if (f) { console.log("Masuk:", f); } 
  else { console.log("Ditolak falsy:", f); }
}

let truthySpecial = ["0", [], {}];
for (let t of truthySpecial) {
  if (t) { console.log("Masuk truthy khusus:", t); }
}


// --- 7.3 JELASKAN ---
/*
1. Pada Potongan A, kenapa "10" + 5 * 2 hasilnya "1010"? Urutan apa yang dikerjakan JavaScript?
   - Berdasarkan urutan prioritas operator (* lebih tinggi dari +), perkalian `5 * 2` dikerjakan terlebih dahulu menghasilkan `10`. Kemudian ekspresi menjadi `"10" + 10`. Karena salah satu operand adalah string, terjadi string concatenation menghasilkan `"1010"`.
2. Pada Potongan B, kenapa potongan dan hapus isinya sama, tetapi efeknya pada angka berbeda?
   - `slice` adalah method non-mutator yang menyalin sebagian array tanpa merusak array asli. `splice` adalah method mutator yang memotong dan menghapus elemen dari array aslinya.
3. Pada Potongan B, kenapa console.log(cetak(4)) mencetak dua baris? Dari mana undefined berasal?
   - Baris pertama (angka 8) dicetak langsung oleh perintah `console.log` di dalam fungsi `cetak`. Baris kedua (`undefined`) dicetak oleh `console.log` terluar karena fungsi `cetak` tidak memiliki nilai `return`.
4. Pada Potongan C, kenapa hasil bernilai "134"? Jelaskan apa yang terjadi di tiap putaran dari i = 1 sampai perulangan berhenti.
   - i = 1: masuk, hasil menjadi "1".
   - i = 2: kondisi `i === 2` terpenuhi, `continue` melewati iterasi ini.
   - i = 3: masuk, hasil menjadi "13".
   - i = 4: masuk, hasil menjadi "134".
   - i = 5: kondisi `i === 5` terpenuhi, `break` menghentikan seluruh perulangan.
5. Pada Potongan C, kenapa do...while tetap menjalankan blok satu kali padahal kondisi x < 3 bernilai false sejak awal?
   - Karena struktur `do...while` mengevaluasi kondisi perulangan di **akhir** blok, sehingga blok kode di dalam `do` dijamin akan selalu dieksekusi minimal satu kali sebelum kondisi diperiksa.
*/