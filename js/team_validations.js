// TODO: Add validation of current inputs

// Validation functions. All return true if the given inputs are valid.
function validateTeamArray(teamArray) {
    if (teamArray.class === Array) {
      return true;
    }
  }
  function validateTeamLength(teamArray) {
    if (teamArray.length === 7) {
      return true
    } 
  }
  
  // Checks each character has the correct attributes
  function validateTeamCharacters(teamArray) {
    errors = [];
    teamArray.forEach(card => {
      if (!card.property) {
         errors.push([card.name, card.property]);
      }
      else if (card.otherPropETC != 0) {
        errors.push([card.name, "otherPropETC" ,card.otherPropETC]);
      }
    });
    if (errors.length === 0) {
    return true;
    }
    else {
      return errors;
    }
  }
  
  function runTeamValidations(teamArray){
    if (!validateTeamArray(teamArray)) {
      console.log("The team is not in the correct datastructure. Expected: Array, Received: " + teamArray.class);
    }
    if (!validateTeamLength(teamArray)) {
      console.log("The array is not the length required for the simulator. Requires: 7, Received: " + teamArray.length);
    }
    errors = validateTeamCharacters(teamArray);
    if (errors != true) {
      console.log("There is something wrong with one or more of the characters given. Received: ");
      for (let i = 0; i < errors.length; i++) {
         console.log("Card: " + errors[i][0]);
         console.log("Property: " + errors[i][1]);
         console.log("Received: " + errors[i][2]);
      }
    }
  }