import { getUsers, getPolls, savePoll, savePollAnswer } from './_DATA.js';
import { isObject } from './helpers';

/**
 * Flattens a poll
 * @param {object} poll Poll to flatten
 */
const flattenPoll = poll =>
  Object.keys(poll).reduce((flattenedPoll, key) => {
    const val = poll[key];

    if (isObject(val)) {
      flattenedPoll[`${key}Text`] = val.text;
      flattenedPoll[`${key}Votes`] = val.votes;
      return flattenedPoll;
    }

    flattenedPoll[key] = val;

    return flattenedPoll;
  }, {});

/**
 * Formats an array of polls
 * @param {object[]} polls Polls to format
 */
const formatPolls = polls => {
  const pollIds = Object.keys(polls);

  return pollIds.reduce((formattedPolls, id) => {
    formattedPolls[id] = flattenPoll(polls[id]);
    return formattedPolls;
  }, {});
};

/**
 * Formats an array of users
 * @param {object[]} users Users to format
 */
const formatUsers = users =>
  Object.keys(users).reduce((formattedUsers, id) => {
    const user = users[id];

    formattedUsers[id] = {
      ...user,
      answers: Object.keys(user.answers),
    };

    return formattedUsers;
  }, {});

/**
 * Gets the initial data
 */
const getInitialData = () =>
  Promise.all([getUsers(), getPolls()]).then(([users, polls]) => ({
    users: formatUsers(users),
    polls: formatPolls(polls),
  }));

/**
 * Saves and flattens a poll
 * @param {object} poll Poll to save and flatten
 */
const saveAndFlattenPoll = poll => savePoll(poll).then(p => flattenPoll(p));

export { getInitialData, saveAndFlattenPoll as savePoll, savePollAnswer };
