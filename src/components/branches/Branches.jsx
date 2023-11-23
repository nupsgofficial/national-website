import { useParams } from "react-router-dom";


const Branches = () => {

    const{id}=useParams();
    return ( 
        <div className="text-white text-5xl">
            <h2>WElCOME TO BRANCHES PAGE-1 {id} </h2>
        </div>
     );
}
 
export default Branches;