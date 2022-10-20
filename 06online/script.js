'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ time = '10:00', address, starterIndex = 0, mainIndex = 0 }) {
    console.log(
      `We have received the order. The main dish ${this.mainMenu[mainIndex]} your friend ordered and ${this.starterMenu[starterIndex]} dish will be devlivered to ${address} address before ${time} o'clock`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`This Pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// const rest = new Map();
// rest.set('name', 'Mahar Myanmar');
// rest.set(1, 'Yangon,Myanmar');
// console.log(rest.set(2, 'Bangkok,  Thiland'));

// const time = 24;

// rest
//   .set('categories', ['Italian', 'Pizzeriz', 'Vegaration', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are opening now')
//   .set(false, 'We are close now');

// const bool = rest.get(time > rest.get('open') && time < rest.get('close'));
// console.log(bool);

// console.log(rest.has('categories'));
// rest.delete(1);
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// console.log(rest);

// console.log(rest.get('name'));
// console.log(rest.get(true));

// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log(orderSet); // return {'Pasta', 'Pizza', 'Risotto'}
// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// console.log(orderSet.add('Gralic Bread'));
// for (const order of orderSet) {
//   console.log(order);
// }

// const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
// const uniqueStaff = new Set(staff);
// const positionArr = [...uniqueStaff];
// console.log(uniqueStaff);
// console.log(positionArr);

// console.log(orderSet.delete('Risotto'));
// orderSet.clear();
// console.log(orderSet);

// const strSet = new Set('BMPS');
// console.log(strSet);
// console.log(strSet.size);

// const property = Object.keys(openingHours);
// let str = `We are open on ${property.length} days`;
// for (const day of Object.keys(openingHours)) {
//   str += ` ${day}, `;
// }

// console.log(str);

// const objValue = Object.values(openingHours);
// console.log(objValue);

// const objEntries = Object.entries(openingHours);

// for (const [key, { open, close }] of objEntries) {
//   console.log(`This is key ${key}. We open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// console.log(restaurant.openingHours.mon?.open);

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day} open ad ${open}`);
// }

// console.log(restaurant.order?.(0, 1));

// console.log(restaurant.openingHours);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// for (const [i, val] of menu.entries()) {
//   console.log(`${i + 1} : ${val}`);
// }

// const restaurant1 = {
//   resName: 'hello',
//   numGuest: 0,
// };

// const restaurant2 = {
//   resName: 'world',
//   owner: 'BMPS',
// };

// restaurant2.owner = restaurant2.owner && 'Anynomous';
// restaurant1.owner = restaurant1.owner && 'Anynomous';
// restaurant1.owner &&= 'Anynomous';
// restaurant2.owner &&= 'Anynomous';
// console.log(restaurant1.owner);
// console.log(restaurant2.owner);

// restaurant2.numGuest = restaurant2.numGuest || 10;
// restaurant1.numGuest = restaurant1.numGuest || 10;
// restaurant2.numGuest ??= 10;
// restaurant1.numGuest ??= 10;
// console.log(restaurant1);
// console.log(restaurant2);

// restaurant.numGuest = 0;
// const guest2 = restaurant.numGuest ?? 10;
// console.log(guest2);

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('Mushroom', 'Spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('Mushroom', 'Spinach');

// console.log('Hello' && 23 && null && 'world');

// console.log(0 && 'Hello');
// console.log(true && 'Hello');

// restaurant.numGuest = 0;
// const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guest1);
// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// console.log(3 || 'hello');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'hello' || 23 || null);

// restaurant.orderPizza('Mushroom', 'Onions', 'Olive', 'Spinach');

// const num = [20, 28, 45];

// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3);
// add(2, 3, 5);
// add(8, 7, 5, 6, 3, 1, 4, 7, 9, 5, 3);
// add(...num);

// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// const [firstFood, secondFood, ...otherFoods] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(firstFood, secondFood, otherFoods);

// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(a, b, others);

// const ingredients = [
//   prompt("Let's make pasta , Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

// const newRestaurant = { foundIn: 1990, ...restaurant, founder: 'Hello World' };
// console.log(newRestaurant);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// const mainMenuNew = [...restaurant.mainMenu];
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const schoolName = 'BMPS Education Center';
// const nameArray = [...schoolName];
// console.log(nameArray);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Hello World',
//   starterIndex: undefined,
//   mainIndex: 0,
// });

// const arr = [3, 4, 5];
// const newArr = [1, 2, arr[0], arr[1], arr[2]];
// const newArr = [1, 2, ...arr];
// console.log(...newArr);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu);
// console.log(starter);

// let x = 111;
// let y = 222;
// const num = { x: 10, y: 20, z: 30 };
// ({ x, y } = num);
// console.log(x, y);

// const { name: resName, categories: tags, openingHours: hours } = restaurant;
// const {
//   sat: { open: openingTime, close: closingTime },
// } = hours;
// console.log(openingTime, closingTime);

// const { name: resName, categories: tags, openingHours: hours } = restaurant;
// console.log(resName, tags, hours);

// const nestedArr = [1, 2, [3, 4]];
// const [i, , [j, k]] = nestedArr;
// console.log(i, j, k);

// const [l = 1, m = 1, n = 1] = [2, 3];
// console.log(l, m, n);

// const [starterFood, mainFood] = restaurant.order(3, 0);
// console.log(starterFood, mainFood);

// let [first, , second] = restaurant.categories;
// console.log(first, second);

// const temp = first;
// first = second;
// second = temp;

// [second, first] = [first, second];
// console.log(first, second);

// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const arr = [1, 2, 3];
// const [a, b, c] = arr;
// console.log(a, b, c);

const question = new Map([
  ['question', 'What is the best programming in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

const answer = Number(prompt('Please enter you answer'));
// console.log(answer);

console.log(question.get(question.get('correct') === answer));

// console.log(question);

// console.log(Object.entries(openingHours));
// const hourMap = new Map(Object.entries(openingHours));
// console.log(hourMap);
