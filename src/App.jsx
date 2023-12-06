import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";




// router-dom

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

// pages
import Home from "./components/home-page/Home";
import About from "./components/about-page/About";
import Branches from "./components/branches/Branches";

import More from "./components/more/More";


import Contact from "./components/contactUs/Contact"

import Committee from "./components/committee/Committee";

import Resources from "./components/resources/Resources";

import Newsandevents from "./components/newsandevents/Newsandevents";
import Form from "./components/signUpForm/Form";




const App = () => {

  const [isclose,setclose]= useState(false);

let handler = ()=>
  setclose(true);

// console.log(isclose);


  
  return (
    <div onMouseDown={handler} >
      <Router>
          <header>
            <NavBar close={isclose}/>
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

          {/* button-link */}

          <Route  path="/form/:id" element={<Form/>}/>


          </Routes>
         </div>
      <Footer />
      </Router>
    </div>
  );
};
export default App
