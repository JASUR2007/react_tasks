'use strict';

console.log('запрос данных....')
const req = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Prepare...')
        const product = {
            name: 'TV',
            price:2000
        };

        resolve(product);
    }, 2000);    
})
// req.then((product) => {
//     const req2 = new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     })

//     req2.then(data => console.log(data));
// })
req.then((product) => {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    })
    // .then(data => console.log(data));
    .then(data => {
        data.modify = true
        return data;
    })
    .then(data => console.log(data));
})
//reject() catch(() => { console.error('') })
// finally 

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    })
}

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('last')
});

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('fisrt')
});