/**
 * Checks if the given item is an object
 * @param {any} item
 */
const isObject = item =>
  Object.prototype.toString.call(item) === '[object Object]';

/**
 * Calculates a percentage
 * @param {number} count Count
 * @param {number} total Total
 */
const getPercentage = (count, total) =>
  total === 0 ? 0 : Math.round((count / total) * 100);

export { isObject, getPercentage };
