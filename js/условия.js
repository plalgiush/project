"use strict";
//
// if (4 == 9) {
//     console.log("ok!");
// } else {
//     console.log("error");
// }
//
//
// const num = 50;
// if (num < 49) {
//     console.log("error");
// } else if (num > 100) {
//     console.log("much");
// } else {
//     console.log("ok!");
// }
//
//
// (num === 50) ? console.log("ok!") : console.log("error");  // тернарный оператор (?)

const num = 50;

switch (num) { // конструкция switch всегда на строгое сравнение
    case 49:
        console.log("false");
        break;
    case 100:
        console.log("false");
        break;
    case 50:
        console.log("true");
        break;
    default:  //если ничего не подошло
        console.log("not this time");
        break;
}