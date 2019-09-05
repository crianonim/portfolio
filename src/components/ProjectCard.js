import React,{useRef,useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faVuejs} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';
import ExpressIcon from '../assets/expressjs.svg'
import './ProjectCard.sass';

const stackIcons=[
  {name:"vue",type:"fa",data:faVuejs},
  {name:"express",type:"svg",data:ExpressIcon}
]

export default ({project})=>{
    const extended=useRef(null);
    const [isExtended,setIsExtended]=useState(false);
    const toggleExtend=()=>{
      extended.current.classList.toggle('hidden');
      setIsExtended(!isExtended);
    }
    return (
        <article className="project-card">
          <header>
              <div className="image-wrapper">
                <img alt={project.name} src={project.screenshot.startsWith('img')?process.env.PUBLIC_URL+project.screenshot:project.screenshot}/>
              </div>
            <div>
              <h2>{project.name}  
              <a href={project.github} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
              <a href={project.live} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGlobe}/></a>
                </h2>
              <p>{project.description}</p>
              <div className="stack_icons">
                {project.stack && project.stack.map(name=>stackIcons.find(el=>el.name===name))
                  .filter(Boolean)
                  .map( (stack,i)=>stack.type==='fa'?
                   <FontAwesomeIcon key={i} size="2x" icon={stack.data}/>:
                   <img src={stack.data} key={i} style={{height:'2em'}} alt="stack.name"/>
                   )}
              </div>
              <button onClick={toggleExtend}>{isExtended?'Hide':'Expand'}</button>
            </div>
          </header>
          <div className="extended hidden" ref={extended}>
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