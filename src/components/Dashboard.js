import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const [show, setShow] = React.useState('unanswered');

  const answers = useSelector(state => state.users[state.authedUser].answers);
  const polls = useSelector(state => state.polls);

  const answered = answers
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const unanswered = Object.keys(polls)
    .filter(id => !answers.includes(id))
    .map(id => polls[id])
    .sort((a, b) => b.timestamp - a.timestamp);

  const showUnanswered = () => setShow('unanswered');

  const showAnswered = () => setShow('answered');

  const list = show === 'answered' ? answered : unanswered;

  return (
    <div>
      <div className="dashboard-toggle">
        <button
          type="button"
          style={{
            textDecoration: show === 'unanswered' ? 'underline' : null,
          }}
          onClick={showUnanswered}
        >
          Unanswered
        </button>
        <span> | </span>
        <button
          type="button"
          style={{
            textDecoration: show === 'answered' ? 'underline' : null,
          }}
          onClick={showAnswered}
        >
          Answered
        </button>
      </div>
      <ul className="dashboard-list">
        {list.map(poll => (
          <li key={poll.id}>{poll.question}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
