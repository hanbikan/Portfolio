import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './skill.css';
import './md.css';
import img_html from '../images/skill/html.png';
import img_css from '../images/skill/css.png';
import img_js from '../images/skill/js.png';
import img_mongodb from '../images/skill/mongodb.jpeg';
import img_nodejs from '../images/skill/nodejs.png';
import img_python from '../images/skill/python.png';

import img_asm from '../images/skill/asm.png';
import img_cs from '../images/skill/cs.svg';
import img_vb from '../images/skill/vb.png';
import img_mysql from '../images/skill/mysql.png';
import img_ahk from '../images/skill/ahk.png';
import img_gm from '../images/skill/gm.jpg';
import img_unity from '../images/skill/unity.png';
import img_ts from '../images/skill/ts.png';
import img_react from '../images/skill/react.png';
import img_kotlin from '../images/skill/kotlin.png';
import img_ps from '../images/skill/ps.svg';

class Skill extends React.Component {
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll);
    let elems:Array<HTMLElement> = Array.from(document.getElementsByClassName('pop_in_order') as HTMLCollectionOf<HTMLElement>);
    let delay:number = 0.4;
    const timeToAdded:number = 0.07;
    elems.forEach((elem:HTMLElement) => {
      elem.style.transitionDelay = delay+'s';
      delay+=timeToAdded;
    })
    this.onScroll();
  }

  onScroll = () => {
    let elems:Array<HTMLElement> = Array.from(document.getElementsByClassName('pop_in_order') as HTMLCollectionOf<HTMLElement>);
    if(!this.isElementUnderBottom(elems[0], 0)){
      elems.forEach((elem:HTMLElement, i:number) => {
        elem.style.transitionDuration="1s";
        elem.style.opacity = "100";
        elem.style.transform = "scale(1)";
      })
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  isElementUnderBottom(elem: HTMLElement, offsetY: number){
    const {top} = elem.getBoundingClientRect();
    const {innerHeight} = window;
    return top > innerHeight - offsetY;
  }

  render(){
    return (
      <div className="Skill" id="Skill">
        <div className="skill_title">
          <p className="st_text text"> Skills </p>
          <div style={{
            width:'4rem',
            height:'0.5rem'
          }} className="underline"></div>
        </div>
        
        <div className="skill_area">
          <div className="skill_type pop_in_order">
            <p>Strong</p>
          </div>
          <div className="skill_list">
            <img className="sl_img pop_in_order" src={img_html}  />
            <img className="sl_img pop_in_order" src={img_css}  />
            <img className="sl_img pop_in_order" src={img_js}  />
            <img className="sl_img pop_in_order" src={img_nodejs}  />
            <img className="sl_img pop_in_order" src={img_mongodb}  />
            <img className="sl_img pop_in_order" src={img_python}  />
          </div>
        </div>
        
        <div className="skill_area">
          <div className="skill_type pop_in_order">
            <p>Knowledgeable</p>
          </div>
          <div className="skill_list">
            <img className="sl_img pop_in_order" src={img_asm}  />
            <img className="sl_img pop_in_order" src={img_gm}  />
            <img className="sl_img pop_in_order" src={img_vb}  />
            <img className="sl_img pop_in_order" src={img_ahk}  />
            <img className="sl_img pop_in_order" src={img_ts}  />
            <img className="sl_img pop_in_order" src={img_react}  />
            <img className="sl_img pop_in_order" src={img_mysql}  />
            <img className="sl_img pop_in_order" src={img_kotlin}  />
            <img className="sl_img pop_in_order" src={img_cs}  />
            <img className="sl_img pop_in_order" src={img_unity}  />
            <img className="sl_img pop_in_order" src={img_ps}  />
          </div>
        </div>
      </div>
    );
  };
}

export default Skill;
