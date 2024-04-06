// // /**
//  *? Напиши функцію конструктор Storage який створює об'єкти
//  *? Для управління складом товарів.
//  *? При виклику отримуватиме один агрумент - початковий масив товарів,
//  *? і записувати їх у властивість items.
//  *? Додай методи :
//  *? getItems() - повертайте масив товарів
//  *? addItems(item) - отримує новий товар та додає його до поточних
//  *? removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних
//  */


function Storage(arrayData) {
    this.items = arrayData;


}

Storage.prototype.getItem = function () {
    return this.items;
}


Storage.prototype.addItems = function (item) {
    this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
   
    const index = this.items.indexOf(item);
     
    if (index === -1) {
        return;
     }
    this.items.splice(index, 1);
}

const storage = new Storage(["apple", "banana", "mango"]);
storage.addItems("apple");
console.log(storage.removeItem("banana"));
console.log(storage.getItem());

