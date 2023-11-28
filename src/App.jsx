import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import CardSection from './components/CardSection'
import UpcomingEvents from './components/UpcomingEvents'
import News from './components/News'
import Footer from './components/Footer'
import Personality from './components/Personality'
import Displays from './components/Displays'

const App = () => {
  
  return (
    <div  >
      <Router>
          <header>
            <NavBar />
          </header>
         <div className="main">
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route  path="/about" element={<About/>}/>


            {/* branches */}
            <Route exact path="/branch/:id" element={<Branches/>}/>


            <Route  path="/news" element={<Newsandevents/>}/>
            <Route  path="/resources" element={<Resources/>}/>
            <Route  path="/committee" element={<Committee/>}/>
            <Route  path="/contact" element={<Contact/>}/>

            <Route  path="/more/:id" element={<More/>}/>

          
          </Routes>
         </div>
      <Footer />
      </Router>
    </div>
  );
};

export default App
