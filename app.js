const gajiAlif = 50000000;
const cicilan1 = 500000;
const cicilan2 = 500000000;

const pengeluaran = gajiAlif > cicilan1 ? "Lunas bro" : "Keos bro";
console.log(pengeluaran);

const jikaAnd = gajiAlif > cicilan1 && "Keos bro";
console.log(jikaAnd);

const jikaOr = cicilan2 < gajiAlif || "Afah iyah?";
console.log(jikaOr);

const listKue = [
    {
        nama: "Nastar,",
        harga: 10000,
        product: "Nextar,",
    },
    {
        nama: "Tanggo",
        harga: 20000,
        product: "Orang Tua",
    },
    {
        nama: "Coco Crunch,",
        harga: 30000,
        product: "Nestle",
    },
];


const listNama = listKue.map((cake) => cake.nama);
const listProduct = listKue.map((ploduk) => ploduk.product);
const listHarga = listKue.map((price) => price.harga);
console.log(listNama);
console.log(listProduct);
console.log(listHarga);

const filterHarga = listKue.filter((harga) => harga.harga > 10000);
console.log(filterHarga);
