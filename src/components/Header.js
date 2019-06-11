import React, { Component } from 'react';
import './Header.css';
import Button from './Button';
import logo from '../img/mapitquick-logo.png';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className='navLeft'>
            <a href=''>
              {/* <img className='logo' src={logo} alt='The Sulfur Group' /> */}
            </a>
          </div>
          <div className='navRight'>
            <Button buttonStyle='medium' buttonLabel='Get MapItQuick' />
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
