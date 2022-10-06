'use strict';

// function calcAge(birthYear) {
//   const age = 2022 - birthYear;
//   function printAge() {
//     let output = `${firstName} age is ${age} and born in ${birthYear}`;

//     if (birthYear > 1981 && birthYear <= 1996) {
//       // const age = 46;
//       const str = `Oh, and you are a lucky person, ${firstName}`;
//       console.log(str);
//       var luckyPerson = true;
//       function add(a, b) {
//         return a + b;
//       }
//       output = 'Hello World Rename Result';
//       // console.log(age);
//       console.log(output);
//     }
//     console.log(luckyPerson);

//     // console.log(output);
//   }

//   printAge();
//   return age;
// }

// const firstName = 'Hello World';
// calcAge(1990);

// console.log(fullName); // undefined
// console.log(job); // referenceError
// console.log(birthYear); // referenceError

// var fullName = 'IT Yan Tote';
// let job = 'Developer';
// const birthYear = 1990;

// var environment
// {
//   fullName: undefined;
//   job: TDZ;
//   birthYear: TDZ;
//   addExp: undefined;
// }

// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExp = function (a, b) {
//   return a + b;
// };

// var addArr = (a, b) => a + b;

// var allProducts = 10;
// if (!allProducts) deleteShoppingCart();
// function deleteShoppingCart() {
//   console.log('Delete All Products');
// }

// var x = 1;
// let y = 2;
// const z = 3;
// console.log(window);

// console.log(this);

// function calcAge(birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// }
// calcAge(1998);

// const calcAge = birthYear => {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAge(1998);

// const mgmg = {
//   year: 1990,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.year);
//   },
// };
// mgmg.calcAge();

// const koko = {
//   year: 1987,
// };
// koko.calcAge = mgmg.calcAge;
// console.log(koko);
// koko.calcAge();

// const f = mgmg.calcAge;
// console.log(f);

// var firstName = 'BMPS Education Center';

// const person1 = {
//   firstName: 'William',
//   years: 1990,
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.years);

//     const self = this;

//     const luckyPerson = () => {
//       console.log(this.years >= 1980 && this.years <= 1996);
//     };
//     luckyPerson();
//   },
//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// person1.greet();
// person1.calcAge();

// const add = function (a, b) {
//   console.log(arguments);
//   console.log(a + b);
// };

// add(2, 3, 4, 5);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(oldAge);
// console.log(age);

// const me = {
//   name: 'Hello World',
//   age: 30,
// };

// const myFriend = me;
// myFriend.age = 35;
// console.log(me);
// console.log(myFriend);

// let firstName = 'Marry';
// let lastName = 'Brown';
// let oldLastName = lastName;
// lastName = 'David';
// console.log(oldLastName);
// console.log(lastName);

const jsMgMg = {
  firstName: 'JavaScript',
  lastName: 'Mg Mg',
  language: ['HTML', 'CSS', 'JS', 'Backend Node'],
};

// const pythonMgMg = jsMgMg;
// pythonMgMg.firstName = 'Python';
// console.log(jsMgMg);
// console.log(pythonMgMg);

// jsMgMg = {};

const pythonMgMg = Object.assign({}, jsMgMg);
pythonMgMg.firstName = 'Python';
pythonMgMg.language.push('Python');
console.log(pythonMgMg);
console.log(jsMgMg);
