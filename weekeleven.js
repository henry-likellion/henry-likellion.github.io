//declare and assign three variables
var a = 3
var b = 4
var c = "3"

console.log(a == b)//false
console.log(a == c)// == converts the variable into a string then

//===
console.log(a === c) // false; checks the data type as well

// > < >= <=
console.log(a > b) // true

// declare and assign 4 string variables
var str1 = "bye";
var str2 = "hi";
// 'a' comes before 'b'
console.log( str2 < str1) // true

/*
a = 1
b = 2
c = 3
...
abcd = 1 + 2 + 3 + 4 = 10
abce = 1 + 2 + 3 + 5 = 11

so, abce is bigger that abcd
*/

var str3 = "abdefg";
var str4 = "abcdefi"
console.log(str3 < str4); //true

//and && operator
// either condition 1 AND condition two
// (condition 1) && (condition 2)
// true && true : true
console.log(2 < 3 && 2 == "2");
// true + false : false
console.log(2 < 3 && 2 === "2");
// false && true : false
// false && false : false













// Control flow statements
// Conditional statements
// if, if else, else if

// 1. if statements
// if (condition) {
//   // executeable codes
//   // codes you wan to be executed the this condition is true
// }

if (3 == "3") {
  console.log("equality operator == doesn't check the data type");
}

// 2. if else statements
//if (condition) {
  // if this condition condition is not true, do this
  //code
//}
// else {
  // if this condition is true, do this
  //codes
// }

// 3. else if statement
// if (condition 1) {
//   // if condition 1 is true, do this
//   //codes
// }
// else if (condition 2) {
//   // if condition 2 is true, do this
//   // codes
//   // if bothe conditions 1 & 2 are false, move on
// }
// else if (condition 3) {
//   // if condition 3 is true, do this
//   //codes
// }
// else if (condition 4) {
//   // if condition 4 is true, do this
//   //codes
// }













// loop: when you want to repeat something as long at it satisfies a certain condition
// when this certain condition is no longer satified, the loop will stop operating

// while (it is befor 12pm) {
//   package each product
//   stamp a seal
// }
//
// while (condition) {
//   //while this condition is statisfied, execute these codes
// }

let i = 0;

//count up to 9
while (i < 10){// as long as 'i' is less than 10
  console .log(i); // print out the value of 'i'
  i = i + 1 // increase the value of 'i' bye 1
}

//infinite loop
// avoid the best as you certain

// 2. do while loop
// do{
//   console.log("would you like to order something?")
// }

let j = 10;

do{
  console.log(j);
  j++; // shorten form of j = j + 1
} while (j < 10);

// 3. for loop
// for shortened form of a particular type of
for (let k = 0; k < 10; k++){
  console.log(k);
}









//programming languages has a concept called 'functions'

// functions has four part: identifier, function, parameters, action

//creat a function
var add = function(a, b) {
  var sum = a + b;
  return sum;
}
//'add' is the identifier of our functions
// a and b are two parameter thi sfunction takes
// each time this function is called, it creates a variable cllled sum which takes the value (a + b) and returns it

// input --> function --> output

// calling a function
console.log(add(5,39));
console.log(add(3,4));
console.log(add(430801,327092834));
console.log(add(9080,1));

//function without parameter
var subtractPosAns = function(){
  var a = Math.ceil(Math.random() * 100);
  var b = Math.ceil(Math.random() * 100);
  // a and b are randomly generated numbers from 1 to 100
}
if (a > b){
  console.log(a + " * " + b + " = ?");
}
else { // a < b
  console.log(b + " * " + a + " = ?");
}

console.log(Math.ceil(Math.random() * 100));





// Exercise
1.
var a = "hi"
var b = "Faith"

2.
  var a = Math.ceil(Math.random() * 100);
  console.log(a);

3.
var g = "a 'while loop' makes you wright out the whole sum but the 'do while loop' is the shorter version of the sum. The 'while loop' would be useful when revising, practicing or making short JavaScripts but when making really long ones, the 'do while loop' would come in handy."

4.
let y = Math.ceil(Math.random() * 100);
let z = Math.ceil(Math.random() * 100);

if (y > z){
  console.log(y + " * " + z + " = ?");
}
else { // a < b
  console.log(z + " * " + y + " = ?");
}
