import Herosection from "../Herosection";
import Login from "./Login";
import Signup from "./Signup";

const Form = () => {
    return ( 
        <div className="bg-white font-poppins">
            <Herosection text={'Join us'}/>
            <Signup/>
            <Login/>
            <h2>WElCOME TO signup PAGE</h2>
        </div>
     );
}
 
export default Form;
<div className="">
    <Signup/>
    <Login/>
</div>