 
 //tasks 1
 let value = "lool";

 function check(){
    let store = value.split(" ").reverse("").join("");
    if(value == store){
        console.log("It's a palindrome");
    }
    else{
        console.log("It's not a palindrome.");
    }
 }
 check();

 //tasks 2
 
let count = 0;
let word = "javascript is used to interacte to the webpage"
 for(let i=0;i<word.length;i++){
     if("aeiou".includes(word[i])){
        count++
     }
 }

 console.log(count);

//tasks 3

let animal = "I love cat.cat are so cute";
let modifystring = animal.replaceAll("cat","Dog");
console.log(modifystring);

//tasks 4

let uppercase = "vignesh"
console.log(uppercase.toUpperCase());

//tasks 5
let whitespace = "        Javascript is used to interact with webpages    "
console.log(whitespace.trim(""));

//tasks 6
let sentence = "javascript is used to interact in webpage"
let splitstring = sentence.split(" ");
let longestword =""
for( let i=0;i<splitstring.length;i++){
    if(splitstring[i].length>longestword.length){
       longestword=splitstring[i]
       console.log(splitstring[i].length)
       console.log(longestword)
    }
}




