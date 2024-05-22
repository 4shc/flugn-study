import React from 'react'
import "./SliderA.css"

const SliderA = ({ images }) => {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id}><img src={image.imgUrl} alt={`Image ${image.id}`} /></li>
      ))}
    </ul>
  )
}

export default SliderA