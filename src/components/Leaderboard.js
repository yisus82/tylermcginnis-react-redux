import React from 'react';
import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const users = useSelector(state =>
    Object.values(state.users).sort(
      (a, b) =>
        b.polls.length + b.answers.length - (a.polls.length + a.answers.length)
    )
  );

  return (
    <ul>
      {users.map(user => (
        <li className="user" key={user.id}>
          <img src={user.avatarURL} alt={`Avatar for ${user.name}`} />
          <div>
            <h1>{user.name}</h1>
            <p>{user.polls.length} Polls</p>
            <p>{user.answers.length} Answers</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Leaderboard;
