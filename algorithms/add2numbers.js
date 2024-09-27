// You are given two non - empty linked lists representing two non - negative integers.The digits
//  are stored in reverse order, and each of their nodes contains a single digit.Add the two numbers 
//  and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

    // var addTwoNumbers = function(l1, l2) {  
    //     const numbers1 = l1.length < l2.length ? l1 : l2
    //     const numbers2 = l1.length < l2.length ? l2 : l1 
    //     let numbers = []
    //     let last = 0;
    //     for (i = 0; numbers1.length > i; i++) {
    //         if (numbers1[i] + numbers2[i] > 9) {
    //             numbers[i] = (numbers1[i] + numbers2[i] + last) % 10
    //             last = 1
    //         } else {
    //             if (numbers1[i - 1] + numbers2[i - 1] > 9) {
    //                 last = 1
    //                 numbers[i] = +numbers1[i] + +numbers2[i] + last
    //                 last = 0           
    //             } else {
    //                 last = 0
    //                 numbers[i] = numbers1[i] + numbers2[i] + last
    //             }
    //         }
    //     }
    //     for (i = 0; numbers2.length - numbers1.length >= i; i++) {
    //         if (numbers2[numbers2.length - numbers1.length - i] + last > 9 && numbers2.length != numbers1.length + i)  {
    //             numbers[numbers.length] = (numbers2[numbers2.length - numbers1.length - i] + last) % 10
    //         } else if(numbers2.length === numbers1.length + i) {
    //              numbers[numbers.length] = Math.floor(numbers2[numbers2.length - numbers1.length - i] + last) / 10  
    //         }else {
    //             numbers[numbers.length] = Math.floor(numbers2[numbers2.length - numbers1.length -i] + last) / 10
    //         }
    //     }
    //     return numbers;

    // };
    // console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))

var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let x = (l1 !== null) ? l1.val : 0;
        let y = (l2 !== null) ? l2.val : 0;

        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);

        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }

    return dummyHead.next;
};













function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

let l1 = new ListNode(2, new ListNode(4, new ListNode(3))); 
 l2 = new ListNode(5, new ListNode(6, new ListNode(4))); 

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);  
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null) {
        let val1 = (l1 !== null) ? l1.val : 0; 
        let val2 = (l2 !== null) ? l2.val : 0; 
        let sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10); 
        current = current.next;

        if (l1 !== null) l1 = l1.next; 
        if (l2 !== null) l2 = l2.next; 
    }

    if (carry > 0) {
        current.next = new ListNode(carry); 
    }

    return dummy.next;  
}

function printList(list) {
    let result = [];
    while (list !== null) {
        result.push(list.val);
        list = list.next;
    }
    return result.join(' -> ');
}

let result = addTwoNumbers(l1, l2);
console.log(printList(result));
