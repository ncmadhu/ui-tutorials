// const arrMap = [1, 2, 3, 4, 5];
// var result = arrMap.map(function (val, idx) {
//   return val + idx;
// });
// console.log(result);

// const redux = [1, 2, 3, 4, 5];
// result = redux.reduce(function (p, c) {
//   return p + c;
// }, 10);
// console.log(result);

// Back tick.any java script expression

// console.log(`Test String inerpolation ${result}`);

// Rest operator accumulates
function some(arg1, arg2, ...restOfArgs) {
  console.log(restOfArgs);
}
some('Hello', 'World', () => {}, 'rest');

const someArr = [1, 2, 3, 4, 5];

const [first, second, ...rest] = someArr;
console.log(first, second, rest);

// Spread unfolds / merges
const person = {
  name: 'madhu',
  city: 'Santa Clara'
};

const state = {
  state: 'California'
};

const details = { ...person, ...state };
console.log(details);
