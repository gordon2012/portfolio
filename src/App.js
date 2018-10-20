import React, { Component } from 'react';
import { render } from 'react-dom';
import memoize from 'memoize-one';

import Container from './Container';
import Project from './Project';

const baseUrl = 'gordondoskas.com';

const siteUrl = sub => `https://${sub}.${baseUrl}`;
const githubUrl = repo => `https://github.com/gordon2012/${repo}`;

const LinkImg = () => <img src="fa-external-link.png" alt="Visit Site" />;
const GithubImg = () => <img src="fa-github.png" alt="View Repository" />;

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
      { name: 'html', amount: 95 },
      { name: 'css', amount: 90 },
      { name: 'javascript', amount: 70 },
      { name: 'bootstrap', amount: 90 },
      { name: 'jquery', amount: 80 },
      { name: 'react', amount: 60 },
      { name: 'd3', amount: 40 },
      { name: 'php', amount: 60 },
      { name: 'cakephp', amount: 50 },
      { name: 'mongodb', amount: 40 },
      { name: 'mysql', amount: 40 }
    ],

    projects: [
      // section
      { name: 'Contributions at Salt Creek Media Inc.', heading: true },

      {
        name: 'PURLs',
        images: ['purls.png', 'purls2.png'],
        links: [{ title: <LinkImg />, url: 'https://purlpro.com/' }],
        skills: ['html', 'css', 'javascript', 'jquery', 'cakephp'],
        copy: [
          `PURLs, or Personalized URLs, are landing pages used to improve the response rate of a client's direct mail campaign and collect data from users.`,
          'I did not invent the concept of PURLs, nor was it I who implemented it at Salt Creek Media. I did, however, create many of the better looking ones, as well as some of the marketing material.',
          'I also devised a template workflow system for creating new pages that employs the css grid layout that is mobile responsive and features progressive enhancement.',
          'Marketing page includes links to some examples. Repository not publicly available.'
        ]
      },

      {
        name: 'LeadManager',
        images: ['leadmanager.png', 'leadmanager2.png'],
        links: [
          {
            title: <LinkImg />,
            url: 'https://saltcreekmedia.com/leadmanager.php'
          }
        ],
        skills: [
          'html',
          'css',
          'javascript',
          'bootstrap',
          'jquery',
          'php',
          'cakephp',
          'mongodb'
        ],
        copy: [
          'The LeadManager is a lead lookup and campaign management tool that also has many CRM functions. It is used by clients as well as internal stakeholders.',
          'The LeadManager existed long before I joined Salt Creek Media, but I have contributed to it in the form of bug fixes, feature additions, API integrations, stylistic improvements, and more.',
          'Marketing page includes screenshots and a video. Repository not publicly available.'
        ]
      },

      {
        name: 'Whats Mailing',
        images: ['whatsmailing.png', 'whatsmailing2.png'],
        links: [
          {
            title: <LinkImg />,
            url: 'https://whatsmailing.com/'
          },

          {
            title: <img src="fa-linkedin.png" alt="View Post" />,
            url:
              'https://www.linkedin.com/feed/update/urn:li:activity:6397218052332679168'
          }
        ],
        skills: [
          'html',
          'css',
          'javascript',
          'bootstrap',
          'jquery',
          'php',
          'cakephp',
          'mysql'
        ],
        copy: [
          'Whats Mailing is a library of direct mail pieces collected from across the United States.',
          'It existed before I joined Salt Creek Media, but I have contributed to it in the form of bug fixes, feature additions, and stylistic improvements.',
          'Landing page includes screenshots. Linkedin post includes a video. Repository not publicly available.'
        ]
      },

      // section
      { name: 'Personal Projects', heading: true },

      {
        name: 'Professional Portfolio',
        images: ['portfolio.png', 'portfolio2.png'],
        links: [
          { title: <LinkImg />, url: 'https://gordondoskas.com' },
          {
            title: <GithubImg />,
            url: githubUrl('portfolio')
          }
        ],
        skills: ['html', 'css', 'javascript', 'react'],
        copy: [
          'This website (the one you are looking at) is a showcase of the projects I have created and contributed to.',
          'It is created with React and bundled with Parcel. It is the current culmination of my knowledge and best practices with both React and CSS.',
          'It features a grid based layout, a project section filterable by skill, a Modal, and a Carousel.'
        ]
      },

      // section
      { name: 'freeCodeCamp Projects', heading: true },

      {
        name: 'Personal Portfolio',
        images: ['fcc-portfolio.png', 'fcc-portfolio2.png'],
        links: basicLinks('portfolio'),
        skills: ['html', 'css'],
        copy: [
          'A freeCodeCamp Responsive Web Design project, this simple website is an exhaustive showcase of all my completed freeCodeCamp projects, including ones not shown here. It features a mobile responsive and progressively enhanced css grid based layout.'
        ]
      },

      {
        name: 'Product Landing Page',
        images: ['product.png', 'product2.png'],
        links: basicLinks('product'),
        skills: ['html', 'css'],
        copy: [
          'A freeCodeCamp Responsive Web Design project, this simple website is landing page for a fictional product company. It features an email signup form, a sticky navbar, product and feature descriptions, and an embedded video.'
        ]
      },

      {
        name: 'Random Quote Machine',
        images: ['quote.png', 'quote2.png'],
        links: basicLinks('quote'),
        skills: ['html', 'css', 'javascript', 'react'],
        copy: [
          'A freeCodeCamp Front End Library project built with React, this website uses the talaikis.com API to generate random quotes and allows them to be tweeted out.'
        ]
      },

      {
        name: 'Markdown Previewer',
        images: ['markdown.png', 'markdown2.png'],
        links: basicLinks('markdown'),
        skills: ['html', 'css', 'javascript', 'react'],
        copy: [
          'A freeCodeCamp Front End Library project built with React, this website is a WYSIWYG markdown editor that displays a preview in real time.'
        ]
      },

      {
        name: 'Bar Chart',
        images: ['barchart.png', 'barchart2.png'],
        links: basicLinks('barchart'),
        skills: ['html', 'css', 'javascript', 'd3'],
        copy: [
          'A freeCodeCamp Data Visualization project built with D3, this website is a visualization of the rise (and occasional slight fall) of the United States GDP since 1947.'
        ]
      },

      {
        name: 'Scatterplot Graph',
        images: ['scatterplot.png', 'scatterplot2.png'],
        links: basicLinks('scatterplot'),
        skills: ['html', 'css', 'javascript', 'd3'],
        copy: [
          'A freeCodeCamp Data Visualization project build with D3, this website is a visualization of race finish times of cyclists since 1994, denoting those who were caught doping.'
        ]
      },

      {
        name: 'Heat Map',
        images: ['heatmap.png', 'heatmap2.png'],
        links: basicLinks('heatmap'),
        skills: ['html', 'css', 'javascript', 'd3'],
        copy: [
          'A freeCodeCamp Data Visualization project build with D3, this website is a visualization of the variation in global temperature since 1753.'
        ]
      }
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
                  src={`https://avatars2.githubusercontent.com/u/9071982?s=460&v=4`}
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
