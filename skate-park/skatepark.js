

class SkatePark {
  constructor(skatepark) {
    this.name = skatepark.name;
    this.yearFounded = skatepark.year;
    this.style = skatepark.type;
    this.features = skatepark.features;
    //is what happens on the left side of the || truthy or falsy?
    //that's why it doesn't work to have false first
    this.isPrivate = skatepark.isPrivate || false;
    this.cost = skatepark.price || 0;
    this.occupants = [];
  }

  admit(skater) {
    if (!this.isPrivate) {
      this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`
    } else if (this.isPrivate && skater.money >= this.cost && this.occupants.length < 3) {
      skater.money = skater.money - this.cost;
      this.occupants.push(skater);
      return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
    } else if (this.isPrivate && skater.money < this.cost) {
      return `Sorry, you don't have enough money.`
    } else if (this.occupants.length >=3) {
      return `Sorry, we are at max capacity. Thank you for understanding.`
    }
    }
}

module.exports = SkatePark;
