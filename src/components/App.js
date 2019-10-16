import React from 'react';
import { useDispatch } from 'react-redux';
import { handleInitialData } from '../actions/shared';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => dispatch(handleInitialData()), []);

  return <div>Starter Code.</div>;
};

export default App;
