import './Card.css'
import React from 'react'
// para cargar por defecto imgCharacter={bard},nameCharacter='bard',quoteCharacter='Ay caramba'
export const Card = ({gif}) => {
  return (
    <div className='card-simpsons'>
        <img className='gif' src={gif}  />
        
    </div>
  )
}
