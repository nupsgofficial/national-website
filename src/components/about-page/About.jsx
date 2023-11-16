import Anthem from "./Anthem";
import Herosection from "./Herosection";
import Ourpatrons from "./Ourpatrons";
import Secondsection from "./Secondsection";

const About = () => {
        let patrons = [{image:'img',name:'Mr. Name Goes here',position:'patron',id:1},{image:'img',name:'Mr. Name Goes here',position:'patron',id:2},{image:'img',name:'Mr. Name Goes here',position:'patron',id:3},{image:'img',name:'Mr. Name Goes here',position:'patron',id:4},{image:'img',name:'Mr. Name Goes here',position:'patron',id:5},{image:'img',name:'Mr. Name Goes here',position:'patron',id:6},{image:'img',name:'Mr. Name Goes here',position:'patron',id:7},{image:'img',name:'Mr. Name Goes here',position:'patron',id:8},{image:'img',name:'Mr. Name Goes here',position:'patron',id:9},];

        let executives = [{image:'img',name:'Mr. Name Goes here',position:'patron',id:1},{image:'img',name:'Mr. Name Goes here',position:'patron',id:2},{image:'img',name:'Mr. Name Goes here',position:'patron',id:3},{image:'img',name:'Mr. Name Goes here',position:'patron',id:4},{image:'img',name:'Mr. Name Goes here',position:'patron',id:5},{image:'img',name:'Mr. Name Goes here',position:'patron',id:6}];

        let past = [{image:'img',name:'Mr. Name Goes here',position:'patron',id:1},{image:'img',name:'Mr. Name Goes here',position:'patron',id:2},{image:'img',name:'Mr. Name Goes here',position:'patron',id:3},{image:'img',name:'Mr. Name Goes here',position:'patron',id:4},{image:'img',name:'Mr. Name Goes here',position:'patron',id:5},{image:'img',name:'Mr. Name Goes here',position:'patron',id:6},{image:'img',name:'Mr. Name Goes here',position:'patron',id:7},{image:'img',name:'Mr. Name Goes here',position:'patron',id:8}];

    return ( 
        <div className="bg-white">
            {/* <h2>WElCOME TO ABOUT PAGE</h2> */}

            <Herosection/>
            <Secondsection/>
            <Anthem/>
            <Ourpatrons cards={patrons} title={'our patrons'} description={'Meet our cherished Patrons'}/>
            <Ourpatrons cards={executives} title={'our executives'} description={"These are our proud Union's executives"}/>
            <Ourpatrons cards={past} title={'past executives'} description={'The Union is grateful for your service.'}/>
        </div>
     );
}
 
export default About;
