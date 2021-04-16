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
          <p className="at_text text"> About </p>
          <div style={{
            width:'4rem',
            height:'0.5rem'
          }} className="underline"></div>
        </div>
        <div className="about_introduce">
          <div className="ai_portrait_area object">
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
            <p className="double_quotes">“</p>
            <p className="ai_text">
              저는 <b>코딩을 즐기는</b> 개발자입니다.
            </p>
            <p className="ai_text">
              초등학생 3학년부터 6학년 때까지, 총 35개의 게임을 직접 만들어 놀면서 개발자라는 꿈을 키웠습니다.
            </p>
            <p className="ai_text">
              대학생이 된 저는 개인 프로젝트를 항상 진행하고 있는데, 이것은 제가 코딩을 진심으로 재밌어 하기 때문입니다.
            </p>
            <p className="double_quotes">”</p>
          </div>
        </div>
      </div>
    );
  };
}

export default About;
