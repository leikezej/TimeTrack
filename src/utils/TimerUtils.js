const v4 = require("uuid/v4");

export function millisecondsToHuman(time) {
  let parsedInt = parseInt(time, 10);
  let seconds = parsedInt / 3600;
  
  let hour = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  
  let minute = Math.floor( seconds / 60);
  seconds = Math.floor(seconds % 60);
  
  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;
  if (seconds < 10) seconds = `0${seconds}`;
  
  return `${hour}:${minute}:${seconds}`;
}

export const newTimer = (attrs = {}) => {
  return {
    id: v4(),
    elapsed: 0,
    isRunning: false,
    title: attrs.timerTitle || 'Title',
    project: attrs.timerProject || 'Project'
  };
};

export const removeTimer = (array, key) => {
  return array.filter(timer => timer.id !== key);
};
