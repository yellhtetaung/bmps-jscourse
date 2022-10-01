// const massMarks = 78;
// const heightMarks = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMarks = 95;
const heightMarks = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMarks / (heightMarks * heightMarks);
const johnBMI = massJohn / (heightJohn * heightJohn);
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
