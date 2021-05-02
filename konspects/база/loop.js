let num = 50;

while (num<55){
    console.log(num);
    num++;
}
//до тех пор нам меньше 55 выполняются действия в {}

do {
    console.log(num);
    num++;
}
while (num< 55);
// сначала делаем то, что в {} потом проверяем условие в () и повторяем (итерируем)

for (let i = 1; i<8;i++){
    console.log(num);
    num++;
}
// итак все ясно

for (let i = 1; i<15;i++){
    if (i===6){
        continue; //исключит значение
    }
    if(i===9){
        break; //прервет цикл
    }
    console.log(i);
}