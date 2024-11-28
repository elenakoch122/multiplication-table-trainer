const factor1 = document.querySelector('.factor-one');
const factor2 = document.querySelector('.factor-two');
const result = document.querySelector('.result');
const check = document.querySelector('.check-button');
const digits = document.querySelector('.digits');
const clear = document.querySelector('.digits__clear');
const gifts = document.querySelector('.gifts');
let counter = document.querySelector('.counter');
let count = 3;

function getRandomInt() {
  return Math.floor(Math.random() * 8 + 2);
}

function init() {
  factor1.textContent = getRandomInt();
  factor2.textContent = getRandomInt();
}

function initStyles() {
  result.style.color = '#fff';
  result.style.borderColor = '#fff';
  result.textContent = '';
}

function createDigit(num) {
  const digit = document.createElement('div');
  digit.classList.add('digit');
  digit.textContent = num;

  digit.addEventListener('click', () => {
    result.textContent += num;
  });

  return digit;
}

function createGift() {
  const gift = document.createElement('div');
  gift.classList.add('gift');

  fetch('https://emojihub.yurace.pro/api/random')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      data.htmlCode.forEach(i => gift.insertAdjacentHTML("beforeend", i));
    });

  return gift;
}

check.addEventListener('click', () => {
  const a = +factor1.textContent;
  const b = +factor2.textContent;  
  
  if (a * b === +result.textContent) {
    result.style.color = '#00e900';
    result.style.borderColor = '#00e900';
    count--;
    
    setTimeout(() => {
      initStyles();
      init();

      if (count === 0) {
        gifts.append(createGift());
        count = 3;
      }

      counter.textContent = counter.textContent.slice(0, -1) + count;
    }, 500);
  } else {
    result.style.color = 'red';
    result.style.borderColor = 'red';
    
    setTimeout(() => {
      initStyles();
    }, 1000);
  }
});

clear.addEventListener('click', () => {
  result.textContent = result.textContent.slice(0, -1);
});

counter.textContent += count;

for (let i = 1; i < 10; i++) {
  digits.append(createDigit(i));
}
digits.append(createDigit(0));

init();