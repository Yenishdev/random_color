$(document).keypress(function(){
    $("div").css("background", randomColor);
    $("body").css("background-color", randomColor);
    function randomColor(){
     var r = Math.floor(Math.random() * 255);
     var g = Math.floor(Math.random() * 255);
     var b = Math.floor(Math.random() * 255);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
    
});