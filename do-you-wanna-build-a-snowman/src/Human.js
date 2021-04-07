var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {snowballs: 0, coal: 0, buttons: 0, carrots: 0};
  }


  gatherMaterials(item, num) {
    this.materials[item]+= num

    // if(item === 'carrots') {
    //   this.materials.carrots += num
    // } else if (item === 'buttons'){
    //   this.materials.buttons += num
    // } else if (item === 'coal'){
    //   this.materials.coal += num
    // }
  }

  buildASnowman() {
    var newSnowman = new Snowman(this.materials)
    return newSnowman
    console.log(newSnowman)
  }


  placeMagicHat() {
      var snowman1 = new Snowman(this.materials);
      snowman1.canWearMagicHat();

      if (snowman1.magicHat === true){
        return 'Woah, this snowman is coming to life!'
      } else{
        return 'I guess I didn\'t build it correctly.'
      }
    }

}

module.exports = Human;
