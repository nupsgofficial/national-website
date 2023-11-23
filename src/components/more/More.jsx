import Easynav from "../Easynav";
import { NavLink,useParams } from "react-router-dom";



const More = () => {

    const{id}=useParams();

    return ( 
        <div className="text-white text-5xl">
            <h2>WElCOME TO More PAGE-1 {id} </h2>
        </div>
     );
}
 
 
export default More;