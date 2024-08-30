// 22
'use strict';
const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);
const discount = compose(normalizePrice, divide100, multiply20);

console.log(discount(200.0))
const composeWithArgs = (...fns) => fns.reduceRight((f, g) => (...args) => g(f(...args)));

const add1 = function(a){return a + 1}
const addAll3 = function(a,b,c){return a + b + c}

console.log(composeWithArgs(add1,addAll3)(1,2,3));

