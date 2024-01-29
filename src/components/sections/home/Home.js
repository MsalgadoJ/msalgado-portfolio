import './home.css'
import React from 'react'
import Typing from 'react-typing-animation'
import home from '../../../assets/img/home.png'
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <Flip top cascade>
        <div className="left-home">
          <p>Hola! Mi nombre es</p>
          <h1>Mayra Rincones</h1>
          <p>
            y soy <Typing className="typing">Desarrolladora Full-Stack</Typing>
          </p>
          <Link
            to="/msalgado-portfolio/contact"
            className="ui red button home-btn"
          >
            Charlemos!
          </Link>
        </div>
      </Flip>
      <Fade>
        <div className="right-home">
          <img src={home} alt="" />
        </div>
      </Fade>
    </div>
  )
}

export default Home
