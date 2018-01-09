//array of movie objects 
var movieDB = [
    {
        title: "how to train your dragon",
        rating: 4.5,
        hasWatched: true
    }, 
    {
        title: "book of life",
        rating: 4.5,
        hasWatched: true
    }, 
    {
        title: "star wars",
        rating: 4,
        hasWatched: false
    }, 
    {
        title: "blade runner 2049",
        rating: 3,
        hasWatched: false
    }
]

function print(arr){
    for (var i=0; i<arr.length; i++){
        var str = "You have ";
        if (arr[i].hasWatched == true){
            str += "watched \"" + arr[i].title + "\" - " + arr[i].rating + " stars"
        }
        else{
            str += "not seen \"" + arr[i].title + "\" - " + arr[i].rating + " stars"
        }
        console.log(str);
    }
}

print(movieDB);