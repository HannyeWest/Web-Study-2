'use strict';

// JavaScript is synchronous.
// Execute the code block in order after hoisting
//      hoisting: var, function declaration (제일 위로 자동적으로 올라가는 것)
//      동기 -> 정해진 순서에 맞게 코드가 실행되는 것
//      비동기 -> 비동기적으로 언제 코드가 실행될지 예측 X
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// Synchronous Callback
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous Callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'HS' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'HS') {
        onSuccess({ name: 'HS', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  user => {
    userStorage.getRoles(
      user,
      userwithRole => {
        alert(
          `Hello ${userwithRole.name}, you have a ${userwithRole.role} role`
        );
      },
      error => {
        console.log(error);
      }
    );
  },
  error => {
    console.log(error);
  }
);
