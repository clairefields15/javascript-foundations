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

  callDirewolf() {
    var wolf = new Direwolf()
  }

}


module.exports = Stark
