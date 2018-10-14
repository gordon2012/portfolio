import React from 'react';
import { baseUrl } from './App';

const Project = props => {
  return (
    <div className="project card">
      <div className="project-header">
        <h1>{props.name}</h1>
      </div>
      <div className="project-image">
        <img src={`${baseUrl}${props.image}`} alt={props.name} />
      </div>
    </div>
  );
};

export default Project;
