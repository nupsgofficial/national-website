<<<<<<< HEAD:src/components/home-page/Personality.jsx
import woman from "../../../public/images/woman.jpg";
import Alumni from "./Alumni";
import Quiz from "./Quiz";
=======
import woman from '../../public/images/woman.jpg'
import Alumni from './Alumni'
import Button from './Button'
import Quiz from './Quiz'
>>>>>>> main:src/components/Personality.jsx
const Personality = () => {
  return (
    <section className=" px-8 md:px-12 font-poppins pb-8 space-y-8 bg-[#222036] text-color-1 py-8 md:grid grid-cols-2  ">
      <div>
        <h3 className="uppercase text-xl font-semibold text-center">
          personality of the week
        </h3>
        <div className="rounded-3xl md:h-[40rem] md:w-[35rem] space-y-3 shadow-xl text-center bg-primary-2 border border-gray-0600 relative ">
          <img
            src={woman}
            className="w-full h-full object-cover object-top md:object-bottom rounded-3xl"
            alt=""
          />
          <div className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white rounded-b-3xl rounded-t-none py-4 px-4 w-full absolute bottom-0 space-y-2">
            <p className="text-[#482121] text-xl">Meet AMPONSAH, Yaa</p>
            <div className="text-[0.8rem]">
              <p>Bekwa NUPSG President</p>
              <p>Fav. Quote: In cumbi de cumbi ne tui</p>
            </div>
            <Button label={'Read more'} color={'bg-primary'} />
          </div>
        </div>
      </div>
      <div>
        <Quiz />
        <Alumni />
      </div>
    </section>
  )
}

export default Personality
