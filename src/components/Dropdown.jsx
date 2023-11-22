const Dropdown = ({display,option}) => {

    return ( 
        <div className="">
          {/* container */}
             <div className={`bg-primary-2 absolute w-[5rem] ${display} flex flex-col  text-md capitalize `}  >
             {option.map((branch)=>(
                <div className="pl-2 border-b-2 border-primary-3 hover:bg-primary py-1 " key={branch.id}>

                  {/* will be changed to a navlink */}
                  <h2 >
                  {branch.name}
                  </h2>
                </div>
             ))}
            </div>
        </div>
     );
}
 
export default Dropdown;