import { news } from "../data/news";

const News = () => {
  return (
    <section className="container px-8 md:px-12 mx-auto font-poppins pb-8">
      <h3 className="uppercase text-color-1 text-xl font-medium text-center py-4 mb-2">
        LATEST NEWS
      </h3>
      <div className="text-color-1 space-y-5  divide-y bg-primary-2 px-4 rounded-3xl py-6 shadow-lg">
        {news.map((item) => {
          return (
            <div key={item.id} className="space-y-4">
              <h3 className="uppercase text-center font-semibold">
                {item.title}
              </h3>
              <figure className="h-[200px]">
                <img
                  src={item.image}
                  className="w-full h-full object-cover object-center rounded-2xl"
                  alt=""
                />
              </figure>
              <p className="text-sm">{item.text}</p>
              <div className=" text-center ">
                <button className="uppercase  bg-primary px-5 py-2 rounded-2xl font-bold tracking-widest">
                  read more
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default News;
