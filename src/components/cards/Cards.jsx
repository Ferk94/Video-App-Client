import React from 'react'
import Card from './Card.jsx'
import './Cards.css';
const Cards = ({ data }) => {
  return (
    <div className='cards'>
      {
        data.map(card => {
            return <div  key={card.id}>
                <Card  card={card}/>
            </div>
        })
      }
    </div>
  )
}

export default Cards;
