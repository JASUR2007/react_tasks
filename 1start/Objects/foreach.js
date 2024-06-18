'use strict'

const arr = [1,3,4,5];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`)
});

const str = prompt('', '');
const products = str.split(', ');
console.log(products)