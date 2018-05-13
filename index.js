console.log("Hello, world")

turnCount = 0;
turnMax = 10;
firstRotation = ["1First", "2First"];
secondRotation = ["1Second", "2Second"];
floaters = ["1Float", "2Float", "3Float"];
turnDamage = [];
bestKi = true;



class Card {



    constructor(obj) {

    }

    turnStart() {
        if(turnStartAttackMultipler && turnStartAttackFlat) {
            currentAttack = (currentAttack + turnStartAttackFlat) * turnStartAttackMultipler
        }
        else if (turnStartAttackFlat) {
            this.currentAttack = this.currentAttack + turnStartAttackFlat

        } else if (turnStartAttackMultipler) {
            this.currentAttack = this.currentAttack * turnStartAttackMultipler
        }
    }

    onAttack() {
        if(onAttackMultipler && onAttackFlat) {
            currentAttack = (currentAttack + onAttackFlat) * onAttackMultipler
        }
        else if (onAttackFlat) {
            this.currentAttack = this.currentAttack + onAttackFlat

        } else if (onAttackMultipler) {
            this.currentAttack = this.currentAttack * onAttackMultipler
        }
    }

    onSA(){
        if(onSAMultipler && onSAFlat) {
            currentAttack = (currentAttack + onSAFlat) * onSAMultipler
        }
        else if (onSAFlat) {
            this.currentAttack = this.currentAttack + onSAFlat

        } else if (onAttackMultipler) {
            this.currentAttack = this.currentAttack * onSAMultipler
        }
    }

    endTurn() {

    }




}

// var AGLGodku = new Card(1, Godku, 0 , function(){});

function gameLoop() { 
    while(turnCount < turnMax) {
        if (bestKi){
            calculateBestDamage(currentRotationGetter());
        }
        else {
            calculateDamage(currentRotationGetter(), randomKiGen());
        }
       

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
        return firstRotation.concat(floaters[turnCount % 3]);
    }
    else {
        return secondRotation.concat(floaters[turnCount % 3]);
    }
}

gameLoop();