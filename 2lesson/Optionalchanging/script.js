'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)

// console.log(block.innerHTML);
console.log(1+1)
console.log(block?.textContent)
console.log(block?.textContent ?? 1)

const userData = {
    name: 'John',
    age: null,
    say: function() {
        console.log('hello')
    }
};
if (userData && userData.skills && userData.skills.js) {

}
console.log(userData?.skills?.js)

userData.say();
userData.hey?.();