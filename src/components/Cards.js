import React, { Component } from 'react';
import './Cards.css';
import Card from './Card';
import iconCar from '../img/icon_car.png';
import iconBicycle from '../img/icon_bicycle.png';
import iconMap from '../img/icon_map.png';
import iconTrain from '../img/icon_train.png';

class Cards extends Component {
  render() {
    return (
      <section className='cardsSection'>
        <h1 className='headingOne'>A Redefined Palette Of Innovation</h1>
        <div className='cards'>
          <Card
            cardIcon={iconCar}
            cardTitle='Real-time Traffic'
            cardText='Construction got you going slow? Avoid every accident and slowdown on the road with MapItQuick and keep moving forwards.'
          />
          <Card
            cardIcon={iconMap}
            cardTitle='Up-to-date Maps'
            cardText='MapItQuick updates its maps every day to ensure that every new road is available for you to take.'
          />
          <Card
            cardIcon={iconTrain}
            cardTitle='Alternate Transportation'
            cardText='MapItQuick knows that driving is not the only way to get around. MapItQuick supports a wide range of transportation options whether your walking or flying, trust MapItQuick to get you there first.'
          />
          <Card
            cardIcon={iconBicycle}
            cardTitle='Walking Directions'
            cardText='Sometimes walking is the best way to get to your destination. MapItQuick knows pedestrian-friendly routes to get you to your favorite destinations.'
          />
        </div>
      </section>
    );
  }
}
export default Cards;
