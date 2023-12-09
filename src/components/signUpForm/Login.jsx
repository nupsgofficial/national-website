import { useState } from "react";
import Profile from "../profile/Profile";
import Loginform from "./Loginform";

const Login = () => {
    let [login,setLogin]=useState(false);


    return ( 
        <div className="">
           {login ? <Profile/> : 
           
            <Loginform signin={setLogin}/> }
            
        </div>
     );
}
 
export default Login;