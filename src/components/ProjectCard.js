import React from "react";
import './ProjectCard.sass';

export default ({project})=>{

    return (
        <article className="project-card">
          <header>
              <img alt={project.name} src={project.screenshot}/>
            <div>
              <h2>{project.name}</h2>
              <p>{project.description}</p>
            </div>
          </header>
            
        </article>
    )
}