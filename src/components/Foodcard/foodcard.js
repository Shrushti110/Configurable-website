import React from 'react'
import './foodcard.css'

function foodcard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default foodcard