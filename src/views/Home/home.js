import React from 'react'
import "./home.css"

import Foodcard from "./../../components/Foodcard/foodcard"


function home() {
  return (
    <div>
      <h1>Seven Eleven Convenience Store</h1>

       <Foodcard 
       imgUrl="https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?t=st=1726414744~exp=1726418344~hmac=ca08743012149d76ab
       3dd0dac2f141f3a8ddf9dc9684bc5716a1079c765fbed9&w=900"
       title="Salad" 
       description="Enjoy this fresh 'Salad' with crisp greens and a light vinaigrette."
       isEatType={true}
       />

       <Foodcard
       title="Energy drinks"
       description="Boost your energy with our selection of energy drinks."
       isEatType={false}
       />

       <Foodcard
       title={"Cookies"}
       description={"Indulge in our delicious cookies, perfect for a sweet treat."}
       isEatType={true}
       />

       <Foodcard
       title={"Coffee"}
       description={"Start your day off right with a hot cup of coffee."}
       isEatType={false}
       />
    </div>
  )
}

export default home