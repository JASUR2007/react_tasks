let x = 5; 
alert(x++); //5
alert(--x); //6


console.log(typeof([ ] + false)); // string
console.log([ ] + false - null + true)
console.log([ ] + false - null )


console.log([] + 1 + 2); //12

console.log(2 && 1 && null && 0 && undefined);
// И запинается на лжи

console.log(!!(1 && 2) === (1 && 2)); //false
// !! boolean

alert(null || 2 && 3 || 4)



const a = [1, 2, 3],
      b = [2, 4, 5]
    
console.log(a === b)

console.log("Ёжик" > "яблоко");






// home ex 15

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: false
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Закрыто' : answer = 'Открыто';

    return answer;
}

console.log(isOpen(restorantData.openNow))

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);   

    copy.waitors = [...[{name: 'Mike', age: 32}]];
    return copy;
}

console.log(transferWaitors(restorantData));