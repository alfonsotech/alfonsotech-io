import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './Projects.css'

const projects = [{
    title: 'Game of Life',
    image: './assets/images/project-images/game-of-life.png',
    description: 'The Game Of Life built with React.',
    github: '',
    deploy:''
  },{
    title: 'Continental Philosophy Tube',
    image: './assets/images/project-images/continental-phil-tube.png',
    description: 'Easily search for the latest Youtube videos on topics in Continental Philosophy.',
    github: '',
    deploy:''
  },{
    title: 'PDX Tech Hub',
    image: './assets/images/project-images/pdx-tech-hub.png',
    description: 'Search for Web Dev jobs in Portland, OR and see their locations on a Google map.',
    github: '',
    deploy:''
  },{
    title: 'MeetEmma',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'A Twitter Bot that tweets out randomly selected content on a timed interval, and stores new tweets in the database as they are added to timeline.',
    github: '',
    deploy:''
  }
]

const Projects = () => {
  return (
      <div className="Projects" id='projects'>
        {projects.map( (project, index) => {
          return <MuiThemeProvider key={index}>
            <Card className='project'>
              <CardHeader
                title={project.title}
                subtitle={project.description}
                avatar="./assets/images/alfonsotech-logo.png"
              />
              <CardText>
                <img className="project-image" src={project.image} alt={project.title} />
                <hr />
                <a className="project-link" src={project.deploy}>Live</a>
                <br />
                <a className="project-link" src={project.github}>Github</a>
              </CardText>
            </Card>
          </MuiThemeProvider>
        })}
      </div>
  )
}

export default Projects
