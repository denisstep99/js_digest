/**
 * clones an object deeply.
 * @param object - cloning object.
 */

function deepClone(object) {
  if(Array.isArray(object)) {
    if (object.length === 0) {
      return [];
    } else {
      return object.map(value => deepClone(value));
    }
  }

  const newObject = {};
  Object.getOwnPropertyNames(object).forEach((propertyName) => {
    const propertyValue = object[propertyName];
    if (typeof propertyValue === 'object' && propertyValue !== null) {
      newObject[propertyName] = deepClone(propertyValue);
    } else {
      newObject[propertyName] = propertyValue;
    }
  });

  return newObject;
}

module.exports = deepClone;
