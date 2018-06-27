// All DOM interactions happen in this file

var simDropdown = document.getElementById('sim-mode');

//TODO
// Changes the display depending upon the sim-mode chosen
function displaySim() {
    if(true){
 
    }
}

// Returns an array containing the card/s chosen
function getChosenCards() {
  cardArray = document.getElementsByClassName('');
  return cardArray;
}


// Triggered by the user clicking the Run button. 
// Starts the simulation
function runButton(){
  simMode = getSimMode();
  if(simMode === 'single') {
    prepCard();

    singleCardSim();
  }
  else {
    teamArray = setTeam();
    for (let i = 0; i < teamArray.length; i++) {
      prepCard(teamArray[i]);
    }
    
    runTeamValidations(teamArray);
    teamSim(teamArray, getTurnInput);
  }
}

function getSimMode() {
 return 'single'
}
function getTurnInput() {

}


//TODO: push the selected cards to team
// Clears then sets the team to equal the users choices
// Note: Leaders should always be placed at 0 and 6 for leaderSkills() to work
function setTeam() {
    team = [];
    team.push();
    return team;
}
  
// TODO: fill in all the values
// Adds the required K,V pairs to each card in the team
function prepCard(card) {
  card['ki'] = 0;
  card['turnKi'] = 0;
  card['SALvl'] = 1;
  card['maxAttack'] = card['maxAttack'] + HTMLReadPotential;
  card['currentAttack'] = card['maxAttack'];
}

