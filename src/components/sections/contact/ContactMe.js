import './contact.css'
import React from 'react';
import Title from '../../title/Title';
import Typing from 'react-typing-animation';
import Fade from 'react-reveal/Fade';
import contact from '../../../assets/img/contact.png'

const ContactMe = () => {
    return (
        <div>
            <Title title={'Contacto'} subtitle={'Charlemos '} />
            <Fade>
            <div className="contact">
                <div className="contact-text">
                    <p>Espero te haya gustado este perfil. <br/>
                    Si lo consideras, puedes contactárme a través de linkedIn o bien por correo eletrónico. <br/>
                    Estaré actualizando el sitio a medida que vayan saliendo nuevos proyectos y así demostrar lo que voy aprendiendo.
                    </p>
                    <p><Typing className="typing">Gracias por visitar!</Typing></p>
                </div>
                <div className="contact-info">
                    <p><a href="https://www.linkedin.com/in/mayrarincones/"><i className="linkedin icon"></i><span className="info-effect">LinkedIn</span></a></p>
                    <p><a href="https://github.com/MsalgadoJ"><i className="github icon"></i><span className="info-effect">GitHub</span></a></p>
                    <p><i className="envelope outline icon"></i>E-mail: <span className="info-effect">mayra.rinconess@gmail.com</span></p>
                </div>
            </div>
            <div className="contact-img">
                <img src={contact} alt="contact"/>
            </div>
            </Fade>
        </div>

    )
};

export default ContactMe;