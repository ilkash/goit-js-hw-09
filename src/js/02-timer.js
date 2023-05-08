import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const input = document.querySelector('#datetime-picker');
const start = document.querySelector('[data-start]');
const daysref = document.querySelector('[data-days]');
const hoursref = document.querySelector('[data-hours]');
const minutesref = document.querySelector('[data-minutes]');
const secondsref = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //console.log(selectedDates[0]);
    if (selectedDates[0] <= Date.now()) {
      window.alert('Please choose a date in the future');
      start.disabled = true;
    } else {
      start.disabled = false;
    }
  },
};
flatpickr(input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  daysref.textContent = days.toString().padStart(2, '0');
  hoursref.textContent = hours.toString().padStart(2, '0');
  minutesref.textContent = minutes.toString().padStart(2, '0');
  secondsref.textContent = seconds.toString().padStart(2, '0');
}
input.addEventListener('input', e => {
  e.preventDefault();
  const timeEvent = Date.parse(e.target.value);
  // console.log(timeEvent)
  //return timeEvent;
  start.addEventListener('click', () => {
    const timeId = setInterval(() => {
      const result = timeEvent - new Date();
      if (result <= 0) {
        clearInterval(timeId);
        return;
      }
      convertMs(result);
      //console.log(result)
    }, 1000);
  });
});
