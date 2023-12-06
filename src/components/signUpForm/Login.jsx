import { FaUser } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import Button from "../Button";
import Herosection from "../Herosection";
import { useState } from "react";

const Login = () => {
         
    let [formtype,setFormType]=useState(1);

    
    let pages =[{link:'/form',id:0,},{link:'/form',id:1,}];

    

    let login =()=>(
        setFormType(1)
    );

    let register =()=>(
        setFormType(0)
    );

    return ( 
       <div className="main">
        {/* <Herosection text={'Join us'}/> */}
<div className="w-full font-poppins">
            
            <div className=" md:w-[40rem] w-[90%] py-6 mx-auto shadow mt-12 my-12 rounded-lg p-4">
                {/* logo */}
                <div className="userlogo w-full flex justify-center">
                <FaUser size={'72'} />
                </div>
            {/* main text */}
            <div className="text-center text-3xl py-4">
               <span className="text-primary font-bold"> Login</span> | <span className="text-primary-1 font-bold"> Register</span>
            </div>
            {/* sub text */}
            <div className="text-center py-1 text-primary-3">
                New member? Click register
            </div>

            {/* form */}
            <div className="">
            <form className="flex flex-col space-y-4">
               <div className="flex flex-col">
               <label htmlFor="email" className="text-primary-2 text-lg">
                    Email
                </label>
                <input className="border-b-2 focus:border-b-primary outline-none duration-700 ease-in-out" type="email" name="email"  />
               </div>

                <div className="flex flex-col">
                <label className="text-primary-2 text-lg" htmlFor="password">
                    Password
                </label>
                <input className="border-b-2 focus:border-b-primary outline-none duration-700 ease-in-out" type="password" name="password"  />
                </div>

                <div className="">
                <input type="checkbox" name="show"/>
                <label htmlFor="show">Show Password</label>
                </div>

                <div className=" flex justify-between my-4">
                        <div className="" onClick={login}>
                        <Button color={'bg-primary'} label={'Login'} to={`/form/${formtype}`}  />
                        </div>

                    
                
                    <div className=""  onClick={register}>
                    <Button color={'bg-primary-1'} label={'Register'} to={`/form/${formtype}`}/>
                    </div>
            
            
                </div>


                <NavLink to={`/form/${pages.id}`} ><p className="text-primary-3">Forgotten Password</p></NavLink>

            </form>

            </div>


            </div>
        </div>

       </div>
     );
}
 
export default Login;



// <FaUser />