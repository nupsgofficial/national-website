import { useParams } from "react-router-dom";

// pages

import Local from "./Local";
import Accra from "./Accra";
import National from "./National";

const Branches = () => {
    const{id}=useParams();

    let arr =[<Local/>,<National/>,<Accra/>];

    return ( 
        <div className="text-white text-5xl">
            <div className="">
                {arr[id]}
            </div>
            
        </div>
     );
}
 
export default Branches;