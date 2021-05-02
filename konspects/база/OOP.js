//позволяет взаимосвязывать объекты в единый прототип. 

const soldier = {
    health: 400,
    armor: 100
};
const jonh = {
    health: 100
};

//jonh.__proto__ = soldier; // устаревший метод

Object.setPrototypeOf(jonh,soldier); //soldier становится прототипом для jonh
const petya = Object.create(soldier); // создание нового объекта с прототипном наследованием от солидера
