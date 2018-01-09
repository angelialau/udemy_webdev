// ways to initialise arrays
var friends = [];
var friends = new Array(); //uncommon 
var friends = ["Charlie", 12, "David"]; //arrays can hold any data type

// indexing
console.log(friends[0]); //Charlie

//nesting works as per java

// updating value
friends[0] = "Angie";
console.log(friends[0]); //Angie

// adding values
friends[3] = "new friend here";
console.log(friends); //[ 'Angie', 12, 'David', 'new friend here' ]
friends[10] = "there should be a bunch of undefined in the empty spaces";
console.log("friends: " + friends); //friends: Angie,12,David,new friend here,,,,,,,there should be a bunch of undefined in the empty spaces

//length of array 
console.log("length of array: " + friends.length); //length of array: 11

//built in methods 
//resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

//push and pop
var arr = ["hello", "world"];
arr.push("pushed here"); //3 (which is the length of the new array)
console.log(arr);       //[ 'hello', 'world', 'pushed here' ]
arr.pop();              //'pushed here'
console.log(arr);       //[ 'hello', 'world' ]

//unshift and shift ... push and pop but at the start of array 
arr.unshift("shifted here"); //3
console.log(arr);       //[ 'shifted here', 'hello', 'world' ]
arr.shift();            //'shifted here'
console.log(arr);       //[ 'hello', 'world' ]

//indexOf
arr.indexOf("world"); //1

//slice(inclusive, exclusive)
arr.push("java");       //3
arr.push("JavaScript"); //4
arr.push("python");     //5
arr.slice(1,3);         //[ 'world', 'java' ]

//splice(start index to delete, number of items to delete)
var arr = [1, 2, 3, 4, 5];
arr.splice(1, 2); //[2,3]
console.log(arr); //[1, 4, 5]

//ways to iterate: for loop and forEach method which works for functions
var colours = ["red", "orange", "yellow", "green"];

for (var i = 0; i < colours.length; i++) {
    console.log(colours[i]);
}
/*    
    red
    orange
    yellow
    green
*/

//same as:
colours.forEach(function(colour){ //colour is the placeholder name
// for the element in the array 
    console.log(colour);
})


/*.forEach takes a callback function, that callback function is 
expected to have at least 1, but up to 3 arguments. This is how .forEach was designed.

The arguments are in a specific order:
- The first one represents each element in the array (per loop iteration) that 
.forEach was called on.
- The second represents the index of said element.
- The third represents the array that .forEach was called on (it will be the 
same for every iteration of the loop).*/

colours.forEach(function(printColour){ //anonymous function
    console.log("*****");
    console.log(printColour);
    console.log("*****");
})
/*
    *****
    red
    *****
    *****
    orange
    *****
    *****
    yellow
    *****
    *****
    green
    *****
*/

//^ you will get the same output doing: 
function printColour(colour){
    console.log("*****");
    console.log(colour);
    console.log("*****");
}
colours.forEach(printColour); //remember not to place paranthesis
//after the function name, otherwise it will be called and executed 
//immediately once the program reads it


//my own forEach
function myForEach(arr, func){
    for(var i=0; i<arr.length; i++){
        func(arr[i]);
    }
}

//using prototype!!
// how to mimic arr.forEach(someFunction), use this!
Array.prototype.myForEach = function(func) {
    for(var i=0; i<this.length; i++){
        func(this[i]);
    }
};

var friends = ["angie", "josh", "jing"];
friends.myForEach(console.log);

