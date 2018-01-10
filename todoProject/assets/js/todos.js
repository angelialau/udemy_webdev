//check off specific todos by clicking 
//below code wont work cos you need to use on
/*$("li").click(function(){
    //checking if it is alr a checked todo
    $(this).toggleClass("completed");
});*/
//when u try to use on, u need to use it on an element that already exists!!
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//event bubbling = where events are fired and bubbled up to parents

//doing fade out and deleting todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){ //this=span, parent=li
        $(this).remove(); //this=li
    });
    event.stopPropagation(); //wont continue firing events in parents 
    //eg li click listener

});

//creation of new todos
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var val = $(this).val();//retrieves text from input 
        $(this).val(""); //clears input
        $("ul").append('<li><span><i class="fa fa-trash-o" aria-hidden="true"></i></span>' + val + "</li>"); 
        //impt to note!! using on("click") > .click() here bcos new 
        //lis created will not have the click listeners if u used click()
    };
});
$(".fa-pencil").click(function(){
    $("input[type='text']").fadeToggle();
})