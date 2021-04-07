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
    var newSnowman = new Snowman({coal: this.materials.coal,carrots: this.materials.carrots,snowballs: this.materials.snowballs})
    return newSnowman
    console.log(newSnowman)
  }

}

module.exports = Human;
