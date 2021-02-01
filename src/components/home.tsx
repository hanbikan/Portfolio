import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './home.css';
import './md.css';

class Home extends React.Component {
  render(){
    return (
      <div className="Home">
        <p className="home_text">
          " Center Text "
        </p>
      </div>
    );
  };
}

export default Home;
