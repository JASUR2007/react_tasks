'use strict';

const box = document.querySelector('.box'),
    btn = document.querySelector('button')
// width with padding
// const width = box.clientWidth;
// const height = box.clientHeight;

// just width
// const width = box.offsetWidth;
// const height = box.offsetHeight;

// with scrolling
const width = box.scrollWidth;
const height = box.scrollHeight;
console.log(width, height);

btn.addEventListener("click", () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop)
})

// console.log(box.getBoundingClientRect())
console.log(box.getBoundingClientRect().top)

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.scrollTop);
// window.scrollBy(0,400)
// window.scrollTo(0,400)
