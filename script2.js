'use strict'

// function showFirstMessage(text) {
//     alert(text);
//     console.log(num);
// }

// let num = 30;
// showFirstMessage("Hello world");



function retVar() {
    let a = 5;
    return a;
};

let b = retVar();
console.log(b);


let calc = (a, b) => a+b;

console.log(calc(2, 2));

console.log(calc(2, 5));

let str = "Hello";
// console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

let n = "12.5px";
console.log(Math.round(n));
console.log(parseFloat(n));



// if (num == 49) {
//     console.log("Неверно")
// } else if (num > 100) {
//     console.log("Много")
// } else {
//     console.log("Верно")
// };

// switch (num) {
//     case num > 100:
//         console.log("Много");
//         break;
//     case num < 10:
//         console.log("Мало");
//         break;
//     case 50:
//         console.log("Верно");
//         break;
//     default:
//         console.log("blabla");
//         break;
// };


// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++
// } 
// while (num < 60);


// for (let i = 1; i < 10; i++) {
//     if (i == 4) {
//         continue
//     }
//     console.log(i)
// }