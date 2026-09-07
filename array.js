let num = [1,2,3,4];
num.pop()
console.log(num);//remove the last element in the array


let num1 = [2,3,4];
num1.unshift(1)
console.log(num1);//add the first element in the array

let  num2 = [5,6,7,8];
num2.shift()
console.log(num2);//remove the frist content in the array

let num3 = [10,20];
num3.push(30,40)
console.log(num3)//add the last content in the array

let num4 =[11,22,33,44,55];
num4.splice(1,3)
console.log(num4);

let num5 = [100,200,300,400,500];
console.log(num5.slice(1,3));

let arr = [1,[2,[3,4]]];
console.log(arr.flat());//remove the array of nested array flat()

let num6 =[11,15,18,21,24];
let result = num6.find((nums)=>{
    if(nums%2==0){
        return true
    }
});
console.log(result);

// Find pairs in array that sum up to a target number
function findPairs(arr, target) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}
console.log("Pairs summing to 9:", findPairs([1, 3, 5, 6, 8, 2], 9)); 


function secondLargest(arr) {
    if (arr.length < 2) return null;
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);
    return unique[1];
}
console.log("Second largest:", secondLargest([10, 20, 30, 15, 25])); 


function subarray(arr, target) {
    let subarrays = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === target) {
                subarrays.push(arr.slice(i, j + 1));
            }
        }
    }
    return subarrays;
}
console.log(subarray([1, 5, 3, 4, 8, 2], 12)); 
