import HeroSection from "./components/home-page/HeroSection";
import NavBar from "./components/NavBar";
import CardSection from "./components/home-page/CardSection";
import UpcomingEvents from "./components/home-page/UpcomingEvents";
import News from "./components/home-page/News";
import Footer from "./components/Footer";
import Personality from "./components/home-page/Personality";
import Displays from "./components/home-page/Displays";



// router-dom

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

// pages
import Home from "./components/home-page/Home";
import About from "./components/about-page/About";
import Branches from "./components/branches/Branches";

import More from "./components/more/More";


import Contact from "./components/contactUs/Contact"

import Committee from "./components/committee/Committee";

import Resources from "./components/resources/Resources";

import Newsandevents from "./components/newsandevents/Newsandevents";
import Branchesecond from "./components/branches/Branchesecond";
import Branchesthird from "./components/branches/Branchesthird";
import Branchesfourth from "./components/branches/Branchesfourth";


const App = () => {
  return (
    <>
      <Router>
          <header>
            <NavBar />
          </header>
         <div className="main">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/about" element={<About/>}/>


            {/* branches */}
            <Route exact path="/branch/:id" element={<Branches/>}/>


            <Route  path="/news" element={<Newsandevents/>}/>
            <Route  path="/resources" element={<Resources/>}/>
            <Route  path="/committee" element={<Committee/>}/>
            <Route  path="/contact" element={<Contact/>}/>

            <Route  path="/more/:id" element={<More/>}/>

          
          </Routes>
         </div>
      <Footer />
      </Router>
    </>
  );
};

export default App;
