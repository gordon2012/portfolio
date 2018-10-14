import React, { Component } from 'react';
import { render } from 'react-dom';

import Container from './Container';
import Project from './Project';

export const baseUrl = 'gordonscampinggear.com';

class App extends Component {
  state = {
    activeModal: -1,

    projects: [
      { name: 'Responsive Web Design', heading: true },
      {
        name: 'Tribute',
        images: ['tribute.png', 'product.png'],
        url: 'tribute',
        repo: 'fcc-tribute',
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
        repo: 'fcc-survey'
      },
      {
        name: 'Product Landing Page',
        images: ['product.png'],
        url: 'product',
        repo: 'fcc-product'
      },
      { name: 'Empty Section in Middle', heading: true },
      { name: 'Front End Libraries', heading: true },
      {
        name: 'Random Quote Machine',
        images: ['quote.png'],
        url: 'quote',
        repo: 'fcc-quote'
      },
      {
        name: 'Markdown Previewer',
        images: ['markdown.png'],
        url: 'markdown',
        repo: 'fcc-markdown'
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

  render() {
    return (
      <div id="home">
        <header>
          <Container w={800}>
            <a href="#home">
              <strong>Gordon Doskas</strong>
            </a>
            <a href="#profile">Profile</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
          </Container>
        </header>

        <main>
          <section>
            <h1>Hero</h1>
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

              <div className="project-grid">
                {this.state.projects.map((project, i, a) => {
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
