import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getPercentage } from '../utils/helpers';
import { handleAddAnswer } from '../actions/answers';

const Poll = ({ match }) => {
  const [answered, setAnswered] = React.useState(false);

  const dispatch = useDispatch();

  const { id } = match.params;

  const { authedUser, polls, users } = useSelector(state => state);

  const poll = polls[id];

  /**
   * Handles an answer
   * @param {string} answer Answer
   */
  const handleAnswer = answer => {
    setAnswered(true);
    dispatch(
      handleAddAnswer({
        authedUser,
        answer,
        id: poll.id,
      })
    );
  };

  if (!poll) {
    return <p>This poll does not exist</p>;
  }

  const keys = ['a', 'b', 'c', 'd'];
  const voteSuffix = 'Votes';
  const textSuffix = 'Text';

  const [vote] = keys.filter(key =>
    poll[`${key}${voteSuffix}`].includes(authedUser)
  );

  const totalVotes = keys.reduce(
    (total, key) => total + poll[`${key}${voteSuffix}`].length,
    0
  );

  const authorAvatar = users[poll.author].avatarURL;

  return (
    <div className="poll-container">
      <h1 className="question">{poll.question}</h1>
      <div className="poll-author">
        By <img src={authorAvatar} alt="Author's avatar" />
      </div>
      <ul>
        {keys.map(key => {
          const count = poll[`${key}${voteSuffix}`].length;

          return (
            <li key={key} className={`option${vote === key ? ' chosen' : ''}`}>
              <button
                type="button"
                onClick={() => {
                  if (!vote && !answered) {
                    handleAnswer(key);
                  }
                }}
              >
                {!vote ? (
                  poll[`${key}${textSuffix}`]
                ) : (
                  <div className="result">
                    <span>{poll[`${key}${textSuffix}`]}</span>
                    <span>
                      {getPercentage(count, totalVotes)}% ({count})
                    </span>
                  </div>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Poll.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Poll;
