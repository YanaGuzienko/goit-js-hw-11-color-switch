const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
};

const btnColor = {
  intervalId: null,
  isActive: false,

  start() {
    refs.startBtn.setAttribute('disabled', true);
    if (this.isActive) {
      return;
    }
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const randomColor =
        colors[randomIntegerFromInterval(0, colors.length - 1)];
      refs.body.style.backgroundColor = randomColor;
    }, 1000);
  },

  stop() {
    refs.startBtn.removeAttribute('disabled');
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
  },
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.startBtn.addEventListener('click', btnColor.start.bind(btnColor));
refs.stopBtn.addEventListener('click', btnColor.stop.bind(btnColor));
