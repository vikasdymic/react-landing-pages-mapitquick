import React, { Component } from 'react';
import './Hero.css';
import Button from './Button';
import star from '../img/star.png'

class Hero extends Component {
  render() {
    return (
      <section className='heroSection'>
        <div className='heroContent'>
          <h1 className='heroContentTitle'>
            Get accurate directions <span className='magicalLine'>FAST.</span>
          </h1>
          <p className='heroContentCopy'>
            Need accurate directions fast? MapItQuick has all your favorite destinations: food, gas, entertainment. Get there quickly by downloading MapItQuick today.
          </p>
          <Button buttonLabel='Download here' buttonStyle='large heroButton'/>
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
