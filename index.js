const factor1 = document.querySelector('.factor-one');
const factor2 = document.querySelector('.factor-two');
const result = document.querySelector('.result');
const check = document.querySelector('.check-button');

function getRandomInt() {
  return Math.floor(Math.random() * 10 + 1);
}

function init() {
  factor1.textContent = getRandomInt();
  factor2.textContent = getRandomInt();
}

check.addEventListener('click', () => {
  const a = +factor1.textContent;
  const b = +factor2.textContent;  
  
  if (a * b === +result.value) {
    location.reload();
  } else {
    result.style.color = 'red';
    result.style.borderColor = 'red';
    
    setTimeout(() => {
      result.style.color = '#fff';
      result.style.borderColor = '#fff';
      result.value = '';
    }, 1000);
  }
});

init();