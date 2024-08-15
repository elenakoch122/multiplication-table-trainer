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
    init();
    result.textContent = '';
  } else {
    result.style.color = 'red';
    result.style.borderColor = 'red';
    
    setTimeout(() => {
      result.style.color = '#fff';
      result.style.borderColor = '#fff';
      result.textContent = '';
    }, 1000);
  }
});

for (let i = 1; i < 10; i++) {
  digits.append(createDigit(i));
}
digits.append(createDigit(0));

init();