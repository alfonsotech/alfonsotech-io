import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import SocialButtons from './SocialButtons'
import './Navigation.css'

const Navigtaion = () => {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <h1>ALFONSO TECH</h1>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
          <SocialButtons />
      </Nav>
    </Navbar>
  )
}

export default Navigtaion
