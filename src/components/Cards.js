import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Religi </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='/images/budaya_9.jpg'
              text='Upacara Adata Seba'
              label='Mystery'
              path='/products'
            />
            <CardItem
              src='/images/budaya_4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='/images/budaya_3.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
