import React from 'react';
import './Navbar.scss';
import Logo from '../../assets/logo.svg?component';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="logo">
          <Logo />
          <span className="content"> Theme Switcher </span>
        </div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li className="button">Sign In</li>
          <li className="button">Login</li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;