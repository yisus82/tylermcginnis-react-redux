import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import AddPoll from './AddPoll';

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.authedUser === null);

  React.useEffect(() => dispatch(handleInitialData()), []);

  return (
    <div>
      <LoadingBar />
      {loading ? null : <AddPoll />}
    </div>
  );
};

export default App;
