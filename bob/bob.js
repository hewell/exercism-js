var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.match(/^\s*$/)) {
    return "Fine. Be that way!";
  } else if (input.match(/^([^a-z]*[A-Z][^a-z]*)+\?$/)) {
    return "Calm down, I know what I'm doing!";
  } else if (input.match(/^([^a-z]*[A-Z][^a-z]*)+$/)) {
    return "Whoa, chill out!";
  } else if (input.match(/^.*\?\s*$/)) {
    return "Sure.";
  }
  return "Whatever.";
};

module.exports = Bob;
