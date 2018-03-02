class Gigasecond {
  constructor(date) {
    this.d = date;
  }
  date() {
    return new Date(this.d.getTime() + 1e12); //milliseconds
  }
}

module.exports = Gigasecond;
