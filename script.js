/**
 * Nama : Zaky
 * Tanggal : 17 oktober 2026
 */

// data dan kedai menu
const kedai = {
    nama: "Kedai Senja",
    pemilik: "Rian",
    kota: "Yogyakarta",
    tahunberdiri: 2022,
    sedangbuka: true,
    nomorwhatsApp: "08123456789",
    website: null,
    jamOperasional: {
        buka: "08:00",
        tutup: "22:00"
    }
};

const menu = [
    {nama: "Kopi Senja", kategori: "Minuman", harga: 18000, stok: 10 },
    {nama: "Ekspresso", kategori: "Minuman", harga: 15000, stok: 8 },
    {nama: "Matcha Latte", kategori: "Minuman", harga: 22000, stok: 2 },
    {nama: "Roti Bakar", kategori: "Makanan", harga: 15000, stok: 6 },
    {nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, stok: 5 },
    {nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, stok: 2 },
    {nama: "Es Teh Manis", kategori: "Minuman", harga: 7000, stok: 15 },
    {nama: "Kentang Goreng", kategori: "Cemilan", harga: 14000, stok: 10 }
];

const transaksiMentah = [
    {
        kode: "trx-001",
        pelanggan: " rina WULANDARI ",
        hari: "jumat",
        uangbayar: "150.000",
        voucher: " diskon10 ",
        pesanan: [
            { menu: " kopi SUSU", jumlah: "2" },
            { menu: " roti BAKAR", jumlah: "1" }
        ]
    },
{
    kode: "trx-002",
    pelanggan: " Budi Santoso ",
    hari: "sabtu",
    uangBayar: "75000",
    voucher: "",
    pesanan: [
        { menu: "matcha LATTE", jumlah: "1" }
    ]
},
{
    kode: "trx-003",
    pelanggan: "Siti Rahma",
    hari: "minggu",
    uangBayar: "50000",
    voucher: "PROMO20",
    pesanan: [
        { menu: "espresso", jumlah: "2" }
    ]
},
{
    kode: "trx-004",
    pelanggan: "joko",
    hari: "rabu",
    uangBayar: "10000",
    voucher: "diskon15",
    pesanan: [
        { menu: "kopi SUSU", jumlah: "5" }
    ]
},
{
    kode: "trx-005",
    pelanggan: "",
    hari: "senin",
    uangBayar: "50000",
    voucher: "",
    pesanan: [{ menu: "Kopi", jumlah: "1" }] // Ditolak: nama kosong
},
{
    kode: "trx-006",
    pelanggan: "Andi",
    hari: "kamis",
    uangBayar: "20000",
    voucher: "",
    pesanan: [] // ditolak: pesanan kosong
}
];

// 2.2 Function Pembersih Data
// Function Declaration
function bersihkanNama(teks) {
    if (!teks || typeof teks !== "string") return "";
    let trimmed = teks.trim().replace(/\s+/g, " ");
    if (!trimmed) return "";
    let words = trimmed.split(" ");
    let cleanedWords = words.map(word => words.charAt(0).toUpperCase() + words.slice(1).toLowerCase())
    return cleanedWords.join(" ");
}

{

// Function Expression
const ubahKeAngka = function(teks) {
    if (!teks) return 0;
    let bersih = string(teks).replace(/\./g, "").replace(/\s+/g, "");
    let num = Number(bersih);
    return isNaN(num) ? 0 : num;
};

// Arrow Function
const ambilPersenVoucher = (kode) => {
    if (!kode || typeof kode !== "string") return 0;
    let bersih = kode.trim().toUpperCase();
    if (bersih.startsWith("DISKON")) {
        let angkaStr = bersih.replace("DISKON", "");
        let num = Number(angkaStr);
        return isNaN(num) ? 0 : num;
    }
    return 0;
};

const formatRupiah = (angka) => {
    if (isNaN(angka)) angka = 0;
    let str = Math.abs(Math.floor(angka)).toString();
    let hasil = "";
    let count = 0;
    for (let i = str.length - 1; i >= 0; i==) {
        hasil = str[i] + hasil;
        count++;
        if (count % 3 === 0 && i 1== 0) {
            hasil = "." + hasil:
        }
    }
    return (angka < 0 ? "-Rp" : "Rp ") + hasil;
};

/ Uji Function minimal 3 kasus
console.log("--- UJI PEMBERSIH DATA ---");
console.log(`bersihkanNama("  rina   WULANDARI ") → "${bersihkanNama("  rina   WULANDARI ")}"`);
console.log(`bersihkanNama("") → "${bersihkanNama("")}"`);
console.log(`bersihkanNama("  budi   santoso  ") → "${bersihkanNama("  budi   santoso  ")}"`);

console.log(`ubahKeAngka("150.000") → ${ubahKeAngka("150.000")}`);
console.log(`ubahKeAngka("75000") → ${ubahKeAngka("75000")}`);
console.log(`ubahKeAngka("abc") → ${ubahKeAngka("abc")}`);

console.log(`ambilPersenVoucher(" diskon10 ") → ${ambilPersenVoucher(" diskon10 ")}`);
console.log(`ambilPersenVoucher("PROMO5") → ${ambilPersenVoucher("PROMO5")}`);
console.log(`ambilPersenVoucher("") → ${ambilPersenVoucher("")}`);

console.log(`formatRupiah(1250000) → "${formatRupiah(1250000)}"`);
console.log(`formatRupiah(500) → "${formatRupiah(500)}"`);
console.log(`formatRupiah(0) → "${formatRupiah(0)}"`);

// 2.3 Data Bersih
const transaksiBersih = [];
for (let trx of transaksiMentah) {
    let pesananBersih = [];
    if (trx.pesanan && Array.isArray(trx.pesanan)) {
        for (let p of trx.pesanan) {
            pesananBersih.push({
                menu: bersihkanNama(p.menu),
                jumlah: ubahKeAngka(p.jumlah)
            });
        }
    }
    transaksiBersih.push({
        kode: trx.kode.toUpperCase(),
        pelanggan: bersihkanNama(trx.pelanggan),
        hari: trx.hari.trim().toLowerCase(),
        uangBayar: ubahKeAngka(trx.uangBayar),
        persenVoucher: ambilPersenVoucher(trx.voucher),
        pesanan: pesananBersih
    });
}
console.log("transaksiBersih:", transaksiBersih);

/*
Jawab Pertanyaan Bagian 2:
1. Apa beda parseInt, parseFloat, dan Number? Kenapa ubahKeAngka harus menghapus titik terlebih dahulu? Apa hasil parseInt("150.000")?
   - parseInt mengubah teks menjadi angka bulat, parseFloat membaca angka desimal, sedangkan Number mengubah teks apa adanya menjadi angka (atau NaN jika gagal).
   - ubahKeAngka harus menghapus titik pemisah ribuan terlebih dahulu karena dalam JavaScript titik dianggap sebagai pemisah desimal, sehingga "150.000" akan dibaca keliru sebagai 150.
   - Hasil parseInt("150.000") adalah 100 karena pembacaan berhenti saat menemukan karakter titik (.).
2. toFixed mengembalikan teks atau angka? Buktikan dengan typeof, lalu tunjukkan akibatnya jika hasil toFixed langsung dijumlahkan dengan angka.
   - toFixed mengembalikan nilai bertipe string (teks). Contoh: typeof (5.5).toFixed(0) adalah "string".
   - Jika langsung dijumlahkan dengan angka, terjadi string concatenation (penggabungan teks) alih-alih operasi matematika, misal "5" + 1 menjadi "51".
3. Apa beda replace dan replaceAll? Tunjuk satu tempat di kodemu yang memerlukan salah satunya.
   - replace hanya mengganti kemunculan pertama dari sebuah string, sedangkan replaceAll mengganti seluruh kemunculan di sepanjang string. Pada fungsi ubahKeAngka, replace dipakai dengan regex global (`/\./g`) untuk mengganti semua titik ribuan.
4. Setelah kamu memanggil kode.toUpperCase(), kenapa isi variabel kode yang asli tidak berubah?
   - Karena tipe data string di JavaScript bersifat *immutable* (tidak dapat diubah langsung). Method seperti toUpperCase() mengembalikan string baru yang sudah dimodifikasi tanpa mengubah nilai asli pada variabel asalnya.
5. Tunjuk satu function declaration, satu function expression, dan satu arrow function dari kodemu. Kenapa kamu memilih bentuk itu untuk masing-masing?
   - Function declaration (`bersihkanNama`): Dipilih agar bisa di-hoisting dan dipanggil di bagian mana pun dalam file.
   - Function expression (`ubahKeAngka`): Dipilih untuk membatasi ruang lingkup deklarasi dan menugaskannya pada variabel secara eksplisit.
   - Arrow function (`ambilPersenVoucher`): Dipilih karena penulisannya ringkas dan sangat cocok untuk fungsi utilitas pendek satu baris.
*/
}