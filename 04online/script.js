// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// console.log('Hello World');
// console.log('Hi Live server');

// const birthYear = 1990;
// const calcAge = birthYear => 2022 - birthYear;
// console.log(calcAge(birthYear));

const measureKelvin = () => {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: prompt('Degree Celsius'),
  };

  const kelvin = Number(measurement.value) + 273;
  return kelvin;
};

console.log(measureKelvin());
