var letters = 'abcdefghijklmnopqrstuvwxyz';

var Pangram = function(sentence) {
  this.sentence = sentence || "";
};

Pangram.prototype.isPangram = function() {
  if (this.sentence.length == 0) {
    return false;
  }

  var s = this.sentence.toLowerCase();

  var found = letters.split('').find(function(item) {
    return s.indexOf(item) <= -1;
  });

  if (found) {
    return false;
  }
  return true;

};

module.exports = Pangram;
