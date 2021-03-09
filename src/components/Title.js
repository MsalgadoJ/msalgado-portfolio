import './title.css'
import React from 'react';
import Fade from 'react-reveal/Fade';

const Title = ({title,subtitle}) => {
  return(
    <Fade top>
    <div className="title">
      <h2>{title}</h2>
      <p className="subtitle"><i className="angle double right icon"></i><span className="subtitle-color">{subtitle}</span><i className="angle double left icon"></i></p>
    </div>
    </Fade>
  )
};

export default Title