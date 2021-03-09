import './skills.css';
import React from 'react';
import Title from '../Title';

import Fade from 'react-reveal/Fade';

const Skills = ({ skills }) => {
    
    const renderedSkills = skills.map(skill => {
        return (
            <div className="skill-card" key={skill.name}>
                <div className="skill-img">
                    <img src={skill.img} alt={skill.img}/>
                </div>
                <div className="skill-name">
                    {skill.name}
                </div>
            </div>
        )
    })
    return (
        <div>
            <Title title={'SKILLS Y HERRAMIENTAS'} subtitle={' Mis conocimientos '} /> 
            <Fade>
            <div>
            <div className="skills-wrapper"> 
             {renderedSkills}
            </div>
            </div>
            </Fade>
        </div>
        
    )
};

export default Skills;