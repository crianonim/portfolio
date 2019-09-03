import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import './ProjectCard.sass';

export default ({project})=>{

    return (
        <article className="project-card">
          <header>
              <div className="image-wrapper">
                <img alt={project.name} src={project.screenshot}/>
              </div>
            <div>
              <h2>{project.name}  
              <a href={project.github} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
              <a href={project.live} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGlobe}/></a>
                </h2>
              <p>{project.description}</p>
             
            </div>
          </header>
          <div className="extended-hidden">
              <h3>Problem / Requirements</h3>
              <h4>I would like to...</h4>
              <ul>
                {project.problem.map((problem,i)=><li key={i}>{problem}</li>)}
              </ul>
              <h3>Tech stack used to solve</h3>
              <ul>
                {project.tech.map((tech,i)=><li key={i}>{tech}</li>)}
              </ul>
              <h3>Learning Outcomes</h3>
              <ul>
                {project.learning.map((outcome,i)=><li key={i}>{outcome}</li>)}
              </ul>
          </div>
            
        </article>
    )
}