const Direwolf = require('./direwolf');

class Stark {
  constructor(newStark) {
    this.name= undefined;
    this.location = 'Winterfell';
    this.safe = false;
    if(newStark){
      this.name = newStark.name;
    }
    if(newStark){
      this.location = newStark.area || 'Winterfell'
    }
   }

  sayHouseWords() {
    if(!this.safe) {
    return 'Winter is Coming'
  } else {
    return 'The North Remembers'
  }
  }

  callDirewolf(wolfName, wolfHome) {
    var direwolf = new Direwolf(wolfName, wolfHome);
    direwolf.home = this.location;
    direwolf.protect(this)
    return direwolf
  }

}


module.exports = Stark
