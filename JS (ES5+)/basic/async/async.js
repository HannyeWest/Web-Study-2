'use strict';

// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  //   return new Promise((resolve, reject) => {
  //     // do network request in 10 secs....
  //     resolve('HS');
  //   });
  return 'HS';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}
// Same
// function getBanana() {
//   return delay(3000)
//   .then(() => '🍌');
// }

// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// } // callback 지옥...

async function pickFruits() {
  // 동시 다발적 수행 가능한 경우(병렬 수행 O) 이렇게 사용 X
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
