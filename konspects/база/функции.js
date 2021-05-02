function test1() {
    //тут пишется код. 
}
//функция создается до начала выполнения скрипта и вызывается через test1()

let test2 = function () {
    //тут пишется код
};
//создается, когда до нее доходит поток кода, можно вызвать только после создания через test2(). !в конце ставится ;

const sum = (a, b) => a + b;
// OR
const sum2 = (a, b, c) => {
    let d = a + b;
    return d + c;
};

//callback - что бы функция выполнялось строго после другой функции пихаем функции в функцию 
//и вызываем внутри вновь созданной функции
function callback(F1, F2) {
    F1();
    F2();
}

function first() {
    //do somthing
}

function second() {
    //do some smth
}
callback(first, second);
///////////////////