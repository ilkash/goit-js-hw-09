import Notiflix, { Notify } from 'notiflix';
const submit = document.querySelector('[type="submit"]');
const input = document.querySelector('[ name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');
const form = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (shouldResolve) {
        res({ position, delay });
      } else {
        rej({ position, delay });
      }
    }, delay);
  });
}
function submitForm(e) {
  e.preventDefault();
  const delay = Number(input.value);
  const stepv = Number(step.value);
  for (let i = 0; i < Number(amount.value); i++) {
    createPromise(i, delay + stepv * i)
      .then(({ position, dalay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
form.addEventListener('submit', submitForm);
