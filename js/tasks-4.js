/**
 *? Записати масив, const arr = ['BEST', 'the', 'foo', 'is', 'JS' ]
 *? розгорнути масив,
 *? вирізати foo,
 *? перевести його в рядок розділений пробілами
 */

const arr = ["BEST", "the", "foo", "is", "JS"];

const reverseArr = arr.reverse();

const index = reverseArr.indexOf("foo");

reverseArr.splice(index, 1);

console.log(reverseArr.join(" "));
