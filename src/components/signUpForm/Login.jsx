import { FaUser } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import Button from "../Button";

const Login = () => {
    return ( 
        <div className="w-full font-poppins">
            
            <div className=" w-[70%] py-6 mx-auto shadow mt-4 rounded-lg p-4">
                {/* logo */}
                <div className="userlogo w-full flex justify-center">
                <FaUser size={'72'} />
                </div>
            {/* main text */}
            <div className="text-center py-4">
                Login | Register
            </div>
            {/* sub text */}
            <div className="text-center py-1 ">
                New member? Click register
            </div>

            {/* form */}
            <div className="">
            <form className="flex flex-col">
                <label htmlFor="email">
                    Email
                </label>
                <input className="bg-primary" type="email" name="email" />

                <label htmlFor="password">
                    Password
                </label>
                <input className="bg-primary" type="password" name="password"  />

                <div className="">
                <input type="checkbox" name="show"/>
                <label htmlFor="show">Show Password</label>
                </div>

                <div className="">
                <Button color={'bg-primary'} text={'Login'}/>
                <Button text={'Register'}/>
                </div>

                <NavLink>Forgotten Password</NavLink>

            </form>

            </div>


            </div>
        </div>
     );
}
 
export default Login;



// <FaUser />