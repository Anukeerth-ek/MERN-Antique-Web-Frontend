import React, { useEffect, useState } from 'react'
import ArtCard from '../components/ArtCard'



const MoreAntiques = () => {
    const [arts, setArts] = useState([])
   
    useEffect(()=> {
      fetch('https://antique-web.onrender.com/all-arts').then(res => res.json()).then(data => setArts(data.slice(6, 12)))
    }, [])

  return (
    <div className="bg-gray-100 mb-6 md:mb-10 py-4">
    <ArtCard arts={arts} headline="Best Antiques"/>
 
  </div>
  )
}

export default MoreAntiques