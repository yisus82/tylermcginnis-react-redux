import { RECEIVE_POLLS } from '../actions/polls';

/**
 * Polls reducer
 * @param {object} state State
 * @param {object} action Action
 */
const polls = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    default:
      return state;
  }
};

export default polls;
