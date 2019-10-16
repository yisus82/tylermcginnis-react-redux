import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.authedUser === null);

  React.useEffect(() => dispatch(handleInitialData()), []);

  return (
    <div>{loading ? <h1 className="center">LOADING</h1> : <Dashboard />}</div>
  );
};

export default App;
