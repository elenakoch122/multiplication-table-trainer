const factor1 = document.querySelector('.factor-one');
const factor2 = document.querySelector('.factor-two');
const result = document.querySelector('.result');
const check = document.querySelector('.check-button');
const digits = document.querySelector('.digits');

function getRandomInt() {
  return Math.floor(Math.random() * 10 + 1);
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

check.addEventListener('click', () => {
  const a = +factor1.textContent;
  const b = +factor2.textContent;  
  
  if (a * b === +result.textContent) {
    result.style.color = '#00e900';
    result.style.borderColor = '#00e900';

    setTimeout(() => {
      initStyles();
      init();
    }, 500);
  } else {
    result.style.color = 'red';
    result.style.borderColor = 'red';
    
    setTimeout(() => {
      initStyles();
    }, 1000);
  }
});

for (let i = 1; i < 10; i++) {
  digits.append(createDigit(i));
}
digits.append(createDigit(0));

init();