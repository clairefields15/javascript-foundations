class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = []
  }

  receiveBelief() {
    this.dust += 1
  }

  believe() {
    this.dust +=10;
  }

  makeDresses(arrayOfFlowers) {
    for(var i = 0; i < arrayOfFlowers.length ; i ++){
      this.clothes.dresses.push(arrayOfFlowers[i])
    }
  }

  becomeProvoked() {
    this.disposition = 'Vengeful'
  }

  replaceInfant(baby) {
    if (this.disposition === 'Vengeful') {
      baby.disposition = 'Malicious';
      this.humanWards.push(baby);
      if (this.humanWards.length >= 3) {
        this.disposition = 'Good natured'
      }
    } else {
      return baby
    }
  }
}

module.exports = Fairy;
