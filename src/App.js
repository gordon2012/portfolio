import React, { Component } from 'react';
import { render } from 'react-dom';

import Container from './Container';
import Project from './Project';

export const baseUrl = 'https://gordonscampinggear.com/img/';

class App extends Component {
  state = {
    sections: [
      {
        name: 'Responsive Web Design',
        projects: [
          { name: 'Tribute', image: 'tribute.png' },
          { name: 'Survey Form', image: 'survey.png' },
          { name: 'Product Landing Page', image: 'product.png' }
        ]
      },
      {
        name: 'Front End Libraries',
        projects: [
          { name: 'Random Quote Machine', image: 'quote.png' },
          { name: 'Markdown Previewer', image: 'markdown.png' }
        ]
      }
    ]
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
              {this.state.sections.map(section => (
                <div key={section.name} className="project-section">
                  <h2>{section.name} Projects</h2>
                  <div className="project-grid">
                    {section.projects.map(project => (
                      <Project
                        key={project.name}
                        name={project.name}
                        image={project.image}
                      />
                    ))}
                  </div>
                </div>
              ))}
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
