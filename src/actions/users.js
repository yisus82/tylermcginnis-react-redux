export const RECEIVE_USERS = 'RECEIVE_USERS';

/**
 * Receives the users
 * @param {object} users Users object
 */
const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export { receiveUsers };
