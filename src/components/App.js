import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.authedUser === null);

  React.useEffect(() => dispatch(handleInitialData()), []);

  return (
    <div>
      <LoadingBar />
      {loading ? null : (
        <>
          <Dashboard /> <Leaderboard />
        </>
      )}
    </div>
  );
};

export default App;
