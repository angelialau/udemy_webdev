function doSomething(){
    console.log("Do something!");
}

doSomething();

function square(num){
    console.log("square of " + num + " is: " + num*num);
}

square(4);
square(16);

function isEven(num){
    // if(num%2==0){
    //     return true;
    // }
    // return false;
    return num%2===0;
}
var ans;
ans = isEven(4);
console.log("ans: " + ans);
ans = isEven(21);
console.log("ans: " + ans);
ans = isEven(68);
console.log("ans: " + ans);
ans = isEven(33);
console.log("ans: " + ans);

function factorial(num){
    if(num<=1){
        return 1;
    }
    else{
        return num * factorial(num-1);
    }
}
ans = factorial(5);
console.log("ans: " + ans);
ans = factorial(2);
console.log("ans: " + ans);
ans = factorial(10);
console.log("ans: " + ans);
ans = factorial(0);
console.log("ans: " + ans);

function kebabToSnake(s){
    // if(s.length>0){
    //     if(s.charAt(0)=="-"){
    //         return "_" + s.slice(1);
    //     }

    //     else{
    //         return s.charAt(0) + kebabToSnake(s.slice(1));
    //     }
    // } 
    // return "";

    // use regex
    return s.replace(/-/g, "_");
}

var str = "hello-world";
console.log(str + " to " + kebabToSnake(str));
var str = "dogs-are-awesome";
console.log(str + " to " + kebabToSnake(str));
var str = "blah";
console.log(str + " to " + kebabToSnake(str));