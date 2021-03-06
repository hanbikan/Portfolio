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
        <div className="about_introduce object">
          <img className="ai_portrait" src={img_portrait}/>
          <p className="ai_text">
            <b>초등학생</b> 때 저는 취미로 수십 개의 게임을 만들었으며 싱글플레이 게임의 메모리를 조작하여 게임을 조작하곤 하였고, <b>중학생</b> 시절 포토샵과 영상편집 기술을 통해 블로그를 운영하여 총 54만 명의 방문자 달성을 하기도 하였습니다. 이렇게 컴퓨터를 동반한 다채로운 경험들은 결국 IT 전문가라는 제 꿈을 만들어주었습니다. <b>고등학생</b> 3년은 그 꿈을 위해, 학업이라는 분야에 처음 도전하게 되었고, <b>세종대학교 컴퓨터공학과</b>에 입학하였습니다.
          </p>
        </div>
      </div>
    );
  };
}

export default About;
