const arr = require("./Arr1.js")
const result = new Array;
var size = 3;

for (let i = 0;  i < arr.length; i += size) {
  result.push(arr.slice(i, i + size))
}

const arraySplit = result.slice(0, 2);
console.log(arraySplit);
module.exports = arraySplit;
