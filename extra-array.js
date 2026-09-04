//tasks 1

let array = [1,3,68,9,12,4,23,12];
let total = 0
array.forEach(number => {

    total = total+number
});
console.log("Sum of elements:", total);

//tasks 2
function findMissing(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== 1) {
            return arr[i] + 1;
        }
    }
    return null;
}
console.log("Missing number in [1,2,4,5,6]:", findMissing([1, 2, 4, 5, 6])); // 3

//tasks 3
let arr = [3,5,9,7,4,6,8];
let result = arr.find((num) => num%2==0);
console.log("First even number:", result);

