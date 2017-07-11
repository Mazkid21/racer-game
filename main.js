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
    // var car1 = $(".racer1").position();
    // console.log(car1);

    // var car2 = $(".racer2").position();

    // if  ($(".racer1").style({left: "830"})) {
    //     return alert("Racer 1 wins");
    // }


     if ($("racer1").offset({left: 835})) {
         console.log("yay");
         return alert("Racer one wins!!!");
     }
     if ($(".racer2").position() + $(".finish").offsetWidth() >= $(".finish").innerWidth() - 40) {
         return alert("Racer two wins!!!");
    

    }}