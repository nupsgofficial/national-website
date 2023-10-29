import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import CardSection from "./components/CardSection";
import UpcomingEvents from "./components/UpcomingEvents";
import News from "./components/News";
import Footer from "./components/Footer";
import Personality from "./components/Personality";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <CardSection />
      <UpcomingEvents />
      <News />
      <Personality />

      <Footer />
    </>
  );
};

export default App;
