import Banner from "./Banner"
import BestSellerArts from "./BestSellerArts"
import FavAntiques from "./FavAntiques"
import MoreAntiques from "./MoreAntiques"
import PromoBanner from "./PromoBanner"

const Home = () => {
  return (
    <div>
      <Banner/>
      <BestSellerArts/>
      <FavAntiques/>
      <MoreAntiques/>
      <PromoBanner/>
    </div>
  )
}

export default Home