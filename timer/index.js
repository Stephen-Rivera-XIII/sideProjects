const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

function getColor(percentComplete) {
    if (percentComplete <= 0.1) {
      return 'red';
    } else if (percentComplete <= 0.25) {
      return 'orange';
    } else if (percentComplete <= 0.5) {
      return 'yellow';
    } else {
      return 'green';
    }
  }

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log('Started');
    },
    onTick(timeRemaining) {
        let percentComplete = timeRemaining / duration;
        let movingPerimeter = perimeter * percentComplete - perimeter;
        circle.setAttribute('stroke-dashoffset', movingPerimeter);
        let color = getColor(percentComplete);
        circle.setAttribute('stroke', color);
    },
    onComplete() {
        console.log('Completed');
    }
});



