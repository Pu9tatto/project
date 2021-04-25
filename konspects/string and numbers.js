//STRING
const str = "TesT";
let a = str.length; //a -  длина строки
let b = str[2]; // b = s
let c = str.toUpperCase; // c = TEST
let d = str.toLowerCase; // d = test
let f = str.indexOf('e'); // f=1 (ищет позицию с которой начинается значение заключенное в ())
let f1 = str.indexOf('p'); // f1=-1
//Изменение строк
let h = str.slice(2,5); //вырезает строку с 2(включительно) по 5(не включительно) 
let h1 = str.slice(2); // c 2  до конца
let g = str.substr(1,2); // вырезает ДВА символа из строки начиная с ПЕРВОГО g = es

//numbers
let num = Math.round(12.2); //округляет до целых num = 12
let num1 = parseInt("12.2px"); //возвращает числовой тип данных округленный ддо целых num1 = 12
let num2 = parseFloat("12.2px"); //возвращает числовой тип данных num2 = 12.2