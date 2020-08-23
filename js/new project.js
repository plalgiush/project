"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {  // isNaN - проверяет строку на число
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++ ) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = +prompt("На сколько оцените его?", "");

        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--; // для того, чтобы вернуться на один цикл назад, пока не будут даны нужные нам ответы
        }
    }
}

rememberMyFilms();


function detectPersomalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрео довольно мало фильмов');
    } else if (10 <= personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка')
    }
}

detectPersomalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);




function writeYourGenres() {
    for(let j = 1; j <= 3; j++) {
       const genre = prompt(`Ваш любимый жанр под номером ${j}`, "");
       personalMovieDB.genres[j - 1] = genre;
    }

}

writeYourGenres();

console.log(personalMovieDB);