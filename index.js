console.log("Hello, world")

turnCount = 0;
turnMax = 10;
team = [];
firstRotation = ["1First", "2First"];
secondRotation = ["1Second", "2Second"];
floaters = ["1Float", "2Float", "3Float"];
currentRotation = [];
turnDamage = [];
bestKi = true;



class Card {
    constructor(obj) {}
}

// var AGLGodku = new Card(1, Godku, 0 , function(){});

function gameLoop() {
  checkLeaderSkills();
    while(turnCount < turnMax) {
      currentRotationGetter();
      checkTurnStartSkills();
      checkOnAttackSkills();
      checkOnSASkills();
        if (bestKi) {
            calculateBestDamage();
        }
        else {
            calculateDamage(, randomKiGen());
        }
      checkAfterAttackSkills();
      checkAfterSASkills();
      turnCount++;
    }
}

function calculateBestDamage(currentRotation){
    currentRotation.forEach(card => {

    });
}

function calculateDamage(currentRotation, ki){
    currentRotation.forEach(card => {

    });
}

function currentRotationGetter(){
    if (turnCount % 2 === 0){
        currentRotation = firstRotation.concat(floaters[turnCount % 3]);
    }
    else {
        currentRotation = secondRotation.concat(floaters[turnCount % 3]);
    }
}

gameLoop();
