/**
 * !!! We can replace Object.getOwnPropertyNames() with Object.values()
 * if we want to freeze only enumerable objects
 *
 * @param obj - object for freezing
 * @returns {*}
 */

module.exports = function deepFreeze(obj) {
  Object.getOwnPropertyNames(obj).forEach((propertyName) => {
    const property = obj[propertyName];
    if (typeof property === 'object' && property !== null) {
      deepFreeze(property);
    }
  });

  Object.freeze(obj);
  return obj;
};


