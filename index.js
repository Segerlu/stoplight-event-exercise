const stopBut = document.getElementById('stopButton');
const stopLight = document.getElementById('stopLight');

const slowBut = document.getElementById('slowButton');
const slowLight = document.getElementById('slowLight');

const goBut = document.getElementById('goButton');
const goLight = document.getElementById('goLight');

const starterColor = slowLight.style.backgroundColor;

document.addEventListener("DOMContentLoaded", (function() {
  'use strict';

  stopBut.addEventListener("click", toggleStop);
  stopBut.addEventListener("mouseover", () => {
    console.log(`Entered Stop button`)
  });
  stopBut.addEventListener("mouseout", () => {
    console.log(`left Stop button`)
  });


  slowBut.addEventListener("click", toggleSlow);
  slowBut.addEventListener("mouseover", () => {
    console.log(`Entered Slow button`)
  });
  slowBut.addEventListener("mouseout", () => {
    console.log(`left Slow button`)
  });

  goBut.addEventListener("click", toggleGo);
  goBut.addEventListener("mouseover", () => {
    console.log(`Entered Go button`)
  });
  goBut.addEventListener("mouseout", () => {
    console.log(`left Go button`)
  });


}))


function toggleStop() {

  if (stopLight.style.backgroundColor === starterColor) {
    stopLight.style.backgroundColor = "red";
  } else {
    stopLight.style.backgroundColor = starterColor;
  }
}

function toggleSlow() {

  if (slowLight.style.backgroundColor === starterColor) {
    slowLight.style.backgroundColor = "yellow";
  } else {
    slowLight.style.backgroundColor = starterColor;
  }
}

function toggleGo() {

  if (goLight.style.backgroundColor === starterColor) {
    goLight.style.backgroundColor = "green";
  } else {
    goLight.style.backgroundColor = starterColor;
  }
}