//Написати функцію, яка буде рахувати загальну сумму елементів масива спочатку циклом for потім for of
const numbers = [11, 22, 33, 44, 55];
//function calculateNumber(array) {
    // let sum = 0;
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];
    //     sum += array[i];
        
    // }
    // return sum;
//}
//console.log(calculateNumber(numbers)); 

function calculateNumber(array) {
    let sum = 0;
    for (const number of array) {
        sum += number;        
    }
    return sum;
}
console.log(calculateNumber(numbers)); 