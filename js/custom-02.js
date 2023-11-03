/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/
console.log("Nr. 1-------------------------------------------------------------");
let num = 1;
while (num < 11) {
    console.log(num)
    num++;
}


/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/
console.log("Nr. 2-------------------------------------------------------------");
let num1 = 10;
while (num1 > 0) {
    console.log(num1)
    num1--;
}


/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

Štai kaip atrodys pirmos dvi eilutės:

Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių!
*/
console.log("Nr. 3-------------------------------------------------------------");
let numAvys0 = 4;
let numMenuo = 1;
let kiekMenSpausdinti0 = 12;
while (numMenuo <= kiekMenSpausdinti0) {
    numAvys0 *= 4;
    console.log(`Po ${numMenuo} mėnesio(-ių) bus ${numAvys0} avių!`);
    numMenuo++;
}


/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/
console.log("Nr. 4-------------------------------------------------------------");
let numAvys = 4;
let kiekMenSpausdinti = 12;
for (let i = 1; i <= kiekMenSpausdinti; i++) {
    numAvys *= 4;
    console.log(`Po ${i} mėnesio(-ių) bus ${numAvys} avių!`);
}


/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/
console.log("Nr. 5-------------------------------------------------------------");
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
while (currentGen <= 4) {
    totalMW += 62;
    console.log(`Generatorius #${currentGen} įjungtas, pridėjo 62 MW, generuojama ${totalMW}!`);
    currentGen++;
}

for (let i = 5; i <= totalGen; i++) {
    totalMW += 124;
    console.log(`Generatorius #${i} įjungtas, pridėjo 124 MW, generuojama ${totalMW}!`);
}


/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/
console.log("Nr. 6-------------------------------------------------------------");
let totalGen1 = 19;
let totalMW1 = 0;
for (let i = 1; i <= totalGen1; i++) {
    if (i % 2 !== 0) {
        console.log(`Generatorius #${i} išungtas`)
    } else if (i <= 4) {
        totalMW1 += 62;
        console.log(`Generatorius #${i} įjungtas, pridėjo 62 MW, generuojama ${totalMW1}!`);
    } else {
        totalMW1 += 124;
        console.log(`Generatorius #${i} įjungtas, pridėjo 124 MW, generuojama ${totalMW1}!`);
    }
}


/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/
console.log("Nr. 7-------------------------------------------------------------");
let num2 = 10;
while (num2 > 0) {
    if (num2 % 2 === 0) {
        console.log(num2);
    }
    num2--;
}


/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/
console.log("Nr. 8-------------------------------------------------------------");
function maxOf2(num3, num4) {
    return (num3 > num4) ? num3 : num4;
}

console.log(maxOf2(5, 5));
console.log(maxOf2(6, 5));
console.log(maxOf2(4, 5));
