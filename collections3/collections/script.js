'use strict';

const boxSquery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box')

boxSquery[0].remove();
boxesGet[0].remove();

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
}
console.log(boxSquery)
console.log(boxesGet)
console.log(document.body.children)
console.log(Array.from(boxesGet))

boxSquery.forEach(box => {
    if (box.matches('.this')) console.log(box);
})

console.log(boxSquery[0].closest('.wrapper'))

