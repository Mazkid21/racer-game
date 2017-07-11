setInterval(moveRacer, 30);
var keys = {};

// Function to make the q and p key move racers 
$(document).keydown(function(e) {
    keys[e.keyCode] = true;
});

$(document).keyup(function(e) {
    delete keys[e.keyCode];
});

function moveRacer() {
    for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 81) {
            $(".racer1").animate({left: "+=5"}, 0);
        } 

        if (direction == 80) {
            $(".racer2").animate({left: "+=5"}, 0);
        }

    }
}

// win state function 
function checkWinner () {
    var car1 = $(".racer1").position();
    console.log(car1);

    var car2 = $(".racer2").position();


    if ($(".racer1").css("left",  '830')) {
        console.log("yay");
        return alert("Racer one wins!!!");
    }
    if ($(".racer2").position + $(".racer2").offsetWidth >= window.innerWidth - 40) {
        return alert("Racer two wins!!!");
    }

    }