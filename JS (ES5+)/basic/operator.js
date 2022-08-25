'use strict';

// 1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals:

''''
1 + 2 = ${1 + 2}`);

console.log("ellie's \tbook");

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder
console.log(1 ** 1); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
// 와 동일한 작용
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// preIncrement = counter;
// counter = counter + 1;
// 와 동일한 작용
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
// counter = counter - 1;
// preDecrement = counter;
// 와 동일한 작용
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
// preDecrement = counter;
// counter = counter - 1;
// 와 동일한 작용
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 2;
let y = 6;
x += y; // x = x + y
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // more than
console.log(10 >= 6); // more than or equal

// 6.logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;
//  || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

//  && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);
//      often used to compress long if-statement
//      nullableObject && nullableObject.something
const nullableObject = null;
if (nullableObject != null) {
  nullableObject.something;
}

function check() {
  for (let i = 0; i < 10; i++) {
    // waste time
    console.log('-.-');
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

console.log('---------------\n');

// object euqality by reference
const HS1 = { name: 'HS' };
const HS2 = { name: 'HS' };
const HS3 = HS1;
console.log(HS1 == HS2); // 다른 reference ... false
console.log(HS1 === HS2);
console.log(HS1 === HS3);

// 8. Conditional operators: if
//    if, else if, else
const name = 'HS';
if (name === 'HS') {
  console.log('Welcome HS!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
//    condition ? value1 : value2;
console.log(name === 'HS' ? 'yes' : 'no');

// 10. Switch statement
//  use for multiple if checks
//  use for enum-like value check
//  use for multiple type checks in TS
const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
//  while loop, while the condition is truthy, body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

//  do while loop, body code is executed first, then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) continue;
  console.log(`i: ${i}`);
}
//Q2
for (let j = 0; j < 11; j++) {
  if (j > 8) break;
  console.log(`j: ${j}`);
}
