import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { savePollAnswer } from '../utils/api';

export const ADD_ANSWER = 'ADD_ANSWER';

/**
 * Adds an answer
 * @param {object} answerData Answer data
 */
const addAnswer = ({ authedUser, id, answer }) => ({
  type: ADD_ANSWER,
  authedUser,
  id,
  answer,
});

/**
 * Handles the add answer action
 * @param {object} answerData Answer data
 */
const handleAddAnswer = answerData => dispatch => {
  dispatch(showLoading());
  return savePollAnswer(answerData)
    .then(() => dispatch(addAnswer(answerData)))
    .then(() => dispatch(hideLoading()));
};

export { handleAddAnswer };
