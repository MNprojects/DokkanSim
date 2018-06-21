console.log(data);
console.log(data[0].name);
console.log(data[0].title);


// let dropdown = document.getElementById('card-dropdown');
// let defaultOption = document.createElement('option');
// defaultOption.text = 'Choose a card';
// dropdown.add(defaultOption);

var cards = []



for(var i=0; i < cards.length; i++)
{
    var option=$('<option></option>').text(cards[i]['type'] + " - " + cards[i]['name']   + " -  " + cards[i]['title']);
  $('select').append(option);
  var fun = new Function ("cards[i]['onSA']")


}

// function newCard(obj) {
//   this.title = obj.title;
//   this.name = obj.name;
//   this.type = obj.type;

//   this.SALvl = obj.SALvl;
//   this.maxAttack = obj.maxAttack;
//   this.currentAttack = obj.maxAttack;

//   this.kiMultiplier = obj.kiMultiplier;
//   this.saMultiplier = obj.saMultiplier;
//   this.currentSAMultiplier = obj.kiMultiplier;
//   this.saScaling = obj.saScaling;
//   this.SAKiLevel = obj.SAKiLevel;

//   this.categories = obj.categories;
//   this.kiLinks = obj.kiLinks;

//   this.ki = obj.ki;
//   this.turnKi = obj.turnKi;

//   this.flatLeader = obj.flatLeader;
//   this.percLeader = obj.percLeader;

//   this.percTurnStart = obj.percTurnStart;
//   this.flatTurnStart = obj.flatTurnStart;

//   this.buildUpPassive = obj.buildUpPassive;
//   this.percOnAttack = obj.percOnAttack;
//   this.flatOnAttack = obj.flatOnAttack;
//   this.percOnSA = obj.percOnSA;
//   this.flatOnSA = obj.flatOnSA;
// }

