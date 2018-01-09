// var userName = prompt("What is your name?");
// alert("Nice to meet you, "+ userName);
// console.log("Successfully pushed alert message with correct userName");


// Stalker Practice
// var firstName = prompt("What is your first name?");
// var lastName = prompt("And your last name?");
var age = Number(prompt("What is your age?"));
// alert("Hi! So let me get this straight...your full name is " + firstName + " " + lastName + " and you're " + age + " years old.");
// alert("Also, you've been alive for " + age*365 + " days! Weww");
// console.log("Name: " + firstName + " " + lastName);
console.log("Age: " + age);

if(age<0){
    console.log("Age can't be negative!");
}

if(age===21){
    console.log("Happy 21st birthday!");
}

if(age%2!==0){
    console.log("Your age is odd!");
}

if(age % Math.sqrt(age)===0){
    console.log("Perfect square!");
}


