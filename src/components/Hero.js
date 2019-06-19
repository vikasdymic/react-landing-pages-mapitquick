import React, { Component } from 'react';
import './Hero.css';
import HeroImage from '../img/hero-item.png';
import Button from './Button';
import star from '../img/star.png';
import Modal from './Modal';

class Hero extends Component {
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
      <section className='heroSection'>
        <div className='heroContent'>
          <img className='heroImage' src={HeroImage}></img>
          <h1 className='heroContentTitle'>
            Get accurate directions <span className='magicalLine'>FAST.</span>
          </h1>
          <p className='heroContentCopy'>
            Need accurate directions fast? MapItQuick has all your favorite destinations: food, gas, entertainment. Get there quickly by downloading MapItQuick today.
          </p>
          {/* <Button buttonLabel='Download here' buttonStyle='large heroButton'/> */}
          <button className='hero button' onClick={this.toggleModal}>Download Here</button>
          <Modal show={this.state.isOpen}
            onClose={this.toggleModal}>MapItQuick</Modal>
          <div className='starRating'>
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
            <img src={star} alt='star' />
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
