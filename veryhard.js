alert("welcome user");
var userNum = parseInt(prompt("what is your first number?"), 10); // using parseInt allows strings to be turned into integers and using "10" sets it on a base-10 structure.
var userOperation = prompt("what operation would you like to use + - * or / ?");
var userNum2 = parseInt(prompt("What is your second number?"), 10);

var x = userNum; // set these variables to use user input and create equations
var y = userNum2;

//equations from hard challenge

var add = x + y;
var subtract = x - y;
var multiply = x * y;
var divide = x / y;

if (userOperation === "+") {
  // can nest as many else if statements you want as long as it comes before else.
  document.write(
    userNum + " " + userOperation + " " + userNum2 + " " + "= " + add
  );
} else if (userOperation === "-") {
  document.write(
    userNum + " " + userOperation + " " + userNum2 + " " + "= " + subtract
  );
} else if (userOperation === "*") {
  document.write(
    userNum + " " + userOperation + " " + userNum2 + " " + "= " + multiply
  );
} else if (userOperation === "/") {
  document.write(
    userNum + " " + userOperation + " " + userNum2 + " " + " " + "= " + divide
  );
} else {
  document.write("please refresh and try again.");
}
