import React from 'react';
import './Navbar.scss';
import themeKeys from '../../App';

class Navbar extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e: any) {
    let props = [
      [ '--navbar-background', ['transparent', 'white'] ],
      [ '--navbar-boxshadow', ['0px 0px 0px transparent', '0px 3px 12px rgba(0, 0, 0, 0.3)'] ],
    ]
    let s = e.srcElement.documentElement.scrollTop;

    props.forEach(p => {
      document.documentElement.style.setProperty(p[0] as string, p[1][ ~~(s > 100) ]);
    });
  }

  render() {
    return (
      <nav>
        <div className="logo">
          <img src="./src/assets/logo.svg" alt="" />
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