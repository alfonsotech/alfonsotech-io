import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import SocialButtons from './SocialButtons'
import './Navigation.css'

const Navigtaion = () => {
  return (
    <Navbar className="Navbar" collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <h1>ALFONSO TECH</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1}>
            <SocialButtons />
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigtaion
