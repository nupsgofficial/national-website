const Card = ({cards}) => {
    return ( 
        <div className="w-screen font-poppins">
            <div className="card md:px-56 px-4  grid flex md:grid-cols-4 gap-x-8 gap-y-12 ">
                {
                    cards.map((card)=>(
                        // container
                        <div className="shadow bg-primary-2 flex flex-col  items-center justify-center space-y-4 rounded-xl p-4  " key={card.id}>
                            {/* image */}
                            <div className="w-32 h-32 p-4 flex items-center justify-center rounded-full bg-primary mt-4">
                                <h2>{card.image}</h2></div>
                            {/* name */}
                            <div className="text-color-1 text-xl">
                                {card.name}
                            </div>
                            {/* position */}
                            <div className="text-primary text-lg">
                                {card.position}
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
     );
}
 
export default Card;