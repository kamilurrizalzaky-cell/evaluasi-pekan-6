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
    for (let i = str.length - 1; i >= 0; i--) {
        hasil = str[i] + hasil;
        count++;
        if (count % 3 === 0 && i !== 0) {
            hasil = "." + hasil;
        }
    }
    return (angka < 0 ? "-Rp" : "Rp ") + hasil;
};

// Uji Function minimal 3 kasus
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

// ==========================================
// BAGIAN 3: MESIN KASIR
// ==========================================

const kasir = {
    menu: menu,
    saldoKas: 0,
    riwayat: [],
    pecahan: [50000, 20000, 10000, 5000, 2000, 1000],

    cariMenu(nama) {
        for (let m of this.menu) {
            if (m.nama.toLowerCase() === nama.toLowerCase()) {
                return m;
            }
        }
        return null;
    },

    hitungSubtotal(pesanan) {
        let subtotal = 0;
        let itemValid = [];
        let itemTidakValid = [];

        for (let p of pesanan) {
            let menuObj = this.cariMenu(p.menu);
            if (!menuObj) {
                itemTidakValid.push({ menu: p.menu, alasan: "Menu tidak ditemukan" });
                continue;
            }
            if (p.jumlah <= 0) {
                itemTidakValid.push({ menu: p.menu, alasan: "Jumlah tidak valid" });
                continue;
            }
            if (menuObj.stok < p.jumlah) {
                itemTidakValid.push({ menu: p.menu, alasan: "Stok tidak cukup" });
                continue;
            }
            let hargaItem = menuObj.harga * p.jumlah;
            subtotal += hargaItem;
            itemValid.push({ menu: menuObj.nama, jumlah: p.jumlah, harga: menuObj.harga });
        }
        return { subtotal, itemValid, itemTidakValid };
    },

    hitungPromoHari(hari) {
        let promo = 0;
        switch (hari) {
            case "jumat":
                promo = 3000;
                break;
            case "sabtu":
            case "minggu":
                promo = 5000;
                break;
            default:
                promo = 0;
                break;
        }
        return promo;
    },

    hitungDiskon(subtotal, persenVoucher) {
        let persenSub = 0;
        if (subtotal >= 100000) {
            persenSub = 15;
        } else if (subtotal >= 50000) {
            persenSub = 10;
        } else if (subtotal >= 25000) {
            persenSub = 5;
        } else {
            persenSub = 0;
        }
        let persenFinal = Math.max(persenSub, persenVoucher);
        let diskon = (subtotal * persenFinal) / 100;
        return Math.round(diskon);
    },

    hitungPajak(nilai, tarif = 0.11) {
        return Math.round(nilai * tarif);
    },

    hitungKembalianPecahan(kembalian) {
        if (kembalian < 0) return null;
        let hasil = { sisa: kembalian };
        let sisa = kembalian;
        for (let pec of this.pecahan) {
            if (sisa >= pec) {
                let jml = Math.floor(sisa / pec);
                hasil[pec] = jml;
                sisa %= pec;
            }
        }
        hasil.sisa = sisa;
        return hasil;
    },

    prosesTransaksi(trx) {
        if (!trx.pelanggan) {
            let res = { kode: trx.kode, pelanggan: trx.pelanggan, status: "DITOLAK", alasan: "Nama pelanggan kosong" };
            this.riwayat.push(res);
            return res;
        }
        if (!trx.pesanan || trx.pesanan.length === 0) {
            let res = { kode: trx.kode, pelanggan: trx.pelanggan, status: "DITOLAK", alasan: "Pesanan kosong" };
            this.riwayat.push(res);
            return res;
        }

        let resSub = this.hitungSubtotal(trx.pesanan);
        if (resSub.itemValid.length === 0) {
            let res = { kode: trx.kode, pelanggan: trx.pelanggan, status: "DITOLAK", alasan: "Tidak ada item valid" };
            this.riwayat.push(res);
            return res;
        }

        let subtotal = resSub.subtotal;
        let promoHari = this.hitungPromoHari(trx.hari);
        let diskon = this.hitungDiskon(subtotal, trx.persenVoucher);
        let nilaiSetelahDiskon = subtotal - diskon - promoHari;
        if (nilaiSetelahDiskon < 0) nilaiSetelahDiskon = 0;

        let pajak = this.hitungPajak(nilaiSetelahDiskon);
        let total = nilaiSetelahDiskon + pajak;
        let kembalian = trx.uangBayar - total;
        let status = trx.uangBayar >= total ? "LUNAS" : "KURANG";

        let pecahanKembalian = null;
        if (status === "LUNAS") {
            for (let item of resSub.itemValid) {
                let m = this.cariMenu(item.menu);
                if (m) {
                    m.stok -= item.jumlah;
                }
            }
            this.saldoKas += total;
            pecahanKembalian = this.hitungKembalianPecahan(kembalian);
        }

        let hasilTrx = {
            kode: trx.kode,
            pelanggan: trx.pelanggan,
            status,
            subtotal,
            promoHari,
            diskon,
            pajak,
            total,
            uangBayar: trx.uangBayar,
            kembalian,
            pecahanKembalian,
            itemValid: resSub.itemValid,
            itemTidakValid: resSub.itemTidakValid
        };

        this.riwayat.push(hasilTrx);
        return hasilTrx;
    },

    cetakStruk(hasil) {
        console.log("========================================");
        console.log(`STRUK TRANSAKSI: ${hasil.kode}`);
        console.log(`Pelanggan: ${hasil.pelanggan}`);
        console.log(`Status: ${hasil.status}`);
        if (hasil.status === "DITOLAK") {
            console.log(`Alasan: ${hasil.alasan}`);
        } else {
            console.log("Item Valid:");
            hasil.itemValid.forEach((it, idx) => {
                console.log(`  ${idx + 1}. ${it.menu} x${it.jumlah} @ ${formatRupiah(it.harga)}`);
            });
            if (hasil.itemTidakValid.length > 0) {
                console.log("Item Tidak Valid:");
                hasil.itemTidakValid.forEach(it => {
                    console.log(`  - ${it.menu}: ${it.alasan}`);
                });
            }
            console.log(`Subtotal: ${formatRupiah(hasil.subtotal)}`);
            console.log(`Promo Hari: ${formatRupiah(hasil.promoHari)}`);
            console.log(`Diskon: ${formatRupiah(hasil.diskon)}`);
            console.log(`Pajak (11%): ${formatRupiah(hasil.pajak)}`);
            console.log(`Total: ${formatRupiah(hasil.total)}`);
            console.log(`Uang Bayar: ${formatRupiah(hasil.uangBayar)}`);
            console.log(`Kembalian: ${formatRupiah(hasil.kembalian)}`);
            if (hasil.pecahanKembalian && hasil.status === "LUNAS") {
                console.log("Rincian Pecahan Kembalian:");
                for (let key in hasil.pecahanKembalian) {
                    if (key !== "sisa") {
                        console.log(`  Rp ${key}: ${hasil.pecahanKembalian[key]} lembar`);
                    }
                }
                if (hasil.pecahanKembalian.sisa > 0) {
                    console.log(`  Sisa koin/lain: ${formatRupiah(hasil.pecahanKembalian.sisa)}`);
                }
            }
        }
        console.log("========================================");
    }
};

// Menjalankan Transaksi
let TARGET_KAS = 1000000;
for (let trx of transaksiBersih) {
    let res = kasir.prosesTransaksi(trx);
    kasir.cetakStruk(res);
    if (kasir.saldoKas >= TARGET_KAS) {
        console.log("Target kas tercapai");
        break;
    }
}

/*
Jawab Pertanyaan Bagian 3:
1. Kenapa di dalam method kamu menulis this.menu, bukan menu? Apa yang dirujuk oleh this?
   - this.menu merujuk pada properti menu yang berada di dalam object kasir itu sendiri. Kata `this` merepresentasikan konteks object tempat method tersebut dipanggil.
2. Kenapa hitungPromoHari lebih cocok memakai switch? Di mana kamu sengaja tidak menulis break, dan kenapa hasilnya tetap benar?
   - Switch cocok untuk mencocokkan satu variabel tunggal terhadap beberapa kondisi nilai yang pasti. Pada case "sabtu" dan "minggu", tidak ditulis break di antara keduanya (fall-through disengaja) agar hari Sabtu dan Minggu mengeksekusi blok potongan diskon 5000 yang sama persis secara efisien.
3. Kenapa !trx.pesanan.length bisa dipakai untuk memeriksa pesanan kosong? Sebutkan 3 nilai yang dianggap Falsy.
   - Properti .length bernilai 0 jika array kosong. Angka 0 di JavaScript bernilai falsy, sehingga dinegasikan dengan `!` menjadi true. Tiga nilai falsy: `false`, `0`, `""` (atau null, undefined, NaN).
4. Tunjuk satu tempat di kodemu yang memakai break dan satu yang memakai continue. Apa beda keduanya?
   - `break` dipakai pada target TARGET_KAS untuk menghentikan seluruh perulangan kasir sepenuhnya. `continue` dipakai pada hitungSubtotal untuk melewati item pesanan yang tidak valid dan lanjut ke item berikutnya.
5. Kenapa hitungSubtotal mengembalikan object berisi subtotal, itemValid, dan itemTidakValid, bukan hanya angka subtotal?
   - Agar informasi lengkap mengenai item mana saja yang sah dan item mana yang ditolak beserta alasannya dapat dicatat dan ditampilkan pada struk kasir.
6. Kenapa hitungKembalianPecahan memakai while di dalam for...of? Apakah bisa diganti dengan % dan /? Jelaskan.
   - Perulangan `while` dipakai untuk menghitung jumlah lembar pecahan uang secara berulang sampai habis untuk satu nominal pecahan tertentu. Bisa diganti dengan operator pembagian bulat (`Math.floor(sisa / pec)`) dan sisa bagi (`%`), yang digunakan pada implementasi di atas.
*/