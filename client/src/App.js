import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './pages/homepage/homepage.compoent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
