export let one = 1;

let two = 2;

export {two};

export  function sayHi() {
    console.log('hello');
}
export default function sayHi1() {
    console.log('hello');
}




var mySqrt = function(x) {
    let right = x,
        result = 0;
    
    for (let i = 0; i <= right;) {
        let mid = Math.floor((i + right) / 2);
        if (mid * mid == x) {
            console.log(mid)
            return mid;
        } else if (mid * mid < x) {
            i = mid + 1
            console.log(mid + 'le')
            result = mid;
        } else {
            right = mid - 1
            console.log(right + 'ro')
        }
    }
    return result;
};

console.log(mySqrt(10))
