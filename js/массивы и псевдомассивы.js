"use strict";

const arr = [13, 2, 35, 16 ,8];
arr.sort(compareNum);
console.log(arr);

//сортировка чисел
function compareNum(a, b) {
    return a - b;
}


// arr.pop();  // удаляет последний объект из нашего массива
// arr.push(10); // добавляет метод
//
// console.log(arr);
//
//
// for (let i = 0; i < arr.length; i++) {  // перебор массива
//     console.log(arr[i]);
// }
//
// for (let value of arr) {    // перебор каждого эллемента массива
//     console.log(value);
// }


// arr[99] = 0;
//
// console.log(arr);


// c помощью callback   аргумент (значение каждого эллемента),
//                                  номер по порядку,
//                                              ссылка на массив который мы перебираем
arr.forEach(function (item, i, arr){   // перебор всех эллементов (чуть более тонкая настройка)
    console.log(`${i}: ${item} внутри массива ${arr}`);
    });



// формируем массив на основании строк
const str = prompt("", "");
const products = str.split(", ");
console.log(products.join("; "));  //объединение эллементов массива в строку
products.sort()  // метод сортировки (в алфавитном порядка)