'use strict';

const box = document.querySelector('.box');

const newHeight = null;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h}px`;
    elem.style.width = `${w}px`;
    console.log(100 ?? h )
}

changeParams(box, newHeight, newWidth);