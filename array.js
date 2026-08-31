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
console.log(result)
