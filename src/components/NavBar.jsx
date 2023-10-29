import presby from "../assets/images/logo.png";
import nupsg from "../assets/images/nupsg.jpeg";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <nav className="font-poppins flex justify-between items-center container px-8 md:px-12 mx-auto mt-6 mb-12 md:mb-8 ">
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
        <a
          href="#"
          className="bg-primary text-sm md:text-base text-white uppercase px-4 py-1 md:px-6 md:py-2 rounded-full"
        >
          Login
        </a>
        <span className="inline-block md:hidden">
          <GiHamburgerMenu className="text-3xl text-color-1" />
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
