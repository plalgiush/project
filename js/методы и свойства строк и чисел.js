"use strict";

const str = "teSt";
const arr = [1, 2, 4];

console.log(arr.length);
console.log(str[2]);


console.log(str.toUpperCase());   // все символы становяться большими
console.log(str.toLowerCase());   // все символы становяться маленькими



const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));    // indexOF - поиск какого-либо куска (значения)


const logg = "hello world!";

console.log(logg.slice(6, 12)); // вырезаем кусок кода

console.log(logg.substring(6, 11)); // вернет ту же часть что и slice

console.log(logg.substr(6, 5)); // вырезает с 6й позиции 5ть символов



const num = 12.2;
console.log(Math.round(num)); // округление числа до целого


const test = "12.2px";
console.log(parseInt(test)); // переводит число в другую систему счисления
console.log(parseFloat(test)); // берет строку и возвращает в десятичном значении (с плавающей точкой)


