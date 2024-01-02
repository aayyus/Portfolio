import React from 'react';

function ProjectItem({ image, name, link }) {
  return (
    <div className='projectItem'>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div style={{backgroundImage: `url(${image})`}} className="bgImage"></div>
      </a>
      <h1>{name}</h1>
    </div>
  );
}

export default ProjectItem;
