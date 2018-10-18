import React, { Component } from 'react';
import { render } from 'react-dom';

import memoize from 'memoize-one';

import Container from './Container';
import Project from './Project';

export const baseUrl = 'gordonscampinggear.com';

const siteUrl = sub => `https://${sub}.${baseUrl}`;
const githubUrl = repo => `https://github.com/gordon2012/${repo}`;

const LinkImg = () => (
  <img src={require('./fa-external-link.png')} alt="Visit Site" />
);
const GithubImg = () => (
  <img src={require('./fa-github.png')} alt="View Repository" />
);

const basicLinks = name => [
  { title: <LinkImg />, url: siteUrl(name) },
  {
    title: <GithubImg />,
    url: githubUrl(`fcc-${name}`)
  }
];

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
      { name: 'react', amount: 60 },
      { name: 'd3', amount: 40 }
    ],

    projects: [
      // section
      { name: 'Responsive Web Design', heading: true },
      {
        name: 'Tribute',
        images: ['tribute.png'],
        links: basicLinks('tribute'),
        skills: ['html', 'css'],
        copy: [
          'A freeCodeCamp Responsive Web Design project, this simple website is a tribute to Thor, the god of thunder, a fictional character in the Marvel Cinematic Universe. It features a timeline that showcases his accomplishments over the years. Warning: Spoiler Alert.'
        ]
      },
      {
        name: 'Survey Form',
        images: ['survey.png'],
        links: basicLinks('survey'),
        skills: ['html', 'css'],
        copy: [
          'A freeCodeCamp Responsive Web Design project, this simple website is a survey form that asks the user a series of questions.'
        ]
      },
      {
        name: 'Product Landing Page',
        images: ['product.png'],
        links: basicLinks('product'),
        skills: ['html', 'css'],
        copy: [
          'A freeCodeCamp Responsive Web Design project, this simple website is landing page for a fictional product company. It features an email signup form, a sticky navbar, product and feature descriptions, and an embedded video.'
        ]
      },

      {
        name: 'Technical Documentation',
        images: ['documentation.png'],
        links: basicLinks('documentation'),
        skills: ['html', 'css'],
        copy: [
          'A freeCodeCamp Responsive Web Design project, this simple website is technical documentation for a number of useful bash commands. It features a sidebar, section headers, and monospaced formatted code blocks, similar to what is often seen on blog or tutorial posts.'
        ]
      },

      {
        name: 'Personal Portfolio',
        images: ['portfolio.png'],
        links: [
          { title: <LinkImg />, url: 'https://gordonscampinggear.com' },
          {
            title: <GithubImg />,
            url: githubUrl('fcc-portfolio')
          }
        ],
        skills: ['html', 'css'],
        copy: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum']
      },

      // section
      { name: 'Front End Libraries', heading: true },
      {
        name: 'Random Quote Machine',
        images: ['quote.png'],
        links: basicLinks('quote'),
        skills: ['html', 'css', 'javascript', 'react'],
        copy: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum']
      },
      {
        name: 'Markdown Previewer',
        images: ['markdown.png'],
        links: basicLinks('markdown'),
        skills: ['html', 'css', 'javascript', 'react'],
        copy: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum']
      },

      {
        name: 'Drum Machine',
        images: ['drum.png'],
        links: basicLinks('drum'),
        skills: ['html', 'css', 'javascript', 'react'],
        copy: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum']
      },

      {
        name: 'Javascript Calculator',
        images: ['calculator.png'],
        links: basicLinks('calculator'),
        skills: ['html', 'css', 'javascript', 'react'],
        copy: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum']
      },

      {
        name: 'Pomodoro Clock',
        images: ['pomodoro.png'],
        links: basicLinks('pomodoro'),
        skills: ['html', 'css', 'javascript', 'react'],
        copy: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum']
      },

      // section
      { name: 'Data Visualization', heading: true },

      {
        name: 'Bar Chart',
        images: ['barchart.png'],
        links: basicLinks('barchart'),
        skills: ['html', 'css', 'javascript', 'd3'],
        copy: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum']
      },

      {
        name: 'Scatterplot Graph',
        images: ['scatterplot.png'],
        links: basicLinks('scatterplot'),
        skills: ['html', 'css', 'javascript', 'd3'],
        copy: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum']
      },

      {
        name: 'Heat Map',
        images: ['heatmap.png'],
        links: basicLinks('heatmap'),
        skills: ['html', 'css', 'javascript', 'd3'],
        copy: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum']
      }

      /*{
        name: '_',
        images: ['_.png'],
        url: '_',
        repo: 'fcc-_',
        skills: ['html', 'css', 'javascript', 'd3'],
        copy: ['lorem ipsum', 'lorem ipsum', 'lorem ipsum']
      }*/
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
                        links={project.links}
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
