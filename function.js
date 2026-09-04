function area(l,b){
     console.log("Area is: "+l*b)
}
area(20,30);

function stringreverse(){
    let name = "JavaScript"
    let reversed =  name.split("").reverse().join("")
    console.log(reversed)

}
stringreverse()

let submitbtn = document.getElementById("submit-btn")

submitbtn.addEventListener("click" , ()=>{
    console.log("Submited Successfully")
})

// Debounce function
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

const debouncedFunction = debounce(() => {
    console.log("Function executed after 1 second");
}, 1000);

// Simulating rapid calls - only last one executes
// debouncedFunction();
// debouncedFunction();
// debouncedFunction(); // Only this will execute after 1 second
