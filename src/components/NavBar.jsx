import { useState } from 'react'
import presby from '../assets/images/pcglogo.png'
import nupsg from '../assets/images/nupsglogo.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

const NavBar = () => {
  const [isOpen, setOpen] = useState(false)

  function handleClick() {
    setOpen((prevState) => !prevState)
  }
  return (
    <>
      <nav className="sticky top-0 z-50 backdrop-blur-2xl py-3 font-poppins flex justify-between items-center px-8 md:px-24 mx-auto mt-6 mb-12 md:mb-8  relative w-screen">
        <div className="flex items-center gap-2">
          <figure className="">
            <a href="#">
              <img
                src={presby}
                alt="presby"
                className="w-8 md:w-10 object-cover"
              />
            </a>
          </figure>
          <figure className=" ">
            <a href="#">
              <img
                src={nupsg}
                alt="nupsg"
                className="w-8 md:w-10 object-cover"
              />
            </a>
          </figure>
        </div>

        <ul className="md:flex gap-x-5 text-sm text-white hidden">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Branches</a>
          </li>
          <li>
            <a href="#">News &amp; Events</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
          <li>
            <a href="#">Committee</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>

        <div className="flex items-center space-x-2">
          <Button label={'login'} color={'bg-primary'} />
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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Branches</a>
            </li>
            <li>
              <a href="#">News &amp; Events</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Committee</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">More</a>
            </li>
          </ul>
        )}
      </nav>
    </>
  )
}

export default NavBar
