var expect = require('chai').expect;
var config = require('../index');

describe('Environment Config', function() {
  describe('get()', function() {
    it('throw an error if no property is passed', function() {
      expect(config.get).to.throw('Calling get with null or undefined argument');
      expect(config.get.bind(config, null)).to.throw('Calling get with null or undefined argument');
      expect(config.get.bind(config, undefined)).to.throw('Calling get with null or undefined argument');
    });

    it('throw an error the requested property doesnt exist', function() {
      var propertyName = 'silly-billy';
      expect(config.get.bind(config, propertyName)).to.throw('Configuration property "' + propertyName + '" is not defined');
    });

    it('return the property value', function() {
      process.env['TESTING'] = 'TESTING123';
      expect(config.get('TESTING')).to.equal('TESTING123');
    });
  });
});
