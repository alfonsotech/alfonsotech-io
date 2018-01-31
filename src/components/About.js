import React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './About.css'

const TechStack = () => {

  const urls = []
  for (var i =0; i<12;i++) {
    urls.push('./assets/images/tech-stack-imgs/download-'+i+'.png')
  }

    return (
      <div className="TechStack">
        <ul className="technologies">
          {urls.map( (url, index) => {

            return <li className="logo-item" key={index}>
              <img className="logo-image" src={url} alt="tech-logo"/>
            </li>

          })}
        </ul>
    </div>
  )
}

const About = () => {
  return (
      <div className="About" id='about'>
          <MuiThemeProvider>
            <Card className='about'>
              <CardHeader
                // title="Hello, I'm Rita Alfonso."
                // subtitle="Full Stack Web Developer & Educator"
                avatar="./assets/images/logo-me.jpg"
              />
              <CardText>
                <h4><strong>Hello, I'm Rita Alfonso.</strong></h4>
                <p>I'm a former Philosophy professor turned web developer. I specialize in the <strong>MERN stack (MongoDB, Express, React, and Node)</strong>, and have worked with the following technologies:</p>
                <TechStack />
                <p>I also regularly mentor coding bootcamp students with <strong><a href="https://www.linkedin.com/company/trilogy-education-services/?originalSubdomain=es" target="_blank" rel="noopener noreferrer">Trilogy Education Services, Inc.</a></strong> (which partners with universities throughout the United States to offer web development bootcamps through their extension programs) and <strong><a href="https://www.linkedin.com/school/openclassrooms/" target="_blank" rel="noopener noreferrer">OpenClassrooms</a></strong>, Europe's leading, accredited educational platform. I love to share my knowledge with others!</p>
              </CardText>
            </Card>
          </MuiThemeProvider>
      </div>
  )
}

export default About
