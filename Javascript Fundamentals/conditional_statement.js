/** conditional statement **/

// if(condition/expression){
//     // code to be executed if the condition is true
// }


// if (5 > 3) {
//     console.log("5 is greater than 3");
// }


// if(true){
//     console.log("This condition is true");
    
// }


// if (false) {
//     console.log("This condition is false");
// } else {
//     console.log("This condition is false, so this block is executed");
// }

var readlineSync = require('readline-sync');
const number = Number(readlineSync.question("Enter a number: "));

const remainder= number % 2;
if (remainder === 0) {
    console.log("The number is even");
}
else {
    console.log("The number is odd");
}