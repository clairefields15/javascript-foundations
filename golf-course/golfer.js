class Golfer {
  constructor(golferPerson) {
    this.name = golferPerson.name;
    this.handicap = golferPerson.handicap;
    this.frustration = 0;
    this.confidence = 0;
  }

  calculateAvg(par) {
    var par = par + this.handicap
    return `I usually shoot a ${par} on average.`
  }

  playRound(course) {
    if (course.difficulty === 'hard') {
      this.frustration = 500
    } else if (course.difficulty === 'moderate') {
      this.frustration = 100
    }
  }

  hitTheRange() {
    this.confidence += 10
  }

  marvel(course) {
    return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
  }

//score below 0 excellent `I AM THE GREATEST GOLFER ALIVE!` -30 frustration
//score of 0good `Booyah!` -10 frustration
//score over 0 bad `Doh!` +20frustration
  whatYaShoot(num) {
    if (num === 0) {
      this.frustration -= 10;
      return `Booyah!`
    } else if (num <0) {
      this.frustration = 0;
      return `I AM THE GREATEST GOLFER ALIVE!`
    } else {
      this.frustration += 20;
      return `Doh!`
    }
  }

}

module.exports = Golfer;
