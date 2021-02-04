import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './menubar.css';
import './md.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Menubar extends React.Component {
  state = {
    navExpanded: false
  }

  componentDidMount(){
    window.addEventListener('scroll', this.onScroll);
    this.onScroll();
  }

  onScroll = () => {
    let about = document.getElementById('About') as HTMLElement;
    let menubar = document.getElementsByClassName('Menubar')[0] as HTMLElement;
    if(about.getBoundingClientRect().top<=0){
      menubar.style.opacity = "100";
    }else{
      menubar.style.opacity = "0";
      this.setState({
        navExpanded: false
      })
    }
  }

  handleClick = (e) => {
    const elem = document.getElementById(e.target.innerHTML);
    window.scroll({
      top: elem.offsetTop,
      left:0,
      behavior: 'smooth'
    });
    this.setState({
      navExpanded: false
    })
  }

  setNavExpanded = () => {
    if(!this.state.navExpanded) this.setState({navExpanded: 'expanded'})
    else this.setState({navExpanded: false})
  }
  render(){
    return (
      <div className="Menubar">
        <div className="navbar_pc">
          <a className="navbar_link color-black no-text-decoration" onClick={this.handleClick}>Home</a>
          <a className="navbar_link color-black no-text-decoration" onClick={this.handleClick}>About</a>
          <a className="navbar_link color-black no-text-decoration" onClick={this.handleClick}>Skill</a>
          <a className="navbar_link color-black no-text-decoration" onClick={this.handleClick}>Portfolio</a>
          <a className="navbar_link color-black no-text-decoration" onClick={this.handleClick}>Contact</a>
        </div>

        <Navbar className="navbar_mobile" expand="lg" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
          <Navbar.Toggle className="navbar_toggle ml-auto" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="navbar_collapse" id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link className="navbar_mobile_link color-black no-text-decoration" onClick={this.handleClick}>Home</Nav.Link>
              <Nav.Link className="navbar_mobile_link color-black no-text-decoration" onClick={this.handleClick}>About</Nav.Link>
              <Nav.Link className="navbar_mobile_link color-black no-text-decoration" onClick={this.handleClick}>Skill</Nav.Link>
              <Nav.Link className="navbar_mobile_link color-black no-text-decoration" onClick={this.handleClick}>Portfolio</Nav.Link>
              <Nav.Link className="navbar_mobile_link color-black no-text-decoration" onClick={this.handleClick}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  };
}

export default Menubar;
