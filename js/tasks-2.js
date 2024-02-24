/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? 70 === 01:10
 */

//  "abc".padStart(10); // "       abc"
// "abc".padStart(10, "foo"); // "foofoofabc"
// "abc".padStart(6, "123465"); // "123abc"
// "abc".padStart(8, "0"); // "00000abc"
// "abc".padStart(1); // "abc"
const globalMinutes = 65;
const globalMinutes2 = 70;

function convertTime(minutes) {
  const time = String(Number.parseInt(minutes / 60)).padStart(2, "0");
  const min = String(minutes % 60).padStart(2, "0");
  return `${time}:${min}`;
}
console.log(convertTime(globalMinutes));
console.log(convertTime(globalMinutes2));
