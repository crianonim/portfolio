import React,{useState} from "react";
import ProjectCard from './ProjectCard';
import {projects} from '../data/projects'; 
import './Project.sass';

export default ()=>{
    const [filter,setFilter]= useState('all');
    const filteredProjects=filter === 'all' ?
        projects : 
          filter=== 'team' ? projects.filter(project=>project.type==="team") : projects.filter(project=>project.type==="personal")
    return (
        <div>
              <div className="project-filters">
                  <button onClick={()=>setFilter("all")} className={filter==='all' ? 'selected' :''}>All</button>
                  <button onClick={()=>setFilter("personal")}  className={filter==='personal' ?'selected':''}>Personal</button>
                  <button onClick={()=>setFilter("team")}  className={filter==='team' ? 'selected':''}>Team</button>
              </div>
                 {filteredProjects.map( (project,i)=><ProjectCard key={i} project={project}/>)}
        </div>
    )
}