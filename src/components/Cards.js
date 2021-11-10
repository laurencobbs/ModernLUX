import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Available Rentals!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              img src= {require ('../images/r-architecture-MAnVoJlQUvg-unsplash.jpg').default} alt=""
              text='BOOK NOW!'
              label='$800/night &#128293;' 
              path='/services'
            />
            <CardItem
              img src= {require ('../images/ralph-ravi-kayden-vbSRUrNm3Ik-unsplash.jpg').default} alt=""
              text='CALL FOR BOOKING!'
              label='$1200/night &#128293;'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              img src= {require ('../images/jannis-lucas-KsL8WZJ0CLA-unsplash.jpg').default} alt=""
              text='BOOK NOW!'
              label='$700/night &#128293;'
              path='/services'
            />
            <CardItem
              img src= {require ('../images/jannis-lucas-UVCWILBdr-c-unsplash.jpg').default} alt=""
              text='CALL FOR BOOKING!'
              label='$1300/night &#128293;'
              path='/products'
            />
            <CardItem
              img src= {require ('../images/tom-nora-EOLKGKy9u8w-unsplash.jpg').default} alt=""
              text='CALL FOR BOOKING!'
              label='$900/night &#128293;'
              path='/sign-up'
            />
            <CardItem
              img src= {require ('../images/avi-werde-hHz4yrvxwlA-unsplash.jpg').default} alt=""
              text='BOOK NOW!'
              label='$1250/night &#128293;'
              path='/sign-up'
            />
            <CardItem
              img src= {require ('../images/r-architecture-Y8MJFQYYjh8-unsplash.jpg').default} alt=""
              text='BOOK NOW!'
              label='$1100/night &#128293;'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;