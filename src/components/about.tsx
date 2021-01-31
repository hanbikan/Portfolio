import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './about.css';
import './md.css';
import img_portrait from '../images/user_gray.png';

class About extends React.Component {
  render(){
    return (
      <div className="About">
        <div className="about_title">
          <a className="at_text color-black no-text-decoration"> ABOUT </a>
          <div style={{
            width:'4rem',
            height:'0.5rem'
          }} className="underline"></div>
        </div>
        <div className="about_introduce">
          <img className="ai_portrait" src={img_portrait}/>
          <a className="ai_text color-black no-text-decoration">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </a>
        </div>
      </div>
    );
  };
}

export default About;
