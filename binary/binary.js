class Binary {

  constructor(input) {
    this.string = input;
  }

  toDecimal() {
    // should only contain 1s & 0s
    if (!this.string.match(/^[10]*$/)) {
      return 0;
    }
    
    let chars = this.string.split('');
    let dec = 0;
    chars.forEach(function(item, index){
      dec += Number(item) * Math.pow(2, chars.length - index - 1);
    });
    return dec;
  }
}

module.exports = Binary;
