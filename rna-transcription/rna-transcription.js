var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(input) {
  var str = "";

  for (i = 0; i < input.length; i++) {
    switch (input[i]) {
      case 'G':
        str += 'C';
        break;
      case 'C':
        str += 'G';
        break;
      case 'T':
        str += 'A';
        break;
      case 'A':
        str += 'U';
        break;
      default:
        throw new Error("Invalid input");
    }

  }
  return str;
}


module.exports = DnaTranscriber;
