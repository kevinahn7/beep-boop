//Back end
var array = [];

function beepBoop(input) {
    for (x=0; x<= input; x++) {
        var pushIt = x;
        if (x.toString().split("").includes("0")) {
            pushIt = "Beep!";
        }
        array.push(pushIt);
        
    }
    return array;
}












//Front end
$(document).ready(function() {
    $("#theForm").submit(function(event) {
        event.preventDefault();
        array = [];
        var numberString = $("#inputNumber").val();
        var numberInt = parseInt(numberString);
        var answer = beepBoop(numberInt);
        $(".answer").text(answer);
    });
});