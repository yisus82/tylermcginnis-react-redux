import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import Dashboard from './Dashboard';
import Leaderboard from './Leaderboard';
import Poll from './Poll';
import AddPoll from './AddPoll';

const App = () => {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.authedUser === null);

  React.useEffect(() => dispatch(handleInitialData()), [dispatch]);

  return (
    <Router>
      <>
        <LoadingBar />
        <div className="container">
          <Nav />
          {loading ? null : (
            <div>
              <Route path="/" exact component={Dashboard} />
              <Route path="/leaderboard" component={Leaderboard} />
              <Route path="/polls/:id" component={Poll} />
              <Route path="/add" component={AddPoll} />
            </div>
          )}
        </div>
      </>
    </Router>
  );
};

export default App;
