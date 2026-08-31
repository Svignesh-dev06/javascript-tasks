//tasks 1 check the number is -or+or0

let number = 0

if(number < 0){
    console.log("The number is negative")
}
else if(number==0){
    console.log("This number is zero")
}
else{
    console.log("The numbr is positive")
}


//tasks 2 Grade check

let grademark = 60;

if(grademark< 35){
    console.log("Fail")
}
else if(grademark > 35){
    console.log("The student grade is E");
}
else if(grademark>50){
    console.log("This student grade is D")
}
else if(grademark>65){
    console.log("This is student grade is C")
}
else if(grademark >80){
    console.log("This student grade is B")
}
else if(grademark >95){
    console.log("This student grade is A ")
}

//tasks 3 loop year

let year = 2024;
if(year%4==0 || year%400==0){
    console.log("This year is Loop year")
    
}
else{
    console.log("This year is not loop year")
}