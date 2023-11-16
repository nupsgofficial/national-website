const Ourpatrons = () => {
      let cards=[{image:'img',name:'Mr. Name Goes here',position:'patron',id:1},{image:'img',name:'Mr. Name Goes here',position:'patron',id:2},{image:'img',name:'Mr. Name Goes here',position:'patron',id:3},{image:'img',name:'Mr. Name Goes here',position:'patron',id:4},{image:'img',name:'Mr. Name Goes here',position:'patron',id:5},{image:'img',name:'Mr. Name Goes here',position:'patron',id:6}]

    return ( 
        <div className="">
            {/* head */}
            <div className="">
            <h2>our patrons</h2>
            <p>Meet our cherished Patrons</p>
            </div>
            {/* cards */}
            <div className="card  bg-green-200 flex ">
                {
                    cards.map((card)=>(
                        // container
                        <div className="shadow bg-primary-1 w-[30%] " key={card.id}>
                            {/* image */}
                            <div className="w-20 h-20 rounded-full bg-red-100">
                                <h2>{card.image}</h2></div>
                            {/* name */}
                            <div className="">
                                {card.name}
                            </div>
                            {/* position */}
                            <div className="">
                                {card.position}
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
     );
}
 
export default Ourpatrons;