function Fighter(health, attackP, counterAttack) {
    this.health = health;
    this.attackP = attackP;
    this.counterAttack = counterAttack;
    this.attackIncrement = attackP; // set increment value to original ammount of attack power

    this.attack = function(count) { //method takes in opponents counter attack power,
        console.log("my health " + this.health);
        console.log("my attackP " + this.attackP);
        console.log("my attackIncrement " + this.attackIncrement);
        this.health = this.health + this.attackP; //increased health by attack power
        this.health = this.health - count; // subtract passed in counter attack from enemy
        this.attackP = this.attackP + this.attackIncrement; //increase attack power for next punch
        console.log("my health " + this.health);
        console.log("my attackP " + this.attackP);
        console.log("my attackIncrement " + this.attackIncrement);
    };

    this.defend = function(count) { // 
            console.log(this.health);
            this.health = this.health - count;
            console.log(this.health);
            console.log("this is from defend fn");
        },


        this.counter = function() {
            return this.counterAttack;
        };
};
//set up fighters
var player1_Obj = new Fighter(120, 33, 30);
var player2_Obj = new Fighter(100, 5, 21);
var player3_Obj = new Fighter(150, 33, 30);
var player4_Obj = new Fighter(180, 5, 21);
// set up fight

$(document).ready(function() {

    myEnemy = "empty"; //set vars to static value to check agains for assignment
    var myFighter = "empty";

    $('#main-player-div').on('click', 'button', function(e) {
        var x = this.id;
        if (myFighter === "empty") {
            myFighter = x;

            //move to fight area
            varId = this.id;
            $('#' + varId).appendTo('#good-guy'); //move to div
            $('#' + varId).addClass("hero"); // turns hero  green

            enemy = $("#main-player-div").find(".btn");
            console.log(enemy);
            enemy.removeClass("hero");
            enemy.addClass("enemy"); //turns all enemies red
            enemy.appendTo('#bad-guy'); //
            // assign to correct fighter object
            if (myFighter === "player1") {
                myFighter = player1_Obj;
                console.log(myFighter);
            } else if (myFighter === "player2") {
                myFighter = player2_Obj;
                console.log(myFighter);
            } else if (myFighter === "player3") {
                myFighter = player3_Obj;
                console.log(myFighter);
            } else {
                myFighter = player4_Obj;
            }

        } else {
            // do nothing
            return;
            // $("#main-player-div").find(".btn").addClass("enemy");
        };


    });
    //select buttons in #bad guy div and log the id if enemy isnt already chosen
    $('#bad-guy').on('click', 'button', function(e) {
        var x = this.id;
        if (myEnemy === "empty") {
            myEnemy = x;

            //move to fight area
            varId = this.id;
            $('#' + varId).appendTo('#defender'); //move to div
            $('#' + varId).addClass("enemy"); // turns them red
            // should create a function and call it here to secure the screens
            // $('#choose-enemy').each(function(index, el) {

            $('#bad-guy').each(function(index, el) {});

            //assign correct enemy object
            if (myEnemy === "player1") {
                myEnemy = player1_Obj;
                console.log(myEnemy.counter());
            } else if (myEnemy === "player2") {
                myEnemy = player2_Obj;
                console.log(myEnemy.counter());
            } else if (myEnemy === "player3") {
                myEnemy = player3_Obj;
                console.log(myEnemy.counter());
            } else if (myEnemy === "player4") {
                myEnemy = player4_Obj;
                console.log(myEnemy.counter());
            }

        } else {
            // alert("nope")
            alert(window.myEnemy);
            // return;
        };

        console.log("currently my enemy is " + myEnemy);
        counter = myEnemy.counter();

        // console.log(selected);
    });


    function betterWincheck(myHealth, enemyHealth) {
        console.log("My Health is " + myHealth);
        console.log("his health is " + enemyHealth);
        if (myHealth > 0 && enemyHealth <= 0) {
            console.log("Good Guy wins");
            alert("Game Over You Win");
            cartOffEnemy();

        } else if (enemyHealth > 0 && myHealth <= 0) {
            console.log("Not this time Sparky");
            alert("Game Over You Lose");
        } else {
            console.log("Keep fighting");
            alert("Keep fighting");
        }
    }

    // on click  run attack, upate html
    $("#attackBtn").click(function() {
        console.log("myFigher var is " + myFighter);

        if (myFighter && myEnemy != "empty") {
            myFighter.attack(counter); // i attack my opponnent this increments the 
            myFighter.defend(counter); // i defend myself from enemy counterAttack
            myEnemy.defend(myFighter.attackP); // hurt the enemy
            console.log("My health is " + myFighter.health);
            console.log("Opponent health is " + myEnemy.health);
            $('#goodGuy').html("My Health is: " + myFighter.health);
            $('#badGuy').html("Enemy Health is: " + myEnemy.health);
            betterWincheck(myFighter.health, myEnemy.health); // win/lose/continue check


        }
        else{console.log("nothing to see here")};



    });


    $("#resetBtn").click(function() {

        // set up reset code here
        alert(myEnemy);

    });


    $("#main-player-div").find(".btn").addClass("hero");
    //    {

});


function cartOffEnemy(){

    var fallenSoldier = $("#defender").find(".btn");
    fallenSoldier.addClass("dead"); 
    resetEnemy();
}


function resetEnemy(){
    delete window.myEnemy;
    window.myEnemy = "empty"; 
   
}

// console.log("Round One-------------------------------");
// me.attack(counter); // i attack my opponnent this increments the 
// me.defend(counter); // i defend myself from enemy counterAttack
// opponent.defend(me.attackP); // hurt the enemy
// console.log("My health is " + me.health);
// console.log("Opponent health is " + opponent.health);
// $('#goodGuy').html("My Health is: " + me.health);
// $('#badGuy').html("Enemy Health is: " + opponent.health);
// betterWincheck(me.health, opponent.health); // win/lose/continue check




// console.log("Round Two-------------------------------");
// me.attack(counter);
// me.defend(counter);
// opponent.defend(me.attackP);
// console.log("My health is " + me.health);
// console.log("Opponent health is " + opponent.health);
// $('#goodGuy').html("My Health is: " + me.health);
// $('#badGuy').html("Enemy Health is: " + opponent.health);
// betterWincheck(me.health, opponent.health);
// console.log("attack power for me is --------------------------------" + me.attackP);



// console.log("Round Three-------------------------------");
// me.attack(counter);
// me.defend(counter);
// opponent.defend(me.attackP);
// console.log("My health is " + me.health);
// console.log("Opponent health is " + opponent.health);
// $('#goodGuy').html("My Health is: " + me.health);
// $('#badGuy').html("Enemy Health is: " + opponent.health);
// betterWincheck(me.health, opponent.health);
// console.log("attack power for me is --------------------------------" + me.attackP);



// console.log("Round Four-------------------------------");
// me.attack(counter);
// me.defend(counter);
// opponent.defend(me.attackP);
// console.log("My health is " + me.health);
// console.log("Opponent health is " + opponent.health);
// $('#goodGuy').html("My Health is: " + me.health);
// $('#badGuy').html("Enemy Health is: " + opponent.health);
// betterWincheck(me.health, opponent.health);