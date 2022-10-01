const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecost = arr => {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} ${i < 1 ? 'day' : 'days'}... `;
  }
  console.log(str);
};

printForecost(data1);
printForecost(data2);
