class Direwolf{
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(newStark) {
    if(this.home === newStark.location && this.starksToProtect.length <= 1) {
      this.starksToProtect.push(newStark);
      newStark.safe = true;
      this.huntsWhiteWalkers = false;
    }
  }

  leave(newStark) {
    this.starksToProtect.pop();
    newStark.safe = false;
  }
}

module.exports = Direwolf;
