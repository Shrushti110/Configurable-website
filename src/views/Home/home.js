import React from 'react'
import "./home.css"

import Foodcard from "./../../components/Foodcard/foodcard"

const Store = [
  {
    imgUrl : "https://img.freepik.com/free-photo/flat-lay-salad-with-chicken-sesame-seeds_23-2148700369.jpg?t=st=1726414744~exp=1726418344~hmac=ca08743012149d76ab3dd0dac2f141f3a8ddf9dc9684bc5716a1079c765fbed9&w=900",
       title:"Salad",
       description:"Enjoy this fresh 'Salad' with crisp greens and a light vinaigrette.",
       isEatType:true,
       price:100
  },
  {
    imgUrl:"https://img.freepik.com/free-photo/cold-can-stands-against-red-droplets-hinting-frosty-touch_91128-4392.jpg?t=st=1726415578~exp=1726419178~hmac=0294758af3b61ed15ca37e77f4e8616e55b23d7f047d92fbaea21dddd3b99d6b&w=900",
       title:"Energy drinks",
       description:"Boost your energy with our selection of energy drinks.",
       isEatType:false,
       price:50
  },
  {
    imgUrl:"https://img.freepik.com/free-photo/delicious-cookies-basket_23-2150707141.jpg?t=st=1726415647~exp=1726419247~hmac=0b370a3bcf6148bce513cde165cb251060e4b740a1acb89b8ebf7970513d28ad&w=900",
       title:"Cookies",
       description:"Indulge in our delicious cookies, perfect for a sweet treat.",
       isEatType:true,
       price:200
  },
  {
    imgUrl:"https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg?t=st=1726415648~exp=1726419248~hmac=0155155d9d5b5bf3fb25573a195d73ffc9257084bbeefa4c22f046b26786ab6d&w=900",
    title:"Coffee",
    description:"Start your day off right with a hot cup of coffee.",
    isEatType:false,
    price:150
  },
  {
    imgUrl:"https://img.freepik.com/premium-photo/lemonade-with-flying-mint-lemon-summer-refreshing-drink-with-lemon-dark-background_131885-14728.jpg?w=900",
    title:"Lemonade",
    description:"Quench your thirst with a refreshing glass of lemonade.",
    isEatType:false,
    price:90
  },
  {
    imgUrl:"https://img.freepik.com/free-photo/freshly-cooked-ramen-noodles-with-pork-vegetables-generative-ai_188544-12759.jpg?t=st=1726418993~exp=1726422593~hmac=fd86da845e49b674c691dc89d78b69aed72f2d41f3922defa31a68183e1ebda4&w=900",
    title:"Ramen",
    description:"Enjoy a steaming bowl of tasty and spicy ramen noodles.",
    isEatType:true,
    price:180
  }
]


function home() {
  return (
    <div>
      <h1>Seven Eleven Convenience Store</h1>

<div className='foodcard-container'>
  {Store.map((storeItem)=>{
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