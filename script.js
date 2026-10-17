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
    {nama: "Matcha Latte", kategori: "Minuman", harga: 22000, stok 2 },
    {nama: "Roti Bakar", kategori: "Makanan", harga: 15000, stok: 6 },
    {nama: "Pisang Goreng", kategori: "Makanan", harga; 12000, stok: 5 },
    {nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, stok: 2 },
    {nama: "Es Teh Manis", kategori: "Minuman", harga; 7000, stok: 15 },
    {nama: "Kentang Goreng", kategori: "Cemilan", harga 14000, stok: 10 }
];

const transaksiMentah = [
    {
        kode: "trx-001",
        pelanggan: " ahmad MAULANA ",
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
    pelanggan: " husein ",
    hari: "sabtu",
    uangBayar: "75000",
    voucher: "",
    pesanan: [
        { menu: "matcha LATTE", jumlah: "1" }
    ]
},
{
    kode: "trx-003",
    pelanggan: "Yusuf",
    hari: "minggu",
    uangBayar: "50000",
    voucher: "PROMO20",
    pesanan: [
        { menu: "espresso", jumlah: "2" }
    ]
},
{
    kode: "trx-004",
    pelanggan: "Dimas",
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
    pelanggan: "Dedi",
    hari: "kamis",
    uangBayar: "20000",
    voucher: "",
    pesanan: [] // ditolak: pesanan kosong
}
];