/**
*? Напиши функцію конструктор User для 
*? створення користувача з такими властивостями:
*? a. userName - ім'я, рядок
*? b. age - вік, число
*? c. numbersOfPost - кількість постів, число
*? d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями
*? Додай метод getInfo(), який повертає рядок:
*? `Користувачеві ${ім'я} ${вік} років і в нього ${кількістьПублікацій} публікацій.`
 */

function User(userData) {
    this.userName = userData.userName;
    this.age = userData.age;
    this.numbersOfPost = userData.numbersOfPost;

    this.getInfo= function(){
        return `Користувачеві ${this.userName} ${this.age} років і в нього ${this.numbersOfPost} публікацій.`

    }
    
}





const polly = new User({ userName: "Polly", age: 30, numbersOfPost: 15 });

console.log(polly);
console.log(polly.getInfo());