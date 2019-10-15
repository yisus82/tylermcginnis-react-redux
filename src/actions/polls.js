export const RECEIVE_POLLS = 'RECEIVE_POLLS';

/**
 * Receives the polls
 * @param {object} polls Polls object
 */
const receivePolls = polls => ({
  type: RECEIVE_POLLS,
  polls,
});

export { receivePolls };
