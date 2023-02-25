const arr = [12, "24", "sanjay", "sanjay"];

const newArray = [];

arr.forEach(function(element) {
  if (typeof element === "string") {
    newArray.push(element);
    return; // this is equivalent to the "break" statement in a regular for loop
  }
});

console.log(newArray);
