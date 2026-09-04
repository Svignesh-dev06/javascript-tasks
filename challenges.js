let array = [1,3,68,9,12,4,23,12];

let total = 0

array.forEach(number => {

    total = total+number
});

console.log("Sum of array:", total);


function primenumber(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
    console.log("Is prime:");
}
primeNumber(17); 
 


function reverseNumber(num) {
    return parseInt(String(num).split('').reverse().join(''));
}
console.log("Reverse of 12345:", reverseNumber(12345)); // 54321






