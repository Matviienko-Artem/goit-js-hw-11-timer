import './styles.css';

const refs = {
  daysRef: document.querySelector('[data-value=days]'),
  hoursRef: document.querySelector('[data-value=hours]'),
  minsRef: document.querySelector('[data-value=mins]'),
  secsRef: document.querySelector('[data-value=secs]'),
};

function pad(value) {
  return String(value).padStart(2, '0');
}

const startTime = new Date('Jan 7, 2021');

setInterval(() => {
  updateClockFace(0);
  const currentTime = Date.now();
  const deltaTime = startTime - currentTime;
  updateClockFace(deltaTime);
}, 1000);

function updateClockFace(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  refs.daysRef.textContent = `${days}`;
  refs.hoursRef.textContent = `${hours}`;
  refs.minsRef.textContent = `${mins}`;
  refs.secsRef.textContent = `${secs}`;
}
