import { FaUser } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import Button from "../Button";
import Herosection from "../Herosection";
import { useState } from "react";
import Profile from "../profile/Profile";
import Submit from "../Submit";

const Loginform = ({signin}) => {
         
    let [formtype,setFormType]=useState(1);

    let [show,setShow]=useState(false);

    let isChecked =(e)=>{setShow(!show)
    console.log(e.target)
    };

    let type = show? "text": "password";




    
    let pages =[{link:'/form',id:0,},{link:'/form',id:1,}];

    let [loginpage,setLogin]=useState(false);
    

    let login =()=>(
        setFormType(1)
    );

    let register =()=>(
        setFormType(0)
    );

    return ( 
       <div className="">

        {/* profile page */}
        <Herosection text={'Join us'}/>
        

        {/* login form */}
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
            <form className="flex flex-col space-y-4" onSubmit={()=>signin(true)}>
               <div className="flex flex-col">
               <label htmlFor="email" className="text-primary-2 text-lg">
                    Email
                </label>
                <input required className="border-b-2 focus:border-b-primary outline-none duration-700 ease-in-out" type="email" name="email"  />
               </div>

                <div className="flex flex-col">
                <label className="text-primary-2 text-lg" htmlFor="password">
                    Password
                </label>
                <input className="border-b-2 focus:border-b-primary outline-none duration-700 ease-in-out" type={type} name="password"  />
                </div>

                <div className="" onClick={isChecked} >
                <input type="checkbox" id="show"  onChange={(e)=>isChecked(e)} name="show"/>
                {console.log(show)}
                <label  id="show" htmlFor="show">Show Password</label>
                </div>

                <div className=" flex justify-between my-4">
                        <div className="" >
                        <Submit label={'Login'} color={'bg-primary'}/>
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
       </div>
     );
}
 
export default Loginform;



// <FaUser />