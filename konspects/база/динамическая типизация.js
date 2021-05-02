//to string
//1)
const a = String(null);
// 2) конкрадинация
const b = null + '';

//пример 1
const num = 5;
console.log('https://vk.vom/catalog/' + num); //старо, тееперь используют бэктики`
//пример 2
const fontSize = 26 + 'px';

//To Number
//1)
const c = Number('4');
//2)унарный плюс
const d = +'5';
//3)
const f = parseInt('15px', 10);

//To boolean
//Всегда false: 0, '', null, undefined, NaN;
//1)
let switcher = null;
if (switcher) {
    console.log('working...');
}//console ничего не выведет 
//2
const g = Boolean('4');
//3 
const h = !!'4864';