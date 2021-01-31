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
  render(){
    return (
      <div className="Portfolio">
        <div className="portfolio_title">
          <a className="pt_text no-text-decoration color-black"> PORTFOLIO </a>
          <div style={{
            width:'4rem',
            height:'0.5rem'
          }} className="underline"></div>
        </div>
        <div className="portfolio_list">
          <div className="portfolio">
            <div className="pf_left">
              <Carousel className="carousel">
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
              
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Portfolio;
