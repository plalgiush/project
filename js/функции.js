"use strict";


let num =20;

function showFirstMessage(text) {   // аргументы функции прописываются в скобках
    console.log(text);
    console.log(num);
}

showFirstMessage("hello world"); // вызов функции
console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);
// function declaration



const logger = function () {    // function expression
    console.log('hello');
};

logger();



const calc = (a, b) => a + b;  // если функция в одну строчку, то опускаем фигруные скобки
const calc = (a, b) => {
    console.log('1');
    return a + b;
};