import React from 'react';

import Home from '../components/home';
import About from '../components/about';
import Skill from '../components/skill';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import './index.css';

class Index extends React.Component {
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    let elems:Array<HTMLElement> = Array.from(document.getElementsByClassName('underline') as HTMLCollectionOf<HTMLElement>);
    elems.forEach((elem:HTMLElement) => {
      if(!this.isElementUnderBottom(elem, 0)){
        elem.style.marginLeft = "0";
        elem.style.opacity = "100";
      }
    })
    elems = Array.from(document.getElementsByClassName('text') as HTMLCollectionOf<HTMLElement>);
    elems.forEach((elem:HTMLElement) => {
      if(!this.isElementUnderBottom(elem, 0)){
        elem.style.marginLeft = "0";
        elem.style.opacity = "100";
      }
    })
    elems = Array.from(document.getElementsByClassName('object') as HTMLCollectionOf<HTMLElement>);
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
      <div>
        <Home />
        <About />
        <Skill />
        <Portfolio />
        <Contact />
      </div>
    );
  };
}

export default Index;
