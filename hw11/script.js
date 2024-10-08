// Задание 1. Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/года".
console.log("Задание 1");
const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];

let data = [];

for (let i = 0; i < names.length; i++) {
  data.push(`${names[i]} ${ages[i]} лет/года`);
}
console.log(data);

// Задание 2 // Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности.

console.log("Задание 2");
const dataReversed = [];
for (let i = names.length - 1; i >= 0; i--) {
  dataReversed.push(data[i]);
}
console.log(dataReversed);

// Задание 3 // Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия" Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль

console.log("Задание 3");

let countries = [];
countries.push("Франция", "Германия", "Италия");
console.log(countries);

console.log("Удаляем и сохраняем последний элемент");
let deletedCountry = countries.pop();
console.log(deletedCountry); // Италия
//Добавляем в начало массива
console.log(countries);
//Другой массив и способ
const countriesNew = [deletedCountry, ...countries, "Испания"];

countries.unshift(deletedCountry);
console.log(countries);

console.log(countriesNew);

// Задание 4 // Создайте объект car с ключами brand, model, year, и isElectric. Задайте им значения. // Выведите на экран все ключи объекта // Выведите на экран все значения объекта // Добавьте в объект car метод getCarInfo, который будет возвращать строку, содержащую информацию о марке, модели и году выпуска машины. // Вызовите этот метод и выведите результат на экран. // выполните итерацию по ключам с помощью цикла for...in. // Внутри цикла выводите на экран каждую пару ключ: значение. // Затем модифицируйте вывод, чтобы он выглядел как: "Ключ: [ключ], Значение: [значение]". Например, "Ключ: brand, Значение: Toyota".
console.log("Задание 4");

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2023,
  isElectric: false,

  getCarInfo() {
    return `Марка: ${this.brand}, Модель: ${this.model}, Год выпуска: ${this.year}`;
  },
};
// Все ключи
console.log("Ключи:", Object.keys(car));
// Все значения
console.log("Значения:", Object.values(car));

console.log(car.getCarInfo());

// Итерация по ключам и значениям с помощью for...in
for (let key in car) {
  console.log(`Ключ: ${key}, Значение: ${car[key]}`);
}
