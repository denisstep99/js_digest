/**
 * clones an object deeply using JSON.
 * The slowest way to copy objects.
 * Do not support functions as values of the cloning object.
 *
 * @param object - cloning object
 */

module.exports = function deepClone(object) {
  return JSON.parse(JSON.stringify(object));
};

/**
 * clones an object deeply using recursion.
 * src/Tasks/Recursion/Deep Clone/index.js
 *
 * @param object - cloning object
 */

// todo deepClone supports loops.
