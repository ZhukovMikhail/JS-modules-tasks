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
//========================Задача 31/41=====================================