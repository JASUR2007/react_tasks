'use strict'

const soldier = {
    health:400,
    armor: 100,
    sayHello: function() {
        return "hello"
    }
}


// const john = {
//     health:100
// };
// old versions
// john.__proto__ = soldier;
// console.log(john.sayHello())


// Object.setPrototypeOf(john, soldier);
// console.log(john.sayHello())


const john = Object.create(soldier);
console.log(john.sayHello())




// home

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 500000
}
function isBudgetEnough(data) {
    let {shops} = data
    let all = 0
    let volume = '';
    for (let i = 0; i < shops.length; i++) {
        all += shops[i]['width'] * shops[i].length;
    }
    volume = all * data.height*data.moneyPer1m3;
    if (data.budget > volume) {
        console.log(`Бюджета достаточно`)
    } else {
        console.log('Бюджета недостаточно')
    }
}
isBudgetEnough(shoppingMallData);




const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi',"sas",'as'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    console.log([a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`])
}
sortStudentsByGroups(students)