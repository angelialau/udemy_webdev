//key value pairs! can hold any data type 
var person = {
    name: "Angelia",
    age: 20,
    gender: "female"
}
//same as 
var person = {}; //same as var person = new Object()
person.name = "Angelia";
person.age = 20;
person.gender = "female";

//ways to retrieve values
//dot method: shorter
console.log("age is: " + person.age); //20
//bracket method: good for when key name has spaces or starts with number,
//and if you want to manipulate the variable quickly 
console.log("age is: " + person["age"]);//20

//manipulating values
person.age++;
person["gender"] = "cool";
console

//method = function as properties inside an object 
//useful for reducing name space collisions 
//use the this keyword to use data from within the object for a method within the same obj
var dog = {
    speak = function{
        return "woof!"
    }
}
var cat = {
    speak = function{
        return "meow!"
    }
}



