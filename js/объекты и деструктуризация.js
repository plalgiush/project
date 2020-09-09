"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function (){
        console.log("test");  // создали метод
    }
};

// console.log(options.name);
//
// delete options.name;
//
// console.log(options);
//
//
//
// for (let key in options) {  // ищем какие-либо данные (перебор объектов)
//     if (typeof (options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//             console.log(`свойство ${key} имеет значение ${options[key]}`);
//     }
// }


options.makeTest();
console.log(Object.keys(options).length);




// деструктуризация

const {border, bg} = options.colors;
console.log(border);