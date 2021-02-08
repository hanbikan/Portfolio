import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './portfolio.css';
import './md.css';
import Carousel from 'react-bootstrap/Carousel';
import img_classical from '../images/portfolio/classical/main.png';
import img_classical1 from '../images/portfolio/classical/1.png';
import img_classical2 from '../images/portfolio/classical/2.png';
import img_classical3 from '../images/portfolio/classical/3.png';
import img_classical4 from '../images/portfolio/classical/4.png';
import img_classical5 from '../images/portfolio/classical/5.png';
import img_portfolio from '../images/portfolio/portfolio/main.png';
import img_portfolio1 from '../images/portfolio/portfolio/1.png';
import img_portfolio2 from '../images/portfolio/portfolio/2.png';

class Portfolio extends React.Component {
  state = {
    curIndexOfPfCarousel: -1
  }
  handleClick = (e) => {
    if(e.target.className.indexOf('pf_img')!=-1){
      let pf_carousel = e.target.parentNode.parentNode.firstChild as HTMLElement
      const pf_carousels = document.getElementsByClassName('pf_carousel') as HTMLCollectionOf<Element>;
      for(let i=0; i<pf_carousels.length; i++){
        if(pf_carousels[i] == pf_carousel){
          this.setState({curIndexOfPfCarousel: i});
        }
      }
      pf_carousel.style.display = "flex";
    }
    if(e.target.className.indexOf('pf_carousel')!=-1 || e.target.className.indexOf('carousel_cancel')!=-1){
      let pf_carousel = document.getElementsByClassName('pf_carousel')[this.state.curIndexOfPfCarousel] as HTMLElement;
      pf_carousel.style.display = "none";
    }
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
            <div className="pf_carousel" onClick={this.handleClick}>
              <Carousel className="carousel" interval={1000000}>
                <Carousel.Item>
                  <img className="d-block img-fluid" src={img_classical1} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block img-fluid" src={img_classical2} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block img-fluid" src={img_classical3} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block img-fluid" src={img_classical4} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block img-fluid" src={img_classical5} alt="Classical" />
                </Carousel.Item>
              </Carousel>
              <a className="carousel_cancel color-white">닫기</a>
            </div>
            <div className="pf_top" onClick={this.handleClick}>
              <img src={img_classical} className="pf_img" />
            </div>
            <div className="pf_bottom">
              <div className="pf_bottom_header">
                <p className="pf_title">Classical</p>
              </div>
              <div className="pf_bottom_content">
                <p className="pf_text">
                  Classical은 클래식 음악을 주제로 둔 커뮤니티 프로젝트입니다. 2020년 10월에 시작한 웹 공부의 첫 성과물입니다.
                </p>
                <div className="pf_tags">
                  <a className="tag cursor-pointer">#HTML </a>
                  <a className="tag cursor-pointer">#CSS </a>
                  <a className="tag cursor-pointer">#Javascript </a>
                  <a className="tag cursor-pointer">#NodeJS </a>
                  <a className="tag cursor-pointer">#MongoDB </a>
                </div>
              </div>
              <div className="pf_bottom_footer">
                <button className="pf_link" onClick={(e) => {
                  e.preventDefault();
                  window.open('https://github.com/hanbit-kang/Classical', '_blank');
                }}>
                  Link {'>'}
                </button>
              </div>
            </div>
          </div>
          <div className="portfolio object">
            <div className="pf_carousel" onClick={this.handleClick}>
              <Carousel className="carousel" interval={1000000}>
                <Carousel.Item>
                  <img className="d-block img-fluid" src={img_portfolio1} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block img-fluid" src={img_portfolio2} alt="Classical" />
                </Carousel.Item>
              </Carousel>
              <a className="carousel_cancel color-white">닫기</a>
            </div>
            <div className="pf_top" onClick={this.handleClick}>
              <img src={img_portfolio} className="pf_img" />
            </div>
            <div className="pf_bottom">
              <div className="pf_bottom_header">
                <p className="pf_title">Portfolio</p>
              </div>
              <div className="pf_bottom_content">
                <p className="pf_text">
                  지금 보고계시는 포트폴리오 웹페이지입니다. 앞으로 쌓아올릴 프로젝트나 스킬들은 이곳에 기록됩니다.
                </p>
                <div className="pf_tags">
                  <a className="tag cursor-pointer">#HTML </a>
                  <a className="tag cursor-pointer">#Typescript </a>
                  <a className="tag cursor-pointer">#ReactJS </a>
                  <a className="tag cursor-pointer">#NodeJS </a>
                </div>
              </div>
              <div className="pf_bottom_footer">
                <button className="pf_link" onClick={(e) => {
                  e.preventDefault();
                  window.open('https://github.com/hanbit-kang/Portfolio', '_blank');
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
