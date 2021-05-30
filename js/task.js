'use strict'
// const secretNumber = Math.round(Math.random() * 100 + 1;
// console.log('secretNumber', secretNumber);

// const userAnswer = promt('')
// const userNumber = Number.parseInt.(prompt('Enter a number'));
// console.log('userNumber', userNumber);


// if (secretNumber ===userNumber) {
//     console.log('You win')
// }

// if (secretNumber > userNumber) {
//     console.log('x<', userNumber);
// }

// const xNumber = Math.round(Math.random() * 100 + 1);
// // console.log('randomNumber', xNumber);
// let userNumber
// do {const userAnswer = prompt('Введите число')
//  userNumber = Number.parseInt(userAnswer);
// if (xNumber === userNumber) {console.log('вы угадали')}
// else if (xNumber < userNumber) {console.log('загаданное число меньше чем', userNumber)}
// else if (xNumber > userNumber) {console.log('загаданное число больше чем', userNumber)}
// else {console.log('вы вышли')}
// }
// while (xNumber !== userNumber && !isNaN(userNumber));


// let total = 0;

// while (true) {
//     const enterSth = prompt('Введи число');
//     let result;
//     if (enterSth === null) {
//         result = `Общая сумма чисел равна ${total}`;
//         break;
//     } else if (!isNaN(enterSth)) {
//         result = `Общая сумма чисел равна ${total += +enterSth}`;
//     } else {
//         result = 'Введите число';
//     }
//     console.log(result);
// };
// Task 3
// ==========================новая задача=====================
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет 
// значение '1', то в переменную result запишем 'зима', если имеет значение 
// '2' – 'весна' и так далее. Решите задачу через switch-case.

// const num = prompt("введи число");
// let result;

// switch (+num) {
//     case 1:
//         result = "зима";
//         break;
//      case 2:
//         result = "весна";
//         break;
//      case 3:
//         result = "осень";
//         break;
//      case 4:
//         result = "лето";
//         break;
//     default: result = "хз"    
// }
// console.log(result);

// Task 6 
// Напишите if..else, соответствующий следующему switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// let browser = prompt('введите название браузера').toLowerCase();

// if (browser === 'edge') {alert("You've got the Edge!")}
// else if (browser === 'chrome' || browser === 'eirefox' || browser === 'safari' || browser === 'opera') {alert( 'Okay we support these browsers too' )}
// else {alert( 'We hope that this page looks ok!' )}

// Task 4
// воспользуемся циклом while и выведите в консоль числа от 0 до 50

// let x;
// x = 0;
// while (x < 51) {
//     console.log(x);
//     x += 1;
// }

// Task 7
// При помощи цикла for выведите чётные числа от 2 до 10.


// for ( let i = 2; i < 11; i += 2) {
//     console.log(i)
// }

// TASK 4
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его результат:

// const age = prompt('Enter your age')

// function isAdult(age) {
//  if (age < 18) {confirm("точно?")}
//  else {return true}
//  }
//  console.log(isAdult(age))

// const age = prompt('Enter your age')
// function isAdult(age) {
// return age < 18 ? confirm("точно?") : true 
// }
// console.log(isAdult(age))


//  for (let i = 2; i < 50; i += 1) {
//      for ( let j = 2; j < 50; j += 1) {
//          console.log(`${i} * ${j} = ${i * j}`)
//      }
//      console.log('=====================');
//  }
//=================масивы===============
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }
// Итерация по массиву
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// // Итерация по строке
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }


// const matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   let total = 0;
  
//   for (let i = 0; i < matrix.length; i += 1) {
//     console.log('Подмассив матрицы matrix[i]: ', matrix[i]);
  
//     for (let j = 0; j < matrix[i].length; j += 1) {
//       console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//       total += matrix[i][j];
//     }
//   }
  
//   console.log(total); // 45

//   let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// // split
// const message = 'Welcome to Bahamas!';

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]

// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split('')); // [много букв :)]

// // join
// const clients = ['Mango', 'Poly', 'Ajax'];

// // Сошьет все элементы массива в строку,
// // между каждой парой элементов будет указанный разделитель
// console.log(clients.join(' ')); // "Mango Poly Ajax"
// console.log(clients.join(',')); // "Mango,Poly,Ajax"
// console.log(clients.join('-')); // "Mango-Poly-Ajax"

// Предположим, у нас есть массив оценок, который содержит пять чисел от 1 до 5.
// const scores = [1, 2, 3, 4, 5];

// Следующая операция удаляет три элемента массива,
// начиная с первого элемента (индекс 0).
// const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента.
// console.log(scores.splice(0, 3));
// console.log(scores);

// // А массив deletedScores содержит три удаленных элемента.
// console.log(deletedScores); // [1, 2, 3]



//================== Start Сумма всех чисел от 1 до Number==========================

//  function calculateTotal(number) {

//     let sum = 0;
//      for (let i = 0; i <= number; i += 1) {
       
//        sum += i;}

// }
//      console.log(calculateTotal(1));
//      console.log(calculateTotal(3));
//      console.log(calculateTotal(7));
//      console.log(calculateTotal(18));
//      console.log(calculateTotal(24));
//      console.log(calculateTotal(55));
//================== END Сумма всех чисел от 1 до Number=====================

//=======================Задача: поиск самого длинного слова====================

// function findLongestWord(string) {
//     // Change code below this line
//   const array = string.split(" ");
//     let LongestWord = array[0];
//     for (let i = 0; i < array.length; i += 1) {
//       if (LongestWord.length < array[i].length) {
//       LongestWord = array[i]}
//     }
//   return LongestWord
  
//     // Change code above this line
//   }
//   console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//   console.log(findLongestWord("Google do a roll"));
//   console.log(findLongestWord("May the force be with you"));
//   console.log(findLongestWord("я полюбому буду-айтишником и буду зашибать кучу бабла"));
  //=====================================================================================

  //=======================Задача: Дополни код функции createArrayOfNumbers(min, max) 
// так, чтобы она возвращала массив всех целых чисел от значения min до max.====================
// function createArrayOfNumbers(min, max) {
//     const numbers = [];
    
//     // Change code below this line
   
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);}
 
 
//     // Change code above this line
//  return numbers
// }
//   console.log(createArrayOfNumbers(3, 7));
//   console.log(createArrayOfNumbers(14, 17));
//   console.log(createArrayOfNumbers(29, 34));
//   console.log(createArrayOfNumbers(15, 20));
//=====================================================================================

//======================= Задача: фильтрация массива чисел =============================
// Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers)
//  и возвращает новый массив, в котором будут только те элементы массива numbers, 
// которые больше чем значение параметра value (число).
// function filterArray(numbers, value) {
//     // Change code below this line
//  //сравниваем value с каждым числов масива, и все что выше него заносим в новый масив.
 
//  const array = [];
//  for (let i = 0; i <= numbers.length; i += 1 ) {
//      if (numbers[i] > value) {array.push(numbers[i])}
//  };
//  return array
//    // Change code above this line
//  }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); //[4,5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); //[5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); //[]
// console.log(filterArray([12, 24, 8, 41, 76], 38)); //[41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); //[24, 41, 76]
//=====================================================================================

//==================Задача: общие элементы. =========================================
// Задание: Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
//Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. 
// А числа 0, 1 и 8 присутствуют только в одном из массивов.
//Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, 
//и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
// Change code below this line
// проверяем входят ли элементы второго масива в первый
// если входят то пушим их в ноый масив.

// const arr = [];
// for(let i = 0; i < array1.length; i += 1) {
//  if (array2.includes(array1[i])){
// arr.push(array1[i])}
// } 
//  return arr
//   }
//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// Объявлена функция getCommonElements(array1, array2)
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
// В цикле for использовались методы includes и push
//=====================================================================================

//=========Задача: Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of. ==============
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
// // исходный код 
//     // for (let i = 0; i < order.length; i += 1) {
//     //     total += order[i];
//     //   }
// // меняем на :
//     for (const price of order) {
//       total += price;
//     }
  
//     // Change code above this line
//     return total;
//   }
//=====================================================================================

//=========Задача: Выполни рефакторинг кода функции for на for...of=====================
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];

//   for (const number of numbers) {
// if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// console.log(filterArray([12, 85, 8, 58, 75], 20));
//=====================================================================================

//=========Задача:чётные числа.====================================================
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
// Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).
//             Тесты
// Объявлена функция getEvenNumbers(start, end)
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// Вызов функции getEvenNumbers(8, 8) возвращает [8]
// Вызов функции getEvenNumbers(7, 7) возвращает []
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

// function getEvenNumbers(start, end) {
//   // Change code below this line
// const arr = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {arr.push(i)}
//   }
//   return arr;
//    // Change code above this line
//  }
//  console.log(getEvenNumbers(2, 5));
//  console.log(getEvenNumbers(3, 11));
//  console.log(getEvenNumbers(6, 12));
//  console.log(getEvenNumbers(8, 8));
//  console.log(getEvenNumbers(7, 7));
//  console.log(getEvenNumbers(15, 39));
 //=====================================================================================

 //=========Задача: Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
// возвращала первое число от start до end, которое делится на divisor без остатка не использовала оператор break не использовала переменную number
 
// function findNumber(start, end, divisor) {
//   // Change code below this line
// // заменим код:
// // let number;
// // for (let i = start; i < end; i += 1) {
// //   if (i % divisor === 0) {
// //     number = i;
// //     break;}}
// // return number;
// // на код:

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }  
//   // Change code above this line
// }
//=====================================================================================

//========= Задача: функция includes()=================================================
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, 
// есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// Тесты
// Объявлена функция includes(array, value)
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// Вызов includes() для случайного массива со случайным value возвращает верный boolean
// В функции includes используется for, return, но не метод массива includes

// function includes(array, value) {

// for (let i = 0; i < array.length; i += 1) {
//    if (array[i] === value) {return true};
// }
// return false
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus"));
// console.log(includes(["apple", "plum", "pear", "orange"], "plum"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));
// console.log(includes([1, 2, 4, 45, 87, 100], 45));
//=====================================================================================

// const array = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"]
// console.log(array[2]);


//========= Задача РЕПЕТА: функция includes()=================================================
//  * Напиши скрипт который заменяет регистр каждого символа в строке на противоположный.
//  * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT».
//  */

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//   console.log(letter);

  // if (letter === letter.toLowerCase()) {
  //   console.log('Эта буква в нижнем регистре!!! - ', letter);

  //   invertedString += letter.toUpperCase();
  // } else {
  //   console.log('Эта буква в верхнет регистре!!! - ', letter);
  //   invertedString += letter.toLowerCase();
  // }

//   const isEqual = letter === letter.toLowerCase();

//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString: ', invertedString);
//=====================================================================================


//========================= Модуль 3 Объекты =======================================
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// console.log(hotel.name); // Resort Hotel
// console.log(hotel['name']); // Resort Hotel

// hotel.name = 'Coastline Resort';
// console.log(hotel.name); // Coastline Resort
// console.log(hotel['name']); // Coastline Resort

// hotel['name'] = 'Stardust Hotel';
// console.log(hotel.name); // Stardust Hotel
// console.log(hotel['name']); // Stardust Hotel

//========================= Модуль 3 Объекты =======================================
//========================= ДЗ 3 задача 10/41 =======================================
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// Тесты
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ['descr', 'rating', 'price']
// Объявлена переменная values
// Значение переменной values это массив ['Просторная квартира в центре', 4, 2153]

// const apartment = {
//   descr: 'Spacious apartment in the city centre',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// // console.log(Object.keys(apartment))
// // console.log(Object.values(apartment))
// // console.log(Object.entries(apartment))

// for(const key in apartment) {
//   keys.push(key)
//   values.push(apartment[key])
//   }
  
 
//   console.log(keys)
//   console.log(values)
//==============================================================================
//========================Задача 11/41=====================================

  // const keys = [];
  // const values = [];
  // const advert = {
  //   service: 'apt',
  // };
  // const apartment = Object.create(advert);
  // apartment.descr = 'Spacious apartment in the city centre';
  // apartment.rating = 4;
  // apartment.price = 2153;
  
  // for (const key in apartment) {
  //   // Change code below this line
  //   if (apartment.hasOwnProperty(key)){
  //   keys.push(key);
  //   values.push(apartment[key]);
  //     }
    
  // }
  // console.log(values)
  // console.log(keys)
  // console.log(advert)
//==============================================================================

  //========================Задача 11/41=====================================

  // function countProps(object) {
   
  //   let propCount = 0;
  //   const keys = Object.keys(object)
  //   for (const key of keys) {
      
        
  //       propCount += 1;
      
  //   }
  // console.log(keys)
  // console.log(propCount)
  //   return propCount;
    
  // }
  // countProps({})
  // countProps({ name: "Mango", age: 2 })
  // countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })
//==============================================================================

    //========================Задача 11/41=====================================

//     function countTotalSalary(salaries) {
//       let totalSalary = 0;

//       const allsalaries = Object.values(salaries)
//     for (const salary of allsalaries) {
//       totalSalary += salary
//     }
// // console.log(allsalaries)
//       return totalSalary;
//     }
//     console.log(countTotalSalary({}))
//     console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))
//     console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }))
// //==============================================================================

    //========================Задача 17/41=====================================
    // const colors = [
    //   { hex: '#f44336', 
    //     rgb: '244,67,54' },
      
    //   { hex: '#2196f3', 
    //     rgb: '33,150,243' },
      
    //   { hex: '#4caf50', 
    //     rgb: '76,175,80' },
      
    //   { hex: '#ffeb3b', 
    //     rgb: '255,235,59' },
    // ];
    
    // const hexColors = [];
    // const rgbColors = [];
    // // Change code below this line
    
    // for(const color of colors) {
    
    // hexColors.push(color.hex)
    // rgbColors.push(color.rgb)
     
    // }
    // console.log(hexColors)
    // console.log(rgbColors)
  //==============================================================================

  //========================Задача 18/41=====================================
  // Задание
  // Напиши функцию getProductPrice(productName) 
  // которая принимает один параметр productName - название продукта. 
  // Функция ищет объект продукта с таким именем (свойство name) в массиве products 
  // и возвращает его цену (свойство price). Если продукт с таким названием не найден, 
  // функция должна возвращать null.

  // Объявлена функция getProductPrice(productName).
  // Вызов getProductPrice("Radar") возвращает 1300.
  // Вызов getProductPrice("Grip") возвращает 1200.
  // Вызов getProductPrice("Scanner") возвращает 2700.
  // Вызов getProductPrice("Droid") возвращает 400.
  // Вызов getProductPrice("Engine") возвращает null.

  // const products = [
  //   { name: 'Radar', price: 1300, quantity: 4 },
  //   { name: 'Scanner', price: 2700, quantity: 3 },
  //   { name: 'Droid', price: 400, quantity: 7 },
  //   { name: 'Grip', price: 1200, quantity: 9 },
  // ];
  
  // function getProductPrice(productName) {
  //   // Change code below this line
  //   for (const product of products) {
  //     if (productName === product.name) { 
  //       return product.price
  //     }
  //   }
  //    return null   
  //   // Change code above this line
  // }
  // console.log(getProductPrice("Radar"))
  // console.log(getProductPrice("Grip"))
  // console.log(getProductPrice("Scanner"))
  // console.log(getProductPrice("Droid"))
  // console.log(getProductPrice("Engine"))
 //==============================================================================

  //========================Задача 19/41=====================================
// Задача. Коллекция значений свойства
// Задание
// Напиши функцию getAllPropValues(propName) которая принимает один параметр 
// propName - имя (ключ) свойства. Функция должна вернуть массив всех значений 
// свойства с таким именем из каждого объекта в массиве products. 
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Тесты
// Объявлена функция getAllPropValues(propName)
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает []

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// const propValue = [];

//   for (const product of products) {
//     for(const key in product) {
//     if (propName === key) {
//       propValue.push(product[propName])
//     }
//    }
// } return propValue
// }
// console.log(getAllPropValues("name")) 
// console.log(getAllPropValues("quantity")) 
// console.log(getAllPropValues("price")) 
// console.log(getAllPropValues("category"))
 //==============================================================================

  //========================Задача 20/41=====================================
//   Задача. Общая стоимость товара
// Задание
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр 
// productName - название товара. Функция должна вернуть общую стоимость 
// (цена * количество) товара с таким именем из массива products.

// Тесты
// Объявлена функция calculateTotalPrice(productName)
// Вызов calculateTotalPrice("Blaster") возвращает 0
// Вызов calculateTotalPrice("Radar") возвращает 5200
// Вызов calculateTotalPrice("Droid") возвращает 2800
// Вызов calculateTotalPrice("Grip") возвращает 10800
// Вызов calculateTotalPrice("Scanner") возвращает 8100

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   let totalPrice = 0;
// for (const product of products) {
//   if (productName === product.name) {
//   totalPrice = product.price * product.quantity
//   return totalPrice
// }
// }
// return totalPrice
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));
 //==============================================================================

  //========================Задача 24/41=====================================
//   Задание
// Выполни рефакторинг цикла for...of так, чтобы в нём использовалась 
// деструктуризация объекта..

// Тесты
// Объявлена переменная colors
// Значение переменной colors это массив
// Объявлена переменная hexColors
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Объявлена переменная rgbColors
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// Для перебора массива используется цикл for...of
// В цикле for...of используется деструктуризация объекта

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const { hex, rgb } of colors) {
//   // hexColors.push(color.hex);
//   // rgbColors.push(color.rgb);
// //  const { hex, rgb }= color
//  hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors)
// console.log(rgbColors)

 //==============================================================================

  //========================Задача 25/41=====================================
//   Задание
// Мы получили прогноз погоды на два дня, с минимальными и максимальными температурами, а также необязательными иконками. Замени объявления всех переменных одной операцией деструктуризации свойств объекта forecast. Задай значение по умолчанию для иконок, переменных todayIcon и tomorrowIcon - строку "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Тесты
// Объявлена переменная forecast
// Значение переменной forecast это объект
// Объявлена переменная highToday с помощью деструктуризации
// Значение переменной highToday это число 32
// Объявлена переменная lowToday с помощью деструктуризации
// Значение переменной lowToday это число 28
// Объявлена переменная todayIcon с помощью деструктуризации
// Значение переменной todayIcon это строка "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Объявлена переменная highTomorrow с помощью деструктуризации
// Значение переменной highTomorrow это число 31
// Объявлена переменная lowTomorrow с помощью деструктуризации
// Значение переменной lowTomorrow это число 27
// Объявлена переменная tomorrowIcon с помощью деструктуризации
// Значение переменной tomorrowIcon это строка "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Используется синтаксис деструктуризации объекта highTemperatures
  
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const {today: {low:lowToday, high:highToday, icon:todayIcon = 
//   'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg'}, 
//   tomorrow: {low:lowTomorrow, high:highTomorrow, icon:tomorrowIcon = 
//     "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"}} = forecast

//==============================================================================
//========================Задача 26/41=====================================
  // Функция calculateMeanTemperature(forecast) принимает один параметр forecast - 
  // объект температур на два дня следующего формата.
  // Замени объявления переменных todayLow, todayHigh, tomorrowLow и tomorrowHigh 
  // одной операцией деструктуризации свойств объекта forecast.
//   Тесты
// Объявлена функция calculateMeanTemperature(forecast)
// В теле функции используется деструктуризация объекта
// В теле функции объявлена переменная todayHigh с помощью деструктуризации
// В теле функции объявлена переменная todayLow с помощью деструктуризации
// В теле функции объявлена переменная tomorrowLow с помощью деструктуризации
// В теле функции объявлена переменная tomorrowHigh с помощью деструктуризации
// Вызов calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) возвращает 28.5
// Вызов calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) возвращает 37
// // Change code below this line
// function calculateMeanTemperature(forecast) {
  
//   const {today: {low: todayLow, high: todayHigh}, tomorrow: {low:tomorrowLow, high:tomorrowHigh}} = forecast


//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
            
// console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));
//==============================================================================
//========================Задача 30/41=====================================

// Задача. Карточки задач
// Задание
// Напиши функцию makeTask(data) которая принимает один параметр data - объект 
// со следующими свойствами.

// text - текст задачи.
// category - категория задачи.
// priority - приоритет задачи.
// Функция должна составить и вернуть новый объект задачи, не изменяя напрямую 
// параметр data. В новом объекте должно быть свойство completed, значение 
// которого хранится в одноимённой локальной переменной.

// В параметре data гарантированно будет только свойство text, а остальные два, 
// category и priority, могут отсутствовать. Тогда, в новом объекте задачи, 
// в свойствах category и priority должны быть значения по умолчанию, хранящиеся 
// в одноимённых локальных переменных.

// Тесты
// Объявлена функция makeTask(data)
// Вызов makeTask({}) возвращает { category: "General", priority: "Normal", completed: false }

// Вызов makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) возвращает 
// { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// Вызов makeTask({ category: "Finance", text: "Take interest" }) возвращает 
// { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// Вызов makeTask({ priority: "Low", text: "Choose shampoo" }) возвращает 
// { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

// Вызов makeTask({ text: "Buy bread" }) возвращает 
// { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
// // const text = 
// const data1 = {...{category}, ... {priority}, ... data, ...{completed}  }
//   // Change code above this line
//   return data1
// }
// console.log(makeTask({}));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));

//==============================================================================
//========================Задача 31/41=====================================
// Используя операцию rest дополни код функции add() так, чтобы она принимала любое
//  количество аргументов, считала и возвращала их сумму.
// Объявлена функция add
// Функция add использует параметр args
// Для сбора аргументов в переменную args, в подписи функции используется синтаксис ... (оперетор rest)
// Вызов add(15, 27) возвращает 42
// Вызов add(12, 4, 11, 48) возвращает 75
// Вызов add(32, 6, 13, 19, 8) возвращает 78
// Вызов add(74, 11, 62, 46, 12, 36) возвращает 241

// function add(...args) {
//   let total = 0;
//   for(const arg of args) {
//   total += arg
//   }
//   return total
//  }

//  console.log(add(15, 27));
//  console.log(add(12, 4, 11, 48));
//  console.log(add(32, 6, 13, 19, 8));
//  console.log(add(74, 11, 62, 46, 12, 36));
//==============================================================================
//========================Задача 32/41=====================================
// Все аргументы, для которых будут объявлены параметры, передадут им свои значения,
//  остальные аргументы будут помещены в массив. Операция rest собирает все оставшиеся аргументы и поэтому должна идти последней в подписи функции, иначе будет ошибка.

// Задание
// Функция addOverNum() считает сумму всех аргументов. Измени параметры и тело 
// функции addOverNum() так, чтобы она считала сумму только тех аргументов, которые 
// больше чем заданное число. Это число должно быть первым параметром функции.

// Тесты
// Объявлена функция addOverNum()
// Вызов addOverNum(50, 15, 27) возвращает 0
// Вызов addOverNum(10, 12, 4, 11, 48, 10, 8) возвращает 71
// Вызов addOverNum(15, 32, 6, 13, 19, 8) возвращает 51
// Вызов addOverNum(20, 74, 11, 62, 46, 12, 36) возвращает 218

// Change code below this line
// function addOverNum(number, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > number){total += arg;}
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

//==============================================================================
//========================Задача 33/41=====================================
// Задача. Массив совпадений
// Задание
// Функция findMatches() принимает произвольное количество аргументов. 
// Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// Дополни код функции так, чтобы она возвращала новый массив matches, 
// в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть
//  массив [1, 2], потому что только они есть в массиве первого аргумента.

// Тесты
// Объявлена функция findMatches()
// Вызов findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) возвращает [1, 2]
// Вызов findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) возвращает [17, 89, 2]
// Вызов findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) возвращает [24, 9, 41]
// Вызов findMatches([63, 11, 8, 29], 4, 7, 16) возвращает [].

// function findMatches(arr, ... args) {
//   const matches = []; // Don't change this line
//   for(const arg of args)
// if (arr.includes(arg)){
//   matches.push(arg)
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

//==============================================================================
//========================Задача 34/41=====================================
// Добавь объекту bookShelf ещё два метода, которые пока что будут возвращать просто строки 
// по аналогии с getBooks() и addBook(bookName).

// Метод removeBook(bookName) будет удалять книгу по имени. Возвращает строку 
// "Deleting book <имя книги>", где <имя книги> это значение параметра bookName.

// Метод updateBook(oldName, newName) будет обновлять название книги на новое. 
// Возвращает строку "Updating book <старое имя> to <новое имя>", где <старое имя> и <новое имя> 
// это значения параметров oldName и newName соотвественно.

// Объявлена переменная bookShelf
// Значение переменной bookShelf это объект
// Значение свойства bookShelf.getBooks это метод объекта
// Вызов метода bookShelf.getBooks() возвращает строку "Возвращаем все книги"

// Значение свойства bookShelf.addBook это метод объекта
// Вызов метода bookShelf.addBook("Haze") возвращает строку "Adding book Haze"

// Значение свойства bookShelf.removeBook это метод объекта
// Вызов метода bookShelf.removeBook("Red sunset") возвращает строку "Deleting book Red sunset"

// Значение свойства bookShelf.updateBook это метод объекта
// Вызов метода bookShelf.updateBook("Sands of dune", "Dune") 
// возвращает строку "Updating book Sands of dune to Dune"

// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName){
//     return `Deleting book ${bookName}`
//   },
//   updateBook(oldName, newName){
//     return `Updating book ${oldName} to ${newName}`
//   }
//   // Change code above this line
// };
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));
//==============================================================================
//========================Задача 35/41=====================================
// =========================== Пример ===================================
// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // []
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]
//==============================================================================

//========================Задача 35/41=====================================
// Дополни метод updateBook(oldName, newName) так, чтобы он изменял название книги с oldName 
// на newName в свойстве books. Используй indexOf() для того, чтобы найти нужный элемент
//  массива, и splice() для того чтобы заменить этот элемент

// Тесты
// Объявлена переменная bookShelf
// Значение переменной bookShelf это объект
// Значение свойства bookShelf.updateBook это метод объекта
// После вызова метода bookShelf.updateBook("Haze", "Dungeon chronicles"), 
// значение свойства books это массив ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// После вызова метода bookShelf.updateBook("The last kingdom", "Dune"), 
// значение свойства books это массив ["Dune", "Haze", "The guardian of dreams"]

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     // console.log(newName);
//     // console.log(bookIndex);
//     // console.log(this.books)
// 	return this.books.splice(bookIndex, 1, newName);
 
//     // Change code above this line
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles");
// console.log(bookShelf.books)

// bookShelf.updateBook("The last kingdom", "Dune");
// console.log(bookShelf.books)
//==============================================================================

//========================Задача 41/41=====================================

// Задача. Расширяем инвентарь. Задание:
// Заказчица хочет чтобы каждое зелье было представлено не только именем, но и ценой, а в будущем может быть и другими 
// характеристиками. Поэтому теперь в свойстве potions будет храниться массив объектов со следующими свойствами.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, 
// а с массивом объектов.

// getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.

// addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.

// removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
// updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName 
// на newName в массиве potions.

// Тесты
// Объявлена переменная atTheOldToad
// Значение переменной atTheOldToad это объект
// Значение свойства atTheOldToad.getPotions это метод объекта
// Вызов метода atTheOldToad.getPotions() для исходного объекта возвращает 
// [ { name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 } ]

// Значение свойства atTheOldToad.addPotion это метод объекта.
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в массиве potions последним элементом будет этот объект
// Для исходного объекта после вызова метода atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в массиве potions последним элементом будет этот объект
// Значение свойства atTheOldToad.removePotion это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Dragon breath"), в свойстве potions будет массив 
// [ { name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.removePotion("Speed potion"), в свойстве potions будет массив 
// [ { name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// Значение свойства atTheOldToad.updatePotionName это метод объекта
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), в свойстве potions будет массив 
// [{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 }, { name: "Stone skin", price: 520 } ]
// Для исходного объекта после вызова метода atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), в свойстве potions будет массив 
// [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 } ]

// const atTheOldToad = {
//   potions: [],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(Product) {

//      for (const potion of this.potions) {
//       // console.log(potion)
//       if (Product.name === potion.name) {
//         // console.log('такой продукт уже есть', Product.name)
//         potion.qty += 1;
//         return
//       }
//     }
//     const newProduct = {...Product, qty: 1,}
//     this.potions.push(newProduct);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i +=1) {
//       const potion = this.potions[i];
//       // console.log(potion)
//       if (potionName === potion.name){
//         // console.log('нашли продукт', potionName)
//         this.potions.splice(i, 1)
//     }
//   }
//   },

//   updatePotionName(oldName, newName) {

//     for (let i = 0; i < this.potions.length; i += 1) {

//       const potion = this.potions[i];
//       if (oldName === potion.name){
//         // console.log('нашли продукт', oldName)
//         potion.name = newName 
//     }
//   }
//   },
//   clearPotion(){
//     this.potions = [];
//   },
//   totalPrice(){
//     let total = 0;
//     const {potions, qty} = this
//     for( const {price, qty} of potions) {
      
//       total += price * qty
//     }
//     return total
//   },
//   increaseQty(Product){
//   for (const potion of this.potions) {
//     if (Product.name === potion.name) {
//       potion.qty += 1
//       return
//     }
//   }
//   },
//   decreaseQty(Product){
//     for (const potion of this.potions) {
//       if (Product.name === potion.name && potion.qty >= 2) {
//         potion.qty -= 1
//         return
//       }
//     }
//   },
//  };

// // atTheOldToad.getPotions()
// console.table(atTheOldToad.potions)
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// console.table(atTheOldToad.potions)
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// console.table(atTheOldToad.potions)
// atTheOldToad.removePotion("Speed potion")
// // console.table(atTheOldToad.potions)
// // console.table(atTheOldToad.potions)
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
// console.table(atTheOldToad.potions)
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
// console.table(atTheOldToad.potions)
// // atTheOldToad.clearPotion()
// // // console.log(atTheOldToad.potions)
// atTheOldToad.addPotion({ name: 'Speed potion', price: 460 }),
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 780 }),
// atTheOldToad.addPotion({ name: 'Stone skin', price: 520 }),
// atTheOldToad.addPotion({ name: 'Speed potion', price: 460 }),
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 780 }),
// atTheOldToad.addPotion({ name: 'Stone skin', price: 520 }),
// atTheOldToad.addPotion({ name: 'Speed potion', price: 460 }),
// atTheOldToad.addPotion({ name: 'Dragon breath', price: 780 }),
// atTheOldToad.addPotion({ name: 'Stone skin', price: 520 }),
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// atTheOldToad.addPotion({ name: 'Speed potion', price: 460 })
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// atTheOldToad.increaseQty({ name: 'Stone skin', price: 520 });
// atTheOldToad.decreaseQty({ name: "Power potion", price: 270 })

// console.table(atTheOldToad.potions)
// console.log('Total price', atTheOldToad.totalPrice())


//==============================================================================
//==============================================================================
// Стрелочные функции 
// const add = (a, b, c) => a * b - c;
// console.log(add(3,3,3));

// const fn = (a, b, c) => a + b + c;
// console.log(fn(4,5,6))
//==============================================================================
//========================МОДУЛЬ 4 Задача 1/10=====================================

// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza();
// const pointer = makePizza;

// console.log(result);
// console.table(pointer);
//==============================================================================


//===============Парктика 30-05-21================================

//===============задача 1========================
// Напишите функцию pow(x,n), которая возвращает x в степени n.
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// const pow = function(x, n) {
//   return Math.pow(x, n)
// }
// console.log(pow(2, 3))

// ============================TASK 5===========================
// напиши функцию которая будет суммировать соседние числа
//  и пушить их в новый массив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15]; результат [33, 39, 25, 29]

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const sumNeibors = function(someArr) {
//   const newArr = [];
// for (let i = 0; i < someArr.length; i += 2) {
//  for (let y = 1; y < someArr.length; y +=2) {
// }
// }
//  newArr.push(someArr[i] + someArr[y])
// }
// console.log(sumNeibors(someArr))

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// const someFn = function(arr){

//     const array = [];

//     for (let i = 0; i< arr.length; i+=2){
        
//         array.push(arr[i]+arr[i+1])
        
//     }
//     return array;
// }

// console.log(someFn(someArr));
//=================================================================================

//==============================TASK 5.1=================================
// Напишите решение, которое вычисляет сумму
// квадратных корней для всех чисел у которых квадратный 
// корень будет целым числом.

// const arr = [4, 3, 5, 16, 16, 33, 4, 9]

// const sumNumb = function(someArr) {
//   const newArr = [];
//   for( let i = 0; i < arr.length; i += 1 ) {
//     if (Number.isInteger(Math.sqrt(arr[i])))
//     if (Number.isInteger(Math.sqrt(arr[i]))) {
//       newArr.push(Math.sqrt(arr[i]))
//     }
//     }
//   return newArr
// }
// console.log(sumNumb(arr))
//==========================================================================
//==============================TASK 5.2=================================
// Давайте произведём 5 операций с массивом.

// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска 
// значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз','Джаз','Джаз'];
// console.log(styles.push('Классика'));
// styles.push('Рок-н-ролл');

// console.log(styles);

// styles.splice(styles.length/2, 1,'Классика');
// console.log(styles);

// // styles.shift()
// console.log(styles.shift())
// styles.unshift('Рэп','Регги');
// console.log(styles);
//==========================================================================

// ==========================Task 3====================================================

// Нужно перебрать объекты и вывести имя лучшего сотрудника
// function findBestEmployee(obj) {
//   let name = '';
//   let maxValue = 0;
//   for(let key in obj) {
//     if(obj[key] > maxValue) {
//       maxValue = obj[key]
//     name = key;
//   }
       
//   }
//   return name
// }
// ======================= решение после 6-го модуля ==============================
// const findBestEmployee = (obj) => Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0];
// ============================================= ==============================

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

//======================== Приветсти массив к одному уровню ======================

// const arr = ['2232', ['Hello', 'world'], '777', ['new array', ['some array', ['next level']]]]

// console.log(arr.flat(Infinity));
// console.log(arr.join(",").split(","));


//=========================================================================

// Функция formatMessage(message, maxLength)
// принимает строку (параметр message) и форматирует её,
// если длина превышает значение в параметре maxLength.

function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    console.log(message);
    // return message;
    return
  }
  console.log(message.slice(0, maxLength) + '...');
  // return message.slice(0, maxLength) + '...';
}


formatMessage("Curabitur ligula sapien", 16); //возвращает 'Curabitur ligula...'.
formatMessage("Curabitur ligula sapien", 23); //возвращает 'Curabitur ligula sapien'.
formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //возвращает 'Nunc sed turpis...'.
formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); //возвращает 'Nunc sed turpis a felis in nunc fringilla'.


