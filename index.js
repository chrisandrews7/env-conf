/**
 * enviro-conf <https://github.com/chrisandrews7/enviro-conf>
 */

'use strict';

/**
 * Get a config property value
 * @param  {string} property Property key
 * @return {string}          Property value
 */
var get = function(property) {
  // Produce an exception if no property is passed
  if(!property) {
    throw new Error('Calling get with null or undefined argument');
  }

  // Produce an exception if the property doesn't exist
  if(!process.env[property]) {
    throw new ReferenceError('Configuration property "' + property + '" is not defined')
  }

  return process.env[property];
}

/**
 * Check whether a config property exists
 * @param  {string} property Property key
 * @return {bool}
 */
var has = function(property) {
  return !!process.env[property];
}

module.exports = {
  get: get,
  has: has
};
