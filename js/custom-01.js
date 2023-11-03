/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/
console.log("Nr. 1-------------------------------------------------------------");
let firstName = "Gabrielė";
let lastName = "Jasiūnaitė";
let birthYear = 1998;
let currentYear = new Date(Date.now()).getFullYear();
console.log(`Aš esu ${firstName} ${lastName}. Man yra ${currentYear - birthYear} metai.`);

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
console.log("Nr. 2-------------------------------------------------------------");
let randomOne = Math.floor(Math.random() * (4 + 1));
let randomTwo = Math.floor(Math.random() * (4 + 1));
console.log(randomOne, randomTwo);
if (randomOne === 0 || randomTwo === 0) {
    console.log("viena iš reikšmių yra 0");
} else if (randomOne === randomTwo) {
    console.log("skaičiai lygūs");
} else if (randomOne > randomTwo) {
    console.log((randomOne / randomTwo).toFixed(2));
} else {
    console.log((randomTwo / randomOne).toFixed(2));
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/
console.log("Nr. 3-------------------------------------------------------------");
let randomThree = Math.floor(Math.random() * (25 + 1));
let randomFour = Math.floor(Math.random() * (25 + 1));
let randomFive = Math.floor(Math.random() * (25 + 1));
console.log(randomThree, randomFour, randomFive);
if (Math.max(randomThree, randomFour, randomFive) !== randomThree && Math.min(randomThree, randomFour, randomFive) !== randomThree) {
    console.log(randomThree)
} else if (Math.max(randomThree, randomFour, randomFive) !== randomFour && Math.min(randomThree, randomFour, randomFive) !== randomFour) {
    console.log(randomFour);
} else {
    console.log(randomFive);
}

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/
console.log("Nr. 4-------------------------------------------------------------");
let kr1 = Math.floor(Math.random() * (10) + 1);
let kr2 = Math.floor(Math.random() * (10) + 1);
let kr3 = Math.floor(Math.random() * (10) + 1);
console.log(`Kraštinių ilgiai: ${kr1}, ${kr2}, ${kr3}`);
if (kr1 + kr2 > kr3 && kr2 + kr3 > kr1 && kr1 + kr3 > kr2) {
    console.log("trikampis susidarys");
} else {
    console.log("trikampis nesusidarys");
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/
console.log("Nr. 5-------------------------------------------------------------");
let rnd1 = Math.floor(Math.random() * (2 + 1));
let rnd2 = Math.floor(Math.random() * (2 + 1));
let rnd3 = Math.floor(Math.random() * (2 + 1));
let rnd4 = Math.floor(Math.random() * (2 + 1));
let count0 = 0;
let count1 = 0;
let count2 = 0;

if (rnd1 !== 0 && rnd1 !== 1) {
    count2++;
} else if (rnd1 === 1) {
    count1++;
} else {
    count0++;
}
if (rnd2 !== 0 && rnd2 !== 1) {
    count2++;
} else if (rnd2 === 1) {
    count1++;
} else {
    count0++;
}
if (rnd3 !== 0 && rnd3 !== 1) {
    count2++;
} else if (rnd3 === 1) {
    count1++;
} else {
    count0++;
}
if (rnd4 !== 0 && rnd4 !== 1) {
    count2++;
} else if (rnd4 === 1) {
    count1++;
} else {
    count0++;
}

console.log(rnd1, rnd2, rnd3, rnd4);
console.log(`0: ${count0}, 1: ${count1}, 2: ${count2}`);

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/
console.log("Nr. 6-------------------------------------------------------------");
let rnd5 = Math.floor(Math.random() * (20 + 1) - 10);
let rnd6 = Math.floor(Math.random() * (20 + 1) - 10);
let rnd7 = Math.floor(Math.random() * (20 + 1) - 10);

if (rnd5 < 0) {
    console.log(`[${rnd5}]`);
} else if (rnd5 === 0) {
    console.log(`(${rnd5})`);
} else {
    console.log(`{${rnd5}}`);
}
if (rnd6 < 0) {
    console.log(`[${rnd6}]`);
} else if (rnd6 === 0) {
    console.log(`(${rnd6})`);
} else {
    console.log(`{${rnd6}}`);
}
if (rnd7 < 0) {
    console.log(`[${rnd7}]`);
} else if (rnd7 === 0) {
    console.log(`(${rnd7})`);
} else {
    console.log(`{${rnd7}}`);
}

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/
console.log("Nr. 7-------------------------------------------------------------");
let candles = Math.floor(Math.random() * (3000 - 5 + 1) + 5);
if (candles > 2000) {
    console.log(`${candles} žvakių. Kaina: ${candles * 0.96} EUR`);
} else if (candles > 1000) {
    console.log(`${candles} žvakių. Kaina: ${candles * 0.97} EUR`);
} else {
    console.log(`${candles} žvakių. Kaina: ${candles} EUR`);
}

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/
console.log("Nr. 8-------------------------------------------------------------");
let random1 = Math.floor(Math.random() * (100) + 1);
let random2 = Math.floor(Math.random() * (100) + 1);
let random3 = Math.floor(Math.random() * (100) + 1);
console.log(random1, random2, random3);

console.log(`Aritmeninis vidurkis visų: ${((random1 + random2 + random3) / 3).toFixed()}`);
if (random1 > 10 && random1 < 91) {
    if (random2 > 10 && random2 < 91) {
        if (random3 > 10 && random3 < 91) {
            console.log(`Aritmeninis vidurkis atmetus: ${((random1 + random2 + random3) / 3).toFixed()}`)
        } else {
            console.log(`Aritmeninis vidurkis atmetus: ${((random1 + random2) / 2).toFixed()}`)
        }
    } else {
        if (random3 > 10 && random3 < 91) {
            console.log(`Aritmeninis vidurkis atmetus: ${((random1 + random3) / 2).toFixed()}`)
        } else {
            console.log(`Aritmeninis vidurkis atmetus: ${random1}`)
        }
    }
} else {
    if (random2 > 10 && random2 < 91) {
        if (random3 > 10 && random3 < 91) {
            console.log(`Aritmeninis vidurkis atmetus: ${((random2 + random3) / 2).toFixed()}`)
        } else {
            console.log(`Aritmeninis vidurkis atmetus: ${random2}`)
        }
    } else {
        if (random3 > 10 && random3 < 91) {
            console.log(`Aritmeninis vidurkis atmetus: ${random3}`)
        } else {
            console.log("Visi skaičiai atmetami")
        }
    }
}

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/
console.log("Nr. 9-------------------------------------------------------------");
let hours = Math.floor(Math.random() * 24);
let minutes = Math.floor(Math.random() * 60);
let seconds = Math.floor(Math.random() * 60);
let additional = Math.floor(Math.random() * (300 + 1));
console.log(`${hours}:${minutes}:${seconds}`);
console.log(additional);

minutes += Math.floor(additional / 60);
additional = additional - Math.floor(additional / 60) * 60;
seconds += additional;
if (seconds >= 60) {
    seconds -= 60;
    minutes++;
}
if (minutes >= 60) {
    minutes -= 60;
    hours++;
}
if (hours >= 24) {
    hours = 0;
}

console.log(`${hours}:${minutes}:${seconds}`)

/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/
console.log("Nr. 10------------------------------------------------------------");
let a = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let b = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let c = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let d = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let e = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
let f = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

let swap;
if (a > b) { swap = a; a = b; b = swap; }
if (c > d) { swap = c; c = d; d = swap; }
if (e > f) { swap = e; e = f; f = swap; }
if (a > c) { swap = a; a = c; c = swap; }
if (b > e) { swap = b; b = e; e = swap; }
if (d > f) { swap = d; d = f; f = swap; }
if (a > b) { swap = a; a = b; b = swap; }
if (c > d) { swap = c; c = d; d = swap; }
if (e > f) { swap = e; e = f; f = swap; }
if (b > c) { swap = b; b = c; c = swap; }
if (d > e) { swap = d; d = e; e = swap; }
if (c > d) { swap = c; c = d; d = swap; }

let word = `${a} ${b} ${c} ${d} ${e} ${f}`;
console.log(word);
