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
import img_YSCT from '../images/portfolio/YSCT/main.png';
import img_YSCT1 from '../images/portfolio/YSCT/1.png';
import img_YSCT2 from '../images/portfolio/YSCT/2.png';
import img_YSCT3 from '../images/portfolio/YSCT/3.png';

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
          <p className="pt_text text"> Projects </p>
          <div style={{
            width:'4rem',
            height:'0.5rem'
          }} className="underline"></div>
        </div>
        <div className="portfolio_list">
          <div className="portfolio object">
            <div className="pf_carousel" onClick={this.handleClick}>
              <Carousel className="carousel-width" interval={1000000}>
                <Carousel.Item className="carousel_item">
                  <img className="d-block img-fluid" src={img_classical1} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item className="carousel_item">
                  <img className="d-block img-fluid" src={img_classical2} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item className="carousel_item">
                  <img className="d-block img-fluid" src={img_classical3} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item className="carousel_item">
                  <img className="d-block img-fluid" src={img_classical4} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item className="carousel_item">
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
            <div className="pf_top" onClick={() => alert('지금 보고 있으십니다!')}>
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
          <div className="portfolio object">
            <div className="pf_carousel" onClick={this.handleClick}>
              <Carousel className="carousel-height" interval={1000000}>
                <Carousel.Item className="carousel_item">
                  <img className="d-block img-fluid-height" src={img_YSCT1} alt="이건 아셔야겠는데요" />
                </Carousel.Item>
                <Carousel.Item className="carousel_item">
                  <img className="d-block img-fluid-height" src={img_YSCT2} alt="이건 아셔야겠는데요" />
                </Carousel.Item>
                <Carousel.Item className="carousel_item">
                  <img className="d-block img-fluid-height" src={img_YSCT3} alt="이건 아셔야겠는데요" />
                </Carousel.Item>
              </Carousel>
              <a className="carousel_cancel color-white">닫기</a>
            </div>
            <div className="pf_top" onClick={this.handleClick}>
              <img src={img_YSCT} className="pf_img" />
            </div>
            <div className="pf_bottom">
              <div className="pf_bottom_header">
                <p className="pf_title">이건 아셔야겠는데요</p>
              </div>
              <div className="pf_bottom_content">
                <p className="pf_text">
                  이 어플은 주식 어플입니다. 관심종목을 등록하고 조건을 설정하고,
                  만약 주식이 이 조건 기준을 초과하면 Notification으로 알려주는 기능을 수행합니다.
                  2021년 2월에 안드로이드 네이티브 공부를 시작하면서 만든 앱입니다.
                </p>
                <div className="pf_tags">
                  <a className="tag cursor-pointer">#Android_Native </a>
                  <a className="tag cursor-pointer">#Kotlin </a>
                </div>
              </div>
              <div className="pf_bottom_footer">
                <button className="pf_link" onClick={(e) => {
                  e.preventDefault();
                  window.open('https://github.com/Hanbit-Kang/YouShouldCheckThis', '_blank');
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
