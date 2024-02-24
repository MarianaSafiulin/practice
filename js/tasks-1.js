/**
 *? Використовуючи функцію if...else,
 *? напишіть код, який запитуватиме:
 *? "Яка офіційна назва JavaScript?"
 *? Якщо користувач вводить "ECMAScript",
 *? то показати через alert: "Вірно!"
 *? інакше відобразити:"Не знаєте? ECMAScript!"
 */

const value = prompt("Яка офіційна назва JavaScript?").trim();
const RIGHT_VALUE = "ECMAScript";
if (value === RIGHT_VALUE) {
  alert("Вірно!");
} else {
  alert("Не знаєте? ECMAScript!");
}
