import './aboutme.css'
import React from 'react'
import Title from '../../title/Title'
import about from '../../../assets/img/about.jpg'
import Typing from 'react-typing-animation'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

const AboutMe = () => {
  return (
    <div>
      <Title title={'SOBRE MI'} subtitle={'Quien soy '} />
      <Fade>
        <div className="about-me">
          <div className="about-img">
            <img src={about} alt="" />
          </div>
          <div className="about-text">
            <p>
              <Typing className="typing">Desarrolladora Full-Stack</Typing>
            </p>
            <p className="about-text-desc">
              Hola! Es un placer tenerte por acá. 👋
              <br />
              Como ya sabes, mi nombre es Mayra 😃. Soy desarrolladora
              Full-Stack. <br />
              En el año 2020 inicié mi camino en el mundo IT, buscando
              reconvertir mi perfil, pues ya había pasado por varias carreras y
              oficios y simplemente no me hallaba 😕.
              <br />
              Finalmente en el desarrollo pude encontrar mi lugar 😃
              desempeñándome en algo que me gusta y disfruto realmente. <br />
              Si nos conocemos, vas a notar que soy una persona alegre en
              general, tengo la risa muy fácil. Como profesional 👩🏻‍💻 soy muy
              responsable y comprometida con la entrega de soluciones efectivas.
              <br />
            </p>
            <Link
              to="/msalgado-portfolio/contact"
              className="ui red button about-btn"
            >
              Charlemos!
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default AboutMe
