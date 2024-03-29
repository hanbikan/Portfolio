import React from 'react';

import Home from '../components/home';
import About from '../components/about';
import Skill from '../components/skill';
import Project from '../components/project';
import Contact from '../components/contact';
import Menubar from '../components/menubar';
import Footer from '../components/footer';
import './index.css';

class Index extends React.Component {
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  onScroll = () => {
    let elems:Array<HTMLElement> = Array.from(document.querySelectorAll('.right-to-left,.text,.object'));
    elems.forEach((elem:HTMLElement) => {
      if(!this.isElementUnderBottom(elem, 0)){
        if(elem.classList.contains('right-to-left')||elem.classList.contains('text')){
          elem.style.marginLeft = "0";
        }
        elem.style.opacity = "100";
      }
    })

    let lastElem = document.getElementsByClassName('contact-form')[0] as HTMLElement;
    if(!this.isElementUnderBottom(lastElem, 0)){
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
      <div className="index">
        <Home />
        <About />
        <Skill />
        <Project />
        <Contact />
        <Menubar />
        <Footer />
      </div>
    );
  };
}

export default Index;
