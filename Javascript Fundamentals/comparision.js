/** comparison operator**/

console.log(5>3); // true

console.log(5<3); // false

console.log(5>=3); // true

console.log(5<=3); // false

console.log(5==3); // false

console.log(5!=3); // true

console.log(5===3); // false

console.log(5!==3); // true

console.log("apple"=="banana"); // false

console.log("apple"!="banana"); // true

console.log("apple"==="APPLE"); // false

console.log(null == undefined); // true, because both are considered equal in loose equality

console.log(null === undefined); // false, because they are of different types

console.log(1 == "01"); // true, because loose equality converts the string to a number

console.log(1 === "01"); // false, because strict equality does not perform type conversion

console.log(null >0); // false, null is treated as 0 in comparisons

console.log(null >= 0); // true, null is treated as 0 in comparisons


