'use strict';
// Object-oriented programming
//    class: template
//    object: instance of a class
// JavaScript classes
//    - introduced in ES6
//    - syntactical sugar over prototype-based inheritance

// 1. Class declaration
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const HS = new Person('Hs', 24);
console.log(HS.name);
console.log(HS.age);
HS.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
//  Too soon!
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
//  Too soon!
class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
//      a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // overriding -> 확장한 공통 class에서 필요한 method만 가져와 다시 작성
  draw() {
    super.draw(); // 부모의 method 불러와 실행
    console.log('▲');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle / color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

// Bonus
class Counter {
  constructor(runEveryFiveTimes) {
    // 사용자가 원하는 방향으로 조정 위해 callback 함수로 동작을 정의한다.
    // increase에 callback 함수 사용하면 호출시마다 함수 넣어야한다.
    // 따라서 따로 속성으로 생성하여 불러서 사용한다.
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      // 만약 전달하지 않을 때 처리를 해야한다.
      this.callback && this.callback(this.counter);
    }
  }
}

const coolCounter = new Counter(printSomething); // class 생성시에 넣어주면 된다.

function printSomething(num) {
  console.log(`Yo! ${num}`);
}

function alertSomething(num) {
  alert(`Wow! ${num}`);
}

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
