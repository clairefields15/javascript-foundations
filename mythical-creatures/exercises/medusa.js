var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name){
    this.name = name;
    this.statues = [];
  }

  gazeAtVictim(victim) {
    var soonToBeStatue = new Statue (victim.name)
    if (this.statues.length <= 2) {
      this.statues.push(soonToBeStatue)
    } else if (this.statues.length >= 3){
      var releasedPerson = new Person (this.statues[0].name)
      releasedPerson.mood = 'relieved'
      this.statues.shift();
      this.statues.push(soonToBeStatue);
      return releasedPerson
    }
  }
}


module.exports = Medusa;
