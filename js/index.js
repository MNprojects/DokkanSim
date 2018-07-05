// All DOM interactions happen in this file

// Self invoking to run when document has loaded. 
// Adds an option to all of the card dropdowns for each object contained in card_list.json
(function populateCardDropdowns(){
  let singleDropdown = document.getElementById('card-dropdown-single');
  let teamDropdown = document.getElementsByClassName('team-card-dropdown');

  for (let i = 0; i < data.length; i++) {
    let option = document.createElement('option');
    option.text = data[i].name + ' - ' + data[i].title;
    option.value = data[i].id;

    // Cloning node to allow it to be used in multiple places
    let clone = option.cloneNode(true);
    singleDropdown.appendChild(clone);
    for (let j = 0; j < teamDropdown.length; j++) {
      let clone1 = clone.cloneNode(true);
      teamDropdown[j].appendChild(clone1); 
    }
  }
})();

// Triggered by the user clicking the Run button. 
// Starts the simulation
function runButton(simMode){
  if(simMode === 'single') {
    validateSingleChoices(getSingleCard(),getSingleSALevel(),getSingleDupeStatus(),getSingleDupeSkills());
    let singleCard = prepCard(getSingleCard(),getSingleSALevel(),getSingleDupeStatus(),getSingleDupeSkills());
    singleCardSim(singleCard);
  } else if (simMode === 'team') {
    teamDivsArray = getChosenCards();
    validateTeamChoices(teamDivsArray);
    
    teamArray = setTeam(teamDivsArray);
    for (let i = 0; i < teamArray.length; i++) {
      prepCard(teamArray[i]);
    }
    runTeamValidations(teamArray);
    teamSim(teamArray, getTurnInput);
  }
}

// TODO: fill in all the values
// Adds the required K,V pairs to each card in the team
// Any validation must be done before this point
function prepCard(singleCard, SAlvlInt, dupeLevelArray, dupeSkillsArray) {
  // Adds the necessary fields for each card
  singleCard['ki'] = 0;
  singleCard['SALvl'] = SAlvlInt;
  singleCard['turnKi'] = 0;
  singleCard['AA'] = dupeSkillsArray[0];
  singleCard['Crit'] = dupeSkillsArray[1];
  // Adds the +5 boost to a stat that comes with specific types
  singleCard[dupeTypeSkill[0][singleCard['type']]] += 5;
  singleCard['maxAttack'] += calcDupeAttackBoost(dupeLevelArray);
  singleCard['currentAttack'] = singleCard['maxAttack'];
  return singleCard;
}

// TODO change SA dropdown to include/remove higher levels if needed; complete method
function checkSALevel(selectElement) {
  if (cardSA > optionSA) {
    for(i=cardSA; i < optionSA; i++){
      addSALevelOption(i);
    }
  } else if (cardSA < optionSA) {
    for(j=cardSA; j < optionSA; j++){
      removeSALevelOption(j);
    }
  }
}

function addSALevelOption(level) {

}

function removeSALevelOption(level) {

}

// Changes the display depending upon the sim-mode chosen
function simDisplay() {
  let simMode = getSimMode().value;
  if(simMode === 'single'){
    singleSimDisplay();
  } else if(simMode === 'team'){
    teamSimDisplay();
  }
}


// Adds the attack bonus from the dupe system. 
  // Must be validated against SA if BR is included, not defensive here
function calcDupeAttackBoost(dupeLevelArray) {
  let attackBoost = 0;
  let dupeStats = dupeAttackBoosts[0][singleCard['type']][singleCard['dupeRanking']]
  for (let i = 0; i < dupeLevelArray.length; i++) {
    if (dupeLevelArray[i] === 'dupe-free') {
      if (SAlvlInt >= 6) {
        attackBoost += dupeStats[dupeLevelArray[i]][3]
        attackBoost += dupeStats[dupeLevelArray[i]][2]
        attackBoost += dupeStats[dupeLevelArray[i]][1]
        attackBoost += dupeStats[dupeLevelArray[i]][0]
      } else if (SAlvlInt >= 4) {
        attackBoost += dupeStats[dupeLevelArray[i]][2]
        attackBoost += dupeStats[dupeLevelArray[i]][1]
        attackBoost += dupeStats[dupeLevelArray[i]][0]
      } else if (SAlvlInt >= 2) {
        attackBoost += dupeStats[dupeLevelArray[i]][1]
        attackBoost += dupeStats[dupeLevelArray[i]][0]
      } else {
        attackBoost += dupeStats[dupeLevelArray[i]][0]
      } 
    }
    else if (dupeLevelArray.includes('dupe-free')) {
      attackBoost += dupeStats[dupeLevelArray[i]][1]
    }
    else {
      attackBoost += dupeStats[dupeLevelArray[i]][0]
      attackBoost += dupeStats[dupeLevelArray[i]][1]
    }
  }
  return attackBoost;
}

//
// Display Functions
//

// Shows/hides the appropriate HTML
function teamSimDisplay() {
  document.getElementById('single-sim-body').classList.add("hidden");
  document.getElementById('team-sim-body').classList.remove("hidden");
  document.getElementById('sim-start-button').classList.remove("hidden");
}

// Shows/hides the appropriate HTML
function singleSimDisplay() {
  document.getElementById('team-sim-body').classList.add("hidden");
  document.getElementById('single-sim-body').classList.remove("hidden");
  document.getElementById('sim-start-button').classList.remove("hidden");
}

// Sets the HTML elements to the appropriate best values
function setSingleAutoBest() {
  document.getElementById('dupe-rainbow').click;
  document.getElementById('leader-1-dropdown').selectedIndex = 1;
  document.getElementById('leader-2-dropdown').selectedIndex = 1;
  document.getElementById('sa-dropdown-single').selectedIndex = 0;
  document.getElementById("dupe-free").checked = false;
  document.getElementById("dupe-tl").checked = false;
  document.getElementById("dupe-tr").checked = false;
  document.getElementById("dupe-bl").checked = false;
  document.getElementById("dupe-br").checked = false;
  document.getElementById("dupe-rainbow").checked = true;
  getSingleTurnInput().value = 1000;
}

// Sets the HTML elements to the appropriate best values
function setTeamAutoBest() {
  getTeamTurnInput().value = 1000;
  let teamDisplayArray = getChosenCards();
  let dupeArray = ['dupe-free-', 'dupe-tl-', 'dupe-tr-', 'dupe-bl-', 'dupe-br-', 'dupe-rainbow-']
  let saString = 'sa-dropdown-';
  for(i = 1; i < teamDisplayArray.length; i++) {
    document.getElementById(saString+i).selectedIndex = 0;
    document.getElementById(dupeArray[0]+i).checked = false;
    document.getElementById(dupeArray[1]+i).checked = false;
    document.getElementById(dupeArray[2]+i).checked = false;
    document.getElementById(dupeArray[3]+i).checked = false;
    document.getElementById(dupeArray[4]+i).checked = false;
    document.getElementById(dupeArray[5]+i).checked = true;
  }
}

//
// Getter Functions
//

// Returns an array containing the divs with the chosen card/s chosen
function getChosenCards() {
  return document.getElementsByClassName('card');
}

// Returns the element for the sim-mode dropdown 
function getSimMode() {
  return document.getElementById("sim-mode");
}

// Returns the element for the single turn count field
function getSingleTurnInput() {
  return document.getElementById('single-turn-count-input');
}

// Returns the element for the team turn count field
function getTeamTurnInput() { 
  return document.getElementById('team-turn-count-input');
}

// Returns an int for the ID of the single character
function getSingleCard() {
  id = parseInt(document.getElementById('card-dropdown-single').value)
  let singleCard;
  for (let i = 0; i < data.length; i++) {
    if(data[i].id === id) {
      singleCard = data[i];
      break;
    } 
  }
  return singleCard;
}

// Returns an array of strings with the intended dupe level
function getSingleDupeStatus() {
  let dupeArray = [];
  let checkboxes = document.getElementsByClassName('single-dupe-checkbox');
  if(checkboxes[5].checked === true) {
    dupeArray.push(checkboxes[5].id);
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      if(checkboxes[i].checked === true) {
        dupeArray.push(checkboxes[i].id);
      }
    }
  }
  dupeArray = dupeRainbowCheck(dupeArray);
  return dupeArray;
}

// Returns an int for the SA level of the single character
function getSingleSALevel() {
  return parseInt(document.getElementById('sa-dropdown-single').value);
}

// Returns an int for the SA level of the given ID 
function getTeamSALevel(idInt) {
  id = 'sa-dropdown-' + idInt;
  return parseInt(document.getElementById(id).value);
}

// Returns an array of the selected dupe level for the given character slot
function getTeamDupeLevel(idInt) {
  let dupeArray = [];
  let choicesArray = ['dupe-free','dupe-tl','dupe-tr','dupe-bl','dupe-br','dupe-rainbow'];
  for (let i = 0; i < choicesArray.length; i++) {
    let choice = choicesArray[i] + '-' + idInt;
    let choiceBool = document.getElementById(choice).checked;
    if(choiceBool === true){
      dupeArray.push(choicesArray[i]);
    }
  }
  dupeArray = dupeRainbowCheck(dupeArray);
  return dupeArray;
}

// Returns an array of the chosen dupe skills levels
function getSingleDupeSkills() {
  let dupeSkills = [];
  dupeSkills.push(parseInt(document.getElementById('aa-dropdown-single').value));
  dupeSkills.push(parseInt(document.getElementById('crit-dropdown-single').value));
  return dupeSkills;
}

// Returns an array of the chosen dupe skills levels for the given character slot
function getTeamDupeSkils(idInt) {
  let dupeSkills = [];
  aaID = 'aa-dropdown-team-' + idInt;
  critID = 'crit-dropdown-team-' + idInt;
  dupeSkills.push(document.getElementById(aaID).value);
  dupeSkills.push(document.getElementById(critID).value);
  return dupeSkills;
}

// Checks if the given array contains all of the possible trees and replaces the array with just rainbow if so
function dupeRainbowCheck(dupeArray) {
  if(dupeArray.includes('dupe-rainbow')){
    dupeArray = ['dupe-tl','dupe-bl','dupe-tr','dupe-br']
  }
  return dupeArray;
}
 