import { useState,useRef,useEffect } from "react";
import presby from "../assets/images/logo.png";
import nupsg from "../assets/images/nupsg.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import { NavLink } from "react-router-dom";



const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  let [isActive,setActive] = useState(true);

  let [isMore,setMore] = useState(true);

  function handleClick() {
    setOpen((prevState) => !prevState);
  }

  function dropDown() {
     setActive((prevState)=> !prevState);    
  }  
   
  function showMore() {
    setMore((prevState)=> !prevState);    
 }  

  let show = isActive ? 'hidden':'flex';

  let display = isMore ? 'hidden':'flex';
    
  // dropdown menu options

  // ----branches
  let branches =[{name:"Local",id:0,link:'/branch'},{name:"National",id:1,link:'/branch'},{name:"Accra",id:2,link:'/branch'}]

  // -----more

  let more =[{name:"Personality",id:0,link:'/more'},{name:"Quiz",id:1,link:'/more'},{name:"Contact",id:2,link:'/more'}]


  // refs

  let menuref = useRef();
  let linkref =useRef();
  




  return (
    <>
      <nav className="font-poppins flex justify-between items-center container px-8 md:px-12 mx-auto mt-6 mb-12 md:mb-8  relative" >
        <div className="flex gap-x-1 md:gap-3">
          <figure className="w-10 h-10 md:w-10 md:h-10">
            <a href="#">
              <img src={presby} alt="presby" className="h-full w-full" />
            </a>
          </figure>
          <figure className=" w-8 h-10 md:w-10 md:h-10">
            <a href="#">
              <img src={nupsg} alt="nupsg" className="h-full w-full" />
            </a>
          </figure>
        </div>

        <ul className="md:flex gap-x-5 text-sm text-white hidden">
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About Us</NavLink>
          </li>
          <li>

            {/* has a dropdown menu */}

            {/* ----branches */}

            <div ref={menuref}  className="cursor-pointer">

               <div className="relative" ref={menuref}>
              {/* navlink */}
              <div className="flex" id="1" 
            
            onClick={dropDown} 
            >

            Branches <div className=""> &#9660; </div></div>
            {/* dropdown */}


              <div className={`bg-primary-2 absolute w-[5rem] ${show} flex flex-col  text-md  `}  >

             {branches.map((branch)=>(
                <div className="pl-2 border-b-2 border-primary-3 hover:bg-primary py-1 cursor-pointer" key={branch.id} >

                  
                  
                  <NavLink to={`/branch/${branch.id}`} onClick={dropDown}  >
                  <h2 className="capitalize w-full">{branch.name}</h2>
                  </NavLink>
                  
                </div>
             ))}
            </div>
              

            </div>
            </div>
          </li>

          <li>
            <NavLink to={'/news'}>News &amp; Events</NavLink>
          </li>
          <li>
            <NavLink to={'/resources'}>Resources</NavLink>
          </li>
          <li>
            <NavLink to={'/committee'}>Committee</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact Us</NavLink>
          </li>
          <li>
            {/* <NavLink to={'/more'}>More</NavLink> */}

            {/* has a dropdown menu */}

            {/* --------more  */}
            <div className="cursor-pointer" ref={linkref}   >
               <div className="relative">
              {/* navlink */}
              <div className="flex" id="2"
             onClick={showMore}
                
             >

            More <div className=""> &#9660; </div></div>
            {/* dropdown */}



              <div className={`bg-primary-2 absolute w-[6rem] ${display} flex flex-col  text-md  `} ref={menuref} >
             {more.map((branch)=>(
                <div className="pl-2 border-b-2 border-primary-3 hover:bg-primary py-1 cursor-pointer" key={branch.id}>

                  {/* will be changed to a navlink */}
                  
                  <NavLink to={`/more/${branch.id}`} onClick={showMore} >
                  <h2 className="capitalize w-full">{branch.name}</h2>
                  </NavLink>
                  
                </div>
             ))}
            </div>


              </div> 
            
            </div>
          </li>
        </ul>

        <div className="flex items-center space-x-2">
          <a
            href="#"
            className="bg-primary text-sm md:text-base text-white uppercase px-4 py-1 md:px-6 md:py-2 rounded-full"
          >
            Login
          </a>
          <span className="inline-block md:hidden" onClick={handleClick}>
            {isOpen ? (
              <AiOutlineClose className="text-3xl text-color-1" />
            ) : (
              <GiHamburgerMenu className="text-3xl text-color-1" />
            )}
          </span>
        </div>
        {isOpen && (
          <ul className="md:flex gap-x-5 text-sm  text-color-1 font-poppins space-y-5 px-8 divide-y w-full bg-primary-1 py-5 absolute top-11 left-0 z-20">

<li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={'/branches'}>Branches</NavLink>
          </li>
          <li>
            <NavLink to={'/news'}>News &amp; Events</NavLink>
          </li>
          <li>
            <NavLink to={'/resources'}>Resources</NavLink>
          </li>
          <li>
            <NavLink to={'/committee'}>Committee</NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>Contact Us</NavLink>
          </li>
          <li>
            <NavLink to={'/more'}>More</NavLink>
          </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default NavBar;
