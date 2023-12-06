import Herosection from "../Herosection";
import Login from "./Login";
import Signup from "./Signup";
import Easynav from "../Easynav";
import { NavLink,useLocation,useParams } from "react-router-dom";


const Form = () => {
    let arr = [ <Signup/>,<Login/>];
    const{id}=useParams();

    return ( 
        <div className="bg-white font-poppins">
            <Herosection text={'Join us'}/>
           
            <div className="">
                {arr[id]}
            </div>


        </div>
     );
}
 
export default Form;



 