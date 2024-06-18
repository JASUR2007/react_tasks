// homework ex-3
let result = '';
let length = 7;

first: for (let i = 0; i < 3; i++) {
    console.log(`First level ${i}`)
    for(j = 0; j < i; j++){
        console.log(`Second level: ${j}`)
        for(k = 0; k < 3; k++){
            if(k === 2) continue first;
            console.log(`Third level: ${k}`)
        }
    }
}


for (let i = 5; i < 11; i++) {
    console.log(i);
}
for (let k = 20; k > 9; k--) {
    if (k === 13) break;
    console.log(k)
} 

for(let j = 2; j<11; j=j+2){
    console.log(j)
}



let i = 2;
while(i <= 15){
     i++
    if (i % 2 == 0){
        continue;
    }else {
        console.log(i)
    }
  
}
let arr = [];
for (let i = 0; i < 6; i++) {
        arr[i] = i+5;
    
}
console.log(arr)
