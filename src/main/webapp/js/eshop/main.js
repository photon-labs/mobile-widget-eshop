$(document).ready(function(){
    //If the User resizes the window, adjust the #container height
    $(window).bind("resize", resizeWindow);
    function resizeWindow( e ) {
        var newWindowHeight = $(window).height();
        //if(newWindowHeight < 640) {
            $(".cat_lister").css("height", newWindowHeight - 140);
        //}
    }
});
