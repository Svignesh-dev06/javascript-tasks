let store = {
    name: "Vignesh",
    age: "20"
}
console.log(store.name+" "+store.age)

// Merge two objects
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let obj1 = { name: "Vignesh", age: 20 };
let obj2 = { city: "Tirunelveli", role: "Developer" };
let merged = mergeObjects(obj1, obj2);
console.log("Merged object:", merged);