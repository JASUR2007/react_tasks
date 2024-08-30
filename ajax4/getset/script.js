'use strict';

const persone = {
    name: "Alex",
    age: 25,
    
    get Userpage() {
        return this.age;
    },
    set Userpage(num) {
        this.age = num;
    }
}

console.log(persone.Userpage = 30);
console.log(persone.Userpage);