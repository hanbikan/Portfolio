import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './contact.css';
import './md.css';
import { Check2 } from 'react-bootstrap-icons';
import axios from 'axios';

class Contact extends React.Component {
  state = {
    email: '',
    text: ''
  }

  handleKeyup = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const text = document.getElementById('text') as HTMLInputElement;
    let submit = document.getElementsByClassName('contact-form__submit')[0] as HTMLElement;
    if(email.value&&text.value){
      submit.style.border = "0.125rem solid white";
      submit.style.borderRadius = "2rem 2rem";
      submit.style.color = "rgba(255,255,255,1)";
    }else{
      submit.style.border = "0 solid white";
      submit.style.borderRadius = "0 0";
      submit.style.color = "rgba(255,255,255,0.5)";
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    });
  }

  handleSubmit = () => {
    let href = window.location.href;
    href = href.substr(0,href.length-1);
    axios.post(href+':3001/api/mail', {
        email:this.state.email,
        text:this.state.text
    })

    const email = document.getElementById('email') as HTMLInputElement;
    const text = document.getElementById('text') as HTMLInputElement;
    const contact_form = document.getElementsByClassName('contact-form')[0] as HTMLElement;
    const after_mail = document.getElementsByClassName('after-mail')[0] as HTMLElement;
    const contact = document.getElementsByClassName('Contact')[0] as HTMLElement;
    email.disabled = true;
    text.disabled = true;
    contact_form.style.opacity = "0";
    setTimeout(() => {
      contact_form.style.display = "none";
      after_mail.style.display = "flex";
      after_mail.style.opacity = "100";
      contact.style.height = "30rem";
    }, 1000);
  }

  render(){
    return (
      <div className="Contact" id="Contact">
        <div className="title--white">
          <p className="title__text text"> Contact </p>
          <div style={{
            width:'8rem',
            height:'0.25rem'
          }} className="underline--contact right-to-left"></div>
        </div>

        <div className="context--contact">
          <form className="contact-form object" action="javascript:void(0);" onSubmit={this.handleSubmit}>
            <input className="contact-form__email" type="email" id="email" placeholder="이메일을 남겨주세요." value={this.state.email} autoComplete="off" onKeyUp={this.handleKeyup} onChange={this.handleChange} required />
            <textarea className="contact-form__content my_scroll" id="text" placeholder="내용을 입력하세요." value={this.state.text} autoComplete="off" onKeyUp={this.handleKeyup} onChange={this.handleChange} required />
            <button className="contact-form__submit" type="submit">전송하기</button>
          </form>
          <div className="after-mail">
            <Check2 color="green" size={96}/>
            <p> 귀하의 메일을 전송하였습니다. </p>
          </div>
        </div>

      </div>
    );
  };
}

export default Contact;
