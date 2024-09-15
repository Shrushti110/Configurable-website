import React from 'react'
import "./home.css"

import Foodcard from "./../../components/Foodcard/foodcard"


function home() {
  return (
    <div>
      <h1>Seven Eleven Convenience Store</h1>

       <Foodcard 
       title="Salad" 
       description="Enjoy this fresh 'Salad' with crisp greens and a light vinaigrette."/>

       <Foodcard
       title="Energy drinks"
       description="Boost your energy with our selection of energy drinks."/>
       
    </div>
  )
}

export default home