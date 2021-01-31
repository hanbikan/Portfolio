import React from 'react';

import Home from '../components/home';
import About from '../components/about';
import Skill from '../components/skill';
import Portfolio from '../components/portfolio';
import './index.css';

class Index extends React.Component {
  render(){
    return (
      <div>
        <Home />
        <About />
        <Skill />
        <Portfolio />
      </div>
    );
  };
}

export default Index;
