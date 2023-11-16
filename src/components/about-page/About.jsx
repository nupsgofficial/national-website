import Anthem from "./Anthem";
import Herosection from "./Herosection";
import Ourpatrons from "./Ourpatrons";
import Secondsection from "./Secondsection";

const About = () => {
    return ( 
        <div className="bg-white">
            {/* <h2>WElCOME TO ABOUT PAGE</h2> */}

            <Herosection/>
            <Secondsection/>
            <Anthem/>
            <Ourpatrons/>
        </div>
     );
}
 
export default About;
