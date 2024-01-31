class Timer {
  constructor() {
    this.body = document.querySelector('body');
    this.timer = document.createElement('span');
    this.startTime = undefined;
    this.timerInterval = undefined;
    this.time = '';
    this.lastTime = [];
  }

  get() {
    return this.time;
  }

  formatTime(timeInSeconds) {
    const minutes =
      Math.floor(timeInSeconds / 60) +
      (this.lastTime[0] ? this.lastTime[0] : 0);
    const seconds =
      (timeInSeconds % 60) + (this.lastTime[1] ? this.lastTime[1] : 0);
    this.time = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  updateTimer() {
    const currentTime = Math.floor((Date.now() - this.startTime) / 1000);
    this.timer.textContent = this.formatTime(currentTime);
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  startTimer() {
    this.time = '';
    this.startTime = Date.now();
    this.timerInterval = setInterval(() => this.updateTimer(), 1000);
  }

  launch() {
    this.timer.id = 'timer';
    this.startTimer();
    this.body.append(this.timer);

    return this.timer;
  }
}
