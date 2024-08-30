'use strict';

// filter

const names = ['Anna', 'Ivan', 'Rockstar'];
const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames)



// map
const answers = ['iVAn', 'Anna', 'Hello'];
const result = answers.map(item => item.toLowerCase());

console.log(result)




// every some
 const some = [4, 'qwr', 'qwe'];
//  console.log(some.some(item => typeof(item) == 'number'));
console.log(some.every(item => typeof(item) == 'number'));

// reduce
const arr = [4,31,3,2]

const res = arr.reduce((sum, current) => sum + current, 1)
console.log(res)

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};
const newArr = Object.entries(obj)
.filter(item =>  item[1] === 'persone')
.map(item => item[0]);
console.log(newArr)