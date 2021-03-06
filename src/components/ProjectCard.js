import React,{useRef,useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faGlobe, faSearch, faUsers, faUser} from '@fortawesome/free-solid-svg-icons';
import StackIcons from './StackIcons';
import FsLightbox from 'fslightbox-react';
import './ProjectCard.sass';

export default ({project,setFilter})=>{
    const extended=useRef(null);
    const [isExtended,setIsExtended]=useState(false);
    const [toggler,setToggler]=useState(false);
    const toggleExtend=()=>{
      extended.current.classList.toggle('hidden');
      setIsExtended(!isExtended);
    }
    return (
        <article className="project-card">
          <header>
            <div className="image-wrapper">
                <img onClick={()=>setToggler(!toggler)} alt={project.name} src={project.cardimage}/>
                <FontAwesomeIcon className="zoom-icon" icon={faSearch} />
            </div>
            <div className="project-content">
              <h2> <span onClick={toggleExtend} className="project-name">{project.name}</span>
               <span>
                <span className="project-type-icon">{project.type==='team'?<FontAwesomeIcon onClick={()=>setFilter('team')} title="Team project" icon={faUsers}/>:<FontAwesomeIcon  onClick={()=>setFilter('personal')} title="Personal Project" icon={faUser}/>}</span> 
                <a href={project.github} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon title="Code on Github" icon={faGithub}/></a>
                <a href={project.live} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon title="See Live App" icon={faGlobe}/></a>
               </span>
              </h2>
              <p>{project.description}</p>
              <div className="bottom-buttons">
               <StackIcons stack={project.stack}/>
               <button className="expand-button" onClick={toggleExtend}>{isExtended?'Less':'More...'}</button>
              </div>
            </div>
          </header>
          <div className="extended hidden" ref={extended}>
              <h3>Problem / Requirements / User Journey</h3>
              <h4>As a user I would like to...</h4>
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
          <FsLightbox toggler={toggler} sources={project.screenshot}/>
        </article>
    )
}