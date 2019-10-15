import { RECEIVE_USERS } from '../actions/users';

/**
 * Users reducer
 * @param {object} state State
 * @param {object} action Action
 */
const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
};

export default users;
