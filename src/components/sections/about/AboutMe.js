import './aboutme.css';
import React from 'react';
import Title from '../../title/Title';
import about from '../../../assets/img/about.jpg';
import Typing from 'react-typing-animation';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';


const AboutMe = () => {
    return (
        <div>
            <Title title={'SOBRE MI'} subtitle={'Quien soy '} />
            <Fade>
            <div className="about-me">
                <div className="about-img">
                    <img src={about} alt=""/>
                </div>
                <div className="about-text">
                    <p><Typing className="typing">Desarrolladora Front-End</Typing></p>
                    <p className="about-text-desc">Hola! Es un placer tenerte por acá. <br/>
                    Como ya sabes, mi nombre es Mayra. Soy desarrolladora front-end. <br/>
                    En el 2013 me recibí como Ingeniero de Petróleo y ahora estoy buscando reconvertir mi perfil hacia este mundo fascinante, como es el desarrollo web. <br/>
                    Me considero una persona disciplinada, organizada, me gusta mucho aprender por lo que siempre estoy en búsqueda de nuevos retos. <br/>
                    Además, me gustan mucho los idiomas. Hablo inglés y un poco de francés. <br/>
                    Amo la música, cantar, la naturaleza y los animales.
                    </p>
                    <Link to="/msalgado-portfolio/contact" className="ui red button about-btn">Charlemos!</Link>
                </div>
            </div>
            </Fade>
            
        </div>
    )
};

export default AboutMe;