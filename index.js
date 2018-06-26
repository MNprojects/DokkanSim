// TODO: Get values for each type and branch
dupeBoosts = [
    {
      'TEQ': {
        'S': {
          //EXAMPLE 'free':[1000, 3, 5, 0, 5],
          // 'br':[AttackBoost, SABoost, AAChanceMax, CritChanceMax, TotalChanceMax],
          'bl':,
          'tr':,
          'tl':,
  
          },
        'A': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 5400
        },
        'B': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 3240
          }
        },
      'AGL': {
        'S': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 7000
          },
        'A': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 5400
        },
        'B': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 3000
          }
        },
      'STR': {
        'S': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 7560
          },
        'A': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 5400
        },
        'B': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 3240
          }
        },
      'PHY': {
        'S': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 7000
          },
        'A': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 5000
        },
        'B': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 3000
          }
        },
      'INT': {
        'S': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 7000
          },
        'A': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 5000
        },
        'B': {
          'free':,
          'br':,
          'bl':,
          'tr':,
          'tl': 3000
          }
        },
  
    }
  ];
// Triggered by the user clicking the Run button. 
// Starts the simulation
function runButton(){
    // TODO: Pull the value of the sim-mode dropdown to decide which to run.
    if(sim-mode === 'single')
    {
      singleCardSim();
    }
    else
    {
      setTeam();
      teamSim(team);
    }
  }
var simDropdown = document.getElementById('sim-mode');

function displaySim() {
    if(true){
        var weird = document.createElement('option');
    }
    
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
  function prepCards(teamArray){
    teamArray.forEach(card => 
      { card['ki'] = 0;
        card['SALvl'] = 1;
        card['maxAttack'] = card['maxAttack'] + HTMLReadPotential;
        card[''] = ;
        card[] = ;
        card[] = ;
        card[] = ;
      })
  }