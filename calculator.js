turnCount = 0;
turnMax = 10;
team = [];
firstRotation = ["1First", "2First"];
secondRotation = ["1Second", "2Second"];
floaters = ["1Float", "2Float", "3Float"];
currentRotation = [];
turnDamage = [];
dupeAttackBoost = [
  {
    'TEQ': {
      'S': {
        'free':,
        'br':,
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


function runButton(){
  if(true)
  {
    singleCardSim();
  }
  else if(true)
  {
    teamSim();
  }
}



// Follows the order of operations the game uses
function teamSim() {
  setTeam();
  prepCards();
  setRotations();
  leaderSkills();
    while(turnCount < turnMax) {
      currentRotationGetter();
      turnStartSkills();
      kiLinksActivate();
      onAttackSkills();
      onSASkills();
      simAttacks();
      afterAttackSkills();
      afterSASkills();
      turnCount++;
    }
}

// Clears then sets the team to equal the users choices
function setTeam() {
  team = [];
  team.push();
}

// Adds the required K,V pairs to each card in the team
function prepCards(){
  team.forEach(card => 
    { card['ki'] = 0;
      card['SALvl'] = 1;
      card['maxAttack'] = card[''] + ;
      card[''] = ;
      card[] = ;
      card[] = ;
      card[] = ;
    })
}

// Sets the rotation arrays to be equal to the users chosen cards/order
function setRotations() {
  firstRotation = [];
  secondRotation = [];
  floaters = [];
  firstRotation.push();
  secondRotation.push();
  floaters.push();
}

// Checks for the type of leaderskill each of the designated leaders has and runs that on the team.
function leaderSkills() {
  if (team[0].percLeader){ team[0].percLeader(); }
  if (team[6].percLeader){ team[6].percLeader(); }
  if (team[0].flatLeader){ team[0].flatLeader(); }
  if (team[6].flatLeader){ team[6].flatLeader(); }
}


// Uses modular maths to find the current rotation and floater depending upon the current turnCount.
function currentRotationGetter(){
    if (turnCount % 2 === 0){
        currentRotation = firstRotation.concat(floaters[turnCount % 3]);
    }
    else {
        currentRotation = secondRotation.concat(floaters[turnCount % 3]);
    }
}

// Checks each card in the current rotation to see if they have a turnStart skill. Will run if they do.
function turnStartSkills() {
  currentRotation.forEach(card => {
    if (card.turnStart()){ card.turnStart(); }
  });
}

function kiLinksActivate() {

}

function onAttackSkills() {
  currentRotation.forEach(card => {
    card.onAttack();
  });
}

function onSASkills() {
  currentRotation.forEach(card => {
    card.onSA();
  });
}

function simAttacks() {
  currentRotation.forEach(card => {
    if (card.currentKi >= card.minSAKi)
      card.SAcalc();
    else
    card.attackCalc();
  })
}

function calculateBestDamage(currentRotation){
    currentRotation.forEach(card => {

    });
}

function calculateDamage(currentRotation, ki){
    currentRotation.forEach(card => {

    });
}

// Returns an array with 3 numbers.
function randomKiGen() {
  // First number is the amount of ki, second is the chance of that number appearing. Adjust accordingly.
  weighting = { 1:0.1, 2:0.2, 3:0.3, 4:0.2, 5:0.1, 6:0.05, 7:0.025, 8:0.025 };

  var i, j, table=[];
  for (i in weighting) {
    for (j=0; j<weighting[i]*10; j++) {
      table.push(i);
    }
  }
  k = 0;
  kiTable = [];
  while (k < 3) {
    kiTable.push(table[Math.floor(Math.random() * table.length)]);
    k++;
  }
  return kiTable;
}

function afterAttackSkills() {
  currentRotation.forEach(card => {
    card.afterAttack();
  });
}

function afterSASkills() {
  currentRotation.forEach(card => {
    card.afterSA();
  });
}


function singleCardSim() {

}

