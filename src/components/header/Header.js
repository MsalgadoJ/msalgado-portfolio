import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Header = () => {
  
  return (
    <Fade top>
    <header className="ui red inverted large stackable menu">
      <Link to="/msalgado-portfolio/" className="link item">Home</Link>
      <div className="right menu">
        <Link to="/msalgado-portfolio/about" className="link item">Sobre Mi</Link>
        <Link to="/msalgado-portfolio/skills" className="link item">Skills</Link>
        <Link to="/msalgado-portfolio/projects" className="link item">Proyectos</Link>
        <Link to="/msalgado-portfolio/contact" className="link item">Contáctame</Link>
      </div>
    </header>
    </Fade>
  )
};

export default Header;