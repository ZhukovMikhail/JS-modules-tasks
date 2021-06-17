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

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     console.log(message);
//     // return message;
//     return
//   }
//   console.log(message.slice(0, maxLength) + '...');
//   // return message.slice(0, maxLength) + '...';
// }


// formatMessage("Curabitur ligula sapien", 16); //возвращает 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23); //возвращает 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //возвращает 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); //возвращает 'Nunc sed turpis a felis in nunc fringilla'.



// const printValue = function (value) {
//   console.log(value);
// };

// const prettyPrint = function (value) {
//   console.log('Logging value: ', value);
// };

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const printName(x){
// x + prettyPrint
// }
// // Передаем printValue как callback-функцию
// repeat(3, printValue);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyPrint);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2


// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithAmount = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithAmount); // массив с объектами apples и grapes

//============================= HW Module 4 задача 2/10 =================================================

// Дополни функцию makeMessage так, чтобы она ожидала вторым параметром (параметр callback) 
// колбэк-функцию и возвращала ее вызов. Функция deliverPizza или makePizza будет передаваться как колбэк 
// и ожидать аргументом имя готовой доставляемой пиццы.
// Объявлена функция deliverPizza.
// Объявлена функция makePizza.
// Объявлена функция makeMessage.
// Функция makeMessage принимает два параметра, названые согласно задания, pizzaName и callback.
// Вызов makeMessage('Роял гранд', makePizza) возвращает строку 'Пицца Роял гранд готовится, ожидайте...'.
// Вызов makeMessage('Ультрасыр', deliverPizza) возвращает строку 'Доставляем пиццу Ультрасыр.'..

// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName , callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Роял гранд', makePizza));
// console.log(makeMessage('Ультрасыр', deliverPizza));
//=======================================================================

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest('Манго', function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest('Поли', function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });
//============================= HW Module 4 задача 3/10 =================================================

// Дополни второй вызов функции makePizza(pizzaName, callback), передав вторым аргументом инлайн колбэк-функцию 
// eatPizza(pizzaName), которая логирует строку 'Едим пиццу <имя пиццы>'.

// Тесты
// Объявлена функция makePizza.
// Функция makePizza принимает два параметра.
// Вторым аргументом при вызове makePizza('Ультрасыр') передана функция eatPizza с единственным параметром pizzaName.

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр',function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}`)});

//=========================================================================
//================== HW Module 4 задача 4/10==============================
  // Задание
// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку 'В ассортименте нет пиццы с названием <имя пиццы>.'
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// Тесты
// Метод order объявляет три параметра.
// Вызов pizzaPalace.order('Аль Копчино', makePizza, onOrderError) возвращает 'Ваш заказ принят. Готовим пиццу Аль Копчино.'.
// Вызов pizzaPalace.order('Четыре нарезона', makePizza, onOrderError) возвращает 'Ваш заказ принят. Готовим пиццу Четыре нарезона.'.
// Вызов pizzaPalace.order('Биг майк', makePizza, onOrderError) возвращает 'Ошибка! В ассортименте нет пиццы с названием Биг майк.'.
// Вызов pizzaPalace.order('Венская', makePizza, onOrderError) возвращает 'Ошибка! В ассортименте нет пиццы с названием Венская.'.

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas){
      
//       if (pizzaName === pizza) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(pizzaName)
//     ;
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(pizzaName) {
//   return `Ошибка! В ассортименте нет пиццы с названием ${pizzaName}.`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));
//================================================================
//================== HW Module 4 задача 7/10 ==============================
//=========================== Метод call apply ==============================

// Сервису приготовления и доставки еды требуется функция генерации сообщений о статусе заказа.

// Дополни функцию composeMessage(position) так, чтобы она возвращала строку в формате 'Готовим <блюдо> для <почта>. Ваш заказ <позиция>-й в очереди.' Позиция это значение параметра position - позиция элемента в массиве (на единицу больше чем индекс).

// Не объявляй дополнительные параметры функции composeMessage(position).
// Используй call для вызова функции в контексте одного объекта-заказа.
// Используй this в теле функции для доступа к свойствам объекта-заказа в контексте которого она была вызывана.
// Дополни код так, чтобы в переменной messages получился массив сообщений о статусе заказов из массива orders с помощью цикла for.

// Тесты
// Объявлена переменная orders.
// Значение переменной orders это исходный массив объектов-заказов.
// Объявлена функция composeMessage(position).
// У функции composeMessage объявлен один параметр position.
// В теле функции composeMessage используется this.
// Функция composeMessage вызывается методом call внутри цикла for.
// Объявлена переменная messages.
// Значение переменной messages это массив ['Готовим Burger для solomon@topmail.ua. Ваш заказ 1-й в очереди.', 'Готовим Pizza для artemis@coldmail.net. Ваш заказ 2-й в очереди.', 'Готовим Taco для jacob@mail.com. Ваш заказ 3-й в очереди.'].

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];
// // // Пиши код ниже этой строки
// // function composeMessage(position) {}

// // const messages = [];
// //------------------------------------------------------


// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }
// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   messages.push(composeMessage.call(orders[i], i + 1)); //call
//   messages.push(composeMessage.apply(orders[i], [i + 1]))//apply
// }

// console.log(messages)
//------------------------------------------------------

// ================  Метод bind  ==============================
// Методы call и apply вызывают функцию «на месте», то есть сразу. Но в случае колбэк-функций, когда необходимо не сразу вызвать функцию, а передать ссылку на неё, причём с привязанным контекстом, используется метод bind.

// foo.bind(obj, arg1, arg2, ...)
// Метод bind создаёт и возвращает копию функции foo с привязанным контекстом obj и аргументами arg1, arg2 и т. д. Получается копия функции которую можно передать куда угодно и вызвать когда угодно.

// function greet(clientName) {
//   return `${clientName}, добро пожаловать в «${this.service}».`;
// }

// const steam = { service: 'Steam' };
// const steamGreeter = greet.bind(steam);

// console.log(steamGreeter('Манго')); // "Манго, добро пожаловать в «Steam»."

// const gmail = { service: 'Gmail' };
// const gmailGreeter = greet.bind(gmail);

// console.log(gmailGreeter('Поли')); // "Поли, добро пожаловать в «Gmail»."
//-------------------------------------------------------------------

// ================  Метод bind  и методы объекта ==============================

// При передаче методов объекта как колбэк-функций, контекст не сохраняется. Колбэк это ссылка на метод, которая присваивается как значение параметра, вызываемого без объекта.

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции
// В строгом режиме, значение this в методе getFullName, при вызове как колбэк-функции callback(), будет undefined. При обращении к свойствам firstName и lastName будет ошибка, так как undefined это не объект.

// Метод bind используется для привязки контекста при передаче методов объекта как колбэк-функций. Передадим колбэком не оригинальный метод getFullName, а его копию с привязанным контекстом к объекту customer.

// // ❌ Было
// makeMessage(customer.getFullName); // Будет ошибка при вызове функции

// // ✅ Стало
// makeMessage(customer.getFullName.bind(customer)); // Обрабатываем заявку от Jacob Mercer.
//-------------------------------------------------------------------

// Задание
// Сервису рассылки электронной почты необходимо добавить логирование действий для сбора статистики. Функция logAndInvokeAction(email, action) ожидает почту и действие которое нужно выполнить - ссылку на метод объекта service. Сбор статистики симулируется логированием строки. Разберись и дополни код так, чтобы он работал верно.

// Тесты
// Объявлена переменная service.
// Значение переменной service это оригинальный объект.
// Объявлена функция logAndInvokeAction(email, action).
// Переменной firstInvoke присвоена строка 'Почта kiwi@mail.uk добавлена в рассылку.'.
// Первый вызов logAndInvokeAction с почтой kiwi@mail.uk и методом service.subscribe привязан к объекту service.
// Переменной secondInvoke присвоена строка 'Почта poly@hotmail.de удалена из рассылки.'.
// Второй вызов logAndInvokeAction с почтой poly@hotmail.de и методом service.unsubscribe привязан к объекту service.

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service);
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']

//-------------------------------------------------------------------

// ================ Modul 5 ООП Наследование, Конструкторы, прототипы ==============================

// ================ Задача 5/19 Свойство prototype ==============================

// Мы уже знаем что такое прототип объекта, свойство __proto__ и как происходит поиск отсутствующих свойств объекта по цепочке прототипов. Во время вызова функции-конструктора через new и создания нового объекта со свойствами, ему также устанавливается прототип.
// У каждой функции, кроме стрелочных, есть свойство prototype, значение которого это объект с единственным свойством constructor, указывающим на саму функцию-конструктор.

// function User() {}
// console.log(User.prototype); // { constructor: User }
// При вызове функции-конструктора и создании объекта через new, объект в свойстве prototype функции-конструктора будет прототипом создаваемого объекта.

// const mango = new User();
// console.log(User.prototype.isPrototypeOf(mango)); // true
// В свойство prototype можно записывать свойства и методы, которые будут доступны всем объектам созданным этой функцией-конструктором. Методы в prototype будут вызываться объектами созданными функцией-конструктором, поэтому для доступа к свойствам вызываемого объекта в методах используется ключевое слово this.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.getEmail = function () {
//   return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// console.log(mango.getEmail()); // mango@mail.com
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango)

// // Задание
// // Добавь в свойство prototype функции-конструктора Car два метода:

// // getPrice() - возвращает значение свойства price из объекта который его будет вызывать.
// // changePrice(newPrice) - обновляет значение свойства price у объекта который его будет вызывать на newPrice.
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// Car.prototype.getPrice = function () {
// return this.price
// }

// Car.prototype.changePrice = function(newPrice) {
// return this.price = newPrice
// }

// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })
// console.log(car1.getPrice());
// car1.changePrice(35000);
// console.log(car1.getPrice());

//================= Задача 6 / 19 ========================================
// Задача. Хранилище
// Задание
// С помощью Function Declaration напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров. Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлена функция Storage(items).
// Вызов Storage.prototype.hasOwnProperty('getItems') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('addItem') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('removeItem') возвращает true.
// В результате вызова new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ]) значение переменной storage это объект.
// Вызов Storage.prototype.isPrototypeOf(storage) возвращает true.
// У объекта storage есть свойство items.
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор"].
// Второй вызов, storage.getItems(), после вызова storage.addItem('Дроид'), возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"].
// Третий вызов storage.getItems(), после вызова storage.removeItem('Пролонгер'), возвращает массив ["Нанитоиды", "Антигравитатор", "Дроид"].

// function Storage ({items}) {
//   this.items = items
//  }
//  Storage.prototype.getItems = function() {
//   return this.items
// }
// Storage.prototype.addItem = function(newItem) {
//   return this.items.push(newItem)
// }
// Storage.prototype.removeItem = function(item) {
//   return this.items.splice(this.items.indexOf(item),1);
//   };

// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]


// // Класс со статическими свойствами и методами
// class Calc {
//   // Класс-калькулятор для двух аргументов
//   constructor() {}

//   // Метод как замена свойству
//   static get PI() {
//     return 3.14;
//   }

//   // Статический метод +
//   static add(...args) {
//     return args.reduce((acc, next) => acc + next, 0);
//   }

//   // Статический метод *
//   static mult(...args) {
//     return args.reduce((acc, next) => acc * next, 1);
//   }
// }

// console.log(Calc.PI); // 3.14
// console.log(Calc.add(2, 3, 4)); // 9
// console.log(Calc.mult(12, 3, 4)); // 144

// const calc1 = new Calc

// console.log(calc1)
//---------------------------------------------------------------------

//================= Задача  7/ 19 ========================================

// function StringBuilder(baseValue){
//  this.value = baseValue;
// }
// StringBuilder.prototype.getValue = function(){
//   return this.value
// } 
// StringBuilder.prototype.padEnd = function(str){
//   return this.value += str
// }
// StringBuilder.prototype.padStart = function(str) {
//     return this.value = str + this.value
// }
// StringBuilder.prototype.padBoth = function (str) {
//     return this.value = str + this.value + str
// }

//   const srt1 = new StringBuilder('klklkl')
//   console.log(srt1)
  
//   // Пиши код выше этой строки
//   const builder = new StringBuilder('.');
//   console.log(builder)
//   console.log(builder.getValue()); // '.'
//   builder.padStart('^');
//   console.log(builder.getValue()); // '^.'
//   builder.padEnd('^');
//   console.log(builder.getValue()); // '^.^'
//   builder.padBoth('=');
//   console.log(builder.getValue()); // '=^.^='
// //---------------------------------------------------------------------

// //=======================Задача 10 / 19 =============================


//   class Car {
//     constructor({ brand, model, price }) {
//       this.brand = brand;
//       this.model = model;
//       this.price = price;
//     }
//       getPrice() {
//       return this.price
//       }
//       changePrice(newPrice){
//       return this.price = newPrice 
//     }
//   }
// --------------------------------------------------------------------
//=======================Задача 11 / 19 =============================
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//   return this.#brand
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// const car1 = new Car({ brand: 'Audi', model: 'Q3', price: 36000 });
// const car2 = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
// const car3 = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
// console.log(car1)
// console.log(car2)
// console.log(car3)
// console.log(car1.getBrand())
// car1.changeBrand('Tavria')
// console.log(car1.getBrand())

// --------------------------------------------------------------------

//=======================Задача 12 / 19 =============================
// Задача. Хранилище 2.0
// Задание
// Выполни рефакторинг заменив функцию-конструктор Storage на класс с методами. Сделай так, чтобы свойство items было приватным.

// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Объявлен класс Storage.
// Свойство items в классе Storage объявлено приватным.
// Конструктор класса принимает свойство items.
// Вызов Storage.prototype.hasOwnProperty('getItems') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('addItem') возвращает true.
// Вызов Storage.prototype.hasOwnProperty('removeItem') возвращает true.
// В результате вызова new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ]) значение переменной storage это объект.
// Вызов Storage.prototype.isPrototypeOf(storage) возвращает true.
// У объекта storage нет свойства items.
// Первый вызов storage.getItems(), сразу после инциализации экземпляра, возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор"].
// Второй вызов, storage.getItems(), после вызова storage.addItem('Дроид'), возвращает массив ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"].
// Третий вызов storage.getItems(), после вызова storage.removeItem('Пролонгер'), возвращает массив ["Нанитоиды", "Антигравитатор", "Дроид"].

// class Storage{
//   #items;
//   constructor(items){
//     this.#items = items
//   }
// getItems() {
//   return this.#items;
// };

// addItem(newItem) {
//   this.#items.push(newItem);
// };

// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// };
// }
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// // --------------------------------------------------------------------

// //=======================Задача 15 / 19 =============================
// // Задание
// // Выполни рефакторинг класса Car. Добавь публичное статическое свойство MAX_PRICE со значением 50000 - максимально допустимая цена автомобиля.

// // Добавь сеттеру price проверку передаваемого значения параметра newPrice. Если оно больше чем MAX_PRICE, сеттер ничего не делает, а если меньше или равно, то перезаписывает цену автомобиля.
// Тесты
// Объявлен класс Car.
// У класса Car есть статическое свойство MAX_PRICE.
// Значение статического свойства MAX_PRICE это число 50000.
// У экземпляра нет свойства MAX_PRICE.
// В классе Car объявлен геттер price.
// В классе Car объявлен сеттер price.
// У экземпляра класса Car вызов сеттера price, со значением аргумента меньше чем значение MAX_PRICE, изменяет свойство #price.
// У экземпляра класса Car вызов сеттера price, со значением аргумента больше чем значение MAX_PRICE, не изменяет свойство #price.

// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//   if (newPrice <= Car.MAX_PRICE) {
//     return this.#price = newPrice 
//   }
//   // console.log('цена больше допустимой')
//   return this.#price;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// --------------------------------------------------------------------

// //=======================Задача 16 / 19 =============================
// Задание
// Добавь классу Car публичный статический метод checkPrice(price), принимающий цену автомобиля. Метод должен сравнить значения параметра price и приватного статического свойства MAX_PRICE.

// Если цена автомобиля превышает максимальную, метод должен вернуть строку 'Внимание! Цена превышает допустимую.'.
// В противном случае метод должен вернуть строку 'Всё хорошо, цена в порядке.'.
// Под объявлением класса мы добавили инициализацию экземпляра и вызовы методов, чтобы показать как будет использоваться метод checkPrice(price).

// Тесты
// Объявлен класс Car.
// У класса Car есть статический метод checkPrice(price).
// Вызов Car.checkPrice(36000) возвращает строку 'Всё хорошо, цена в порядке.'.
// Вызов Car.checkPrice(18000) возвращает строку 'Всё хорошо, цена в порядке.'.
// Вызов Car.checkPrice(64000) возвращает строку 'Внимание! Цена превышает допустимую.'.
// Вызов Car.checkPrice(57000) возвращает строку 'Внимание! Цена превышает допустимую.'.

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//    if (price > Car.#MAX_PRICE) {
//     return 'Внимание! Цена превышает допустимую.'
//    }
//    return 'Всё хорошо, цена в порядке.'
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
// console.log(Car.checkPrice(36000));
// console.log(Car.checkPrice(18000));
// console.log(Car.checkPrice(64000));
// // console.log(Car.checkPrice(57000));
// // --------------------------------------------------------------------

// // //=======================Задача 19 / 19 =============================
// Задание
// Добавь классу Admin следующие свойства и методы.

// Публичное свойство blacklistedEmails для хранения чёрного списка почтовых адресов пользователей. Значение по умолчанию это пустой массив.
// Публичный метод blacklist(email) для добавления почты в чёрный список. Метод должен добавлять значение параметра email в массив хранящийся в свойстве blacklistedEmails.
// Публичный метод isBlacklisted(email) для проверки почты в чёрном списке. Метод должен проверять наличие значения параметра email в массиве хранящемся в свойстве blacklistedEmails и возвращать true или false.
// После объявления класса мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.

// Тесты
// Объявлен класс Admin.
// Класс Admin наследует от класса User.
// У класса Admin есть публичное свойство blacklistedEmails.
// У класса Admin есть публичный метод blacklist.
// У класса Admin есть публичный метод isBlacklisted.
// После вызова mango.blacklist('poly@mail.com') значение свойства blacklistedEmails это массив [ 'poly@mail.com' ].
// Вызов mango.isBlacklisted('mango@mail.com') возвращает false.
// Вызов mango.isBlacklisted('poly@mail.com') возвращает true.

// class User {
//   email;
//   constructor(email) {
//     this.email = email;
//   }
//   get email() {
//     return this.email;
//   }
//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   accessLevel;
//   blacklistedEmails;
//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
// this.blacklistedEmails = blacklistedEmails;
//   }
// blacklist(email) {
// this.blacklistedEmails.push(email);
// }
// isBlacklisted(email) {
// if (this.blacklistedEmails.includes(email)) {
// return true;
// }
// return false;
// }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 

// //======================= практика ==============================================
// const user = {
//   name: "John",
//   age: 25,
//   surname: "Smith",
// };

// const optionsEmployee = {
//   company: "Google",
//   position: "developer",
//   "user salary": 3000,
// };

// const user2 = { ...user, ...optionsEmployee };
// const user3 = Object.assign({}, user, optionsEmployee);
// const user4 = JSON.parse(JSON.stringify(user));

// descriptors

// Object.defineProperty(user, "age", {
//   enumerable: false,
//   writable: false,
//   configurable: false,
// });

// const user3 = Object.defineProperties(
//   {},
//   Object.getOwnPropertyDescriptors(user)
// );

// console.log(user3);
//---------------------------------------------------

// ============================ задачачки ==================
// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

// function Account({ email, login }) {
//   this.name = email;
//   this.login = login;
// }
// Account.prototype.getInfo = function () {
//   console.log(` Login: ${this.login}, Email:${this.name}`);
// };

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com
//---------------------------------------------------

// ============================ задачачки ==================
// Напиши класс User для создания пользователя со следующим свойствами:

// name - строка
// age - число
// followers - число
// Добавь метод getInfo(), который, выводит строку: User ${имя} is ${возраст} years old and has ${кол-во фоловеров} followers


// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: 'Poly',
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers
//---------------------------------------------------

// ============================ задачачки ==================
// Напиши класс Storage, который будет создавать объекты для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров, и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получет товар и, если он есть, удаляет его из текущих

// const storage = new Storage([
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор',
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem('Дроид');
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem('Пролонгер');
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
//---------------------------------------------------

// ============================ задачачки ==================
// Напиши класс StringBuilder. На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

// class StringBuilder {
//   constructor(value) {
//     this._value = value;
//   }
//   get value() {
//     return this._value;
//   }
//   append(str) {
//     this._value = this._value + str;
//   }
//   prepend(str) {
//     this._value = str + this._value;
//   }
//   pad(str) {
//     this._value = str + this._value + str;
//   }
// }


// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

//---------------------------------------------------

// ============================ задачачки ==================

// Напиши класс Car с указанными свойствами и методами.
// class Car {
//   static getSpecs(car) {
//     console.log(
//       `maxSpeed:${car.maxSpeed},speed:${car.speed},isOn:${car.isOn},distance:${car.distance},price:${car.price}`,
//     );
//   }
//   //maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000
//   /*
//    * Добавь статический метод `getSpecs(car)`,
//    * который принимает объект-машину как параметр и выводит
//    * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
//    */
//   /*
//    * Конструктор получает объект настроек.
//    *
//    * Добавь свойства будущеего экземпляра класса:
//    *  speed - текущая скорость, изначально 0
//    *  price - цена автомобиля
//    *  maxSpeed - максимальная скорость
//    *  isOn - заведен ли автомобиль, значения true или false. Изначально false
//    *  distance - общий киллометраж, изначально 0
//    */
//   constructor({ maxSpeed, price }) {
//     this.speed = 0;
//     this.price = price;
//     this.maxSpeed = maxSpeed;
//     this.isOn = false;
//     this.distance = 0;
//   }
//   /*
//    * Добавь геттер и сеттер для свойства price,
//    * который будет работать с свойством цены автомобиля.
//    */
//   get price() {
//     return this._price;
//   }
//   set price(price) {
//     this._price = price;
//   }
//   /*
//    * Добавь код для того чтобы завести автомобиль
//    * Записывает в свойство isOn значение true
//    */
//   turnOn() {
//     this.isOn = true;
//   }
//   /*
//    * Добавь код для того чтобы заглушить автомобиль
//    * Записывает в свойство isOn значение false,
//    * и сбрасывает текущую скорость в 0
//    */
//   turnOff() {
//     this.speed = 0;
//     this.isOn = false;
//   }
//   /*
//    * Добавялет к свойству speed полученное значение,
//    * при условии что результирующая скорость
//    * не больше чем значение свойства maxSpeed
//    */
//   accelerate(value) {
//     if (this.speed + value <= this.maxSpeed) {
//       this.speed = this.speed + value;
//     }
//   }
//   /*
//    * Отнимает от свойства speed полученное значение,
//    * при условии что результирующая скорость не меньше нуля
//    */
//   decelerate(value) {
//     if (this.speed - value >= 0) {
//       this.speed = this.speed - value;
//     }
//   }
//   /*
//    * Добавляет в поле distance киллометраж (hours * speed),
//    * но только в том случае если машина заведена!
//    */
//   drive(hours) {
//     if (this.isOn) {
//       this.distance = this.distance + hours * this.speed;
//     }
//   }
// }
// const mustang = new Car({ maxSpeed: 200, price: 2000 });

// mustang.turnOn();
// mustang.accelerate(50);
// mustang.drive(2);

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

// mustang.decelerate(20);
// mustang.drive(1);
// mustang.turnOff();

// Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

// console.log(mustang.price); // 2000
// mustang.price = 4000;
// console.log(mustang.price); // 4000
//---------------------------------------------------

// ============================ задачачки ==================
// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
//   // action.call(inventory, itemName);
// };

// invokeInventoryAction('Medkit', inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction('Gas mask', inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']


// const inventory = {
//   items: [‘Knife’, ‘Gas mask’],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);
//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);
//     this.items = this.items.filter(item => item !== itemName);
//   },
// };
// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
//   // action.call(inventory, itemName);
// };
// invokeInventoryAction(‘Medkit’, inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory
// console.log(inventory.items); // [‘Knife’, ‘Gas mask’, ‘Medkit’]
// invokeInventoryAction(‘Gas mask’, inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory
//---------------------------------------------------

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];

// dirtyMultiply(numbers, 2);

// // Произошла мутация исходных данных
// console.log(numbers); // [2, 4, 6, 8, 10]

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле id.
// // Если оно совпадает с искомым идентификатором, то find прекратит
// // выполнение и вернет текущий элемент (user) как результат выполнения
// const user = users.find(user => user.id === '002');
// console.log(user);

// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);

// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '003'));

//---------------------------------------------------

// ============================ module 6 задача 1/44==================
// Функция calculateTotalPrice(orderedItems) принимает один параметр orderedItems - массив чисел, и рассчитывает общую сумму его элементов, которая сохраняется в переменной totalPrice и возвращается как результат работы функции.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Тесты
// Объявлена функция calculateTotalPrice(orderedItems).
// Для перебора массива orderedItems использован метод forEach.
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138.
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503.
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//    orderedItems.forEach((orderedItem)=>{totalPrice += orderedItem}
//  )


//   // Пиши код выше этой строки
//   return totalPrice;
// }
//---------------------------------------------------

// ============================ module 6 задача 2/44==================
// Задача. Фильтрация массива чисел
// Задание
// Функция filterArray(numbers, value) принимает массив чисел numbers и возвращает новый массив, в котором будут только те элементы оригинального массива, которые больше чем значение параметра value.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Тесты
// Объявлена функция filterArray(numbers, value).
// Для перебора массива numbers использован метод forEach.
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5].
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает [].
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76].
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach((number)=>{
//     if (number> value) {
//       filteredNumbers.push(number);
//     }
//   })

//   // Пиши код выше этой строки
//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
//---------------------------------------------------

// ============================ module 6 задача 3/44==================

// Задача. Общие элементы
// Задание
// Функция getCommonElements(firstArray, secondArray) принимает два массива произвольной длины в параметры firstArray и secondArray, и возвращает новый массив их общих элементов, то есть тех которые есть в обоих массивах.

// Выполни рефакторинг функции так, чтобы вместо цикла for она использовала метод forEach.

// Тесты
// Объявлена функция getCommonElements(firstArray, secondArray).
// Для перебора параметра (массива) использован метод forEach.
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2].
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2].
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3].
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40].
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает [].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

// firstArray.forEach((firstArrayEl) =>{
//     if (secondArray.includes(firstArrayEl)) {
//       commonElements.push(firstArrayEl);
//     }
//   })


//   return commonElements;
//   // Пиши код выше этой строки
// }
//---------------------------------------------------
// ============================ module 6 задача 9/44==================
// Задание
// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.

// Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// Тесты
// Объявлена функция changeEven(numbers, value).
// Функция changeEven не изменяет значение параметра numbers.
// Вызов changeEven([1, 2, 3, 4, 5], 10) возвращает новый массив [1, 12, 3, 14, 5].
// Вызов changeEven([2, 8, 3, 7, 4, 6], 10) возвращает новый массив [12, 18, 3, 7, 14, 16].
// Вызов changeEven([17, 24, 68, 31, 42], 100) возвращает новый массив [17, 124, 168, 31, 142].
// Вызов changeEven([44, 13, 81, 92, 36, 54], 100) возвращает новый массив [144, 13, 81, 192, 136, 154].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
// const newArr = [];
//     numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       number = number + value;
//  newArr.push(number);
//     } else if(number % 2 !== 0) {
//     newArr.push(number)
//     }
//   })
// return newArr
//   // Пиши код выше этой строки
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// console.log(changeEven([2, 2, 2, 2], 100));

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
// const newArr = [...numbers];

// for (let i = 0; i < newArr.length; i += 1) {
//   if (newArr[i] % 2 === 0) {
//     newArr[i] = newArr[i] + value;
//   }
// }
// return newArr
//   // Пиши код выше этой строки
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));
// console.log(changeEven([2, 2, 2, 2], 100));
//---------------------------------------------------
// ============================ module 6 задача 10/44==================

// Задание
// Дополни код так, чтобы в переменной planetsLengths получился массив длин названий планет. Обязательно используй метод map().

// Тесты
// Объявлена переменная planets.
// Значение переменной planets это массив ['Земля', 'Марс', 'Венера', 'Юпитер'].
// Объявлена переменная planetsLengths.
// Значение переменной planetsLengths это массив [5, 4, 6, 6].
// Для перебора массива планет использован метод map().

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);
// console.log(planetsLengths);
//---------------------------------------------------
// ============================ module 6 задача 11/44==================
// Задание
// Используя метод map() сделай так, чтобы в переменной titles получился массив названий книг (свойство title) из всех объектов массива books.

// Тесты
// Объявлена переменная books.
// Значение переменной books это массив.
// Объявлена переменная titles.
// Значение переменной titles это массив ['Последнее королевство', 'На берегу спокойных вод', 'Сон смешного человека', 'Красна как кровь', 'Враг Божий'].
// Для перебора массива books используется метод map() как чистая функция.
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const titles = books.map((book) => book.title);
// console.log(titles)
//---------------------------------------------------
// ============================ module 6 задача 12/44==================
// Задание
// Используя метод flatMap() сделай так, чтобы в переменной genres получился массив всех жанров книг (свойство genres) из массива книг books.

// Тесты
// Объявлена переменная books.
// Значение переменной books это массив объектов.
// Объявлена переменная genres.
// Значение переменной genres это массив [ 'приключения', 'историческое', 'фантастика', 'ужасы', 'мистика' ].
// Для перебора массива books используется метод flatMap().
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика']
//   }
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);
// console.log(genres);
//---------------------------------------------------
// ============================ module 6 задача 13/44==================
// Дополни функцию getUserNames(users) так, чтобы она возвращала массив имён пользователей (свойство name) из массива объектов в параметре users.

// Тесты
// Объявлена переменная getUserNames.

// Переменной getUserNames присвоена стрелочная функция с параметром (users).

// Для перебора параметра users используется метод map().

// Вызов функции с указанным массивом пользователей возвращает массив ['Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony'].

// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// Пиши код ниже этой строки


// Пиши код ниже этой строки
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];
// const getUserNames = users => {
//   return users.map(user => user.name)
// };
// console.log(getUserNames(users))
// ============================ module 6 задача 15/44==================
// Задание
// Дополни код так, чтобы в переменной evenNumbers получился массив чётных чисел из массива numbers, а в переменной oddNumbers массив нечётных. Обязательно используй метод filter().

// Тесты
// Объявлена переменная numbers.
// Значение переменной numbers это массив [17, 24, 82, 61, 36, 18, 47, 52, 73].
// Объявлена переменная evenNumbers.
// Значение переменной evenNumbers это массив [24, 82, 36, 18, 52].
// Объявлена переменная oddNumbers.
// Значение переменной oddNumbers это массив [17, 61, 47, 73].
// // Для перебора массива numbers использован метод filter().

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter((number)=>number %2 === 0);
// const oddNumbers = numbers.filter((number)=>number %2 !== 0);

//---------------------------------------------------
// ============================ module 6 задача 16/44==================
// Дополни код так, чтобы в переменной allGenres был массив всех жанров книг (свойство genres) из массива books, а в переменной uniqueGenres массив уникальных жанров - без повторений.

// Тесты
// Объявлена переменная books.
// Значение переменной books это массив объектов.
// Объявлена переменная allGenres.
// Значение переменной allGenres это массив ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы', 'мистика', 'приключения'].
// Объявлена переменная uniqueGenres.
// Значение переменной uniqueGenres это массив ['приключения', 'историческое', 'фантастика', 'мистика', 'ужасы'].
// Для вычисления значения переменной allGenders использован метод flatMap().
// Для вычисления значения переменной uniqueGenres использован метод filter().

// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения']
//   }
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres);
// console.log(allGenres)
// const uniqueGenres = allGenres.filter((allGenre,index) => allGenres.indexOf(allGenre) === index);
// console.log(uniqueGenres);
//---------------------------------------------------
// ============================ module 6 задача 17/44==================
// Задание
// Используя метод filter() дополни код так, чтобы:

// В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING.
// В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.
// Тесты
// Объявлена переменная books.
// Значение переменной books это массив объектов.
// Объявлена переменная MIN_RATING.
// Значение переменной MIN_RATING это число 8.
// Объявлена переменная AUTHOR.
// Значение переменной AUTHOR это строка 'Бернард Корнуэлл'.
// Объявлена переменная topRatedBooks.
// Значение переменной topRatedBooks это массив книг с рейтингов выше 8.
// Объявлена переменная booksByAuthor.
// Значение переменной booksByAuthor это массив книг автор которых 'Бернард Корнуэлл'.
// Для перебора массива books использован метод filter().
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING)
// const booksByAuthor = books.filter((book) => book.author === AUTHOR)
// console.log(topRatedBooks);
// console.log(booksByAuthor);
//---------------------------------------------------
// ============================ module 6 задача 18/44==================
// Задание
// Дополни функцию getUsersWithEyeColor(users, color) так, чтобы она возвращала массив пользователей у которых цвет глаз (свойство eyeColor) совпадает со значением параметра color.

// Тесты
// Объявлена переменная getUsersWithEyeColor.
// Переменной getUsersWithEyeColor присвоена стрелочная функция с параметрами (users, color).
// Для перебора параметра users используется метод filter().
// Если значение параметра color это 'blue', функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush и Carey Barr.
// Если значение параметра color это 'green', функция возвращает массив объектов пользователей с именами Ross Vazquez и Elma Head.
// Если значение параметра color это 'brown', функция возвращает массив объектов пользователей с именами Blackburn Dotson и Sheree Anthony.
// Если значение параметра color это любая другая строка, функция возвращает пустой массив.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// const getUsersWithEyeColor = (users, color) => {
//  return users.filter((user) => user.eyeColor === color)

// };

// console.log(getUsersWithEyeColor(users, 'blue'))
//---------------------------------------------------
// ============================ module 6 задача 19/44==================
// Задание
// Дополни функцию getUsersWithAge(users, minAge, maxAge) так, чтобы она возвращала массив пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge.

// Тесты
// Объявлена переменная getUsersWithAge.
// Переменной getUsersWithAge присвоена стрелочная функция с параметрами (users, minAge, maxAge).
// Для перебора параметра users используется метод filter().
// Если значение параметров minAge и maxAge равны 20 и 30 соотвественно, функция возвращает массив объектов пользователей с именами Ross Vazquez, Elma Head и Carey Barr.
// Если значение параметров minAge и maxAge равны 30 и 40 соотвественно, функция возвращает массив объектов пользователей с именами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony.
// Если значение параметров minAge и maxAge равны 80 и 100 соотвественно, функция возвращает пустой массив.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter((user)=> user.age >= minAge && user.age <= maxAge)
// }
// console.log(getUsersWithAge(users, 30, 40))
//---------------------------------------------------
// ============================ module 6 задача 20/44==================

// Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// Тесты
// Объявлена переменная getUsersWithFriend.
// Переменной getUsersWithFriend присвоена стрелочная функция с параметрами (users, friendName).
// Для перебора параметра users используется метод filter().
// Если значение параметра friendName это строка 'Briana Decker', функция возвращает массив объектов пользователей с именами Sharlene Bush и Sheree Anthony.
// Если значение параметра friendName это строка 'Goldie Gentry', функция возвращает массив объектов пользователей с именами Elma Head и Sheree Anthony.
// Если значение параметра friendName это строка 'Adrian Cross', функция возвращает пустой массив.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter((user) => user.friends.includes(friendName))
// };

// console.log(getUsersWithFriend(users, 'Briana Decker'))
//---------------------------------------------------
// ============================ module 6 задача 21/44==================

// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// Тесты
// Объявлена переменная getFriends.
// Переменной getFriends присвоена стрелочная функция с параметром (users).
// Вызов функции с указанным массивом пользователей возвращает массив ['Sharron Pace', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Goldie Gentry', 'Aisha Tran', 'Jordan Sampson', 'Eddie Strong', 'Jacklyn Lucas', 'Linda Chapman'].
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// const getFriends = (users) => {
//   const allfriends = users.flatMap((user) => user.friends);
//   console.log(allfriends)
//   return allfriends.filter((allfriend, index) => allfriends.indexOf(allfriend) === index)
// };
// console.log(getFriends(users));

// const allGenres = books.flatMap((book) => book.genres);
// console.log(allGenres)
// const uniqueGenres = allGenres.filter((allGenre,index) => allGenres.indexOf(allGenre) === index);
// console.log(uniqueGenres);

//---------------------------------------------------
// ============================ module 6 задача 22/44==================
// Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// Тесты
// Объявлена переменная getActiveUsers. Переменной getActiveUsers присвоена стрелочная функция с параметром users.
// Для перебора параметра users используется метод filter().
// Вызов функции с указанным массивом пользователей возвращает массив объектов пользователей с именами Sharlene Bush, Elma Head, Carey Barr и Sheree Anthony.
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// const getActiveUsers = (users) => {
//   return users.filter((user) => !user.isActive)
   
// };
// console.log(getActiveUsers(users))