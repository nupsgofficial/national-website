import { FaUser } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../Button";
import Herosection from "../Herosection";

const Signup = () => {

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
                
            {/* main text */}
            <div className="text-center text-3xl py-4">
                <span className="text-primary font-bold"> MEMBER REGISTER</span>
            </div>
            {/* sub text */}
            <div className=" flex py-1 text-primary-3 items-center md:pl-[12rem] ">
    
    
              <div className="">
              <p className=""> Existing member?</p> 
              </div>
               
               <div className="">
               <NavLink><p className="text-primary">Login here</p></NavLink>
               </div>
            </div>
    
            {/* form */}
            <div className="">
            <form className="flex flex-col space-y-4">
               <div className="flex flex-col">
               <label htmlFor="email" className="text-primary-2 text-lg">
                    Surname
                </label>
                <input className="border-b-2 focus:border-b-primary outline-none duration-700 ease-in-out" type="email" name="email"  />
               </div>
    
               <div className="flex flex-col">
               <label htmlFor="email" className="text-primary-2 text-lg">
                    Firstname
                </label>
                <input className="border-b-2 focus:border-b-primary outline-none duration-700 ease-in-out" type="email" name="email"  />
               </div>
    
               <div className="flex flex-col">
               <label htmlFor="email" className="text-primary-2 text-lg">
                    Other Names
                </label>
                <input className="border-b-2 focus:border-b-primary outline-none duration-700 ease-in-out" type="email" name="email"  />
               </div>
    
    
               {/* gender */}
    
               <div className="">
                <div className="pb-2"> <h2>Gender</h2></div>
                <div className=" flex gap-x-4">
                    <div className="flex gap-x-1 items-center"> <input type="radio" name="gender"  /> <h2> Male</h2></div>
                    <div className="flex gap-x-1 items-center"> <input type="radio" name="gender"  /> <h2> Female</h2></div>
                </div>
    
               </div>
    
               {/* birthday */}
    
               <div className="">
                <div className=""> <h2>Birthday</h2></div>
                <div className=""><input type="month" placeholder="Month" />
                <input type="day" placeholder="Day" />
                </div>
               </div>
    
               {/* phone number */}
                <div className="">
                    <label htmlFor="tel"> Phone</label>
                    <input type="tel" placeholder="(eg. 0288855567)"  name="tel"/>
                </div>
    
    
                    {/* password */}
                <div className="flex flex-col">
                <label className="text-primary-2 text-lg" htmlFor="password">
                    Password
                </label>
    
                <input className="border-b-2 focus:border-b-primary outline-none duration-700 ease-in-out" type="password" name="password"  />
                </div>
    
                    {/* password confirmation */}
    
                    <div className="flex flex-col">
                <label className="text-primary-2 text-lg" htmlFor="password">
                   Confirm Password
                </label>
    
                <input className="border-b-2 focus:border-b-primary outline-none duration-700 ease-in-out" type="passwordconfirmation" name="passwordconfirmantion"  />
                </div>
                
    
                <div className="">
                <input type="checkbox" name="show"/>
                <label htmlFor="show">Show Password</label>
                </div>
    
                <div className="flex gap-x-8">
    
                            {/* residence */}
                <div className="">
                    <div className="">
                        <select name="school" id=""> 
                        <option value="">-- select school --</option>
                        <option value="knust">Knust</option>
                        <option value="UG">UG</option>
                        </select>
                    </div>
                </div>
    
                {/* program */}
                <div className="">
                    <div className="">
                        <select name="program" id="1"> 
                        <option value="">-- select program --</option>
                        <option value="pharmacy">pharmacy</option>
                        <option value="nursing">nursing</option>
                        </select>
                    </div>
                </div>
                </div>
    
    
                <div className=" flex justify-between my-4">
                <div className="" onClick={login}>
                <Button color={'bg-primary-3'} label={'CLEAR FORM '}  to={`/form/${formtype}`} />
                </div>
               
               <div className="" onClick={register}>
               <Button color={'bg-primary'} label={'SUBMIT'}  to={`/form/${formtype}`} />
               </div>
                </div>
    
            </form>
    
            </div>
    
    
            </div>
        </div>

        </div>
     );
}
 
export default Signup;