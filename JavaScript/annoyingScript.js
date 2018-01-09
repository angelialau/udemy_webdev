var ans = prompt("Are we there yet?");;
var bool = true;
while(bool){
    ans= prompt("Oh bummer :( ... Are we there yet?");
    if( ans=="yes" ||
        ans=="Yes" ||
        ans=="ye"){
        bool = false;
    } else if (ans.includes("yes")){
        bool = false;
    } else{}
}

alert("Yay, we finally made it!");