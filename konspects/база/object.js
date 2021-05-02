const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('test');
    }
};
    options.makeTest(); //вызывает вручную созданный метод
// delete options.name; // удаляет свойство name

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]} `);
// }//повторение действий {} для каждого элемента в объекте options
//a = options[colors][bg]; обращению к элементу объекта, который в объекте через [][]
//Например:
for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]} `);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]} `);
    }
}
//////посчитать длину объекта (количество элементов) через счетчик
let counter = 0;
for (let key in options) {
    counter++;
}
/// или так: let b = Object.keys(options).lenght;
let b = Object.keys(options); // создает массив на основе ключей объекта


//деструкторизация объектов
const {border, bg} = options.colors;
console.log(border);

//объединение объектов
// Object.assign(obj1, obj2); добавляет к объекту 1 объект 2