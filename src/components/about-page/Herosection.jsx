const Herosection = () => {
    let arrowHead=">"
    return ( 
        <div className="hero-section h-80 shadow rounded-ee-[10rem] bg-primary-1 w-full px-32 flex items-center justify-between">
                <h2 className="text-6xl font-medium text-white">About</h2>
                
                {/* location */}
                <h2 className="text-white">Home {arrowHead} About</h2>
        </div>
     );
}
 
export default Herosection;