import './styles.css';
// import './js-friends';

const refs = {
  daysRef: document.querySelector('[data-value=days]'),
  hoursRef: document.querySelector('[data-value=hours]'),
  minsRef: document.querySelector('[data-value=mins]'),
  secsRef: document.querySelector('[data-value=secs]'),
};

class CountdownTimer {
  constructor(targetDate) {
    // this.selector = document.querySelector(selector);
    this.targetTime = targetDate;
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  updateClockFace(time) {
    const pad = this.pad;

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
  startClock = setInterval(() => {
    // updateClockFace(0);
    const targetTime = this.targetTime;
    const currentTime = Date.now();
    let deltaTime = targetTime - currentTime;
    // this.updateClockFace(deltaTime);
    console.log(targetTime.getTime());
    // console.log(this.updateClockFace(deltaTime));
  }, 1000);
}

const timer = new CountdownTimer({
  targetDate: new Date('Jul 17, 2019'),
});

const time = new Date('Jul 17, 2019');

console.log(time.getTime());
