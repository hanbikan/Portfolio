import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './portfolio.css';
import './md.css';
import img_classical1 from '../images/portfolio/classical/1.png';
import img_classical2 from '../images/portfolio/classical/2.png';
import img_classical3 from '../images/portfolio/classical/3.jpg';
import img_classical4 from '../images/portfolio/classical/4.jpg';
import img_classical5 from '../images/portfolio/classical/5.jpg';
import Carousel from 'react-bootstrap/Carousel';

class Portfolio extends React.Component {
  componentDidMount(){
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const elems = Array.from(document.getElementsByClassName('portfolio') as HTMLCollectionOf<HTMLElement>);
    elems.forEach((elem:HTMLElement) => {
      if(!this.isElementUnderBottom(elem, 0)){
        elem.style.width = "40rem";
      }
    })
  }

  isElementUnderBottom(elem: HTMLElement, offsetY: number){
    const {bottom} = elem.getBoundingClientRect();
    const {innerHeight} = window;
    return bottom > innerHeight - offsetY;
  }

  render(){
    return (
      <div className="Portfolio" id="Portfolio">
        <div className="portfolio_title">
          <p className="pt_text text"> PORTFOLIO </p>
          <div style={{
            width:'4rem',
            height:'0.5rem'
          }} className="underline"></div>
        </div>
        <div className="portfolio_list">
          <div className="portfolio object">
            <div className="pf_left">
              <Carousel className="carousel" interval={1000000}>
                <Carousel.Item>
                  <img className="d-block w-100" src={img_classical1} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img_classical2} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img_classical3} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img_classical4} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={img_classical5} alt="Classical" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="pf_right">
              <div className="pf_right_header">
                <p className="pf_title">Classical</p>
              </div>
              <div className="pf_right_content">
                <p className="pf_text">
                  Classical은 클래식 음악을 주제로 둔 커뮤니티 프로젝트입니다. 2020년 10월에 시작한 웹 공부의 첫 성과물입니다.
                </p>
                <div className="pf_tags">
                  <a className="tag cursor-pointer">#HTML </a>
                  <a className="tag cursor-pointer">#Javascript </a>
                  <a className="tag cursor-pointer">#NodeJS </a>
                  <a className="tag cursor-pointer">#MongoDB </a>
                </div>
              </div>
              <div className="pf_right_footer">
                <button className="pf_link" onClick={(e) => {
                  e.preventDefault();
                  window.open('https://github.com/hanbit-kang/Classical', '_blank');
                }}>
                  Link {'>'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Portfolio;
