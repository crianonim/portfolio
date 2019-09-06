import React from 'react';

import ProjectCard from './ProjectCard';
import {projects} from '../data/projects'; 

function App() {
  return (
    <div className="App">
      {projects.map( (project,i)=><ProjectCard key={i} project={project}/>)}
    </div>
  );
}

export default App;
