import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Index from './routes/index';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Route exact path="/" component={Index}/>
      </div>
    );
  };
}

export default App;
