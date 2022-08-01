const sortingObjects = require("./Arr3.js")

sortingObjects.sort(function(a, b) {
   return parseFloat(a.customer_number) - parseFloat(b.customer_number);
});

sortingObjects.sort(function(a, b) {
    return  parseFloat(b.invoice.number) - parseFloat(a.invoice.number);
});

console.log(sortingObjects);
module.exports = sortingObjects;
