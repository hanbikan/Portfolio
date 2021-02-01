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
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll);
    let elems:Array<HTMLElement> = Array.from(document.getElementsByClassName('sl_img') as HTMLCollectionOf<HTMLElement>);
    let delay:number = 0.4;
    const timeToAdded:number = 0.07;
    elems.forEach((elem:HTMLElement) => {
      elem.style.transitionDelay = delay+'s';
      delay+=timeToAdded;
    })
  }

  onScroll = () => {
    let elems:Array<HTMLElement> = Array.from(document.getElementsByClassName('sl_img') as HTMLCollectionOf<HTMLElement>);
    elems.forEach((elem:HTMLElement) => {
      if(!this.isElementUnderBottom(elem, 0)){
        elem.style.opacity = "100";
      }
    })
  }

  isElementUnderBottom(elem: HTMLElement, offsetY: number){
    const {top} = elem.getBoundingClientRect();
    const {innerHeight} = window;
    return top > innerHeight - offsetY;
  }
  render(){
    return (
      <div className="Skill">
        <div className="skill_title">
          <p className="st_text text"> Skills </p>
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
