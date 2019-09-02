import React from 'react';
import './App.css';

import ProjectCard from './ProjectCard';
import {projects} from '../data/projects'; 

function App() {
  return (
    <div className="App">
      {projects.map(project=><ProjectCard project={project}/>)}
    </div>
  );
}

export default App;
