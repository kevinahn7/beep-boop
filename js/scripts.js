//Back end
var array = [];

function beepBoop(input) {
    for (x=0; x<= input; x++) {
        array.push(x);
    }
    return array;
}












//Front end
$(document).ready(function() {
    $("#theForm").submit(function(event) {
        event.preventDefault();
        var numberString = $("#inputNumber").val();
        var numberInt = parseInt(numberString);
        var answer = beepBoop(numberInt);
        $(".answer").text(answer);
    });
});