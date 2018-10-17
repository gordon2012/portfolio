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

    skills: [
      { name: 'html', amount: 80 },
      { name: 'css', amount: 90 },
      { name: 'javascript', amount: 70 },
      { name: 'react', amount: 60 }
    ],

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
            <Container w={800}>
              <div className="profile card">
                <h1>Profile</h1>
                <p
                >{`I am a Front End Web Developer with a bachelor's degree in IT: Software Engineering at Salt Creek Media Inc, an enterprise software shop that develops and maintains custom ERP, CRM, and automation software for a large Direct Mail Print shop. Most of my time is spent building custom, responsive, mobile friendly marketing landing pages for clients to improve the effectiveness of their direct mail campaigns. I also frequently add features to our customer facing and internal web applications.`}</p>

                <p
                >{`I am skilled in many front end technologies including HTML, CSS, SASS, Bootstrap JavaScript, JQuery, and React. I am also familiar with back end technologies such as PHP, CakePHP, Apache, MongoDB, and MySQL. I frequently use various tools and methodologies such as Git, GitHub, npm, Gulp, Webpack, Bash, and Scrum.`}</p>
              </div>
            </Container>
          </section>

          <section id="skills">
            <Container w={800}>
              <div className="skills card">
                <h1>Skills</h1>

                <div className="skills-wrap">
                  {false &&
                    this.state.skills.map(skill => (
                      <div key={skill.name} className="skill">
                        <div className="skill-label">{skill.name}</div>
                        <div className="skill-amount">
                          <div
                            className="skill-percent"
                            style={{ width: `${skill.amount}%` }}
                          >
                            {skill.amount}
                          </div>
                        </div>
                      </div>
                    ))}

                  <div className="skills-column skills-label">
                    {this.state.skills.map(skill => (
                      <div key={skill.name} className="skills-label-inner">
                        {skill.name}
                      </div>
                    ))}
                  </div>

                  <div className="skills-column skills-amount">
                    {this.state.skills.map(skill => (
                      <div
                        key={skill.name}
                        className="skills-amount-percent"
                        style={{ width: `${skill.amount}%` }}
                      >
                        <span>{skill.amount}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section id="work">
            <Container w={1200}>
              <div className="work card">
                <h1>Work</h1>

                <Container w={800}>
                  <div className="work-filter">
                    <h2>Filter Projects</h2>
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
                        key={skill.name}
                        data-skill={skill.name}
                        className={`button${
                          skill.name === this.state.filter
                            ? ' button-skill'
                            : ''
                        }`}
                        onClick={this.handleFilterClick}
                      >
                        {skill.name}
                      </button>
                    ))}
                  </div>
                </Container>
              </div>
            </Container>

            <Container w={1200}>
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
                        skills={project.skills}
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
