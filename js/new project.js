"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

if (personalMovieDB.count < 10) {
    console.log('Просмотрео довольно мало фильмов');
} else if (10 <= personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка')
}

console.log(personalMovieDB);


