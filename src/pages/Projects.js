import React from 'react';
import ProjectItem from '../components/ProjectItems';
import { ProjectList } from '../components/ProjectList';
import '../styles/Project.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => (
          <ProjectItem
            key={project.name} // Ensure a unique key for each ProjectItem
            name={project.name}
            image={project.image}
            link={project.link} // Pass the link for each project
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
