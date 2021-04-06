import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './about.css';
import './md.css';
import img_portrait from '../images/portrait.jpg';

class About extends React.Component {
  render(){
    return (
      <div className="About" id="About">
        <div className="about_title">
          <p className="at_text text"> ABOUT </p>
          <div style={{
            width:'4rem',
            height:'0.5rem'
          }} className="underline"></div>
        </div>
        <div className="about_introduce">
          <div className="ai_portrait_area text">
            <img className="ai_portrait" src={img_portrait}/>
            <div className="ai_portrait_text_area">
              <p className="ai_portrait_name">
                강한빛
              </p>
              <p className="ai_portrait_text">
                1999.11.22 / 인천광역시
              </p>
              <p className="ai_portrait_text">
                세종대학교 컴퓨터공학과 18학번
              </p>
            </div>
          </div>

          <div className="ai_text_area object">
            <p className="ai_text">
              저는 클린코드를 지향하며, 필요에 의한 개발을 원칙으로 두고 있습니다.
            </p>
            <p className="ai_text">
              무엇보다 저는 <b>코딩을 무척이나 좋아합니다.</b>
            </p>
            <p className="ai_text">
              초등학교 3학년 시절부터 게임을 만들며 놀았고 지금도 그만큼 좋아합니다.
            </p>
            <p className="ai_text">
              따라서 저는 지치지 않고 지속적으로 성장할 수 있는 개발자입니다.
            </p>
          </div>
        </div>
      </div>
    );
  };
}

export default About;
