import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { getInitialData } from '../utils/api';
import { receiveUsers } from './users';
import { receivePolls } from './polls';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = 'tylermcginnis';

/**
 * Handles the initial data
 */
const handleInitialData = () => dispatch => {
  dispatch(showLoading());
  getInitialData().then(({ users, polls }) => {
    dispatch(receiveUsers(users));
    dispatch(receivePolls(polls));
    dispatch(setAuthedUser(AUTHED_ID));
    dispatch(hideLoading());
  });
};

export { handleInitialData };
