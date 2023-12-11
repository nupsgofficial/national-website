import { NavLink } from "react-router-dom";

const Button = ({ label, color,to }) => {
  return (
    <button
      className={`${color} outline-1 border border-primary hover:bg-[#6435e7] duration-150 transition-all ease-in-out  text-white font-bold tracking-wider uppercase px-6 py-4 md:px-6 md:py-3  rounded-lg text-[10px] md:text-sm`}

    >
      <NavLink to={to}>
        {label}
         </NavLink>
      
    </button>
  )
}

export default Button
