import React, {Component} from 'react';
import {BottomNavigation} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SocialButtons from './SocialButtons'
import './Footer.css'


class Footer extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      <div className="Footer">
        <MuiThemeProvider>
          <Paper zDepth={1}>
            <BottomNavigation selectedIndex={this.state.selectedIndex}>
              <SocialButtons />
            </BottomNavigation>
          </Paper>
          <h6>Copyright &copy; 2018 AlfonsoTech</h6>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default Footer;
