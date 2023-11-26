import {useLocation,Link} from 'react-router-dom';

const Easynav = () => {

    let currentLink ='';
    let location =useLocation();

    console.log(location);

    const currentLocations=location.pathname.split('/')
    .filter((currentLocation=> currentLocation !== ''))
    .map(currentLocation=>{
        currentLink =+ `/${currentLocation}`


        return(
            <div className="capitalize" key={currentLocation}>
            <Link to={currentLink}>{currentLocation}</Link>
          </div>
        )
    })

    return ( 
        <div className="capitalize flex after:content-['>'] mr-2 after:ml-2 last:after:hidden" >
           {currentLocations}
        </div>
     );
}
 
export default Easynav;