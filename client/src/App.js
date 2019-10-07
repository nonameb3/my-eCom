import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/hats" exact component={()=><div>Hats Pages</div>}/>
        <Route path="/hats/:id" exact component={()=><div>Hats Pages : id</div>}/>
        <Route path="/shop" exact component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
