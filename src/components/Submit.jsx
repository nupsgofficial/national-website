import { NavLink } from "react-router-dom";

const Submit = ({ label, color,to }) => {
  return (
    
      
        <input type="submit" value={label} className={`${color} outline-1 border border-primary hover:bg-[#6435e7] duration-150 transition-all ease-in-out  text-white font-bold tracking-wider uppercase px-6 py-4 md:px-6 md:py-3  rounded-lg text-[10px] md:text-sm`} />
        
      
  )
}

export default Submit;
