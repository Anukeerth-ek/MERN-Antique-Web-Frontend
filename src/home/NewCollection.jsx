import React, { useEffect, useState } from 'react'
import ArtCard from '../components/ArtCard'

const NewCollection = () => {
    const [arts, setArts] = useState([])
    useEffect(()=> {
        fetch('https://antique-web.onrender.com/all-arts').then(res=> res.json()).then(data=> setArts(data.slice(16)))
    }, [])
  return (
    <div className="bg-gray-100 mt-6 py-3">
        <ArtCard arts={arts} headline={"New Collections"}/>
    </div>
  )
}

export default NewCollection