const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Question 1
const [player1, player2] = game.players;
console.log(player1, player2);

// Question 2
const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

// Question 3
const allPlayer = [...player1, ...player2];
console.log(allPlayer);

// Question 4
const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

// Question 5
const {
  odds: { team1, x, team2 },
} = game;

console.log(team1, x, team2);

// Question 6
const printGoals = function (...goalPlayers) {
  console.log(`${goalPlayers.length} goals ware scores`);
};
printGoals(...game.scored);

// Question 7
team1 > team2 && console.log(`Team 2 is more likely to win`);
team1 < team2 && console.log(`Team 1 is more likely to win`);
