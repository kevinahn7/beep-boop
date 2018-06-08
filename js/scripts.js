//Back end, Business logic
var array = [];
function beepBoop(input, name) {
    if (isNaN(input)) {
        var invalidNumber = "That is not a valid input " + name + ", please enter a number.";
        array.push(invalidNumber);
        return array;
    } else {
        for (x=0; x<= input; x++) {
            var pushIt = x;
            if (x % 3 === 0 && x !== 0) {
                if (name !== "") {
                    pushIt = "I'm sorry, " + name + ". I'm afraid I can't do that.";
                } else {
                    pushIt = "I'm sorry. I'm afraid I can't do that.";
                }
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
//Front end, UI logic
$(document).ready(function() {
    $("#theForm").submit(function(event) {
        event.preventDefault();
        array = [];
        var userName = $(".namer").val();
        var numberString = $("#inputNumber").val();
        var numberInt = parseInt(numberString);
        var answer = beepBoop(numberInt, userName);
        $(".answer").text(answer);
        console.log(userName)
    });
});