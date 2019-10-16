import { RECEIVE_USERS } from '../actions/users';
import { ADD_POLL } from '../actions/polls';
import { ADD_ANSWER } from '../actions/answers';

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
    case ADD_POLL: {
      const { poll } = action;
      const { author, id } = poll;

      return {
        ...state,
        [author]: {
          ...state[author],
          polls: [...state[author].polls, id],
        },
      };
    }
    case ADD_ANSWER: {
      const user = state[action.authedUser];

      return {
        ...state,
        [action.authedUser]: {
          ...user,
          answers: [...user.answers, action.id],
        },
      };
    }

    default:
      return state;
  }
};

export default users;
