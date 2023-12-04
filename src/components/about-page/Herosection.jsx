import Easynav from "../Easynav";

const Herosection = () => {
    
    return ( 
      <>
        <div className="font-poppins hero-section md:h-80 shadow md:rounded-ee-[10rem] px-12  rounded-ee-[5rem] bg-primary-1 w-full h-full md:px-32 md:py-0 py-20 flex items-center justify-between ">
                <h2 className="md:text-6xl font-medium text-white text-4xl">About</h2>
                
                {/* location */}
                <h2 className="text-white"> <Easynav/></h2>
        </div>
      </>
     );
}
 
export default Herosection;