
import { data } from "../../data/data";
import Button from '../Button';

const CardSection = () => {
  return (
    <div className="">
      <h2 className="container text-color-1 text-center px-8 md:px-12 mx-auto font-poppins uppercase text-2xl  font-extrabold  mb-3">
        what we stand for
      </h2>
      <section className="container text-color-1 px-8  md:px-12 mx-auto font-poppins space-y-10 md:space-y-0 mb-8 md:grid grid-cols-3 gap-x-8 ">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="rounded-3xl space-y-3 shadow-xl text-center bg-primary-2 border border-color-1 md:max-w-md"
            >
              <figure className="h-[200px]">
                <img
                  src={item.image}
                  className="w-full h-full object-cover object-center rounded-t-3xl"
                  alt=""
                />
              </figure>
              <h3 className="text-xl font-medium uppercase">
                {item.title}
                <div className="w-1/3 h-1 mx-auto rounded-lg bg-[#D1B6D9]"></div>
              </h3>
              <p className=" text-sm px-5 pt-2 pb-5">{item.text}</p>
              <div className="pb-5">
                <Button label={'Learn more'} color={'bg-primary'} />
              </div>
            </div>
          )
        })}
      </section>
    </div>
  );
};

export default CardSection
