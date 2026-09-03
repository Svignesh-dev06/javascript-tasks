//tasks 1

let number = 5;
for(let i= 1;i<=10;i++){
    console.log(number + "×"+i +"="+(number * i))
}

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
let array = [10,400,30,55,64,90];

let largestno = array[0]

for( let i=0;i<array.length;i++){

    if(array[i]>largestno){
        
        largestno = array[i]
    }
}
console.log(largestno);
