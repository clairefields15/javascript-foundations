class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.crankyCounter = 0;
  }

  shootBow() {
    this.crankyCounter++;
    if (this.crankyCounter >= 3 || this.layingDown === true) {
      this.cranky = true;
      return `NO!`
    }
    return `Twang!!!`
  }

  run() {
    if (this.cranky === true || this.layingDown === true) {
      return `NO!`
    }
    this.cranky = true;
    return `Clop clop clop clop!!!`
  }

  sleep() {
    if (this.layingDown === true) {
      this.cranky = false;
      return `ZZZZ`
    }
    return `NO!`
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.layingDown === true) {
      return `Not while I\'m laying down!`
    }
    this.cranky = false;
  }
}

module.exports = Centaur;

//shooting bow 3x should change this.cranky to true
//store how many times shoot in a variable, crankyCounter
//if crankyCounter >= 3, change this.cranky to true
//   shootBow() {
//     if (this.cranky === true || this.layingDown === true) {
//       return `NO!`
//     }
//     return `Twang!!!`
//   }
//
//   run () {
//     if (this.cranky === false || !this.layingDown) {
//       this.cranky = true;
//       return `Clop clop clop clop!!!`;
//     } else if (this.layingDown === true){
//       return `NO!`
//     }
//   }
//
//
//   layDown() {
//     this.standing = false;
//     this.layingDown = true;
//   }
//
//   standUp() {
//     this.standing = true;
//     this.layingDown = false;
//   }
//
//
