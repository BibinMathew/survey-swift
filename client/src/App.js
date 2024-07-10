import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CreateSurvey from './pages/CreateSurvey';
import TakeSurvey from './pages/TakeSurvey';
import ViewResults from './pages/ViewResults';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create-survey" component={CreateSurvey} />
        <Route path="/take-survey/:id" component={TakeSurvey} />
        <Route path="/view-results/:id" component={ViewResults} />
      </Switch>
    </Router>
  );
}

export default App;
