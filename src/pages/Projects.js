import React from 'react';
import ProjectItem from '../components/ProjectItems';
import {ProjectList} from '../components/ProjectList';
           
import "../styles/Project.css";

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className="projectList">
       {ProjectList.map((project) =>{
        return <ProjectItem name={project.name} image={project.image}/>
       })}

      </div>
      </div >
  )
}

export default Projects