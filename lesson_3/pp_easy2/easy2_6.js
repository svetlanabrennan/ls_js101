// let flintstones = ["Fred", "Wilma"]; // creating an unnested array initially
// flintstones = flintstones.concat("Barney", "Betty", "Bambam", "Pebbles");
// console.log(flintstones);

flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

flintstones = [].concat(...flintstones); // unnesting an array #1 
console.log(flintstones);
 
flintstones = flintstones.reduce((accum, element) => { // unnesting an array #2
  return accum.concat(element);
}, []);

let newFlintstones = []; // unnesting an array #3
flintstones.forEach(element => {
  newFlintstones = newFlintstones.concat(element);
});