function print(thing){
    console.log("printing..." + thing);
}
//print reverse
function printReverse(arr){
    console.log("printing reverse...");
    for (var i = arr.length; i >=0; i--) {
        console.log(arr[i]);
    }
}

var reverseArr = [1, 2, 3];
print(reverseArr);
printReverse(reverseArr);

//isUniform
function isUniform(arr){
    for (var i = 0; i < arr.length-1; i++) {
        if(arr[i] !== arr[i+1]) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}

var uniformArr = [1,1,1,1];
print(uniformArr);
isUniform(uniformArr);
var uniformArr = [1,1,2,1];
print(uniformArr);
isUniform(uniformArr);
var uniformArr = ["b", "b", "b", "a"];
print(uniformArr);
isUniform(uniformArr);
var uniformArr = ["b", "b", "b", "b"];
print(uniformArr);
isUniform(uniformArr);

//sumArray
function sumArray(arr){
    var sum = 0;
    for (var i=0; i<arr.length; i++){
        sum+= arr[i];
    }
    console.log("sum is: " + sum);
}

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

//max
function max(arr){
    var ans = arr[0];
    if (arr.length == 1){
        console.log(ans);
        return;
    } else{
        for (var i=1; i<arr.length; i++){
            if (arr[i]>ans) ans = arr[i];
        }
        console.log("max is: " + ans);
    }
}
max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);

//myForEach
function myForEach(arr, func){
    for(var i=0; i<arr.length; i++){
        func(arr[i]);
    }
}

// how to mimic arr.forEach(someFunction), use this!
Array.prototype.myForEach = function(func) {
    for(var i=0; i<this.length; i++){
        func(this[i]);
    }
};

var friends = ["angie", "josh", "jing"];
friends.myForEach(console.log);

