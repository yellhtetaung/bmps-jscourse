const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphin = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphin, scoreKoalas);

const scoreDolphin = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphin, scoreKoalas);

const checkWinner = (avgDolphin, avgKoalas) => {
  if (avgDolphin >= avgKoalas * 2) {
    console.log(`Dolphin Win ${avgDolphin} vs ${avgKoalas}`);
  } else if (avgKoalas >= avgDolphin * 2) {
    console.log(`Koalas Win ${avgKoalas} vs ${avgKoalas}`);
  } else {
    console.log("No Teams Win...");
  }
};

checkWinner(scoreDolphin, scoreKoalas);
