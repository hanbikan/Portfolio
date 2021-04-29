import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './footer.css';
import './md.css';

class Footer extends React.Component {
  render(){
    return (
      <div className="Footer">
        <p className="footer__copyright">
          Hanbit Kang ⓒ2021
        </p>
        <p className="footer__email">
          contact-email: fchopinof99@gmail.com
        </p>
      </div>
    );
  };
}

export default Footer;
