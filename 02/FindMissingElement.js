const arr = require("./Arr2.js")
// const arr2 = [];

// for(var i = 0; i < arr.length; i++)
//     {
//         arr2 = arr2.concat(arr[i]);
//     }

// arr2.sort();
// arr2.splice(1,7);
// console.log(arr2); 

const findMissingElement = arr[1];
let start = 1;
let deleteCount = 2;
findMissingElement.splice(start, deleteCount);

module.exports = findMissingElement;
