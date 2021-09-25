'use strict';
// const x = 1;
// const x = 'hello';
// console.log(x);

// let b = 20;

// if (true) {
//   console.log(b);
//   let b = 10;
// }

// const x;
// x = 1;
// console.log(x);
// const MAX = 10;
// let amount = 0;

// while (amount++ < MAX) {
//   let sum = amount;
// }

// console.log(sum);
// const person = {
//   firstName: 'bob',
//   showName() {
//     console.log(this.firstName);
//   },
// };

// const foo = function (callback) {
//   callback;
// };

// foo(person.showName());

// const person = {
//   age: 10,
//   setAge(newAge) {
//     this.age = newAge;
//   },
//   refreshAge(userId) {
//     fetchAgeFromDb(function (newAge) {
//       this.setAge(newAge);
//     });
//   },
// };

// function fetchAgeFromDb(cb) {
//   cb(20);
// }

// person.refreshAge();
// console.log(person.age);

// const add = (a = 0, b = 10) => a + b;
// const sum = add(10);
// console.log(sum);

// const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
// const answer = sum(1, 5, 20, 10);
// console.log(answer);

// const multiplyByValue = (value, base, ...numbers) => {
//   return numbers.map(number => number * value + base);
// };
// console.log(multiplyByValue(2, 100, 1, 5, 20, 10));

// const names = ['bob', ...['donald'], 'suzy', 'lacy', ...['richard', 'alex']];
// console.log(names);

// console.log(...[0, 'hello', 2, 3, 4, 5, 6, 7]);

// const min = Math.min(...[1, 5, -1, -10]);
// console.log(min);

// const name = 'bob';
// const age = 20;
// const obj = { name, age };

// console.log(obj);

// const confused = 'no';
// const myKey = confused;

// const obj = {
//   [myKey]: false,
// };

// console.log(obj);

// const piece = {
//   x: 0,
//   y: 0,
//   move(x, y) {
//     this.x = x;
//     this.y = y;
//   },
// };

// piece.move(10, 10);
// console.log(piece);

// const [first, , third] = 'hello sweet world'.split(' ');
// console.log(first, third);

// console.log('hello sweet world'.split(' '));

// 16. Что будет выведено в консоль?

// const {
//   name,
//   age,
//   gender = 'm',
//   hairColor: color,
// } = {
//   name: 'bob',
//   age: 20,
//   hairColor: 'blue',
// };

// console.log(name, age, gender, color);

// 17. Что будет выведено в консоль?
// const dog = { name: 'Poly' };

// function showDogName() {
//   console.log(this.name);
// }

// const boundShowDogName = showDogName.bind(dog);

// boundShowDogName();

// const userA = {
//   name: 'Mango',
//   age: 5,
// };

// const userB = {
//   ...userA,
//   age: 10,
//   happy: true,
// };

// console.log(userB);

// 19. Что будет выведено в консоль?

// const fn = (arr, val) => arr.filter(el => el > val);

// console.log(fn([1, 2, 3, 4, 5], 3));

// 21. Что будет выведено в консоль?

// const fn = arr =>
//   arr.map(el => {
//     const item = document.createElement('div');
//     item.textContent = el;

//     return item;
//   });

// console.log(fn(['html', 'css', 'js', 'react']));

// console.log(false);

// const up = str => str.toUpperCase();

// let user = 'user';

// let str = `these ${up(`${user}s`)} are great`;

// console.log(str); // these USERS are great
