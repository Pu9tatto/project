const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movie: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последниъ просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его', ''),
    c = prompt('Один из последниъ просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его', '')
personalMovieDB.movie[a] = b;
personalMovieDB.movie[c] = d;

console.log(personalMovieDB);