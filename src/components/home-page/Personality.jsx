import woman from "../../../public/images/woman.jpg";
import Alumni from "./Alumni";
import Quiz from "./Quiz";
const Personality = () => {
  return (
    <section className=" px-8 md:px-12 font-poppins pb-8 space-y-8 bg-[#222036] text-color-1 py-8 md:grid grid-cols-2  ">
      <div>
        <h3 className="uppercase text-xl font-semibold text-center">
          personality of the week
        </h3>
        <div className="rounded-3xl space-y-3 shadow-xl text-center bg-primary-2 border border-color-1 relative ">
          <figure className="h-[450px]">
            <img
              src={woman}
              className="w-full h-full object-cover object-center rounded-3xl"
              alt=""
            />
          </figure>
          <div className="backdrop-filter backdrop-blur-lg bg-opacity-30 bg-white rounded-2xl py-4 px-4 w-full absolute -bottom-4 space-y-2">
            <p className="text-[#482121]">Meet AMPONSAH, Yaa</p>
            <div className="text-[10px]">
              <p>Bekwa NUPSG President</p>
              <p>Fav. Quote: In cumbi de cumbi ne tui</p>
            </div>
            <button className="uppercase  bg-primary px-5 py-2 rounded-full font-medium tracking-widest">
              read more
            </button>
          </div>
        </div>
      </div>
      <div>
        <Quiz />
        <Alumni />
      </div>
    </section>
  );
};

export default Personality;
