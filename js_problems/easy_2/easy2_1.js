function greetings(array, object) { // solution 1
  console.log(`Hello, ${array.join(" ")}! Nice to have a 
  ${Object.values(object).join(" ")} around.`);
}

function greetings(array, object) { // solution 2
  console.log(`Hello, ${array.join(" ")}! Nice to have a ${object.title} 
  ${object.occupation} around.`);
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })