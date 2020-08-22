"use strict";

let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }




// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);




for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;  // прерывает скрипт после заданного значения
        continue;  // пропускает шаг который нам не нужен и продолжает работу скрипта
    }
        console.log(i);
   }