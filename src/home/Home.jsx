import Accordian from "../components/Accordian"
import Banner from "./Banner"
import FavAntiques from "./FavAntiques"
import FreshRecommendation from "./FreshRecommendation"
import MoreAntiques from "./MoreAntiques"
import NewCollection from "./NewCollection"
import PromoBanner from "./PromoBanner"

const Home = () => {
  return (
    <div>
      <Banner/>
      <FreshRecommendation/>
      <FavAntiques/>
      <MoreAntiques/>
      <PromoBanner/>
      <NewCollection/>
      <Accordian/>
    </div>
  )
}

export default Home