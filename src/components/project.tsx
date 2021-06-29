import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './project.css';
import './md.css';
import Carousel from 'react-bootstrap/Carousel';
import img_github from '../images/github.png';
import img_googleplay from '../images/googleplay.png';
import img_classical from '../images/project/classical/main.png';
import img_classical1 from '../images/project/classical/1.png';
import img_classical2 from '../images/project/classical/2.png';
import img_classical3 from '../images/project/classical/3.png';
import img_classical4 from '../images/project/classical/4.png';
import img_classical5 from '../images/project/classical/5.png';
import img_portfolio from '../images/project/portfolio/main.png';
import img_YSCT from '../images/project/YSCT/main.png';
import img_YSCT1 from '../images/project/YSCT/1.png';
import img_YSCT2 from '../images/project/YSCT/2.png';
import img_YSCT3 from '../images/project/YSCT/3.png';
import img_BMG from '../images/project/BMG/main.png';
import img_BMG1 from '../images/project/BMG/1.png';
import img_BMG2 from '../images/project/BMG/2.png';
import img_BMG3 from '../images/project/BMG/3.png';

class Project extends React.Component {
  state = {
    curIndexOfPfCarousel: -1
  }
  handleClick = (e) => {
    if(e.target.className.indexOf('project__img')!=-1){
      let pj_carousel = e.target.parentNode.parentNode.parentNode.firstChild as HTMLElement
      const pj_carousels = document.getElementsByClassName('project__carousel') as HTMLCollectionOf<Element>;
      
      for(let i=0; i<pj_carousels.length; i++){
        if(pj_carousels[i] == pj_carousel){
          this.setState({curIndexOfPfCarousel: i});
        }
      }
      pj_carousel.style.display = "flex";
    }
    if(e.target.className.indexOf('project__carousel')!=-1 || e.target.className.indexOf('project__carousel__cancel')!=-1){
      let pj_carousel = document.getElementsByClassName('project__carousel')[this.state.curIndexOfPfCarousel] as HTMLElement;
      pj_carousel.style.display = "none";
    }
  }
  render(){
    return (
      <div className="Project" id="Project">
        <div className="title">
          <p className="title__text"> Projects </p>
          <div style={{
            width:'4rem',
            height:'0.5rem'
          }} className="underline--project right-to-left"></div>
        </div>

        <div className="content--project">
          <div className="project object">
            <div className="project__carousel" onClick={this.handleClick}>
              <Carousel className="carousel-width" interval={1000000}>
                <Carousel.Item className="project__carousel__item">
                  <img className="d-block img-fluid" src={img_classical1} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item className="project__carousel__item">
                  <img className="d-block img-fluid" src={img_classical2} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item className="project__carousel__item">
                  <img className="d-block img-fluid" src={img_classical3} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item className="project__carousel__item">
                  <img className="d-block img-fluid" src={img_classical4} alt="Classical" />
                </Carousel.Item>
                <Carousel.Item className="project__carousel__item">
                  <img className="d-block img-fluid" src={img_classical5} alt="Classical" />
                </Carousel.Item>
              </Carousel>
              <a className="project__carousel__cancel color-white">닫기</a>
            </div>

            <div className="project-info">
              <div className="project-img-area" onClick={this.handleClick}>
                <img src={img_classical} className="project__img" />
              </div>
              <div className="project-description">
                <div className="project-description__header">
                  <p className="project__title">Classical</p>
                </div>
                <div className="project-description__content">
                  <p className="project-description__content__text">
                    Classical은 클래식 음악을 주제로 둔 커뮤니티 프로젝트입니다. 2020년 10월에 시작한 웹 공부의 첫 성과물입니다.
                  </p>
                  <div className="tag-area">
                    <a className="tag cursor-pointer">#HTML </a>
                    <a className="tag cursor-pointer">#CSS </a>
                    <a className="tag cursor-pointer">#Javascript </a>
                    <a className="tag cursor-pointer">#NodeJS </a>
                    <a className="tag cursor-pointer">#MongoDB </a>
                  </div>
                </div>
                <div className="project-description__footer">
                  <button className="project__button" onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/hanbit-kang/Classical', '_blank');
                  }}>
                    <img src={img_github} className="link-img"/>
                    Repository {'>'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="project object">
            <div className="project-info">
              <div className="project-img-area" onClick={() => alert('You\'re Looking Now!')}>
                <img src={img_portfolio} className="project__img" />
              </div>
              <div className="project-description">
                <div className="project-description__header">
                  <p className="project__title">Portfolio</p>
                </div>
                <div className="project-description__content">
                  <p className="project-description__content__text">
                    지금 보고계시는 포트폴리오 웹페이지입니다. 앞으로 쌓아올릴 프로젝트나 스킬들은 이곳에 기록됩니다.
                  </p>
                  <div className="tag-area">
                    <a className="tag cursor-pointer">#HTML </a>
                    <a className="tag cursor-pointer">#Typescript </a>
                    <a className="tag cursor-pointer">#ReactJS </a>
                    <a className="tag cursor-pointer">#NodeJS </a>
                  </div>
                </div>
                <div className="project-description__footer">
                <button className="project__button" onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/hanbit-kang/Portfolio', '_blank');
                  }}>
                    <img src={img_github} className="link-img"/>
                    Repository {'>'}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="project object">
            <div className="project__carousel" onClick={this.handleClick}>
              <Carousel className="carousel-height" interval={1000000}>
                <Carousel.Item className="project__carousel__item">
                  <img className="d-block img-fluid-height" src={img_YSCT1} alt="이건 아셔야겠는데요" />
                </Carousel.Item>
                <Carousel.Item className="project__carousel__item">
                  <img className="d-block img-fluid-height" src={img_YSCT2} alt="이건 아셔야겠는데요" />
                </Carousel.Item>
                <Carousel.Item className="project__carousel__item">
                  <img className="d-block img-fluid-height" src={img_YSCT3} alt="이건 아셔야겠는데요" />
                </Carousel.Item>
              </Carousel>
              <a className="project__carousel__cancel color-white">닫기</a>
            </div>

            <div className="project-info">
              <div className="project-img-area" onClick={this.handleClick}>
                <img src={img_YSCT} className="project__img" />
              </div>
              <div className="project-description">
                <div className="project-description__header">
                  <p className="project__title">이건 아셔야겠는데요</p>
                </div>
                <div className="project-description__content">
                  <p className="project-description__content__text">
                    이 어플은 주식 어플입니다. 관심종목을 등록하고 조건을 설정하고,
                    만약 주식이 이 조건 기준을 초과하면 Notification으로 알려주는 기능을 수행합니다.
                    2021년 2월에 안드로이드 네이티브 공부를 시작하면서 만든 앱입니다.
                  </p>
                  <div className="tag-area">
                    <a className="tag cursor-pointer">#Android_Native </a>
                    <a className="tag cursor-pointer">#Kotlin </a>
                  </div>
                </div>
                <div className="project-description__footer">
                <button className="project__button" onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/hanbit-kang/AndroidNotificationForStock', '_blank');
                  }}>
                    <img src={img_github} className="link-img"/>
                    Repository {'>'}
                  </button>
                </div>
              </div>
            </div>

          <div className="project object">
            <div className="project__carousel" onClick={this.handleClick}>
              <Carousel className="carousel-height" interval={1000000}>
                <Carousel.Item className="project__carousel__item">
                  <img className="d-block img-fluid-height" src={img_BMG1} alt="비트코인 채굴장" />
                </Carousel.Item>
                <Carousel.Item className="project__carousel__item">
                  <img className="d-block img-fluid-height" src={img_BMG2} alt="비트코인 채굴장" />
                </Carousel.Item>
                <Carousel.Item className="project__carousel__item">
                  <img className="d-block img-fluid-height" src={img_BMG3} alt="비트코인 채굴장" />
                </Carousel.Item>
              </Carousel>
              <a className="project__carousel__cancel color-white">닫기</a>
            </div>

            <div className="project-info">
              <div className="project-img-area" onClick={this.handleClick}>
                <img src={img_BMG} className="project__img" />
              </div>
              <div className="project-description">
                <div className="project-description__header">
                  <p className="project__title">비트코인 채굴장</p>
                </div>
                <div className="project-description__content">
                  <p className="project-description__content__text">
                    이 어플은 비트코인 채굴장 컨셉의 모바일 게임입니다.
                    오버클럭, 컴퓨터, GPU를 구입해가면서 채굴장을 키워나갈 수 있습니다.
                    비트코인 매매 시스템에서는, 실제 비트코인 시세에 따라 코인을 매매할 수 있습니다.
                  </p>
                  <div className="tag-area">
                    <a className="tag cursor-pointer">#C# </a>
                    <a className="tag cursor-pointer">#Unity </a>
                  </div>
                </div>
                <div className="project-description__footer">
                <button className="project__button" onClick={(e) => {
                    e.preventDefault();
                    window.open('https://play.google.com/store/apps/details?id=com.KangHam.BitcoinMiningGame', '_blank');
                  }}>
                    <img src={img_googleplay} className="link-img"/>
                    Google Play {'>'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  };
}

export default Project;
