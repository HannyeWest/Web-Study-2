'use strict';

/**
 * Shorthand property names
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer
 */
{
  const HS1 = {
    name: 'HS',
    age: '24',
  };

  const name = 'HS';
  const age = '24';

  // BAD
  const HS2 = {
    name: name,
    age: age,
  };

  // GOOD
  const HS3 = {
    name,
    age,
  };

  console.log(HS1, HS2, HS3);
}

/**
 * Destructuring Assignment
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 */
{
  // Object
  const student = {
    name: 'Anna',
    level: 1,
  };

  // BAD
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }

  // GOOD
  {
    const { name, level } = student;
    console.log(name, level);

    const { name: studentName, level: studentLevel } = student;
    console.log(studentName, studentLevel);
  }

  // Array
  const animals = ['🐶', '🐱'];

  // BAD
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // GOOD
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}

/**
 * Spread Syntax
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread-syntax
 */
{
  const obj1 = { key: 'key1' };
  const obj2 = { key: 'key2' };
  const array = [obj1, obj2];

  // array copy
  const arrayCopy = [...array];
  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: 'key3' }];
  obj1.key = 'newKey';
  console.log(array, arrayCopy, arrayCopy2);

  //object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruits1 = ['🥝', '🍉'];
  const fruits2 = ['🍒', '🍎'];
  const fruits = [...fruits1, ...fruits2];
  console.log(fruits);

  // object merge
  const dog1 = { dog: '🐶' };
  const dog2 = { dog: '🐕' };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
}

/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
  // BAD
  {
    function printMessage(message) {
      if (message == null) {
        message = 'defalut message';
      }
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }

  // GOOD
  {
    function printMessage(message = 'default message') {
      console.log(message);
    }
    printMessage('hello');
    printMessage();
  }
}

/**
 * Ternary Operator
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 */
{
  const isCat = true;
  // BAD
  {
    let component;
    if (isCat) {
      component = '🐱';
    } else {
      component = '🐶';
    }
    console.log(component);
  }

  // GOOD
  {
    const component = isCat ? '🐱' : '🐶';
    console.log(component);
    console.log(isCat ? '🐱' : '🐶');
  }
}

/**
 * Template Literals
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals
 */
{
  const weather = '🌤';
  const temparature = '16℃';

  // BAD
  {
    console.log(
      'Today weather is ' + weather + ' and temparature is ' + temparature
    );
  }

  // GOOD
  {
    console.log(
      `Today weather is ${weather} and temparature is ${temparature}`
    );
  }
}
