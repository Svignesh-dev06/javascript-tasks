let array = [10,400,30,55,64,90];

let largestno = array[0]

for( let i=0;i<array.length;i++){

    if(array[i]>largestno){
        
        largestno = array[i]
    }
}
console.log(largestno);

//tasks 2

let  num = [1,2,3,4,5,90,60,36,54,32];

let count = 0

for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
        count++
    }
}
console.log(count);

//tasks 3

let arr = [1,2,2,3,1,4];

let unique = []

for(let i=0;i<arr.length;i++){
   
    if(arr[i]==unique){
       
    }
}
console.log(arr)

let numbers = [2,7,6,4,5,15];
let sumin = [];

let targetvalue = 9;


for(let i=0;i<numbers.length;i++){

    let sum = numbers[i] + numbers[i+1];
    if(sum===targetvalue){
        sumin = [i,i+1]
        break
    }
    
}
console.log(sumin)