//tasks 1

let word = "JavaScript is used ot interact with webpages";
let check = word.includes("JavaScript");
console.log("Contains 'JavaScript':", check);

//tasks 2

let words = "JavaScript is used to interact with webpages"
let split = words.split(" ");
console.log("Split into words:", split);

//tasks 3
function capitalize(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
let wording = "javascript is used to interact with webpages"
console.log("Capitalized:", capitalize(wording)); // JavaScript Is Used To Interact With Webpages
