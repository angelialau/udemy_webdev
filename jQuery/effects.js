$("#fadeout").on("click", function(){
    // $("div").fadeOut();
    $(".fade").fadeOut(1000, function(){ //1000ms
        console.log("fade completed"); //having a function as a 
        //second param ensures that the console.log happens only
        //after fade out is finished
        // $(this).remove(); //removes from html! 
    }); 
    //anything here will happen almost immediately, without 
    //waiting for animation to finish 
    
});

$("#fadein").on("click", function(){
    // $("div").fadeOut();
    $(".fade").fadeIn(500, function(){ //1000ms
        console.log("fade in");
    }); 
});

$("#fadetoggle").on("click", function(){
    // $("div").fadeOut();
    $(".fade").fadeToggle(500, function(){ //1000ms
        console.log("fade toggled"); 
    }); 
    
});

$("#slideup").on("click", function(){
    // $("div").fadeOut();
    $(".slide").slideUp(1000, function(){ //1000ms
        console.log("fade completed"); 
    }); 
});

$("#slidedown").on("click", function(){
    // $("div").fadeOut();
    $(".slide").slideDown(500, function(){ 
        console.log("fade in");
    }); 
});

$("#slidetoggle").on("click", function(){
    // $("div").fadeOut();
    $(".slide").slideToggle(500, function(){ 
        console.log("fade toggled"); 
    }); 
    
});


