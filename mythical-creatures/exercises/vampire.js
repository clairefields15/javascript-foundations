class Vampire {
  constructor(name, pet){
    this.name = name;

    this.pet = pet;
      if (pet === undefined){
        this.pet = 'bat'
        }

    this.thirsty = true
    this.ouncesDrank = 0
  }
//might be a more elegant way to pass the I'm too full test
  drink() {
    this.thirsty = false
    if (this.ouncesDrank <= 40){
      this.ouncesDrank += 10
    }
    return 'I\'m too full to drink anymore!'
  }
}

module.exports = Vampire
