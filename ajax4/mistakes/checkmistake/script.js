'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'rrr',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
        if (!blockObj.id) throw new SyntaxError(`In this ${i + 1} no id`);

        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    })
} catch (error) {
    if (error.name === 'SyntaxError') {
        console.log(error.message);
    } else throw error;
        // console.error(error.name);
        // console.log(error.stack);
    
}
// const err = new SyntaxError('checking');
// console.log(err.name, err.message, err.stack)