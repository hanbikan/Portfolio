import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './home.css';
import './md.css';

class Home extends React.Component {
  render(){
    return (
      <div className="Home">
        <a className="home_text color-white no-text-decoration">
          " Center Text "
        </a>
        <button className="home_button btn btn-lg color-white"> Click Here </button>
      </div>
    );
  };
}

export default Home;
