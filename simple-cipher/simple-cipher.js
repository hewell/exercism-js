var letters = 'abcdefghijklmnopqrstuvwxyz';

var Cipher = function(key) {
  // empty key
  if (key === '') {
    throw Error("Bad key");
  }
  // invalid key
  if (key && !key.match(/^[a-z]+$/)) {
    throw Error("Bad key");
  }
  // default to "aaaaaaaaaa"
  this.key = key || "aaaaaaaaaa";
};

Cipher.prototype.encode = function(input) {
  var chars = input.split('');
  var output = [];
  var self = this;

  chars.forEach(function(item, index) {
    // handle short key
    if (index >= self.key.length) {
      index = index % self.key.length
    }
    // calculate the new index
    var i = letters.indexOf(item) + letters.indexOf(self.key[index])
    if (i >= letters.length) {
      i -= letters.length;
    }
    output.push(letters[i]);
  });
  return output.join('');
}

Cipher.prototype.decode = function(input) {
  var chars = input.split('');
  var output = [];
  var self = this;

  chars.forEach(function(item, index) {
    // handle short key
    if (index >= self.key.length) {
      index = index % self.key.length
    }
    // calculate the new index
    var i = letters.indexOf(item) - letters.indexOf(self.key[index])
    if (i < 0) {
      i += letters.length;
    }
    output.push(letters[i]);
  });
  return output.join('');
}

module.exports = Cipher;
