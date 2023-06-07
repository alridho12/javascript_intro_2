//length
let hobbies = ["nonton","berenang","selancar"];
let length = hobbies.length; 
console.log(length) //output: 3
//kegunaan dari length yaitu menghitung jumlah elemen dalam array.

//push
let foods = ["nasi","mie","kerupuk"];
foods.push("telur","sosis");
console.log(foods) //output: ["nasi","mie","kerupuk","telur","sosis"]
//push digunakan untuk menambah satu atau lebih data baru dari sebuah array yang letaknya setelah elemen terakhir.

//pop
let music = ["rock","metal","jazz","kpop"];
music.pop();
console.log(music) //output: [ 'rock', 'metal', 'jazz' ]
// pop kebalikan dari push pop digunakan untuk menghapus elemen terakhir dari array.

//unshift
let club = ["barcelona","persija"];
club.unshift("madrid","persib");
console.log(club) //output: [ 'madrid', 'persib', 'barcelona', 'persija' ]
//unshift digunakan untuk menambah item baru di awal sebuah array.

//shift
let number = [1,2,3,4];
number.shift()
console.log(number) //output: [ 2, 3, 4 ]
//shift Digunakan untuk menghapus item pertama dari sebuah array.

//slice
let fruits = ["banana","kiwi","lemon",'manggo'];
fruits.slice(0,2); //output: ["banana","kiwi"]
//Method slice digunakan untuk memilih satu atau beberapa item dari sebuah array.

//splice
let juice = ['apple', 'banana', 'cherry'];
juice.splice(0, 1, 'mango'); // menghapus 1 item di index 0 dan menambah 'mango' di index 0

console.log(juice) // ['mango', 'banana', 'cherry']
//splice bisa digunakan untuk menambahkan, menghapus, atau mereplace item ke atau dari sebuah array.

//concat
let city = ["medan","pekanbaru","padang"];
let newCity = ["bandung","denpasar","jogja"];
let updateCity = city.concat(newCity);
console.log(updateCity) //output: [ 'medan', 'pekanbaru', 'padang', 'bandung', 'denpasar', 'jogja' ]
//concat digunakan untuk menggabungkan 2 array

//includes
let name = ["mcgregor","khabib","mike tyson","alex"];
let found = name.includes("alex");
console.log(found) //output: true
//includes digunakan untuk mendeklarisasikan apakah ada element yang cocok.

//flat
let arr = [1,2,3,4,[5,6]];
let newArr = arr.flat(1);//(kedalaman array)
console.log(newArr) //output: [1,2,3,4,5,6]
//flat digunakan untuk menggabungkan semua elemen dalam array ke dalam satu dimensi. Jika array memiliki elemen-elemen bertingkat.
