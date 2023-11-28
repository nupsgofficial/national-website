<<<<<<< HEAD:src/components/home-page/HeroSection.jsx
import Button from "../Button";
import worship from "../../assets/images/worship.jpg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
=======
import Button from './Button'
import worship from '../assets/images/worship.jpg'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
>>>>>>> main:src/components/HeroSection.jsx
const HeroSection = () => {
  return (
    <div className="container mx-auto px-8 md:px-12 mb-12 md:mb-8 text-color-1 ">
      <section className="font-poppins   md:h-[400px] flex justify-between items-center">
        <div className="space-y-8 md:w-1/2">
          <h2 className="text-2xl text-center font-black md:text-left md:text-6xl md:font-bold uppercase ">
            we welcome you to our website
          </h2>
          <p className="text-sm text-center md:text-left">
            This is the official website of NUPSG and we hope to get you
            connected as always. Stay connected for more updates and daily
            devotions
          </p>
          <div className="flex flex-col gap-y-2 items-center md:flex-row gap-x-5">
            <Button label={'stay connected'} color={'bg-primary'}></Button>
            <Button
              label={'devotional guide'}
              color={'bg-transparent'}
            ></Button>
          </div>
        </div>

        {/* figure on the right in desktop view */}
        <div className="w-80 ml-24 rotate-[15deg] bg-primary rounded-3xl relative hidden md:block">
          <div className="w-28 h-28 bg-secondary rounded-full absolute -top-24 -left-10">
            {/* top circle */}
          </div>

          <figure className="z-50">
            <img
              src={worship}
              className="h-full  rotate-[10deg] rounded-3xl w-80 z-60"
              alt="people with hands raised"
            />
          </figure>

          <div className="w-32 h-32 bg-secondary rounded-full absolute -right-16 -bottom-12 z-0">
            {/* bottom circle */}
          </div>
        </div>
      </section>
      <div className="block space-y-8 md:flex md:justify-between md:items-center mt-8 md:mt-0">
        <div className="font-poppins border-l-4 border-l-[#A386E7] mb-4">
          {/* bible verse */}
          <blockquote
            className="text-[1rem] pl-2 font-semibold "
            cite="https://www.bible.com/bible/111/PHP.1.21.NIV"
            title="https://www.bible.com/bible/111/PHP.1.21.NIV"
          >
            For to me, to live is Christ and to die is gain... <br />
            <span className="italic">Phil. 1:21</span>
          </blockquote>
        </div>
        <div className="space-y-5 md:space-y-3">
          {/* socials */}
          <p className=" font-poppins text-[10px] mb-2 md:text-sm text-center ">
            Connect with us
          </p>
          <div className="flex justify-center gap-x-10 md:gap-x-3">
            <a href="https://facebook.com/nupsgknust">
              <FaFacebook className="w-5 h-5 md:w-6 md:h-6 hover:animate-bounce duration-200" />
            </a>
            <a href="https://twitter.com/nupsgknust">
              {' '}
              <FaTwitter className="w-5 h-5 md:w-6  md:h-6 hover:animate-bounce duration-200" />
            </a>
            <a href="https://instagram.com/nupsgknust">
              <BsInstagram className="w-5 h-5 md:w-6  md:h-6 hover:animate-bounce duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
