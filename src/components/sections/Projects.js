import './projects.css'
import React from 'react';
import Title from '../Title';

import Fade from 'react-reveal/Fade';


const Projects = ({ projects }) => {
    console.log(projects)
    const renderedProjects = projects.map(project => {
        return(
            <div className="ui raised card project-card" key={project.header}>
            <div className="ui content">
                <div className="header">
                    {project.header}
                </div>
            </div>
            <div className="content">
                <div className="ui sub header">
                    {project.subHeader}
                </div>
            </div>
            <div className="ui image">
                <img src={project.img} alt=""/>
            </div>
            <div className="content">
                <div className="description">
                {project.description}
                </div>
            </div>
            <div className="ui red button attached button">
                <a href={project.link} target="_blank" className="project-button">Ver demo</a>
            </div>
            </div>
        )
    })
    return (
        <div>
            <Title title={'PROYECTOS'} subtitle={' Proyectos y Prácticas '} />
            <Fade>
            <div className="projects">
                {renderedProjects}
            </div>
            </Fade>
        </div>
        
    )
};

export default Projects;