"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.millisecondsToHuman = millisecondsToHuman;
exports.removeTimer = exports.newTimer = void 0;

var v4 = require("uuid/v4");

function millisecondsToHuman(time) {
  var parsedInt = parseInt(time, 10);
  var seconds = parsedInt / 3600;
  var hour = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  var minute = Math.floor(seconds / 60);
  seconds = Math.floor(seconds % 60);
  if (hour < 10) hour = "0".concat(hour);
  if (minute < 10) minute = "0".concat(minute);
  if (seconds < 10) seconds = "0".concat(seconds);
  return "".concat(hour, ":").concat(minute, ":").concat(seconds);
}

var newTimer = function newTimer() {
  var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    id: v4(),
    elapsed: 0,
    isRunning: false,
    title: attrs.timerTitle || 'Title',
    project: attrs.timerProject || 'Project'
  };
};

exports.newTimer = newTimer;

var removeTimer = function removeTimer(array, key) {
  return array.filter(function (timer) {
    return timer.id !== key;
  });
};

exports.removeTimer = removeTimer;