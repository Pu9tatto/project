// для примитивов (числа, строки и др.) через равно передаются значения
let a = 5,
    b = a;
b = b * 2;
// a = 5, b = 10
//для объектов ЖЫ через равно создается ссылка на другой объект. 
let obj = {
    a: 1,
    b: 2
}; // let copy = obj
// тем самым меняя что то в copy меняеттся это и в obj
//созндание копий по значению через перебор (поверхностная копия)
function copy(mainObj) {
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const newObj = copy(obj);
//object Assign (независимая поверхностная копия)
const clone = Object.assign({}, obj);
//создание копии массива :
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
//новые функции спрэд оператор
const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],  
      internet = [...video, ...blogs, 'vk', 'facebook'];
// internet = ['youtube','vimeo','rutube','wordpress','livejournal','blogger','vk','facebook']
//spread оператор как замена apply. раскрывает квадратные скобки и пишется каку ...
const array = ['a','b'];
const newnewArray = [...array];
//
const q = {
    one: 1,
    two: 2
};
const newObjj = {...q};
