import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { savePoll } from '../utils/api';

export const RECEIVE_POLLS = 'RECEIVE_POLLS';
export const ADD_POLL = 'ADD_POLL';

/**
 * Receives the polls
 * @param {object} polls Polls object
 */
const receivePolls = polls => ({
  type: RECEIVE_POLLS,
  polls,
});

/**
 * Adds a poll
 * @param {object} poll Poll object
 */
const addPoll = poll => ({
  type: ADD_POLL,
  poll,
});

/**
 * Handles adding a poll
 * @param {object} poll Poll object
 */
const handleAddPoll = poll => (dispatch, getState) => {
  const { authedUser } = getState();

  dispatch(showLoading());
  return savePoll({
    ...poll,
    author: authedUser,
  })
    .then(newPoll => dispatch(addPoll(newPoll)))
    .then(() => dispatch(hideLoading()));
};

export { receivePolls, handleAddPoll };
