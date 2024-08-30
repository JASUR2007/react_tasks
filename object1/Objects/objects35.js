const obj = {
    a: 5,
    b: 6,
    c: {
        a: 3
    }
}


const add = {
    deew:32,
    er:3
}
console.log({...add})

console.log(Object.assign(obj,add))
console.log(add)

const num = [3,4,5]
console.log(...num)

const arrah = ['a','b'];

const newArray = [...arrah];

console.log(newArray)
console.log(arrah)

// ... спред оператор