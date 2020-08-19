'use strict';
let number = 4.6;

console.log(4/0);
console.log(-4/0); // числа
console.log('string' * 9); // NaN

const persone = '5'; // строка


const bool = true; // boolean

// console.log(something);  // null (что-то существует но у него не тникакого значения)

let und;
console.log(und); // undefined


const obj = {
    name: 'John',
    age: 25,
    isMarried: false
};
console.log(obj['name']);


let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];  // в массив можно поместить любой тип данных
console.log(arr[1]);
console.log(arr);