'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

const ans = prompt('Enter name:');

const reg = /n/ig;
// i
// g
// m
console.log(ans.search(reg));
console.log(ans.match(reg));


const pass = prompt('Password');

console.log(pass.replace(/./g, '*'))


// d digits
//  w words
// s space
console.log(reg.test(ans))

const sho = /\d/;
console.log(ans.match(sho))

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i))


// \W
// \D
//  \S
const str2 = 'My name is R2D2';
console.log(str2.match(/\W/i))