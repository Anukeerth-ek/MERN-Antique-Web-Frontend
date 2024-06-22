import Banner from "./Banner"
import FavAntiques from "./FavAntiques"
import FreshRecommendation from "./FreshRecommendation"
import MoreAntiques from "./MoreAntiques"
import PromoBanner from "./PromoBanner"

const Home = () => {
  return (
    <div>
      <Banner/>
      <FreshRecommendation/>
      <FavAntiques/>
      <MoreAntiques/>
      <PromoBanner/>
    </div>
  )
}

export default Home