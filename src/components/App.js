import React from 'react';
import Bio from './Bio';
import ProjectCard from './ProjectCard';
import {projects} from '../data/projects'; 
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Bio/>
      {projects.map( (project,i)=><ProjectCard key={i} project={project}/>)}
    </div>
  );
}

export default App;
