import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../sections/home/Home';
import AboutMe from '../sections/about/AboutMe';
import Skills from '../sections/skills/Skills';
import Projects from '../sections/projects/Projects';
import ContactMe from '../sections/contact/ContactMe';
import Header from '../header/Header';
import Footer from '../footer/Footer'

import skillsArray from '../arrays/skillsArray';
import projectsArray from '../arrays/projectsArray';


const App = () => {
    
    
    return (
        <div className="ui container">
            <BrowserRouter>
                <div className="content-wrapper">
                    <Header />
                    <Route path="/msalgado-portfolio/" exact component={Home}></Route>
                    <Route path="/msalgado-portfolio/about" exact component={AboutMe}></Route>
                    <Route path="/msalgado-portfolio/skills" exact component={() => <Skills skills={skillsArray} />}></Route>
                    <Route path="/msalgado-portfolio/projects" exact component={() => <Projects projects={projectsArray} />}>
                    </Route>
                    <Route path="/msalgado-portfolio/contact" exact component={ContactMe}></Route>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    )
};

export default App;