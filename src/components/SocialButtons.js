import React from 'react';
import TwitterIcon from 'react-icons/lib/fa/twitter'
import LinkedInIcon from 'react-icons/lib/fa/linkedin'
import GithubIcon from 'react-icons/lib/fa/github'
import EmailIcon from 'react-icons/lib/fa/paper-plane'

const style = {
  padding: 5,
  margin: 5,
  fontSize: 30,
  border: "1px solid rgba(0,0,0,.2)",
  borderRadius: 50,
  color: '#646283'
}

const SocialButtons = () => {
  return (
    <div>
      <a href="https://github.com/alfonsotech" target="_blank" rel="noopener noreferrer"><GithubIcon style={style}/></a>
      <a href="https://www.linkedin.com/in/alfonsotech/" target="_blank" rel="noopener noreferrer"><LinkedInIcon style={style}/></a>
      <a href="https://twitter.com/alfonsowebdev" target="_blank" rel="noopener noreferrer"><TwitterIcon style={style}/></a>
      <a href="mailto:alfonsotech@nym.hush.com"><EmailIcon style={style}/></a>
    </div>
  )
}

export default SocialButtons
