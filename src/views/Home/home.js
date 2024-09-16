import React from 'react'
import "./home.css"

import Foodcard from "./../../components/Foodcard/foodcard"
import { THEME, PRODUCTS, MAIN_TITLE, MAIN_SUBTITLE } from './../../config/data'

function home() {
  return (
    <div>
      <h1 className='main-title' style={{color: THEME.heighlight, margin:0}}>{MAIN_TITLE}</h1>
      <p className='main-subtitle'>{MAIN_SUBTITLE}</p>

<div className='foodcard-container'>
  {PRODUCTS.map((storeItem)=>{
    return <Foodcard 
    imgUrl={storeItem.imgUrl}
    title={storeItem.title}
    description={storeItem.description}
    isEatType={storeItem.isEatType}
    price={storeItem.price}
    />
  })}

       
    </div>
    </div>
  )
}

export default home