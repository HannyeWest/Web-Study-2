'use strict';

console.log('Hello World');

// 2.Variable rw(read/write)
//  let (added in ES6) --> type이 자동적
//      var (don't ever use this)
//      var hoisting (move declaration from bottom to top / has no block scope)

let glob_name = 'Duncan';
{
  let name = 'HS';
  console.log(name);
  name = 'hello';
  console.log(name);
}

console.log(name);
console.log(glob_name);

// 3. Constant, r(read only
//  use const whenever possible.
//  only use let if variable needs to change.
const daysInweek = 7;
const maxNumber = 5;

// Note!
//  Immutable data types : primitive types, frozen objects ( i.e. object.freeze() )
//  Mutable data types   : all objects by default are mutable in JS
//  favor immutable data type always for a few resons:
//       - security
//       - thread safety
//       - reduce human mistakes

// 4. Variable Type
//  Primitive : single item (number, string, boolen, null, undefiedn, symbol)
//  Objective : Box-container
//  Function  : first-class function
//      ex) let a : number = 5;

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values : infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
// ``이 편리하다
console.log('value: ' + helloBob + ', type: ' + typeof helloBob);

// boolean
//      false : 0, null, undefined, NaN, ''
//      true  : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null / undefined
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
let x; // or let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects;
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const HS = { name: 'HS', age: 24 };
HS.age = 25; // object는 const지만 안의 변수는 변경 가능

// 5. Dynamic typing : dynamically typed language
