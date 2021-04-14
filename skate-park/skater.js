class Skater {
  constructor(skaterboi) {
    this.name = skaterboi.name;
    this.skill = skaterboi.skill;
    this.tricks = skaterboi.tricks;
    this.money = skaterboi.cash;
    this.frustration = 0;
  }

//if this.frustration <= 2 just gonna get more frustrated
//if it's greater than 2 return i just learned
  practice(trick) {
  if (!this.tricks[trick] && this.frustration < 2) {
    this.frustration++
  } else if (!this.tricks[trick] && this.frustration >= 2) {
    this.tricks[trick] = true;
    this.frustration = 0;
    return `I just learned to ${trick}!!!`
  }
  }
}

module.exports = Skater;
