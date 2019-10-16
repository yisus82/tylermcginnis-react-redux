import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { handleInitialData } from '../actions/shared';
import Poll from './Poll';

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.authedUser === null);

  React.useEffect(() => dispatch(handleInitialData()), [dispatch]);

  return (
    <div>
      <LoadingBar />
      {loading ? null : (
        <Poll match={{ params: { id: 'loxhs1bqm25b708cmbf3g' } }} />
      )}
    </div>
  );
};

export default App;
