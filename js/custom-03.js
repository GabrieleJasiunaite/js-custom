/* LENGVESNI */

/* 01.
Sukurkite ciklą kuris atspausdintų 10 kartų žodį “labas”.
*/
console.log("Nr. 1-------------------------------------------------------------");
for (let i = 0; i < 10; i++) {
    console.log("labas");
}

/* 02.
Sukurkite ciklą kuris atspausdintų skaičius nuo 0 iki 9.
*/
console.log("Nr. 2-------------------------------------------------------------");
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/* 03.
Atspausdinkite kas antrą skaičių nuo 10 iki 50 (porinius);
*/
console.log("Nr. 3-------------------------------------------------------------");
for (let i = 10; i < 51; i += 2) {
    console.log(i);
}

/* 04.
Atspausdinkite kas antrą skaičių nuo 10 iki 50. (porinius) Jei skaičius dalinasi iš 10 be liekanos jo nespausdinkite. ( naudokite continue.) (atspausdinti visus porinius skaičius, išskyrus tuos kurie dalinasi iš 10 be liekanos)
*/
console.log("Nr. 4-------------------------------------------------------------");
for (let i = 10; i < 51; i += 2) {
    if (i % 10 === 0) {
        continue;
    }
    console.log(i);
}


/* 05.
Sukurkite ciklą kuris suktųsi nuo 0 iki 20. Suskaičiuokite, kiek kartų kintamasis i turėjo porinę reikšmę;
*/
console.log("Nr. 5-------------------------------------------------------------");
let even = 0;
for (let i = 0; i < 21; i++) {
    if (i === 0) {
        continue;
    } else if (i % 2 === 0) {
        even++;
    }
}
console.log(even);


/* SUNKESNI */

/* 01.
Sugeneruokite 300 atsitiktinių skaičių nuo 0 iki 300, atspausdinkite juos atskirtus tarpais ir suskaičiuokite kiek tarp jų yra didesnių už 150.  Skaičiai didesni nei 275 turi būti atspausdinti skliausteliuose” [ ] “.
*/
console.log("Nr. 1-------------------------------------------------------------");
let moreThan150 = 0;
let numString = "";
for (let i = 0; i < 301; i++) {
    let randomNum = Math.floor(Math.random() * 300);
    if (randomNum > 150) {
        moreThan150++;
    }
    if (randomNum > 275) {
        numString += `[${randomNum}] `;
        continue;
    }
    numString += `${randomNum} `;
}
console.log(numString);
console.log(`Daugiau kaip 150: ${moreThan150}`);


/* 02.
Vienoje eilutėje atspausdinkite visus skaičius nuo 1 iki 3000, kurie dalijasi iš 77 be liekanos. Skaičius atskirkite kableliais. Po paskutinio skaičiaus kablelio neturi būti.
*/
console.log("Nr. 2-------------------------------------------------------------");
let string = "";
for (let i = 1; i < 3001; i++) {
    if (i === Math.floor(3000 / 77) * 77) {
        string += `${i}`;
    }
    else if (i % 77 === 0) {
        string += `${i}, `;
    }
}
console.log(string);


/* 03.
Nupieškite kvadratą iš “*”, kurio kraštines sudaro 10 “*”.
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
* * * * * * * * * * *
*/
console.log("Nr. 3-------------------------------------------------------------");
for (let i = 0; i < 10; i++) {
    let line = "";
    for (let j = 0; j < 10; j++) {
        line += "* ";
    }
    console.log(line);
}