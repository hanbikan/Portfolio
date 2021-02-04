import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './contact.css';
import './md.css';
import { Check2 } from 'react-bootstrap-icons';

class Contact extends React.Component {
  onKeyup = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const text = document.getElementById('text') as HTMLInputElement;
    let submit = document.getElementsByClassName('cf_submit')[0] as HTMLElement;
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

  handleSubmit = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const text = document.getElementById('text') as HTMLInputElement;
    const contact_form = document.getElementsByClassName('contact_form')[0] as HTMLElement;
    const after_mail = document.getElementsByClassName('after_mail')[0] as HTMLElement;
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
        <div className="contact_title">
          <p className="ct_text text"> Contact </p>
          <div style={{
            width:'8rem',
            height:'0.25rem'
          }} className="underline"></div>
        </div>
        <iframe id="mail_iframe" name="mail_iframe"></iframe>
        <form className="contact_form object" method="post" target="mail_iframe" action="http://localhost:3001/api/mail" onSubmit={this.handleSubmit}>
          <input type="email" id="email" name="email" placeholder="이메일을 남겨주세요." autoComplete="off" onKeyUp={this.onKeyup} required />
          <textarea className="my_scroll" id="text" name="text" placeholder="내용을 입력하세요." autoComplete="off" onKeyUp={this.onKeyup} required />
          <button className="cf_submit" type="submit">전송하기</button>
        </form>
        <div className="after_mail">
          <Check2 color="green" size={96}/>
          <p> 귀하의 메일을 전송하였습니다. </p>
        </div>
      </div>
    );
  };
}

export default Contact;
