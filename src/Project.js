import React from 'react';
import { baseUrl } from './App';

import Modal from './Modal';

const Project = props => {
  const images = props.images.map(image => `https://${baseUrl}/img/${image}`);

  return (
    <button
      className="project card"
      onClick={props.handleProjectClick}
      data-index={props.index}
    >
      <div className="project-hover">
        <span aria-label="show modal" role="img">
          🔍
        </span>
      </div>
      <div className="project-header">
        <h1>{props.name}</h1>
      </div>
      <div className="project-image">
        <img src={images[0]} alt={props.name} />
      </div>
      {props.showModal ? (
        <Modal>
          <div className="project-modal">
            <button className="close-button" onClick={props.handleCancelClick}>
              <span>✖</span>
            </button>
            <h1>{props.name}</h1>

            <div className="project-modal-images">
              {images.map((image, i) => (
                <img key={image} src={image} alt={`${props.name} ${i + 1}`} />
              ))}
            </div>

            <div className="project-modal-copy">
              {props.copy && props.copy.map((copy, i) => <p key={i}>{copy}</p>)}
            </div>

            <div className="project-modal-buttons">
              <div>
                <a
                  href={`https://${props.url}.${baseUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://imgplaceholder.com/40x40/transparent/333/fa-external-link"
                    alt="Visit Demo"
                  />
                </a>
              </div>
              <div>
                <a
                  href={`https://github.com/gordon2012/${props.repo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://imgplaceholder.com/40x40/transparent/333/fa-github"
                    alt="View Repository"
                  />
                </a>
              </div>
            </div>
          </div>
        </Modal>
      ) : null}
    </button>
  );
};

export default Project;
