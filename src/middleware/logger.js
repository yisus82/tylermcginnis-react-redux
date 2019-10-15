/**
 * Logger middleware
 * @param {object} store Redux store
 */
const logger = store => next => action => {
  console.group(action.type);
  console.log('The action:', action);
  const returnValue = next(action);
  console.log('The new state:', store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
