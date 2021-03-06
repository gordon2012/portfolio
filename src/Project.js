import React from 'react';

import Modal from './Modal';
import Container from './Container';
import Carousel from './Carousel';

const ModalButton = props => {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-modal-button"
    >
      {props.children}
    </a>
  );
};

const Project = props => {
  const { images } = props;

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
        <div className="project-header-skills">
          {props.skills.map(skill => (
            <div key={skill}>{skill}</div>
          ))}
        </div>
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

            <Container w={1200}>
              <Carousel images={images} />
            </Container>

            <div className="project-modal-copy">
              <Container w={800}>
                {props.copy &&
                  props.copy.map((copy, i) => <p key={i}>{copy}</p>)}
                <p>
                  {'Technologies used: '} {props.skills.join(', ')}
                </p>
              </Container>
            </div>

            <div className="project-modal-buttons">
              {props.links &&
                props.links.map((link, i) => (
                  <ModalButton key={i} url={link.url}>
                    {link.title}
                  </ModalButton>
                ))}
            </div>
          </div>
        </Modal>
      ) : null}
    </button>
  );
};

export default Project;
