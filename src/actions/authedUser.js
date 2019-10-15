export const SET_AUTHED_USER = 'SET_AUTHED_USER';

/**
 * Authenticates an user
 * @param {string} id User Id
 */
const setAuthedUser = id => ({
  type: SET_AUTHED_USER,
  id,
});

export { setAuthedUser };
