const timeNodes = [...document.querySelectorAll(`[data-time]`)];

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(`:`).map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSecs) => total + vidSecs, 0);

let secsLeft = seconds;
const hours = Math.floor(secsLeft / 3600);
secsLeft = secsLeft - (hours * 3600) 
const mins = Math.floor(secsLeft / 60);
const secs = secsLeft - (mins * 60);
console.log(hours, mins, secs);
