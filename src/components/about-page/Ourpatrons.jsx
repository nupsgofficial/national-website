import Card from "./Executivecard";

const Ourpatrons = ({cards,title,description}) => {

    return ( 
        <div className="pb-12 font-poppins">
            {/* head */}
            <div className="mt-12 text-center">
            <h2 className="text-primary uppercase text-3xl md:text-5xl p-4">
                {title}
            </h2>
            <p className="pb-8">
                {description}
            </p>
            </div>
            {/* cards */}
            <Card cards={cards}/>
        </div>
     );
}
 
export default Ourpatrons;