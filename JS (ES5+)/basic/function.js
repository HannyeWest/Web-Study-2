'use strict';

// Function
//  - fundamental building blcok in the program
//  - subprogram can be used multiple times
//  - performs a task or calculates a value

// 1. Function declaration
//  function name(param1, param2) { body ... return; }
//  one function === one thing
//  naming: doSomething, command, verb
//  e.g. createCardAndPoint -> createCard, createPoint 세분화 가능한지 check
//  fuction is object in JS
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
//  primitive parameters: passed by value
//  object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const HS = { name: 'HS' };
changeName(HS);
console.log(HS);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach(arg => console.log(arg));
}
printAll('dream', 'coding', 'practice');
// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello!';
  }
  // console.log(childMessage); // error --> local scope
}
printMessage();
// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`result: ${result}`);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
//  bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic..
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    // 조건 맞지 않으면 빠르게 return
    return;
  }
  // long upgrade logic...
}

// First-class function
//  function are treated like any other variable
//  can be assigned as a value to variable
//  can be assigned as an argument to other functions.
//  can be returned by another function

// 1. Function expression
//    a function declaration can be called earlier than it is defiened. (hoisted)
//    a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

//anonymous function
const printYes = function () {
  console.log('yes!');
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
  //   print();
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous

const simplePrint = () => console.log('simplePrint!');
simplePrint();
// const simplePrint = function () {
//     console.log('simplePrint!');
// }; 와 같음
const add = (a, b) => a + b;

// IIFE: Immediately Invoked Function Expression

(function hello() {
  console.log('IIFE');
})();

// function hello() {
//     console.log('IIFE');
// }
// hello(); 와 같음

//Quiz
function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('Wrong command'); // error throw 하면 break 필요 X
  }
}
console.log(calculate('add', 3, 4));

// Don't give up
// 함수 선언
function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
doSomething(add); // ()없이 함수 이름만 사용할 경우 함수 자체를 의미한다. () 사용한다면 함수를 호출한 것을 의미한다.

const addFun = add;
console.log(add);
console.log(addFun(1, 2));
