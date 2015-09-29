/**
 * Created by session2 on 9/28/15.
 */

function start() {
var slaying = true;
var youHit = Math.floor(Math.random() * 3);
var damageThisRound = Math.floor(Math.random() * 4 + 1);
var totalDamage = 0;


    while (slaying) {
        if (youHit) {
            console.log("You hit the dragon and did " + damageThisRound + " damage!");
            totalDamage += damageThisRound;

            if (totalDamage >= 4) {
                console.log("You did it! You slew the dragon!");
                slaying = false;
                console.log("You won, and move on to a new dragon");
                var answer = prompt("Want to play again? (Yes) or (No)");
                if (answer = "Yes") {
                    console.log("Let's go");
                    start();
                }
                else {console.log("Alright then");
                    slaying = false;}
            } else {
                youHit = Math.floor(Math.random() * 2);
                   }
        } else {
            console.log("The dragon incinerates you! You're toast.");
            slaying = false;
        }
    }
}//whole game
start();