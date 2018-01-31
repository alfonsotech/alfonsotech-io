import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './Testimonials.css'

const testimonials = [{
    name: 'Risa F.',
    image: 'assets/images/testimonials-images/risa.jpg',
    title: 'UI/UX JavaScript Developer at SoSACorp',
    bootcamp: 'Code Fellows (now Alchemy Code Lab)',
    url: 'http://www.alchemycodelab.com/',
    testimonial: 'During my time at Code Fellows, Rita went above and beyond to help me understand a lot of foundational concepts. As a career-switcher, programming is difficult to grasp the first time around. Not only did Rita spend a great deal of time with me in class, she took the time to meet up with me and other classmates over the weekend. I attribute a lot of my success to Rita\'s mentoring and encouragement throughout the program. I highly recommend Rita for just about anything. Her ability to translate high-level technical concepts into digestible, relatable language make her a valuable asset to any team or project. Whether it be from her experience as an educator or teammate, Rita inspires great ideas and is very skilled at managing projects. Rita always seems to be coming up with new project ideas and I\'m excited to see what\'s in store for her. If I had the opportunity, I would definitely work with Rita again.'
  },
  {
    name: 'Christian V.',
    image: 'assets/images/testimonials-images/christian.jpg',
    title: 'Software Engineer at Pintrest',
    bootcamp: 'U.C. Berkeley Coding Bootcamp',
    url: 'https://bootcamp.berkeley.edu/coding/',
    testimonial: 'Rita was a TA at the UC Berkeley coding boot camp where I was a teacher. During this time Rita went above and beyond to make sure all students were on track and helped out the ones that needed it the most. She truly has the teaching gene and always wants to make sure everyone is included. One of the things I like the most about Rita is the awesome feedback she gave, not only to the students but also to me. We were always trying out better ways to teach & communicate to the students. I highly recommend Rita and am grateful for the time that we worked together.'
  },{
    name: 'Lisa B.',
    image: 'assets/images/testimonials-images/lisa.jpg',
    title: 'Frontend Developer',
    bootcamp: 'Learners\' Guild',
    url: 'https://www.learnersguild.org/',
    testimonial: 'Rita proved to be crucial to the team and contributed significantly to the success of our project. She\'s a powerful, skilled and responsible Full-Stack Developer! Rita is an organized person that has no problems working hard to develop and implement thoughtful solutions. I thoroughly enjoyed working with her and hope that we have the chance to collaborate soon!'
  },{
      name: 'Lizz K.',
      image: 'assets/images/testimonials-images/lizz.jpg',
      title: 'Site Builder at meltmedia',
      bootcamp: 'Learners\' Guild',
      url: 'https://www.learnersguild.org/',
      testimonial: 'Rita and I participated in Learner\'s Guild together, and from the moment I met her I could really tell she had a passion for software engineering. At the time that we were in the program, there was a serious lack of practice projects that were fun and engaging. Rita took initiative to create some for us and I believe she made the program better for me and for a lot of people by doing that.'
    }
]

const Testimonials = () => {
  return (
      <div className="Testimonials" id='testimonials'>
        {testimonials.map( (student, index) => {
          return <MuiThemeProvider key={index}>
            <Card className='testimonial'>
              <CardHeader
                title={student.name}
                subtitle={student.title}
                avatar={student.image}
              />
              <CardText>
                {student.testimonial}
                <hr />
                <a href={student.url} target="_blank">{student.bootcamp}</a>

              </CardText>
            </Card>
          </MuiThemeProvider>
        })}
      </div>
  )
}

export default Testimonials
