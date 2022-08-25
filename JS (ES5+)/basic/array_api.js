'use strict';
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  // My answer
  const newFruits = fruits.toString();
  console.log(newFruits);
  // Answer
  const result = fruits.join('|');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  // My answer
  const newFruits = new Array();
  newFruits.push(fruits.toLocaleString());
  console.log(newFruits);
  // Answer
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // My answer (correct)
  array.reverse();
  console.log(array);
  // Answer
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // My answer
  //   array.splice(0, 2);
  console.log(array);
  // Answer
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  // My answer
  for (let student of students) {
    if (student.score === 90) console.log(student);
  }
  // Answer
  const result = students.find(student => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  // My answer
  const newStudent = new Array();
  for (let student of students) {
    if (student.enrolled) newStudent.push(student);
  }
  console.log(newStudent);
  // Answer
  const result = students.filter(student => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // My answer
  const newStudent = new Array();
  for (let student of students) {
    newStudent.push(student.score);
  }
  console.log(newStudent);
  // Answer
  const result = students.map(student => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  // My answer
  for (let student of students) {
    if (student.score < 50) {
      console.log('Yes');
      break;
    }
  }
  // Answer
  const result = students.some(students => students.score < 50);
  console.log(result);

  const result2 = !students.every(students => students.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  // My answer
  let sum = 0;
  for (let student of students) {
    sum += student.score;
  }
  console.log(sum / students.length);
  // Answer
  const result = students.reduce((prev, curr) => {
    return prev + curr.score;
  }, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  // My answer
  const newStudent = new Array();
  for (let student of students) {
    newStudent.push(student.score);
  }
  console.log(newStudent.toString());
  // Answer
  const result = students.map(student => student.score).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // My answer
  const newStudent = new Array();
  for (let student of students) {
    newStudent.push(student.score);
  }
  newStudent.sort();
  console.log(newStudent.toString());
  // Answer
  const result = students
    .map(student => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
