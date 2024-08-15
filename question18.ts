// QUESTION 18

let countriesToVisit : string [] = [  "China" , "Brzil" , "Denmark" , "America"];

console.log("Orignal order: " , countriesToVisit);

console.log("Alphabettical order :" , [... countriesToVisit ].sort());

console.log( "Still in Orignal order:" ,countriesToVisit);

console.log("Reverse  order:" , [...countriesToVisit].reverse());

console.log("Still in Orignal order:" , countriesToVisit);

console.log("Orignal Array Reverse:" , countriesToVisit.reverse());

console.log("Back to orignal order:" , countriesToVisit.reverse());

console.log("Stored in Alphabetical order:" , countriesToVisit.sort());

console.log("Orignal Array Reverse" , countriesToVisit.reverse());