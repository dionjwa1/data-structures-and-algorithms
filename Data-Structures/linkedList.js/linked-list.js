'use strict';

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }




  const Events = require('events');

  const events = new Events();

  events.on('light', eyelid);
  events.on('light', pupil);
  events.on('light', arm);

function pupil(payload) {
  console.log('Eyes are dialted at', payload.brightness, '%');
}

function arm(payload) {
  if (payload.brightness >= 90) {
    console.log('Covering Eyes', arm);
  }
}

function eyelid(payload) {
  if (payload.brightness >= 75) {
    console.log('e are squinting', eyelid);
  }
}



let brightness = Math.ceil(Math.random() * 100);
console.log('Brightness:', brightness)
events.emit('light', { brightness });
}, 2000);
