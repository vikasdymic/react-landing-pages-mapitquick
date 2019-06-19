import React, { Component } from 'react';
import './Header.css';
import Button from './Button';
import logo from '../img/mapitquick-logo.png';
import Modal from './Modal';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
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
            {/* <Button buttonStyle='medium' buttonLabel='Get MapItQuick' /> */}
            <button className='medium button' onClick={this.toggleModal}>Get MapItQuick</button>
            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>MapItQuick</Modal>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
