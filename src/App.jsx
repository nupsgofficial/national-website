import HeroSection from "./components/home-page/HeroSection";
import NavBar from "./components/NavBar";
import CardSection from "./components/home-page/CardSection";
import UpcomingEvents from "./components/home-page/UpcomingEvents";
import News from "./components/home-page/News";
import Footer from "./components/Footer";
import Personality from "./components/home-page/Personality";
import Displays from "./components/home-page/Displays";

const App = () => {
  return (
    <>
      <NavBar />
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
      <Footer />
    </>
  );
};

export default App;
