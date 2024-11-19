import React from 'react';
import projects from '../data/projects';

const Projects = () => {
  return (
    <div className="container">
      <h2 className="text-center">Mes Projets</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={project.image} alt={project.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-flex justify-content-between">
                  {project.liveLink && (
                    <a href={project.liveLink} className="btn btn-success" target="_blank" rel="noopener noreferrer">
                      Voir le projet
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      Code GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
