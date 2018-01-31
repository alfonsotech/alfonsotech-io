import React, { Component } from 'react';
import './App.css'
import Navigation from './components/Navigation'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'

import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <h2>ABOUT ME</h2>
        <About />
        <h2>PROJECTS</h2>
        <Projects />
        <h2>TESTIMONIALS</h2>
        <Testimonials />
        <Footer />
    </div>
    );
  }
}

export default App;
