import React from 'react'
import './Card.css';
import playButton from '../../media/playButton.png';
const Card = ({ card }) => {
    console.log(card,  'q hay en cada card?')
  return (
    <div className='card-container'>
        {/* <h1>{card.Title}</h1> */}
        <h3>{card.Title}</h3>
        <img src={card.Poster}/>
    </div>
  )
}

export default Card;
