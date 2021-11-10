import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out more!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src= {require ('../images/r-architecture-MAnVoJlQUvg-unsplash.jpg').default} alt=""
              text='BOOK NOW!'
              label='$1000/night'
              path='/services'
            />
            <CardItem
              img src= {require ('../images/ralph-ravi-kayden-vbSRUrNm3Ik-unsplash.jpg').default} alt=""
              text='CALL FOR BOOKING!'
              label='$2000/night'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src= {require ('../images/jannis-lucas-KsL8WZJ0CLA-unsplash.jpg').default} alt=""
              text='BOOK NOW!'
              label='$1200/night'
              path='/services'
            />
            <CardItem
              img src= {require ('../images/jannis-lucas-UVCWILBdr-c-unsplash.jpg').default} alt=""
              text='CALL FOR BOOKING!'
              label='$2500/night'
              path='/products'
            />
            <CardItem
              img src= {require ('../images/tom-nora-EOLKGKy9u8w-unsplash.jpg').default} alt=""
              text='CALL FOR BOOKING!'
              label='$1700/night'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;