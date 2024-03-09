// Це приклад виклику функції invertLetterCase("Hello World")
// Задача написати функцію, яка буде перевіряти чи є великі літери у рядку

function invertLetterCase(dataString){
   const newString=dataString.replace(/\s/g, '');
for (let i=0; i<newString.length; i++){
    if(newString[i]===newString[i].toUpperCase()){
        return true
    }
}
return false
}
console.log(invertLetterCase("hello world"));