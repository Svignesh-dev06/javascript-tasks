//tasks 1
for(let i=1;i<=10;i++){
    console.log(i)
}
 
//tasks 4

let array = [20,43,23,45,65,12,33];
console.log("   ")
for(let arr of array){
    console.log(arr)
}

//tasks 5

let person = {
    name: "Vignesh",
    age: 20,
    city: "Tirunelveli"
};

for(let key in person){
    console.log(person[key])
};

//tasks 6
let arr =[20,30,40,54,61,23,43];

arr.forEach(element =>{

    console.log( element)
});

let numbers =[1,2,3,4,6,7,9,10,11,12,13,14,16,17,18,19];

function numberCheck() {
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] + 1 !== numbers[i + 1]) {
            console.log(numbers[i] + 1);
        }
    }
}

numberCheck();