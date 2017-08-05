// var newText = "hello people";

// el = document.getElementById('hello');

// test = el.innerHTML = newText;

// Build charactor objects



var fighterA = {

    healthPoints: 100,
    attackPower: 8,
    counterAttackPower: 50, //never changes


    attack: function(count) {
        this.healthPoints = this.healthPoints + this.attackPower;
        this.healthPoints = this.healthPoints - count;
        console.log(this.healthPoints);
    },

    defend: function(count) {
        this.healthPoints = this.healthPoints - count;
        console.log(this.healthPoints);

    },

    counter: function() {
        return this.counterAttackPower;
        console.log(this.counterAttackPower + " counter fn");
    },


}

var fighterB = {

    healthPoints: 120,
    attackPower: 17,
    counterAttackPower: 40,

    attack: function(count) {
        this.healthPoints = this.healthPoints + this.attackPower;
        this.healthPoints = this.healthPoints - count;
        console.log(this.healthPoints);
    },

    defend: function(count) {
        this.healthPoints = this.healthPoints - count;
        console.log(this.healthPoints);

    },

    counter: function() {
        return this.counterAttackPower;
        console.log(this.counterAttackPower + " counter fn");
    },
    //never changes

}

var fighterC = {

    healthPoints: 150,
    attackPower: 6,
    counterAttackPower: 30, //never changes
    attack: function(count) {
        this.healthPoints = this.healthPoints + this.attackPower;
        this.healthPoints = this.healthPoints - count;
        console.log(this.healthPoints);
    },

    defend: function(count) {
        this.healthPoints = this.healthPoints - count;
        console.log(this.healthPoints);

    },

    counter: function() {

        console.log(this.counterAttackPower + " counter fn");
        return this.counterAttackPower;
    },

}

var fighterD = {

    healthPoints: 180,
    attackPower: 5,
    counterAttackPower: 20, //never changes

    attack: function(count) {
        this.healthPoints = this.healthPoints + this.attackPower;
        this.healthPoints = this.healthPoints - count;
        console.log(this.healthPoints);
    },

    defend: function(count) {
        this.healthPoints = this.healthPoints - count;
        console.log(this.healthPoints);

    },

    counter: function() {
        return this.counterAttackPower;
        console.log(this.counterAttackPower + " counter fn");
    },

}

test = fighterB;

b = fighterD;

// test.attack(b.counter());
// test.attack(b.counter());
// test.attack(b.counter());
// test.attack(b.counter());
// test.attack(b.counter());


// test.defend(b.counter());
// test.attack();
// test.defend(b.counter());
// test.attack();
// test.defend(b.counter());
// console.log(fighterA.healthPoints + " print out");

if (test.healthPoints <= 5) {
    alert("game over");

}

// test();

// console.log(test());








// console.log(character.healthPoints);



// var enemy = {
//     counterAttackPower: 50 // never changes
// }




//on click actions


// win criteria






//lose criteria

//Attack

//base attack power





//reset


//OOP

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
        // alert("my Healht is " + this.health)
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
var greg = new Fighter(200, 33, 30);
var jason = new Fighter(100, 5, 21);

// set up fight

$(document).ready(function() {


    me = greg;
    opponent = jason;
    counter = opponent.counter(); // have to define the counter attack from enemy/ this value is static





    console.log("attack power for me is --------------------------------" + me.attackP);
    console.log("Lets Get it on");
    // updateHtml(me.health);
    $('#goodGuy').html("My Health is: " + me.health);
    $('#badGuy').html("Enemy Health is: " + opponent.health);


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
    // 	$('#goodGuy').html("My Health is: " + health );

    // }

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


});