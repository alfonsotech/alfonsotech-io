import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import SocialButtons from './SocialButtons'
import './Navigation.css'

const Navigtaion = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>

          <a href="#home"><img className="logo" src='/favicon.ico' alt="AlfonsoTech-logo"/> ALFONSO TECH</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
          <SocialButtons />
      </Nav>
    </Navbar>
  )
}

export default Navigtaion
