import './styles.css';

const refs = {
  daysRef: document.querySelector('[data-value=days]'),
  hoursRef: document.querySelector('[data-value=hours]'),
  minsRef: document.querySelector('[data-value=mins]'),
  secsRef: document.querySelector('[data-value=secs]'),
};

class CountdownTimer {
  constructor({ selector, targetTime }) {
    this.selector = document.querySelector(selector);
    this.targetTime = targetTime;
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  updateClockFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    refs.daysRef.textContent = `${days}`;
    refs.hoursRef.textContent = `${hours}`;
    refs.minsRef.textContent = `${mins}`;
    refs.secsRef.textContent = `${secs}`;
  }

  previewClock() {
    const deltaTime = this.targetTime.getTime() - Date.now();
    this.updateClockFace(deltaTime);
  }

  startClock() {
    this.previewClock();
    setInterval(() => {
      this.previewClock();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetTime: new Date('Jul 17, 2021'),
});

timer.startClock();
