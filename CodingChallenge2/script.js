const massMarks = 78;
const heightMarks = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const markBMI = massMarks / (heightMarks * heightMarks);
const johnBMI = massJohn / (heightJohn * heightJohn);
console.log(markBMI, johnBMI);

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }

if (markBMI > johnBMI) {
  console.log(
    `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI}) !`
  );
} else {
  console.log(
    `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI}) !`
  );
}
