import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleArt = () => {
    const {_id, image, title, description} = useLoaderData()
  return (
    <div>
        <img src={image}/>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default SingleArt