'use strict';
//Objects
//  one of the JavaScript's data type
//  a collection of related data and/or functionality
//  Nearly all objects in JavaScript are instance of Object
//  object = {key : value};

// 이렇게 하면 인자가 많이지면 매우 복잡해진다.
// Object 사용
// const name = 'HS';
// const age = 24;
// print(name, age);
// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const HS = { name: 'HS', age: 4 };
print(HS);

// with JavaScript magic (dynamically typed language)
// can add properties later
HS.hasJob = true; // JS -> dynamic 따라서 추가가 가능, but 피해야함
console.log(HS.hasJob);
// can delete properties later
delete HS.hasJob;
console.log(HS.hasJob);

// 2. Computed properties
//  key should be always string
console.log(HS.name);
console.log(HS['name']);

HS['hasJob'] = true;
console.log(HS.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(HS, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('HS', 24);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {}; 이 생략
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (ket in obj)
console.log('name' in HS);
console.log('age' in HS);
console.log('random' in HS);
console.log(HS.random);

// 6. for..in VS for..of
//    for (key in obj)
console.clear();
for (let key in HS) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

for (let value of array) {
  console.log(value);
}

// 7. Fun cloning
//  Object.assing(dest, [obj1, obj2, obj3...])
const user = { name: 'HS', age: '24' };
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// const user4 = {};
// Object.assign(user4, user);
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
