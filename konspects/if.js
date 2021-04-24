if(4==9){
    console.log('Ok!');
} else {
    console.log('not Ok!');
}

const num =50;
if(num<49){
    console.log('err!');
} else if (num >100){
    console.log('More!');
}else{
    console.log('Ok!');
}

//(num === 50) ? console.log('Ok!'): console.log('k!');

switch(num){
    case 49:
        console.log('not Ok!');
        break;
    case 100:
        console.log('not Ok!');
        break;
    case 50:
        console.log('Ok!');
        break;
    default:
        console.log('not once');
        break;
}