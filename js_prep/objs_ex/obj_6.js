let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// forEach iterates on the objects own properties but for/in iterates over
// all the properties - even the prototype ones. 