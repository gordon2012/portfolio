import React, { Component } from 'react';
import { render } from 'react-dom';

import memoize from 'memoize-one';

import Container from './Container';
import Project from './Project';

export const baseUrl = 'gordonscampinggear.com';

class App extends Component {
  filter = memoize(
    (projects, skill) =>
      !skill
        ? projects
        : projects.filter(project => {
            if (project.heading) {
              return true;
            }
            return project.skills.includes(skill);
          })
  );

  state = {
    activeModal: -1,
    filter: '',
    skills: ['html', 'css', 'javascript', 'react'],
    projects: [
      { name: 'Responsive Web Design', heading: true },
      {
        name: 'Tribute',
        images: ['tribute.png', 'product.png'],
        url: 'tribute',
        repo: 'fcc-tribute',
        skills: ['css'],
        copy: [
          'Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.',
          'Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.',
          'Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.',
          'Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.',
          'Lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.'
        ]
      },
      {
        name: 'Survey Form',
        images: ['survey.png'],
        url: 'survey',
        repo: 'fcc-survey',
        skills: ['css']
      },
      {
        name: 'Product Landing Page',
        images: ['product.png'],
        url: 'product',
        repo: 'fcc-product',
        skills: ['css']
      },
      { name: 'Empty Section in Middle', heading: true },
      { name: 'Front End Libraries', heading: true },
      {
        name: 'Random Quote Machine',
        images: ['quote.png'],
        url: 'quote',
        repo: 'fcc-quote',
        skills: ['css', 'react']
      },
      {
        name: 'Markdown Previewer',
        images: ['markdown.png'],
        url: 'markdown',
        repo: 'fcc-markdown',
        skills: ['css', 'react']
      },
      { name: 'Empty Section at End', heading: true }
    ]
  };

  handleProjectClick = event => {
    if (this.state.activeModal > -1) {
      return;
    }
    document.body.classList.add('modal-open');
    this.setState({
      activeModal: +event.target.dataset.index
    });
  };

  handleCancelClick = () => {
    document.body.classList.remove('modal-open');
    this.setState({
      activeModal: -1
    });
  };

  handleFilterClick = event => {
    this.setState({
      filter:
        this.state.filter === event.target.dataset.skill
          ? ''
          : event.target.dataset.skill
    });
  };

  render() {
    const filteredProjects = this.filter(
      this.state.projects,
      this.state.filter
    );

    return (
      <div id="home">
        <header>
          <Container w={800}>
            <a href="#home" className="brand">
              Gordon Doskas
            </a>
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
          </Container>
        </header>

        <main>
          <section id="hero">
            <Container w={800}>
              <div className="hero-title">
                <img
                  src="https://avatars2.githubusercontent.com/u/9071982?s=460&v=4"
                  alt="Gordon Doskas"
                />
                <h1>Gordon Doskas</h1>
                <h2>Front End Web Developer</h2>
              </div>
            </Container>
          </section>

          <section id="profile">
            <h1>Profile</h1>
          </section>

          <section id="skills">
            <h1>Skills</h1>
          </section>

          <section id="work">
            <Container w={1200}>
              <h1>Work</h1>

              <button
                data-skill=""
                onClick={this.handleFilterClick}
                className={`button${
                  this.state.filter === '' ? ' button-skill' : ''
                }`}
              >
                All
              </button>
              {this.state.skills.map(skill => (
                <button
                  key={skill}
                  data-skill={skill}
                  className={`button${
                    skill === this.state.filter ? ' button-skill' : ''
                  }`}
                  onClick={this.handleFilterClick}
                >
                  {skill}
                </button>
              ))}

              <div className="project-grid">
                {filteredProjects.map((project, i, a) => {
                  if (project.heading) {
                    if (i + 1 === a.length || a[i + 1].heading) {
                      return null;
                    } else {
                      return (
                        <h2 key={project.name} className="project-heading">
                          {project.name}
                        </h2>
                      );
                    }
                  } else
                    return (
                      <Project
                        key={project.name}
                        name={project.name}
                        images={project.images}
                        url={project.url}
                        repo={project.repo}
                        copy={project.copy}
                        handleProjectClick={this.handleProjectClick}
                        handleCancelClick={this.handleCancelClick}
                        index={i}
                        showModal={this.state.activeModal === i}
                      />
                    );
                })}
              </div>
            </Container>
          </section>
        </main>

        <footer>
          Copyright {new Date().getFullYear()} <strong>Gordon Doskas</strong>
        </footer>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
