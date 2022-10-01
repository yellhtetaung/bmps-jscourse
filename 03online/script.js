// "use strict";
// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive a car");

// const name = "BMPS";
// console.log(name);
// const interface = "sound";
// const private = 500;

// function logger() {
//   console.log("Hello BMPS Javascript Developer");
// }

// logger();
// logger();
// logger();

// function fruitProcesser(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `This juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }
// const appleJuice = fruitProcesser(5, 0);
// console.log(appleJuice);
// console.log(fruitProcesser(0, 3));

// console.log("23");
// const num = Number("23");
// console.log(num);

// // Function Declaration
// const age1 = calcAge1(1990);
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// console.log(age1);

// // Function Expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1998);
// console.log(age2);

// // Arrow Function
// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1990);
// console.log(age3);

// const retirementAge = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retire in ${retirement}`;
// };
// console.log(retirementAge(1990, "Hello World"));

// // Function Calling Other Function
// function fruitCutter(fruits) {
//   return fruits * 4;
// }

// function fruitProcesser(apples, oranges) {
//   const applePieces = fruitCutter(apples);
//   const orangePieces = fruitCutter(oranges);

//   console.log(apples, oranges);

//   const juice = `This juice with ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcesser(2, 3));

// Arrow Function
// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// // Function Expression
// const yearUntilRetierment = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   // return `${firstName} retires in ${retirement} years.`;
//   if (retirement > 0) {
//     return retirement;
//   } else {
//     return -1;
//   }
// };

// console.log(yearUntilRetierment(1990, "Mg Mg"));
// console.log(yearUntilRetierment(1948, "U Ba"));

// // Array
// const friend1 = "Mg Mg";
// const firend2 = "Ko Ko";
// const firend3 = "Kyaw Kyaw";

// const friends = ["Mg Mg", "Ko Ko", "Kyaw Kyaw"];
// console.log(friends);
// const firendsBirthYear = new Array(1991, 1984, 2008);
// console.log(firendsBirthYear);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);
// friends[2] = "Aung Aung";
// console.log(friends);
// const fullName = "Yell Htet";
// const personal = [fullName, 2022 - 1998, "developer", friends, false];
// console.log(personal);
// console.log(personal.length);

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];
// // console.log(calcAge(years)); // Nan = Not a Number
// // const age1 = calcAge(years[0]);
// // const age2 = calcAge(years[1]);
// // const age3 = calcAge(years[2]);
// // const age4 = calcAge(years[3]);
// // const age5 = calcAge(years[years.length - 1]);
// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[2]),
//   calcAge(years[3]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);

// const friends = ["Mg Mg", "Ko Ko", "Kyaw Kyaw"];
// const resultPush = friends.push("Aung Aung");
// console.log(friends);
// console.log(resultPush);
// const resultUnshift = friends.unshift("Mg Ba");
// console.log(friends);
// console.log(resultUnshift);
// const resultPop = friends.pop();
// console.log(friends);
// console.log(resultPop);
// const resultShift = friends.shift();
// console.log(friends);
// console.log(resultShift);

// console.log(friends.indexOf("Ko Ko"));
// console.log(friends.indexOf("BMPS"));

// console.log(friends.includes("Ko Ko"));
// console.log(friends.includes("BMPS"));
// friends.push(23);
// console.log(friends.includes(23));

// if (friends.includes("Ko Ko")) {
//   console.log("Your friend name is Ko Ko");
// } else {
//   console.log("Not Name");
// }

// const personalArray = [
//   "Hello",
//   "World",
//   2022 - 1990,
//   "Js Developer",
//   ["Michal", "Peter", "Steven"],
// ];

// const personalObject = {
//   firstName: "Hello",
//   lastName: "World",
//   age: 2022 - 1991,
//   job: "Js Developer",
//   friends: ["Michal", "Peter", "Steven"],
// };

// personalObject.location = "Myanmar";
// personalObject["facebookPage"] = "@BMPS Education Center";

// personalObject.subject = ["JavaScript", "Web Design", "React Js"];

// console.log(
//   `BMPS open ${personalObject.subject.length} subject and intresting subject is ${personalObject.subject[0]}`
// );

// const nameKey = "Name";

// console.log(personalObject);
// console.log(personalObject.lastName);
// console.log(personalArray.length);
// console.log(personalObject["lastName"]);
// console.log(personalObject["first" + nameKey]);
// console.log(personalObject["last" + nameKey]);

// const interstIn = prompt(
//   "What do you want to know about personalObject? Choose between firstName, lastName, age, job, friends"
// );
// console.log(interstIn);
// console.log(personalObject[interstIn]);

// if (personalObject[interstIn]) {
//   console.log(personalObject[interstIn]);
// } else {
//   console.log(
//     `Wrong Request ${interstIn} is not property Choose between firstName, lastName, age, job, firends.`
//   );
// }

// const bmps = {
//   firstName: "BMPS",
//   lastName: "Education Center",
//   birthYear: 1991,
//   job: "Js Developer",
//   friends: ["Michal", "Peter", "Steven"],
//   hasDriverLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2022 - birthYear;
//   // },
//   calcAge: function () {
//     // console.log(this);
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummery: function () {
//     return `${
//       this.firstName
//     } is ${this.calcAge()} years old teacher and he has ${
//       this.hasDriverLicense ? "a" : "no"
//     } driver's license`;
//   },
// };

// console.log(bmps.calcAge());
// console.log(bmps.age);
// console.log(bmps.age);
// console.log(bmps.age);
// console.log(bmps.getSummery());

// console.log(bmps.calcAge(bmps.birthYear));
// console.log(bmps["calcAge"](bmps.birthYear));
// BMPS is 46 years old teacher and he has a driver's license

// Loop
// console.log("Liften Weights Repeatition 1");
// console.log("Liften Weights Repeatition 2");
// console.log("Liften Weights Repeatition 3");
// console.log("Liften Weights Repeatition 4");
// console.log("Liften Weights Repeatition 5");
// console.log("Liften Weights Repeatition 6");
// console.log("Liften Weights Repeatition 7");
// console.log("Liften Weights Repeatition 8");
// console.log("Liften Weights Repeatition 9");
// console.log("Liften Weights Repeatition 10");

// Loop 3 Part
// initial value
// for (let rep = 1; rep <= 10; rep++) {
//   console.log("Liften Weights Repeatition " + rep);
// }

// const bmpsArray = [
//   "BMPS",
//   "Education Center",
//   2022 - 2021,
//   "Developer",
//   ["JavaScript", "PHP", "Flutter"],
// ];

// const bmpsValueType = [];

// for (let i = 0; i < bmpsArray.length; i++) {
//   console.log(bmpsArray[i]);
//   bmpsValueType.push(typeof bmpsArray[i]);
// }
// console.log(bmpsValueType);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   const age = 2022 - years[i];
//   ages.push(age);
// }
// console.log(ages);

// for (let i = 0; i < bmpsArray.length; i++) {
//   if (typeof bmpsArray[i] === "number") break;
//   console.log(bmpsArray[i], typeof bmpsArray[i]);
// }

// const bmpsArray = [
//   "BMPS",
//   "Education Center",
//   2022 - 2021,
//   "Developer",
//   ["JavaScript", "PHP", "Flutter"],
// ];

// for (let i = bmpsArray.length - 1; i >= 0; i--) {
//   console.log(bmpsArray[i]);
// }

// for (let exercises = 1; exercises < 4; exercises++) {
//   console.log(`-------------exercises ${exercises}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`exercises repeating ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`exercises repeating ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`exercises repeating ${rep}`);
//   rep++;
// }

let dice = Math.trunc(Math.random() * 6 + 1);
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1);

  if (dice === 6) console.log('Loop is stop because dice value is 6');
}
