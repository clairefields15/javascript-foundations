var eatCounter = 0

class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
  }

  greet(){
    return `Hi, ${this.rider}!`
  }

  eat() {
    eatCounter++
    if (eatCounter >= 3){
      return this.hungry = false
    }
  }
}


module.exports =
  Dragon
