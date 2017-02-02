/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
// week2 lab1 part2
_.each(_.range(1, 101), function(i){
  if (i%3===0&&i%5!=0){console.log("Fizz");}
  else if (i%5===0&&i%3!=0) {console.log("Buzz");}
  else if (i%3===0&&i%5===0){console.log("FizzBuzz");}
  else {console.log(i);}
})

// week3 lab1
// Instructions: "Write a function which counts the number of times a value occurs in an array "
// Example: "countItem(['a', 'b', 'a'], 'a') should return 2"
var countItem = function(arr,element) {
  var x=0;
_.each(arr, function(i){
  if (i=== element){
  x++;
  }})
  return x;
}
console.log('countItem success:', countItem([1, 2, 3, 4, 5, 4, 4], 4) === 3);
