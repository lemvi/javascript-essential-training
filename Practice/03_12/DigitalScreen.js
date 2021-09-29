class DigitalScreen {
  constructor(name, size, dimensionsW, dimensionsH, dimensionsD, turnedOn) {
    this.name = name;
    this.size = size;
    this.dimensions = {
      width: dimensionsW,
      height: dimensionsH,
      depth: dimensionsD,
    };
    this.turnedOn = turnedOn;
  }

  togglePower(turnedOn) {
    this.turnedOn = turnedOn;
  }
}

export default DigitalScreen;
