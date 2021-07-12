const number = '#' + (Math.random().toString(16) + '000000').substring(2, 8);
console.log(number);

const header = document.querySelector('h1');
header.style.color = number;
