import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './skill.css';
import './md.css';
import img_html from '../images/skill/html.png';
import img_css from '../images/skill/css.png';
import img_js from '../images/skill/js.png';
import img_mongodb from '../images/skill/mongodb.jpeg';
import img_nodejs from '../images/skill/nodejs.png';
import img_ps from '../images/skill/ps.svg';
import img_ts from '../images/skill/ts.png';
import img_react from '../images/skill/react.png';

class Skill extends React.Component {
  render(){
    return (
      <div className="Skill">
        <div className="skill_title">
          <a className="st_text no-text-decoration color-black"> Skills </a>
          <div style={{
            width:'4rem',
            height:'0.5rem'
          }} className="underline"></div>
        </div>
        <div className="skill_list">
          <img className="sl_img" src={img_html} />
          <img className="sl_img" src={img_css} />
          <img className="sl_img" src={img_js} />
          <img className="sl_img" src={img_ts} />
          <img className="sl_img" src={img_react} />
          <img className="sl_img" src={img_nodejs} />
          <img className="sl_img" src={img_mongodb} />
          <img className="sl_img" src={img_ps} />
        </div>
      </div>
    );
  };
}

export default Skill;
