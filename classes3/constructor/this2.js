'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b; 
//     }
//     console.log(sum())
// }
// showThis(4, 5); 

// const obj = {
//     a: 20,
//     b:30,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// }
// obj.sum();




function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true; 
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    }
}   
let Ivan = new User('Ivan', 23)


function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
}

sayName.call(user, 'Smith');
sayName.apply(user, ['smith']);

function count(num) {
    return this*num;
}
const double = count.bind(2);
console.log(double(3));
console.log(double(13));
// обычная функция this = window, но если  use strict - undefined
// контекст метода обекта сам обект
// this конструктарах классах - это новый экземпляр объекта
// ручная привязка this: call, apply, bind


const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    this.style.backgroundColor = 'red';
    console.log(this)
})

const obj = {
    num:50,
    sayNum: function() {
        const say = () => {
            console.log(this);  
        }
        say();
    }
}
obj.sayNum();