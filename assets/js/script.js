function Fighter(health, attackP, counterAttack, myName) {
    this.health = health;
    this.attackP = attackP;
    this.counterAttack = counterAttack;
    this.attackIncrement = attackP;
    this.myName = myName;

    this.attack = function(count) { //method takes in opponents counter attack power,

        // this.health = this.health + this.attackP; //increased health by attack power
        this.health = this.health - count; // subtract passed in counter attack from enemy
        this.attackP = this.attackP + this.attackIncrement; //increase attack power for next punch
    };

    this.defend = function(count) { // 

            this.health = this.health - count;

        },


        this.counter = function() {
            return this.counterAttack;
        };
};
//set up fighter objects
var player1_Obj = new Fighter(120, 9, 18, "odb");
var player2_Obj = new Fighter(105, 11, 22, "ghost");
var player3_Obj = new Fighter(150, 7, 15, "method");
var player4_Obj = new Fighter(175, 5, 11, "rza");

var winCount = 0;

//sound effects
var beginFightSnd = document.createElement("audio");
beginFightSnd.setAttribute("src", "Assets/audio/begin_fight.mp3");

var introSound = document.createElement("audio");
introSound.setAttribute("src", "Assets/audio/intro.mp3");

// set up fight

$(document).ready(function() {

    //hide stuff for intro
    $('#main-player-div').hide();
    $('#pick-hero').hide();
    $('#main-player-div').delay(6500).fadeIn('slow');
    $('#pick-hero').delay(7500).fadeIn('slow');
    introSound.play();

    myEnemy = "empty"; //set vars to static value to check agains for assignment not declaring global var since i need to delete this via a function and i cant delete global variables
    var myFighter = "empty";
    $("#good-guy").find("#pick-hero").addClass("callToAction");

    // populate default HP and ATtack
    var arr = [player1_Obj, player2_Obj, player3_Obj, player4_Obj];
    for (var i = 0; i < arr.length; i++) {
        theName = arr[i].myName;
        theAtk = arr[i].attackP;
        theHp = arr[i].health;
        var myHp = $("#" + theName + "-health");
        var myAt = $("#" + theName + "-attack");
        myHp.html("HP: " + theHp);
        myAt.html("Atk: " + theAtk);

    }


    $('#main-player-div').on('click', 'div', function(e) {
        var x = this.id;

        if (myFighter === "empty") {
            myFighter = x;

            //move to fight area
            varId = this.id;
            $('#' + varId).appendTo('.hero-corner'); //move to div
            $('#' + varId).addClass("hero"); // turns hero  green


            $('html, body').animate({
                scrollTop: ($('#my-char-div').offset().top)
            }, 500);

            $('#pick-hero').addClass('view-hidden');
            $('#enemy-h2').show();
            $('#enemy-h2').addClass('callToAction');
            $('.hero-corner').addClass('callToAction');
            $('.hero-corner').show();
            $('#defender').show();

            enemy2 = $("#main-player-div").find(".fighters");
            console.log(enemy2);

            enemy2.removeClass("hero");
            // enemy.addClass("enemy"); //turns all enemies red
            enemy2.addClass("enemy"); //turns all enemies red
            // enemy.appendTo('#bad-guy');
            enemy2.appendTo('#bad-guy'); //
            // assign to correct fighter object
            if (myFighter === "box1") {
                myFighter = player1_Obj;
                console.log(myFighter);
            } else if (myFighter === "box2") {
                myFighter = player2_Obj;
                console.log(myFighter);
            } else if (myFighter === "box3") {
                myFighter = player3_Obj;
                console.log(myFighter);
            } else if (myFighter === "box4") {
                myFighter = player4_Obj;
            } else { console.log("something is wrong") };

        } else {
            // do nothing
            return;
        };


    });
    //select buttons in #bad guy div and log the id if enemy isnt already chosen

    $('#bad-guy').on('click', 'div', function(e) {

        beginFightSnd.play();
        var x = this.id;
        if (myEnemy === "empty") {
            myEnemy = x;

            //move to fight area
            varId = this.id;
            $('#' + varId).prependTo('.enemy-corner'); //move to div
            $('#' + varId).addClass("enemy");
            $('#opponent').addClass('callToAction');
            $('#defender').show();
            $('#opponent').show();
            $('#opponent-area').show();
            $('#stats').show();
            $('#wage-war').show();
            $('#choose-enemy').hide();

            // $('body').scrollTo('#defender');

            $('html, body').animate({
                scrollTop: ($('#defender').offset().top)
            }, 500); // turns them red
            // should create a function and call it here to secure the screens
            //assign correct enemy object
            // alert(myEnemy);
            if (myEnemy === "box1") {
                myEnemy = player1_Obj;
                console.log(myEnemy.counter());
            } else if (myEnemy === "box2") {
                myEnemy = player2_Obj;
                console.log(myEnemy.counter());
            } else if (myEnemy === "box3") {
                myEnemy = player3_Obj;
                console.log(myEnemy.counter());
            } else if (myEnemy === "box4") {
                myEnemy = player4_Obj;
                console.log(myEnemy.counter());
            }

        } else {

            return;
        };

        // console.log("currently my enemy is " + myEnemy.myName);
        counter = myEnemy.counter();

    });


    function winCheck(myHealth, enemyHealth) {
        console.log("My Health is " + myHealth);
        console.log(myEnemy.myName + " his health is " + enemyHealth);
        if (myHealth > 0 && enemyHealth <= 0) {
            console.log("Good Guy wins");
            winCount++;
            // alert(win)
            if (winCount == 3) {
                $('#enemy-h2').html("Flawless Victory!");
                $('#hero').html("Winner");
                $('#attackBtn').addClass('view-hidden');
            } else {
                $('#choose-enemy').show();
                $('#opponent').removeClass('callToAction');
            };

            $('html, body').animate({
                scrollTop: ($('#choose-enemy').offset().top)
            }, 500);
            alert("Game Over You Win");

            cartOffEnemy();
            setTimeout(fadeEnemy, 500);

        } else if (enemyHealth > 0 && myHealth <= 0) {
            console.log("Not this time Sparky");
            alert("Game Over You Lose");
        } else if (myHealth <= 0 && enemyHealth <= 0) {
            console.log("you both died");
            alert("Game Over You Lose, But you killed this dude");
            $('#attackBtn').addClass('view-hidden');
        } else {
            console.log("Keep fighting");
        }
    }

    // on click  run attack, upate html
    $("#attackBtn").click(function() {
        console.log("myFigher var is " + myFighter.myName);


        if (myFighter && myEnemy != "empty") {


            // i attack my opponnent this increments the 
            $('#goodguy-fight').html("You attacked " + myEnemy.myName + " for " + myFighter.attackP + " damage");


            myFighter.attack(counter); // call attack function
            $('#badGuy').html("Enemy Health is: " + myEnemy.health);
            // myFighter.defend(counter); // i defend myself from enemy counterAttack
            myEnemy.defend(myFighter.attackP); // hurt the enemy
            $('#badguy-fight').html(myEnemy.myName + " attacked you back for " + myEnemy.counterAttack);
            console.log("My health is " + myFighter.health);
            console.log("Opponent health is " + myEnemy.health);

            winCheck(myFighter.health, myEnemy.health); // win/lose/continue check

            var myHp = $("#" + myFighter.myName + "-health");
            var myAt = $("#" + myFighter.myName + "-attack");
            myHp.html("HP: " + myFighter.health);
            myAt.html("Atk: " + myFighter.attackP);

            var oppHp = $("#" + myEnemy.myName + "-health");
            var oppAt = $("#" + myEnemy.myName + "-attack");
            oppHp.html("HP: " + myEnemy.health);
            oppAt.html("Atk: " + myEnemy.attackP);
            console.log("this is myenemys atk" + myEnemy.attackP)



        } else { console.log("Pick a fighter man") };




    });


    $("#resetBtn").click(function() {

        // set up reset code here
        // alert(myEnemy);
        window.location.reload(true);

    });


    $("#main-player-div").find(".btn").addClass("hero");
    $("#main-player-div").find(".fighters").addClass("hero");
    //    {

});


function cartOffEnemy() {

    var fallenSoldier = $("#defender").find(".enemy");
    fallenSoldier.addClass("fade");
}


function resetEnemy() {
    delete window.myEnemy;
    window.myEnemy = "empty";
    $('#badGuy').html("Enemy Health is: ");


}


function fadeEnemy(id) {
    var fallenSoldier = $("#defender").find(".enemy");
    fallenSoldier.addClass("dead");
    resetEnemy();

}