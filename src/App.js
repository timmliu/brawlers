import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './screens/Home';
import Detail from './screens/Detail';

let HomeRoute = () => <Home />
let DetailRoute = () => <Detail />

function App() {
  return (
    <div className="App">
      <Router>
        <HomeRoute path="/" />
        <DetailRoute path="detail" />
      </Router>
    </div>
  );
}

export default App;
