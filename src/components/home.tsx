import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './home.css';
import './md.css';
import {BrightnessHigh, BrightnessHighFill} from 'react-bootstrap-icons';

class Home extends React.Component {
  componentDidMount(){
    let elem = document.getElementsByClassName('home__text')[0] as HTMLElement;
    elem.style.marginTop = "1rem";
    elem.style.opacity = "100";
  }

  handleClick = () => {
    const about = document.getElementById('About');
    window.scroll({
      top: about.offsetTop,
      left:0,
      behavior: 'smooth'
    });
  }
  render(){
    return (
      <div className="Home" id="Home">
        <BrightnessHigh color="white" className="brightnessHigh" />
        <div className="brightnessHighFill" onClick={this.handleClick} ></div>
        <p className="home__text">
          안녕하세요, 제 이름은 <b>강한빛</b>입니다.
        </p>
      </div>
    );
  };
}

export default Home;
