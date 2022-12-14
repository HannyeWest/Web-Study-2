'use strict';

// Tenary Operator
{
  // Bad Code
  {
    function getResult(score) {
      let result;
      if (score > 5) {
        result = 'π';
      } else if (score <= 5) {
        result = 'π';
      }
      return result;
    }
    console.log(getResult(3));
  }
  // Good Code
  {
    function getResult(score) {
      return score > 5 ? 'π' : 'π';
    }
    console.log(getResult(6));
  }
}

// Nullish coalescing operator
{
  // Bad Code
  {
    function printMessage(text) {
      let message = text;
      if (text == null || text == undefined) {
        message = 'Nothing to display';
      }
      console.log(message);
    }
    printMessage('Hello');
    printMessage(undefined);
    printMessage(null);
  }
  // Good Code
  {
    function printMessage(text) {
      let message = text ?? 'Nothing to display';
      console.log(message);
    }

    function printMessage2(text = 'Nothing to display') {
      console.log(text);
    } // Default parameters --> undefinedμΈ κ²½μ°μλ§ μλλλ€.

    printMessage('Hello');
    printMessage(undefined);
    printMessage(null);
  }

  // || vs ??
  //    leftExpressing || rightExpressing : left -> falsy ... do right
  //    leftExpressing ?? rightExpressing : left -> null, undefined ... do right
  // Logical OR operator ||
  {
    function printMessage(text) {
      const message = text || 'Nothing to display';
      console.log(message);
    }

    printMessage('Hello');
    printMessage(undefined);
    printMessage(null);
    printMessage(0);
    printMessage('');
  }

  // κ° μ§μ  ν λΉ λμ  μ½λ μ€νν΄ μ€νλ κ° ν λΉμλ μ΄μ©
  {
    const result = getInitialState() ?? fetchFromServer();
    console.log(result);

    function getInitialState() {
      return null;
    }

    function fetchFromServer() {
      return 'Hiya from π»';
    }
  }
}

// Object Destructuring
{
  const person = {
    name: 'Julia',
    age: 20,
    phone: '01077777777',
  };

  // Bad Code
  {
    function displayPerson(person) {
      displayAvator(person.name);
      displayName(person.name);
      displayProfile(person.name, person.age);
    }
  }

  // Bad Code 2
  {
    function displayPerson(person) {
      const name = person.name;
      const age = person.age;
      displayAvator(name);
      displayName(name);
      displayProfile(name, age);
    }
  }

  // Good Code
  {
    function displayPerson(person) {
      const { name, age } = person;
      displayAvator(name);
      displayName(name);
      displayProfile(name, age);
    }
  }
}

// Spread Syntax - Object
{
  // Bad Code
  {
    const item = { type: 'π', size: 'M' };
    const detail = { price: 20, made: 'Korea', gender: 'M' };

    item['price'] = detail.price;
    item['made'] = detail.made;
    item['gender'] = detail.gender;

    const newObject = new Object();
    newObject['type'] = item.type;
    newObject['size'] = item.size;
    newObject['price'] = detail.price;
    newObject['made'] = detail.made;
    newObject['gender'] = detail.gender;

    const newObject2 = {
      tpye: item.type,
      size: item.size,
      price: detail.price,
      made: detail.made,
      gender: detail.gender,
    };
  }

  // Good Code
  {
    const item = { type: 'π', size: 'M' };
    const detail = { price: 20, made: 'Korea', gender: 'M' };

    const shirt0 = Object.assign(item, detail);

    // Better Code
    const shirt = { ...item, ...detail, price: 40 };
  }
}

// Spread Syntax - Array
{
  let fruits = ['π', 'π', 'π'];

  // fruits.push('π');
  fruits = [...fruits, 'π'];
  console.log(fruits);

  // fruits.unshift('π');
  fruits = ['π', ...fruits];
  console.log(fruits);

  const fruits2 = ['π', 'π', 'π'];

  let combined = fruits.concat(fruits2);
  combined = [...fruits, 'π', ...fruits2];
  console.log(combined);
}

// Optional Chaining
{
  const bob = {
    name: 'Julia',
    age: 20,
  };
  const anna = {
    name: 'Julia',
    age: 20,
    job: {
      title: 'Software Engineer',
    },
  };

  // Bad Code
  {
    function displayJobTitle(person) {
      if (person.job && person.job.title) {
        console.log(person.job.title);
      }
    }
  }

  // Good Code
  {
    function displayJobTitle(person) {
      if (person.job?.title) {
        console.log(person.job.title);
      }
    }

    function displayJobTitle2(person) {
      const title = person.job?.title ?? 'No Job Yet';
      console.log(title);
    }
  }
}

// Template Literals (Template String)
{
  const person = {
    name: 'Julia',
    score: 4,
  };

  // Bad Code
  {
    console.log(
      'Hello ' + person.name + ', Your current score is: ' + person.score
    );
  }

  // Good Code
  {
    console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

    function greetings(person) {
      const { name, score } = person;
      console.log(`Hello ${name}, Your current score is: ${score}`);
    }
  }
}

// Looping
{
  const items = [1, 2, 3, 4, 5, 6];

  // Bad Code
  {
    function getAllEvens(items) {
      const result = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i] % 2 === 0) {
          result.push(items[i]);
        }
      }
      return result;
    }

    function multiplyByFour(items) {
      const result = [];
      for (let i = 0; i < items.length; i++) {
        result.push(items[i] * 4);
      }
      return result;
    }

    function sumArray(items) {
      let sum = 0;
      for (let i = 0; i < items.length; i++) {
        sum += items[i];
      }
      return sum;
    }

    const evens = getAllEvens(items);
    const multiple = multiplyByFour(evens);
    const sum = sumArray(multiple);
    console.log(sum);
  }

  // Good Code
  {
    const evens = items.filter(num => num % 2 === 0);
    const multiple = evens.map(num => num * 4);
    const sum = multiple.reduce((a, b) => a + b, 0);
    console.log(sum);
  }

  // Good Code
  {
    const result = items
      .filter(num => num % 2 === 0)
      .map(num => num * 4)
      .reduce((a, b) => a + b, 0);
    console.log(result);
  }
}

// Promise -> Async/await
{
  // Bad Code
  {
    function displyUser() {
      fetchUser() //
        .then(user => {
          fetchProfile(user) //
            .then(profile => {
              updateUI(user, profile);
            });
        });
    }
  }

  // Good Code
  {
    async function display() {
      const user = await fetchUser();
      const profile = await fetchProfile(user);
      updateUI(user, profile);
    }
  }
}

// Quiz
{
  // Remove Duplicates!
  const array = ['πΆ', 'π±', 'π', 'πΆ', 'π¦?', 'π±'];
  console.log(array);

  console.log([...new Set(array)]); // Set μ€λ³΅ νμ© X
}
