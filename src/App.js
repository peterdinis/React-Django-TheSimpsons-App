import React from 'react';
import Navbar from './components/Navbar';
import AllCharacters from './components/AllCharacters';
import CreateCharacter from './components/CreateCharacter';
import {Route, Switch} from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path='/all' component={AllCharacters} />
          <Route exact path='/create' component={CreateCharacter} />
        </Switch>
    </div>
  );
}

export default App;
