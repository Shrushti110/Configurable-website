import React from 'react'
import './foodcard.css'
import eatIcon from "./eat.png"
import drinkIcon from "./drink.png"

function foodcard({imgUrl, title , description, isEatType, price}) {

  return (
    <div className='foodcard'>
      <img src={imgUrl}
      className='foodcard-image'
      alt='food'/>

      <h1 className='foodcard-title'>{title}</h1>
      <p className='foodcard-description'>{description}</p>

      <img src={isEatType? eatIcon : drinkIcon} 
      className='foodcard-icon' 
      alt='salad'/>

      {
        price?
        <p className='foodcard-price'>
        ₹ {price}
      </p>
      :"Not Available"
      }

      <button className='foodcard-btn'>
        Order Now
      </button>
    </div>
  )
}

export default foodcard