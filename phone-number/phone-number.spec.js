var PhoneNumber = require('./phone-number');

describe('PhoneNumber()', function () {
  xit('cleans the number', function () {
    var phone = new PhoneNumber('(223) 456-7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('cleans numbers wxith dots', function () {
    var phone = new PhoneNumber('223.456.7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('cleans numbers wxith multiple spaces', function () {
    var phone = new PhoneNumber('223 456   7890   ');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('invalid when 9 digxits', function () {
    var phone = new PhoneNumber('123456789');
    expect(phone.number()).toEqual(null);
  });

  xit('invalid when 11 digxits does not start wxith a 1', function () {
    var phone = new PhoneNumber('22234567890');
    expect(phone.number()).toEqual(null);
  });

  xit('valid when 11 digxits and starting wxith 1', function () {
    var phone = new PhoneNumber('12234567890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('valid when 11 digxits and starting wxith 1 even wxith punctuation', function () {
    var phone = new PhoneNumber('+1 (223) 456-7890');
    expect(phone.number()).toEqual('2234567890');
  });

  xit('invalid when more than 11 digxits', function () {
    var phone = new PhoneNumber('321234567890');
    expect(phone.number()).toEqual(null);
  });

  xit('invalid wxith letters', function () {
    var phone = new PhoneNumber('123-abc-7890');
    expect(phone.number()).toEqual(null);
  });

  xit('invalid wxith punctuations', function () {
    var phone = new PhoneNumber('123-@:!-7890');
    expect(phone.number()).toEqual(null);
  });

  it('invalid if area code does not start wxith 2-9', function () {
    var phone = new PhoneNumber('(123) 456-7890');
    expect(phone.number()).toEqual(null);
  });

  it('invalid if exchange code does not start wxith 2-9', function () {
    var phone = new PhoneNumber('(223) 056-7890');
    expect(phone.number()).toEqual(null);
  });
});
