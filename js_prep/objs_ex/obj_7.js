function copyObj(someObj, arrKeys) {
  let result = {}
  if (arrKeys) {
    arrKeys.forEach(function(key) {
    result[key] = someObj[key];
    });

    return result;
  } else {
    return Object.assign(result, someObj);
  }
}

let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined
