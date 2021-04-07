class GolfCourse {
  constructor(name, difficulty, openings,features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    if (this.openings >= group.length){
      this.openings = this.openings - group.length
      for (var i = 0 ; i < group.length ; i ++){
        var golferName = group[i].name;
        this.currentlyPlaying.unshift(golferName)
      }
      return `You're checked in. Have fun!`
    } else {
      return `Sorry, we are currently booked! Please come back later.`
    }

  }
}


module.exports = GolfCourse;
