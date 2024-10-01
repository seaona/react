// REDUCER
// (accumulatedValue, nextItem) => nextAccumulatedValue
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer, 5));

// expected output: 15

/*
5 + 1 = 6
6 + 2 = 8
8 + 3 = 11
11 + 4 = 15
*/

const letters = ['c', 'h', 'i', 'c', 'k', 'e', 'n'];
const wordReducer = function (accumulatedResult, arrayItem) {
    return accumulatedResult + arrayItem.toUpperCase();
};

var word = letters.reduce(wordReducer, '');

// 1st iteration: accumulatedResult = '', arrayItem = 'c'
// 2nd iteration: accumulatedResult = 'C', arrayItem = 'h'
// expected output: 'CHICKEN'
console.log(word);

// IN REACT
// (state, action) => newState
// const [state, dispatch]

// {type: 'ADD_TODO', task: "Walk the cat"}
// {type: 'REMOVE_TODO', id: 123}