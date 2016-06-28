var expect = require('chai').expect;
var faker = require('faker');
var config = require('../index');

describe('Environment Config', function() {
  var testKeyValue;

  beforeEach(function() {
    testKeyValue = {
      key: faker.random.word(),
      value: faker.random.word()
    };
  });

  describe('get()', function() {
    it('should throw an error if no property is passed', function() {
      expect(config.get).to.throw('Calling get with null or undefined argument');
      expect(config.get.bind(config, null)).to.throw('Calling get with null or undefined argument');
      expect(config.get.bind(config, undefined)).to.throw('Calling get with null or undefined argument');
    });

    it('should throw an error if the requested property doesnt exist', function() {
      expect(config.get.bind(config, testKeyValue.key)).to.throw('Configuration property "' + testKeyValue.key + '" is not defined');
    });

    it('should return the property value', function() {
      process.env[testKeyValue.key] = testKeyValue.value;
      expect(config.get(testKeyValue.key)).to.equal(testKeyValue.value);
    });
  });

  describe('has()', function() {
    it('should return true if the property exists', function() {
      process.env[testKeyValue.key] = testKeyValue.value;
      expect(config.has(testKeyValue.key)).to.be.true;
    });

    it('should return false if the property doesnt exist', function() {
      expect(config.has(testKeyValue.key)).to.be.false;
    });

    it('should return false if no property is passed', function() {
      expect(config.has()).to.be.false;
    });
  });
});
