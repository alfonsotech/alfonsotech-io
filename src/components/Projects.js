import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './Projects.css'

const projects = [{
    title: 'Public Philosophy Platform',
    image: './assets/images/project-images/ppp.png',
    description: 'Crowdsourced & ranked Philosophy topics, curated learning paths, and upcoming tribes.',
    github: 'https://github.com/alfonsotech/bphil',
    deploy:'https://bphil.herokuapp.com/'
  },{
    title: 'Continental Philosophy Tube',
    image: './assets/images/project-images/continental-phil-tube.png',
    description: 'Easily search for the latest Youtube videos on topics in Continental Philosophy.',
    github: 'https://github.com/alfonsotech/Continental-Phil-Tube',
    deploy:'https://alfonsotech.github.io/Continental-Phil-Tube/'
  },{
    title: 'PDX Tech Hub',
    image: './assets/images/project-images/pdx-tech-hub.png',
    description: 'Search for Web Dev jobs in Portland, OR and see their locations on a Google map.',
    github: 'https://github.com/alfonsotech/PDXTechHub',
    deploy:'http://pdx-tech-hub.herokuapp.com/'
  },{
    title: 'MeetEmma',
    image: './assets/images/project-images/meetEmma2.png',
    description: 'A Twitter Bot that tweets out randomly selected content on a timed interval, and stores new tweets in the database as they are added to timeline.',
    github: 'https://github.com/alfonsotech/MeetEmma2.0',
    deploy:'https://github.com/alfonsotech/MeetEmma2.0'
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
                // avatar="./assets/images/alfonsotech-logo.png"
              />
              <CardText>
                <a href={project.deploy} target="_blank" rel="noopener noreferrer"><img className="project-image" src={project.image} alt={project.title} /></a>
                <hr />
                <div className="project-links">
                  <a href={project.deploy} target="_blank" rel="noopener noreferrer"><FlatButton label="Live" /></a>
                  <br />
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><FlatButton label="Code" /></a>
                </div>
              </CardText>
            </Card>
          </MuiThemeProvider>
        })}
      </div>
  )
}

export default Projects
