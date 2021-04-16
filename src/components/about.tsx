import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './about.css';
import './md.css';
import img_portrait from '../images/about/portrait.jpg';
import img_github from '../images/github.png';
import img_gmail from '../images/about/gmail.png';

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

              <div className="ai_link_area">
                <span className="ai_link">
                  <img src={img_gmail} className="ai_link_icon"/>
                  <CopyToClipboard text={"fchopinof99@gmail.com"} onCopy={()=>alert("이메일 주소를 복사하였습니다.")}>
                    <a className="ai_link_src color-black cursor-pointer">
                      fchopinof99@gmail.com
                    </a>
                  </CopyToClipboard>
                </span>
                <span className="ai_link">
                  <img src={img_github} className="ai_link_icon"/>
                  <a className="ai_link_src color-black cursor-pointer" href="https://github.com/hanbit-kang" target="_blank">
                    https://github.com/hanbit-kang
                  </a>
                </span>
              </div>
            </div>
          </div>

          <div className="ai_text_area object">
            <p className="double_quotes">“</p>
              <p className="ai_text">
                저는 <i>코딩을 즐기는 개발자</i> 입니다.
              </p>
              <p className="ai_text">
                초등생 3학년에 시작하여 3년간, 총 35개의 게임을 직접 만들어보면서 개발자라는 꿈을 키웠습니다.
              </p>
              <p className="ai_text">
                대학생이 된 저는 개인 프로젝트를 항상 진행하는데, 이것은 제가 코딩을 진심으로 좋아하기 때문입니다.
              </p>
            <p className="double_quotes">”</p>
          </div>
        </div>
      </div>
    );
  };
}

export default About;
