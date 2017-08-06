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
var player1 = new Fighter(120, 33, 30);
var player2 = new Fighter(100, 5, 21);
var player3 = new Fighter(150, 33, 30);
var player4 = new Fighter(180, 5, 21);
// set up fight

$(document).ready(function() {

    me = player3;
    opponent = player2;

    // get these integrated
    var myEnemy = "empty"; //set vars to static value to check agains for assignment
    var myFighter = "empty";


    counter = opponent.counter(); // have to define the counter attack from enemy/ this value is static






    console.log("attack power for me is --------------------------------" + me.attackP);
    console.log("Lets Get it on");
    // updateHtml(me.health);
    $('#goodGuy').html("My Health is: " + me.health);
    $('#badGuy').html("Enemy Health is: " + opponent.health);






    function betterWincheck(me, enemy) {
        if (me > 0 && enemy <= 0) {
            console.log("Good Guy wins");
            alert("Game Over You Win");

        } else if (enemy > 0 && me <= 0) {
            console.log("Not this time Sparky");
            alert("Game Over You Lose");
        } else {
            console.log("Keep fighting");
            alert("Keep fighting");
        }
    }
    // updateMy_html = $('#goodGuy').html("My Health is: " + me.health );
    // updateOpp_html = $('#badGuy').html("Enemy Health is: " + opponent.health);
    // $('#goodGuy').html("My Health is: " + me.health );
    // $('#badGuy').html("Enemy Health is: " + opponent.health);

    // function updateHtml(health){
    //  $('#goodGuy').html("My Health is: " + health );

    // }


    //global vars


    // var myFighter = x;

    // on click  run attack, upate html
    $("#attackBtn").click(function() {
        me.attack(counter); // i attack my opponnent this increments the 
        me.defend(counter); // i defend myself from enemy counterAttack
        opponent.defend(me.attackP); // hurt the enemy
        console.log("My health is " + me.health);
        console.log("Opponent health is " + opponent.health);
        $('#goodGuy').html("My Health is: " + me.health);
        $('#badGuy').html("Enemy Health is: " + opponent.health);
        betterWincheck(me.health, opponent.health); // win/lose/continue check
    });

    // $("#player4").click(function() {

    //     $('#player3').appendTo('#bad-guy');

    // });

    $("#resetBtn").click(function() {

        // $('#player2').appendTo('#opponent');
        alert(myEnemy);

    });

    //testing moving of divs


    $('#main-player-div').on('click', 'button', function(e) {
        var x = this.id;
        if (myFighter === "empty") {
            myFighter = x;
            //move to fight area
            varId = this.id;
            $('#' + varId).appendTo('#good-guy'); //move to div
            $('#' + varId).addClass("hero"); // turns them green

            enemy = $("#main-player-div").find(".btn");
            console.log(enemy);
            enemy.removeClass("hero");
            enemy.addClass("enemy");
            enemy.appendTo('#bad-guy'); //
        } else {
            // alert("nope")
            // return;
            // $("#main-player-div").find(".btn").addClass("enemy");
        };


        $.each($('#main-player-div'), function(index, value) {
            console.log(index + ':' + $(value).text());
            console.log(this);
            var button = $(this).attr('type');
            console.log(button);
        });

        // $("#main-player-div").find(".btn").click(function () {
        // alert("hi there");
        // return false;
    });
    
    // $("#main-player-div").find(".btn").addClass("hero")(function() {
    //     alert("hi there");
    //     return false;
    //     console.log("currently my character is " + myFighter);
    // });

       $("#main-player-div").find(".btn").addClass("hero");
    //    {
 
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
            // $("#main-player-div").find(".btn").addClass("enemy");

        } else {
            // alert("nope")
            return;
        };

        console.log("currently my enemy is " + myEnemy);

        // console.log(selected);
    });
    //reset

    console.log("currently my enemy is outside the fn is " + myEnemy);

    // game

    // first palyer button clicked gets assigned to the player var




});


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