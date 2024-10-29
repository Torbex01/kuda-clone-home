
import BlockCard from "../components/home/BlockCard"
import FeesCard from "../components/home/FeesCard"
import FiveCards from "../components/home/FiveCards"
import HelpCard from "../components/home/HelpCard"
import Hero from "../components/home/Hero"
import PhoneCard from "../components/home/PhoneCard"
import Review from "../components/home/Review"
import SaveMoney from "../components/home/SaveMoney"
import YourMoney from "../components/home/YourMoney"
const Home = ()=>{
    return(
      <div>
       <Hero/> <br />
       <FiveCards/> <br />
       <PhoneCard/> <br />
       <YourMoney/> <br />
       <SaveMoney/> <br />
       <BlockCard/> <br />
       <HelpCard/> <br />
       <FeesCard/> <br />
       <Review/> <br />
      </div>
    )
  }
  export default Home
  