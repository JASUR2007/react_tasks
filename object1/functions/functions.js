// home
function sayHello(name) {
    return name;
}

console.log(sayHello('as'));


function returnNeighboringNumbers(num) {
    let s = []
    s = [num-1, num, num+1]
    return s;
}
console.log(returnNeighboringNumbers(5));




// Место для третьей задачи
function getMathResult(num, progress) {

    if (typeof(progress) !== 'number' || progress <= 0) {
        return num;
    }

    let amount = '';
    for (let i = 1; i <= progress; i++) {
        if (progress == i) {
            amount += num*i;
        } else {
            amount += num*i + '---';
        }
        // return amount;
    }
    return amount;

}
console.log(getMathResult(5, '4'));













function getMathResult(number,progress) {
    let str = '';
    if (typeof(progress) !== 'number' || progress <= 0) {
        return number;
    } 
    for (let i = 1; i <= progress; i++) {
        if(i == progress){
            str += number*i;
        }else{
            str += number*i + '---';
        }
    }
    return str;

}


console.log(getMathResult(4,'3'));










function merge(nums1, m, nums2, n) {
    let number = [];
    if (m == 0) {
        for (let i = 0; i < n; i++) {
            number[i] = nums1[i]
        }
    }
    if(n == 0) {
        for (let i = 0; i < m; i++) {
            number[i] = nums2[i];
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) { 
            number[j] = nums2[j];
        }
        number[i + n] = nums1[i]
    }
    number = number.sort();
    return number;
};

console.log(
    merge([1,2,3,0,0,0],3,[2,5,6],3)
)



// 7
function calculateVolumeAndArea(a) {
    if(typeof(a) === 'number' && a >= 0) {
        const V = a*a*a;
        const S = a*a*6;
        return  `Объем куба: ${V}, площадь всей поверхности: ${S}`;
    }else {
        return 'При вычислении произошла ошибка';
    }
}
console.log(calculateVolumeAndArea('5'))



function getCoupeNumber(coupe) {
    if (typeof(coupe) != 'number' || coupe < 0 || !Number.isInteger(coupe)) {
        return 'Проверьте правильность введенного номера места';
    } else if (coupe > 0 && coupe < 36) {
        return Math.ceil(coupe/4);
    } else if( coupe > 36){
        return 'Таких мест в вагоне не существует';
    }
}
console.log(getCoupeNumber(7.7))





function getTimeFromMinutes(time) {
    if(time <= 0 || !Number.isInteger(time)) {
        return 'Ошибка, проверьте данные';
     }
       const vrem = Math.floor(time/60);
       const sec = time % 60;
        let hoursStr = '';

        switch (vrem) {
            case 0: 
                hoursStr = 'часов';
                break;
            case 1:
                hoursStr = 'час';
                break;
            case 2:
            case 3:
            case 4:
                hoursStr = 'часа';
                break;
            default:
                hoursStr = 'часов';
        }
        return `Это ${vrem} ${hoursStr} и ${sec} минут`;


}
console.log(getTimeFromMinutes(200))

let time = 250
console.log(time/60 - Math.floor(time/60))


function findMaxNumber(a,b,c,d) {
    if (typeof(a) != 'number' || 
        typeof(b) != 'number' ||
        typeof(c) != 'number'||
        typeof(d) != 'number'
    ) {
        return 0;
    } else {
        return Math.max(a,b,c,d);
    }
}
console.log(findMaxNumber(1, 5, 6.6, '11'))




//9 chislo fibanachi


function fib(num) {
    let fibr = '';
    let beta = [];
    if (num == 0) {
        return "''";
    } else{
        for (let i = 0; i < num; i++) {
            if (i == 0 || i == 1){        
                beta[i] = i
                fibr += beta[i] + ' '; 
            } else {
                beta[i] = beta[i-1] + beta[i-2];
                fibr += beta[i] + ' ';
            }
        }
    }
    return fibr;
}
console.log(fib(7))







function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
        console.log(first,second,third)
    }

    return result;
}

console.log(fib(5))