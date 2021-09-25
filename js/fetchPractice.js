// const btn = document.querySelector('#js-btn');
// const output = document.querySelector('#js-output');

// // Рассмотрим классическую ошибку при работе с асинхронным запросом
// // Начинающий разработчик пытается записать "результат fetch"
// // во внешнюю пременную и использовать ее
// // ниже по коду сразу за fetch
// let globalVariable = ''; // пустая строка

// const onClick = () => {
//   // Cделаем fetch к сервису
//   fetch('https://api.myjson.com/bins/k9i31')
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error('Error fetching data');
//     })
//     .then(data => {
//       console.log('data inside then: ', data); // {name: "Mango", age: 2, mood: "happy"}

//       // Запишем результат в глобальную переменную
//       globalVariable = data;
//       // Тут все ок, данные есть в переменной
//       console.log('globalVariable inside fetch: ', globalVariable);

//       output.textContent = JSON.stringify(data);
//     })
//     .catch(error => {
//       console.error('Error: ', error);
//     });

//   // Вне метода then данных нет, так как эта строка кода
//   // выполнится раньше чем придет ответ от сервера
//   // В это время переменная globalVariable еще содержит пустую строку
//   // Данные промиса доступны только в методе then самого промиса
//   console.log('globalVariable outside fetch: ', globalVariable);
// };

// btn.addEventListener('click', onClick);
//=====================================================================================================

//================================= Правильный пример ================================================
// const btn = document.querySelector('.js-get-data');
// const tBody = document.querySelector('table > tbody');

// btn.addEventListener('click', handleClick);

// // Напишем функцию которая будет возвращать результат fetch (обещание) к указаному url

// // При клике вызовем getCurrencyRates и после того как
// // обещание выполнятся, внутри then отрендерим результат по шаблону
// function handleClick() {
//   getCurrencyRates().then(updateView);
// }
// function getCurrencyRates() {
//   return fetch(
//     'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
//   )
//     .then(response => {
//       if (response.ok) return response.json();
//       throw new Error('Error fetching data');
//     })
//     .catch(err => {
//       console.error('Error: ', err);
//     });
// }
// function createTableRow({ ccy, buy, sale }) {
//   return `
//     <tr scope="row">
//       <td>${ccy}</td>
//       <td>${Number(buy).toFixed(2)}</td>
//       <td>${Number(sale).toFixed(2)}</td>
//     </tr>
//   `;
// }

// // Получает массив объектов валют и рендерит результат
// function updateView(currencies) {
//   console.log(currencies);
//   const htmlString = currencies.reduce(
//     (acc, currency) => acc + createTableRow(currency),
//     '',
//   );

//   tBody.innerHTML = htmlString;
// }

//========================= запрос покемонов =======================

const pok = fetch('https://pokeapi.co/api/v2/pokemon');
pok
  .then(result => {
    return result.json();
  })
  .then(response => console.log(response))
  .catch(error => console.log(error));
