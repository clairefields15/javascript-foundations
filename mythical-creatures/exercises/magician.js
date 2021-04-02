class Magician {
  constructor(magicMan){
    this.name = `The Great ${magicMan.name}`;
    this.assistant = magicMan.assistant;
    this.favoriteAccessory = magicMan.clothing || 'top hat';
    this.confidencePercentage = 10
  }

  performIncantation(magic) {
    return magic.toUpperCase(magic) + "!";
  }

  performTrick() {
    this.confidencePercentage +=10
    if (this.favoriteAccessory === 'top hat') {
      return `PULL RABBIT FROM TOP HAT`
    } else {
      return 'PULL DOVE FROM SLEEVE'
    }
  }

  performShowStopper() {
    if (this.confidencePercentage < 100 || !this.assistant) {
      return 'Oh no, this trick is not ready!'
    } else {
      return 'WOW! The magician totally just sawed that person in half!'
    }
  }

}


module.exports = Magician
