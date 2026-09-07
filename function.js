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


