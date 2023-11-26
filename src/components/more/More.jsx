import Easynav from "../Easynav";
import { NavLink,useLocation,useParams } from "react-router-dom";

// pages

import Personality from './Personality';
import Quiz from './Quiz';

import Contact from './Contact';

const More = () => {

    const{id}=useParams();

    

    let arr = [<Personality/>,<Quiz/>,<Contact/> ];

    return ( 
        <div className="text-white text-5xl">
            
            <div className="">
                {arr[id]}
            </div>
        </div>
     );
}
 
 
export default More;