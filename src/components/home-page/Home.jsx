import HeroSection from "./HeroSection";
import CardSection from "./CardSection";
import UpcomingEvents from "./UpcomingEvents";
import News from "./News";

import Personality from "./Personality";
import Displays from "./Displays";


const Home = () => {
    return ( 
        <div className="">
             <HeroSection />
      <CardSection />
      <UpcomingEvents />
      <News />
      <div className="container mx-auto px-8 md:px-12">
        <h3 className="text-color-1 text-center px-8 md:px-12 mx-auto font-poppins uppercase text-xl  font-extrabold  mb-3">
          Getting closer to God, daily dose
        </h3>
        <Displays title={"Verse of the Day"} />
        <Displays title={"Follow the word..."} />
        <Displays title={"Daily Devotion"} />
      </div>
      <Personality />
        </div>
     );
}
 
export default Home;