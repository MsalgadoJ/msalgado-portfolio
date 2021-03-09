import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Header = () => {
  
  return (
    <Fade top>
    <header className="ui red inverted large menu">
      <Link to="/" className="link item">Home</Link>
      <div className="right menu">
        <Link to="/about" className="link item">About Me</Link>
        <Link to="/skills" className="link item">Skills</Link>
        <Link to="/projects" className="link item">Projects</Link>
        <Link to="/contact" className="link item">Contact Me</Link>
      </div>
    </header>
    </Fade>
  )
};

export default Header;