import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './home.css';
import './md.css';
import {BrightnessHigh} from 'react-bootstrap-icons';

class Home extends React.Component {
  render(){
    return (
      <div className="Home">
        <BrightnessHigh color="white" size={96}/>
        <p className="home_text">
          안녕하세요, 제 이름은 <b>강한빛</b>입니다.
        </p>
      </div>
    );
  };
}

export default Home;
