var questionOne = "Print all #s between 10 and 19"
var whileAns = "While loop ans:";
var forAns = "For loop ans:";
var j = Number(-10);
while(j<=19){
    whileAns += " " + j;
    j++;
}
for (var i = -10; i <= 19; i++) {
    forAns += " " + i;
}
console.log(questionOne.toUpperCase());
console.log(whileAns);
console.log(forAns);


whileAns = "While loop ans:";
forAns = "For loop ans:";
var questionTwo = "Print all even #s between 10 and 40";
j=Number(10);
while(j<=40){
    if(j%2===0){
        whileAns+= " " + j;
    } j++;
}

for (var i = 10; i <= 40; i++) {
    if(i%2===0){
        forAns += " " + i;
    }
}
console.log(questionTwo.toUpperCase());
console.log(whileAns);
console.log(forAns);

whileAns = "While loop ans:";
forAns = "For loop ans:";
var questionThree = "Print all odd #s between 300 and 333";
j = Number(300);
while(j<=333){
    if(j%2!==0){
        whileAns += " " + j; 
    }
    j++;
}
for (var i = 300; i <= 333; i++) {
    if(i%2!==0){
        forAns += " " + i; 
    }
}

console.log(questionThree.toUpperCase());
console.log(whileAns);
console.log(forAns);

whileAns = "While loop ans:";
forAns = "For loop ans:";
var questionFour = "Print all #s divisible by 5 AND 3, between 5 and 50";
j=Number(5);
while(j<=50){
    if((j%5===0) && (j%3===0)){
        whileAns+= " " + j;
    } j++;
}

for (var i = 5; i <= 50; i++) {
    if((i%5===0) && (i%3===0)){
        forAns += " " + i;
    } 
}
console.log(questionFour.toUpperCase());
console.log(whileAns);
console.log(forAns);