const stopLight = document.getElementById('stopLight');
const slowLight = document.getElementById('slowLight');
const goLight = document.getElementById('goLight');
const controls = document.getElementById('controls');
const starterColor = slowLight.style.backgroundColor;

const obj = {
  "Stop": [stopLight, "red"],
  "Slow": [slowLight, "yellow"],
  "Go": [goLight, "green"]
}

document.addEventListener("DOMContentLoaded", (function () {
  'use strict';

  controls.addEventListener("click", toggle);
  controls.addEventListener("mouseover", hover);
  controls.addEventListener("mouseout", leave);

}))


function toggle(e) {

  if (obj[e.target.textContent.toString()]) {

    var but = obj[e.target.textContent.toString()];

    if (but[0].style.backgroundColor === starterColor) {
      but[0].style.backgroundColor = but[1];
    } else {
      but[0].style.backgroundColor = starterColor;
    }
  } else {

  }

}

function hover(e) {
  if (obj[e.target.textContent.toString()]) {
    console.log(`Entered ${e.target.textContent} button`)
  } 
}

function leave(e) {
  if (obj[e.target.textContent.toString()]) {
    console.log(`Left ${e.target.textContent} button`)
  } 
}