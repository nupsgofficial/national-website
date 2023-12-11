import Herosection from "../Herosection";
import Page from "./Page";
import Sidebar from "./Sidebar";

const Profile = () => {
    return ( 
        <div className="w-full">
            <Herosection text={'Welcome'}/>
        <div className=" pt-24  ">
            
           <div className="flex w-full gap-x-28">
           <Sidebar/>
            <Page/>
           </div>
        </div>
        </div>
     );
}
 
export default Profile;