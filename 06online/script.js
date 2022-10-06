'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${2 + 4}`]: {
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
