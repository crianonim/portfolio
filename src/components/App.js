import React from 'react';
import Bio from './Bio';
import ProjectCard from './ProjectCard';
import {projects} from '../data/projects'; 

function App() {
  return (
    <div className="App">
      <Bio/>
      {projects.map( (project,i)=><ProjectCard key={i} project={project}/>)}
    </div>
  );
}

export default App;
