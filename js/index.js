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

// Changes the display depending upon the sim-mode chosen
function simDisplay() {
  let simMode = getSimMode().value;
  if(simMode === 'single'){
    singleSimDisplay();
  } else if(simMode === 'team'){
    teamSimDisplay();
  }
}

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


// Returns an array containing the divs with the chosen card/s chosen
function getChosenCards() {
  return document.getElementsByClassName('card');
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

// Triggered by the user clicking the Run button. 
// Starts the simulation
function runButton(simMode){
  if(simMode === 'single') {
    prepCard(getSingleCard(),);
    validateSingleCard();
    singleCardSim();
  }
  else {
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

function getSimMode() {
  return document.getElementById("sim-mode");
}
function getSingleTurnInput() {
  return document.getElementById('single-turn-count-input');
}
function getTeamTurnInput() { 
  return document.getElementById('team-turn-count-input');
}

function getSingleCard(){
  return parseInt(document.getElementById('card-dropdown-single').value);
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

function getSingleSALevel() {
  return document.getElementById('sa-dropdown-single').value;
}

function getTeamSALevel(idInt) {
  id = 'sa-dropdown-' + idInt;
  return document.getElementById(id).value;
}

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
  if(dupeArray.includes('dupe-rainbow')) {
    dupeArray = ['dupe-rainbow']
  }
  dupeArray = dupeRainbowCheck(dupeArray);

  return dupeArray;
}

function dupeRainbowCheck(dupeArray){
  if(dupeArray.includes('dupe-tl') && dupeArray.includes('dupe-tr') && dupeArray.includes('dupe-bl') && dupeArray.includes('dupe-br')) {
    dupeArray = ['dupe-rainbow']
  }
  return dupeArray;
}
  
// TODO: fill in all the values
// Adds the required K,V pairs to each card in the team
function prepCard(cardIDString, SAlvlInt, dupeArray) {
  let singleCard;
  data.forEach(card => {
    if(card.id === parseInt(cardIDString)) {
      singleCard = card;
    }
  })
  singleCard['ki'] = 0;
  singleCard['SALvl'] = SAlvlInt;
  singleCard['turnKi'] = 0;
  singleCard['maxAttack'] = card['maxAttack'];
  singleCard['currentAttack'] = card['maxAttack'];
  return singleCard;
}

