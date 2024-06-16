import { useEffect, useState } from "react"
import ArtCard from "../components/ArtCard"

const BestSellerArts = () => {
    const [arts, setArts] = useState([])
   
    useEffect(()=> {
      fetch('https://antique-web.onrender.com/all-arts').then(res => res.json()).then(data => setArts(data.slice(1, 6)))
    }, [])

  return (
    <div className="bg-gray-100 py-4">
      <ArtCard arts={arts} headline="Fresh recommendations"/>
    </div>
  )
}

export default BestSellerArts