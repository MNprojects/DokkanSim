/*

Dokkan Simulator

Call the method: 
teamSim([ArrayContainingTeam], DesiredTurnSimCount)
to run the simulator with the desired team and the amount of turns to simulate over.

*/


// TODO think about return datastructure/info: character -> damage -> SA? -> crits? -> AA?
// Follows the order of operations the game uses
// Returns an array containing a hash for each attack: key = name, value = damage dealt that attack
function teamSim(teamArray, turnMax) {
  turnCount = 0;
  damageArray = [];
  teamLeaderSkills(teamArray);
  while(turnCount < turnMax) {
    currentRotation = currentRotationGetter(teamArray, turnCount);
    // Sims each card individually
    for (let i = 0; i < currentRotation.length; i++) {
      turnStartSkill(currentRotation[i]);
      linkSkillsActivate(currentRotation[i]);
      onAttackSkill(currentRotation[i]);
      onSASkill(currentRotation[i]);

      // TODO: rethink attack functions
      simTurn(currentRotation[i]);

      afterAttackSkills(currentRotation[i]);
      afterSASkills(currentRotation[i]);
    }
    turnCount++; 
  }
  return damageArray;
}
// TODO: same as teamSim; finish function
// Returns an array containing a hash for each attack
function singleSim(card, turnMax, leaderSkillOne, leaderSkillTwo, activeLinksArray) {
  turnCount = 0;
  damageArray = [];
}

// Checks for the type of leaderskill each of the designated leaders has and runs that on the team.
function teamLeaderSkills(teamArray) {
  if (teamArray[0].percLeader){ teamArray[0].percLeader(); }
  if (teamArray[6].percLeader){ teamArray[6].percLeader(); }
  if (teamArray[0].flatLeader){ teamArray[0].flatLeader(); }
  if (teamArray[6].flatLeader){ teamArray[6].flatLeader(); }
}


// Uses modular maths to find the current rotation and floater depending upon the current turnCount.
function currentRotationGetter(teamArray, turnCount){
  currentRotation = [];
    if (turnCount % 2 === 0){
        currentRotation = currentRotation.concat(teamArray[0]).concat(teamArray[1]).concat(teamArray[(turnCount % 3) + 4]);
    }
    else {
        currentRotation = currentRotation.concat(teamArray[2]).concat(teamArray[3]).concat(teamArray[(turnCount % 3) + 4]);
    }
    return currentRotation;
}

// Checks each card in the current rotation to see if they have a turnStart skill. Will run if they do.
function turnStartSkills(currentRotation) {
  currentRotation.forEach(card => {
    if (card.turnStart()){ card.turnStart(); }
  });
}


// TODO
// Checks the adjacent cards for equivalent Ki links and activates shared links.
function linkSkillsActivate(currentRotation) {

}

// Checks then activates onAttack skills for the current rotation
function onAttackSkills(currentRotation) {
  currentRotation.forEach(card => {
    if (card.onAttack()){ card.onAttack(); }
  });
}

// Checks then activates onSA skills for the current rotation
function onSASkills(currentRotation) {
  currentRotation.forEach(card => {
    if (card.onSA()){ card.onSA(); }
  });
}

// TODO
// Returns the total damage integer for the turn after simulating the 
// turn for either of the possible positions of the main rotation 
function simAttacks(currentRotation) {
  var turnDamage = 0;
  for (let i = 1; i <= 2; i++) {
    var currentCalc = 0;
    currentRotation.forEach(card => {
      if (card.currentKi >= card.minSAKi)
        currentCalc += SACalc(card);
      else
      currentCalc += card.attackCalc();
    })
    if (currentCalc > turnDamage)
    {
      turnDamage = currentCalc;
    }
    swapRotation(teamArray);
  }
  return turnDamage;
}

// Swaps the positions of the first and second card in the current rotation.
// Used in turnSim() to see if more damage can be achieved in the current turn
function swapRotation(currentRotation) {
  [currentRotation[0], currentRotation[1]] = [currentRotation[1], currentRotation[0]];
}

// TODO
// Returns the attack for a card given its current stats
function SACalc(card){

}

// TODO
function attackCalc(card){
    
}

// Returns an array with a length of the arguement. Simulates a random amount of Ki per turn.
function randomKiGen(arrayLength) {
  // First number is the amount of ki, second is the chance of that number appearing. 
  // Adjust as needed.
  weighting = { 1:0.1, 2:0.2, 3:0.3, 4:0.2, 5:0.1, 6:0.05, 7:0.025, 8:0.025 };
  var i;
  var j;
  table=[];
  for (i in weighting) {
    for (j = 0; j < weighting[i] * 10; j++) {
      table.push(i);
    }
  }
  var k = 0;
  kiTable = [];
  while (k < arrayLength) {
    kiTable.push(table[Math.floor(Math.random() * table.length)]);
    k++;
  }
  return kiTable;
}

function addKi(rotationArray, kiArray) {

}

// Checks the given card for any afterAttack skills and runs them
function afterAttackSkills(card) {
  if (card.afterAttack()) {
    card.afterAttack(); 
  }
}

// Checks the given card for any afterSASkills skills and runs them
function afterSASkills(card) {
  if (card.afterSA()) { 
    card.afterSA();
  }
}

// TODO
// Simulates the attack of a single card
function singleCardSim() {

}

