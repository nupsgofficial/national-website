
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";




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
import { useState } from "react";

// const [isclose,setclose]= useState(100);

// let handler = ()=>
//   setclose(50000);

// console.log(isclose);

const App = () => {
  
  return (
    <div  >
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
    </div>
  );
};

export default App;
