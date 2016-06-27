function get(property) {
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

function has(property) {
  return !!process.env[property];
}

module.exports = {
  get: get,
  has: has
};
