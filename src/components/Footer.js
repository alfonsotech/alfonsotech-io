import React, {Component} from 'react';
import SocialButtons from './SocialButtons'
import './Footer.css'


class Footer extends Component {

  render() {
    return (
      <div className="Footer">
        <SocialButtons />
        <h6><small>Copyright &copy; 2018 AlfonsoTech</small></h6>
      </div>
    )
  }
}

export default Footer;
