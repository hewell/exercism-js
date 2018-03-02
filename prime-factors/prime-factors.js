var primeFactors = {
  for: function(i) {
    if (i == 1) {
      return [];
    }
    if (isPrime(i)) {
      return [i];
    }
    return getPrimeFactors(i, [])
  }
};

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

const getPrimeFactors = (num, factors) => {
  if (isPrime(num)) {
    factors.push(num);
    return factors;
  }
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) {
      factors.push(i)
      return getPrimeFactors(num / i, factors)
    }
  }
  return factors;
}

module.exports = primeFactors;
