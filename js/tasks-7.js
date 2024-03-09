// Це приклад виклику функції invertLetterCase("JavaScript is Awesome")
// Написати функцію, яка приймає рядок, з довільним регістром символів. Функція повинна повертати такий самий рядок тільки з інвертованим регістром символів

function invertLetterCase(dataString) {
  let invertString = "";
  for (const elem of dataString) {
    console.log(elem);

    if (elem === elem.toUpperCase()) {
      invertString += elem.toLowerCase();
    } else if (elem === elem.toLowerCase()) {
      invertString += elem.toUpperCase();
    } else {
      invertString += elem;
    }
  }
  return invertString;
}
console.log(invertLetterCase("23JavaScript is Awesome"));
