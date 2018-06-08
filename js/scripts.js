//Back end
var array = [];
function beepBoop(input) {
    if (isNaN(input)) {
        var invalidNumber = "That is not a valid input, please enter a number.";
        array.push(invalidNumber);
        return array;
    } else {
        for (x=0; x<= input; x++) {
            var pushIt = x;
            if (x % 3 === 0 && x !== 0) {
                pushIt = "I'm sorry, Bob. I'm afraid I can't do that.";
            } else if (x.toString().split("").includes("1")) {
                pushIt = "Boop!";
            } else if (x.toString().split("").includes("0")) {
                pushIt = "Beep!";
            };
            array.push(" " + pushIt);
        };
        return array;
    };
};
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