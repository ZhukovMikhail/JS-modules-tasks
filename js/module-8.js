// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const innerChild = document.querySelector('#inner-child');

// const parentClickHandler = () => alert('PARENT click handler');
// const childClickHandler = () => alert('CHILD click handler');
// const innerClickChildHandler = () => alert('INNER CHILD click handler');

// parent.addEventListener('click', parentClickHandler);
// child.addEventListener('click', childClickHandler);
// innerChild.addEventListener('click', innerClickChildHandler);

//====================   event.target ================
// const parent = document.querySelector('#parent');

// const handleClick = event => {
//   alert(`event.target: ${event.target.id}`);
//   console.log(`event.target: ${event.target}`);
// };

// // откройте консоль и покликайте, вы увидите что
// // event.target это всегда исходный (и самый глубокий) элемент
// // на котором был сделан клик
// parent.addEventListener('click', handleClick);

//-------------------2.2. Прекращение всплытия--------------

// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const innerChild = document.querySelector('#inner-child');

// const parentClickHandler = () => {
//   console.log(
//     'При клике в INNER-CHILD, этого alert не будет, до PARENT event не дойдет!',
//   );
// };

// const childClickHandler = () => {
//   console.log(
//     'При клике в INNER-CHILD, этого alert не будет, до CHILD event не дойдет!',
//   );
// };

// const innerChildClickHandler = event => {
//   event.stopPropagation();
//   console.log('INNER-CHILD click handler!');
//   // event.stopImmediatePropagation();
//   // Прекращает обработку события даже на текущем элементе
// };

// parent.addEventListener('click', parentClickHandler);
// child.addEventListener('click', childClickHandler);
// innerChild.addEventListener('click', innerChildClickHandler);

// //================3. Делегирование событий========================
// const nav = document.querySelector('.js-nav');
// nav.addEventListener('click', handleNavClick);

// function handleNavClick(event) {
//   event.preventDefault();

//   const target = event.target;
//   console.log('event target: ', target); // посмотрите что тут

//   // Проверяем тип узла, если не ссылка выходим из функции
//   if (target.nodeName !== 'A') return;

//   setActiveLink(target);
// }

// function setActiveLink(nextActiveLink) {
//   const currentActiveLink = nav.querySelector('a.active');
//   nextActiveLink.classList.add('active');
//   if (currentActiveLink) {
//     currentActiveLink.classList.remove('active');
//   }
// }

// const libraryBtn = document.querySelector('.js-choice-storage');

// console.dir(libraryBtn);

const arr = [];
const str = JSON.stringify(arr);
console.log(arr);

console.dir(arr);

localStorage.setItem('arr', arr);
console.log();
