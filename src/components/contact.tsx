import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './contact.css';
import './md.css';

class Contact extends React.Component {
  render(){
    return (
      <div className="Contact">
        <div className="contact_title">
          <p className="ct_text text"> Contact </p>
          <div style={{
            width:'8rem',
            height:'0.25rem'
          }} className="underline"></div>
        </div>
        <form className="contact_form object">
          dsa
        </form>
      </div>
    );
  };
}

export default Contact;
