import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './sections/Home';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import ContactMe from './sections/ContactMe';
import Header from './Header';

import html5 from '../assets/img/html5.png';
import css3 from '../assets/img/css3.png';
import bs from '../assets/img/bs.png';
import ui from '../assets/img/ui.png';
import js from '../assets/img/js.png';
import react from '../assets/img/react.png';
import nodejs from '../assets/img/nodejs.webp';
import ex from '../assets/img/ex.jpg';
import mongodb from '../assets/img/mongodb.png';
import mysql from '../assets/img/mysql.png';


import videosearchapp from '../assets/img/videosearchapp.png';
import thotsolutions from '../assets/img/thotsolutions.png'
import weatherapp from '../assets/img/weatherapp.png'

const App = () => {
    const skills = [
        {
            name:'HTML5',
            img: html5
        },
        {
            name:'CCS3',
            img: css3
        },
        {
            name:'BOOTSTRAP',
            img: bs
        },
        {
            name:'SEMANTIC UI',
            img: ui
        },
        {
            name:'JAVASCRIPT',
            img: js
        },
        {
            name:'REACT',
            img: react
        },
        {
            name:'NODE JS',
            img: nodejs
        },
        {
            name:'EXPRESS',
            img: ex
        },
        {
            name:'MONGODB',
            img: mongodb
        },
        {
            name:'MYSQL',
            img: mysql
        }
    ]
    const projects = [
        {
            header: 'VIDEO SEARCH APP',
            subHeader: 'React + API',
            description: 'Consulta la API de youtube para hacer búsquedas de videos',
            img: videosearchapp,
            link: 'https://msalgadoj.github.io/youtube-video-seach-app/'
        },
        {
            header: 'COURSES APP',
            subHeader: 'JavaScript, NodeJs, MongoDB',
            description: 'Proyecto en construccion para empresa THOT Solutions',
            img: thotsolutions,
            link: 'http://thot-prueba.herokuapp.com/courses/detail/5faa94efdee4620017a38db6' 
        },
        {
            header: 'WEATHER APP',
            subHeader: 'React + API',
            description: 'Consulta la API de OpenWeatherMaps para obtener el clima de la ciudad buscada',
            img: weatherapp,
            link: 'https://msalgadoj.github.io/weather-app-reactjs/'  
        }
    ]
    return (
        <div className="ui container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/about" exact component={AboutMe}></Route>
                    <Route path="/skills" exact component={() => <Skills skills={skills} />}></Route>
                    <Route path="/projects" exact component={() => <Projects projects={projects} />}>
                    </Route>
                    <Route path="/education" exact component={Education}></Route>
                    <Route path="/contact" exact component={ContactMe}></Route>
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;