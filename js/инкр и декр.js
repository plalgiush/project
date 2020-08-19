'use strict';

let incr = 10,
    decr = 10;

incr++;  // постфиксная форма  (возвращает сначала старое значение)
decr--;

console.log(incr);
console.log(decr);


let incr1 = 10,
    decr1 = 10;

++incr1;
--decr1;  // префиксная форма  (возвращает сразу новое значение)

console.log(incr1);
console.log(decr1);


let incr2 = 10,
    decr2 = 10;

console.log(++incr2); // показывает новое значение
console.log(decr2--); // возвращает старое значение


console.log(5%2);


console.log(2*4 == 8);
console.log(2*4 === '8');





const isChecked = true,
      isClose = true;

console.log(isChecked && isClose);

let isClose1 = false;
console.log(isChecked && isClose1);

console.log(isChecked || isClose);

let isChecked1 = false;
console.log(isClose1 || isChecked1);

