// 1. Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. Пример работы функции:
// ['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

console.log('Задание1');
function arrayToObject(arr) {
    const result = {};
    arr.forEach(currentElement => {
        result[currentElement] = currentElement;
    });
    return result;
}
const inputArray = ['F', '98.2', 'Daniel Gabriel Fahrenheit'];
const outputObject = arrayToObject(inputArray);
console.log(outputObject);


// 2. Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
// [
//   [ 'height', 170 ],
//   [ 'weight', 80 ],
//   [ 'sport', 'regbi' ],
//   [ 'full name', 'John Doe' ],
//   [ 'sing', 'love' ],
//   [ 'speed', 90 ]
// ]
console.log('Задание 2');
function dataToObject(arr) {
    return arr.reduce((result, [key, value]) => {
      result[key] = value;
      return result;
    }, {});
  }
  const tilSchweigerdata = [
    ['name', 'Til'],
    ['lastName', 'Schweiger'],
    ['profession', 'actor'],
    ['yearOfBirth', 1963],
    ['countryOfOrigin', 'Germany']
    
  ];
  
  const tilSchweiger = dataToObject(tilSchweigerdata);
  console.log(tilSchweiger);

  // Способ с foreach. Можно также с fromEntries
  function arrayToObject2(array) {
    const result={};
    array.forEach(el=>{
      const[key,value] = el;
      result[key] = value;
    });
    return result;
  }


// 3. Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.
// Пример работы функции:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'
console.log('Задание 3');
const JohnyDepp = {
    name: 'Johny',
    surname: 'Depp',
    age: 50
}

function objectToString(JohnyDepp) {
    return Object.values(JohnyDepp).join(', ');
  }
  const resultString = objectToString(JohnyDepp);
console.log(resultString);

// 4. Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, но значения свойств - это их типы.
// Пример:

// { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }

console.log('Задание 4');

function getTypesOfProperties(JohnyDepp) {
    return Object.keys(JohnyDepp).reduce((result, key) => {
      result[key] = typeof JohnyDepp[key];
      return result;
    }, {});
  }
  const myObject = { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' };
const types = getTypesOfProperties(JohnyDepp);
console.log(types);

