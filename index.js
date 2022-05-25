// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

// ! FIRST USER
firstUser.name = "Monica";
firstUser.gender = "female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";
firstUser.favoriteColor = new Set(["Yellow", "Pink", "White", "Purple"]);
firstUser.isHavePet = "Yes";

firstUser.education = [];
firstUser.education.push(
  {
    name: "SD 01",
    city: "Jakarta",
    graduate: "2016",
  },
  {
    name: "SMP 02",
    city: "Jakarta",
    graduate: "2019",
  },
  {
    name: "SMA 03",
    city: "Tangerang",
  }
);

firstUser.favoriteRestaurant = new Set([
  "Bento",
  "Sushi",
  "Pancake",
  "Eggy",
  "Tempura",
  "Bento",
  "Eggy",
  "Padang",
  "Tteok",
  "Sushi",
  "Sushi",
]);

// ! SECOND USER
secondUser.name = "Wendy";
secondUser.gender = "male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";
secondUser.favoriteColor = new Set(["Blue", "Black", "Grey"]);
secondUser.isHavePet = "No";

secondUser.education = [];
secondUser.education.push(
  {
    name: "SD 02",
    city: "Jakarta",
    graduate: 2010,
  },
  {
    name: "SMP 03",
    city: "Bogor",
    graduate: 2013,
  },
  {
    name: "SMA 01",
    city: "Surabaya",
    graduate: 2016,
  },
  {
    name: "Universitas Maju",
    city: "Tangerang",
  }
);

secondUser.favoriteRestaurant = new Set([
  "Tempura",
  "Bento",
  "Sushi",
  "Pancake",
  "Padang",
  "Katsu",
  "Geprek",
  "Pancake",
  "Eggy",
]);

//
//
// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser, secondUser);

//
//

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
