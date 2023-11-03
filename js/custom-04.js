/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/
console.log("Nr. 1-------------------------------------------------------------");
const arr = ["rose", "poppy", "dandelion", "tulip", "lilly", "birch", "cactus", "pine", "evergreen", "ivy"];

/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/
console.log("Nr. 2-------------------------------------------------------------");
for (let element of arr) {
    console.log(element);
}

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/
console.log("Nr. 3-------------------------------------------------------------");
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
console.log("Nr. 4-------------------------------------------------------------");
let shorter = 0;
let longer = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 5) {
        shorter++;
    } else if (arr[i].length > 7) {
        longer++;
    }
}

console.log(`Trumpesni: ${shorter}, ilgesni: ${longer}`);