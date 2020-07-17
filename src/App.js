import React from 'react';
import './App.css';
import { MainPage } from './components/MainPage/MainPage';
import { Switch, Route } from 'react-router-dom';
import { InfoPage } from './components/InfoPage/InfoPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={MainPage} />
      <Route exact path='/infopage/:id' component={InfoPage} />
    </Switch>
  );
}

export default App;
