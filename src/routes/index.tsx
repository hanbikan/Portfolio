import React from 'react';

import Home from '../components/home';
import About from '../components/about';
import Skill from '../components/skill';
import Portfolio from '../components/portfolio';
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
    let elems:Array<HTMLElement> = Array.from(document.querySelectorAll('.underline,.text,.object'));
    elems.forEach((elem:HTMLElement) => {
      if(!this.isElementUnderBottom(elem, 0)){
        if(elem.classList.contains('underline')||elem.classList.contains('text')){
          elem.style.marginLeft = "0";
        }
        elem.style.opacity = "100";
      }
    })

    let lastElem = document.getElementsByClassName('contact_form')[0] as HTMLElement;
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
        <Portfolio />
        <Contact />
        <Menubar />
        <Footer />
      </div>
    );
  };
}

export default Index;
